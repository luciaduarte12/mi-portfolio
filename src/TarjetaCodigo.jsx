import { useState, useEffect, useRef } from 'react';
import { FaVolumeUp, FaVolumeMute, FaRedo } from 'react-icons/fa';

// Cada línea es una lista de pedacitos de texto; "c" es el tipo (define el color)
const lineas = [
  [
    { t: 'const ', c: 'palabra' },
    { t: 'lucia', c: 'variable' },
    { t: ' = {', c: 'signo' },
  ],
  [
    { t: '  rol', c: 'propiedad' },
    { t: ': ', c: 'signo' },
    { t: '"Estudiante de Ingeniería en Sistemas"', c: 'cadena' },
    { t: ',', c: 'signo' },
  ],
  [
    { t: '  universidad', c: 'propiedad' },
    { t: ': ', c: 'signo' },
    { t: '"UTN FRC"', c: 'cadena' },
    { t: ',', c: 'signo' },
  ],
  [
    { t: '  ubicacion', c: 'propiedad' },
    { t: ': ', c: 'signo' },
    { t: '"Córdoba, Argentina"', c: 'cadena' },
    { t: ',', c: 'signo' },
  ],
  [
    { t: '  stack', c: 'propiedad' },
    { t: ': [', c: 'signo' },
    { t: '"SQL"', c: 'cadena' },
    { t: ', ', c: 'signo' },
    { t: '"Python"', c: 'cadena' },
    { t: ', ', c: 'signo' },
    { t: '"React"', c: 'cadena' },
    { t: ', ', c: 'signo' },
    { t: '"Power BI"', c: 'cadena' },
    { t: '],', c: 'signo' },
  ],
  [
    { t: '  buscando', c: 'propiedad' },
    { t: ': ', c: 'signo' },
    { t: '"Primera oportunidad laboral"', c: 'cadena' },
  ],
  [{ t: '};', c: 'signo' }],
];

// Todo el código como un solo texto (con saltos de línea), para saber qué caracter se está tipeando
const TEXTO_PLANO = lineas
  .map((linea) => linea.map((token) => token.t).join(''))
  .join('\n') + '\n';

const TOTAL = TEXTO_PLANO.length;

// Sonido de tecla suave y grave (tipo teclado de membrana), generado con la Web Audio API
function sonarTecla(ctx) {
  const ahora = ctx.currentTime;

  // Golpe grave y redondo
  const oscilador = ctx.createOscillator();
  const volumenGolpe = ctx.createGain();
  oscilador.type = 'sine';
  oscilador.frequency.setValueAtTime(220 + Math.random() * 40, ahora);
  oscilador.frequency.exponentialRampToValueAtTime(90, ahora + 0.06);
  volumenGolpe.gain.setValueAtTime(0.25, ahora);
  volumenGolpe.gain.exponentialRampToValueAtTime(0.001, ahora + 0.08);
  oscilador.connect(volumenGolpe);
  volumenGolpe.connect(ctx.destination);
  oscilador.start(ahora);
  oscilador.stop(ahora + 0.09);

  // Clic muy suave encima, para que se sienta "tecla" y no solo un golpe
  const muestras = Math.floor(ctx.sampleRate * 0.015);
  const buffer = ctx.createBuffer(1, muestras, ctx.sampleRate);
  const datos = buffer.getChannelData(0);
  for (let i = 0; i < muestras; i++) {
    datos[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / muestras, 2);
  }
  const clic = ctx.createBufferSource();
  clic.buffer = buffer;
  const filtro = ctx.createBiquadFilter();
  filtro.type = 'lowpass';
  filtro.frequency.value = 2500;
  const volumenClic = ctx.createGain();
  volumenClic.gain.value = 0.08;
  clic.connect(filtro);
  filtro.connect(volumenClic);
  volumenClic.connect(ctx.destination);
  clic.start(ahora);
}

function TarjetaCodigo() {
  const [escritos, setEscritos] = useState(0);
  const [sonido, setSonido] = useState(false);
  const [repeticion, setRepeticion] = useState(0);

  const sonidoRef = useRef(false); // para que el intervalo lea siempre el valor actual
  const audioRef = useRef(null);

  useEffect(() => {
    sonidoRef.current = sonido;
  }, [sonido]);

  // Cerramos el audio al salir de la página
  useEffect(() => {
    return () => {
      if (audioRef.current) audioRef.current.close();
    };
  }, []);

  // Efecto de tipeo (se vuelve a ejecutar cada vez que cambia "repeticion")
  useEffect(() => {
    // Si la persona tiene las animaciones desactivadas, mostramos todo de una
    const reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducirMovimiento) {
      setEscritos(TOTAL);
      return;
    }

    setEscritos(0);
    let contador = 0;
    let intervalo;

    const inicio = setTimeout(
      () => {
        intervalo = setInterval(() => {
          contador += 1;
          setEscritos(contador);

          const caracter = TEXTO_PLANO[contador - 1];
          if (
            sonidoRef.current &&
            audioRef.current &&
            caracter !== ' ' &&
            caracter !== '\n'
          ) {
            sonarTecla(audioRef.current);
          }

          if (contador >= TOTAL) clearInterval(intervalo);
        }, 25);
      },
      repeticion === 0 ? 600 : 200
    );

    return () => {
      clearTimeout(inicio);
      clearInterval(intervalo);
    };
  }, [repeticion]);

  const alternarSonido = () => {
    // El audio se crea recién acá, porque el navegador exige un clic de la persona
    if (!audioRef.current) {
      const Contexto = window.AudioContext || window.webkitAudioContext;
      audioRef.current = new Contexto();
    }
    if (audioRef.current.state === 'suspended') {
      audioRef.current.resume();
    }

    const nuevoEstado = !sonido;
    setSonido(nuevoEstado);
    if (nuevoEstado) sonarTecla(audioRef.current); // una tecla de prueba al activarlo
  };

  const repetir = () => {
    setRepeticion((n) => n + 1);
  };

  // Armamos solo la parte del código que ya "se escribió"
  let restantes = escritos;
  const lineasVisibles = [];
  for (const linea of lineas) {
    if (restantes <= 0) break;
    const tokensVisibles = [];
    for (const token of linea) {
      if (restantes <= 0) break;
      const texto = token.t.slice(0, restantes);
      restantes -= texto.length;
      tokensVisibles.push({ t: texto, c: token.c });
    }
    restantes -= 1; // salto de línea
    lineasVisibles.push(tokensVisibles);
  }

  return (
    <div className="tarjeta-codigo">
      <div className="codigo-barra">
        <span className="punto rosa"></span>
        <span className="punto dorado"></span>
        <span className="punto champagne"></span>
        <span className="codigo-archivo">lucia.js</span>

        <div className="codigo-controles">
          <button
            className={`codigo-boton ${sonido ? 'activo' : ''}`}
            onClick={alternarSonido}
            aria-label={sonido ? 'Silenciar sonido de teclas' : 'Activar sonido de teclas'}
            aria-pressed={sonido}
            title={sonido ? 'Silenciar teclas' : 'Activar sonido de teclas'}
          >
            {sonido ? <FaVolumeUp /> : <FaVolumeMute />}
          </button>
          <button
            className="codigo-boton"
            onClick={repetir}
            aria-label="Volver a tipear el código"
            title="Volver a tipear"
          >
            <FaRedo />
          </button>
        </div>
      </div>

      <div className="codigo-cuerpo" aria-hidden="true">
        {lineasVisibles.map((tokens, i) => (
          <div className="codigo-linea" key={i}>
            <span className="num-linea">{i + 1}</span>
            <span className="codigo-texto">
              {tokens.map((token, j) => (
                <span key={j} className={`tok-${token.c}`}>
                  {token.t}
                </span>
              ))}
              {i === lineasVisibles.length - 1 && <span className="cursor-codigo"></span>}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TarjetaCodigo;
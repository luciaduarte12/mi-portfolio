import { useState, useEffect, useRef } from "react";

function Proyectos({ items }) {
  const [proyectoAbierto, setProyectoAbierto] = useState(null);
  const [cargando, setCargando] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    function manejarMensaje(evento) {
      if (evento.data?.tipo === "memotest-altura" && iframeRef.current) {
        iframeRef.current.style.height = `${evento.data.altura}px`;
      }
    }
    window.addEventListener("message", manejarMensaje);
    return () => window.removeEventListener("message", manejarMensaje);
  }, []);

  // Carga el script de Tableau recién cuando el usuario abre ese proyecto específico
  useEffect(() => {
    const proyectoActual = items.find((p) => p.nombre === proyectoAbierto);
    if (!proyectoActual?.componenteTableau) return;

    setCargando(true);

    const divElement = document.getElementById('viz1787929571802');
    if (!divElement) return;

    const vizElement = divElement.getElementsByTagName('object')[0];
    if (!vizElement) return;

    if (divElement.offsetWidth > 500) {
      vizElement.style.width = '100%';
      vizElement.style.height = '1045px';
    } else {
      vizElement.style.width = '100%';
      vizElement.style.height = '1727px';
    }

    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);

    const temporizador = setTimeout(() => setCargando(false), 4000);
    return () => clearTimeout(temporizador);
  }, [proyectoAbierto, items]);

  return (
    <section className="proyectos">
      <h2>Proyectos</h2>
      {items.map((proyecto) => (
        <div className="proyecto-item" key={proyecto.nombre}>
          <h3>{proyecto.nombre}</h3>
          <p className="descripcion">{proyecto.descripcion}</p>
          <div className="chips">
            {proyecto.tecnologias.map((tech) => (
              <span className="chip" key={tech}>
                {tech}
              </span>
            ))}
          </div>
          {proyecto.enlace && (
            proyecto.embebido || proyecto.componenteTableau ? (
              <button
                className="boton-certificado"
                onClick={() =>
                  setProyectoAbierto(proyectoAbierto === proyecto.nombre ? null : proyecto.nombre)
                }
              >
                {proyectoAbierto === proyecto.nombre ? "Cerrar" : (proyecto.textoBoton || "Ver proyecto")}
              </button>
            ) : (
              <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer" className="boton-certificado">
                {proyecto.textoBoton || "Ver proyecto"}
              </a>
            )
          )}

          {proyecto.embebido && proyectoAbierto === proyecto.nombre && (
            <div className="juego-embebido">
              <iframe
                ref={iframeRef}
                src={proyecto.enlace}
                title={proyecto.nombre}
                className="juego-iframe"
              />
            </div>
          )}

          {proyecto.componenteTableau && proyectoAbierto === proyecto.nombre && (
            <div className="tableau-embebido">
              {cargando && (
                <p className="cargando-mensaje">Cargando el dashboard. Puede tardar unos segundos...</p>
              )}
              {proyecto.componenteTableau}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default Proyectos;
import { useState, useEffect, useRef } from 'react';
import { FaUser, FaGraduationCap, FaTools, FaGlobe, FaFolderOpen, FaEnvelope } from 'react-icons/fa';

function MenuLateral() {
  const secciones = [
    { id: "sobre-mi", nombre: "Sobre mí", icono: <FaUser /> },
    { id: "formacion", nombre: "Formación", icono: <FaGraduationCap /> },
    { id: "habilidades", nombre: "Habilidades", icono: <FaTools /> },
    { id: "idiomas", nombre: "Idiomas", icono: <FaGlobe /> },
    { id: "proyectos", nombre: "Proyectos", icono: <FaFolderOpen /> },
    { id: "contacto", nombre: "Contacto", icono: <FaEnvelope /> },
  ];

  const [seccionActiva, setSeccionActiva] = useState("sobre-mi");
  const ignorarScroll = useRef(false);

  useEffect(() => {
    function calcularSeccionActiva() {
      if (ignorarScroll.current) return;

      const distanciaAlFinal =
        document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);

      if (distanciaAlFinal < 100) {
        setSeccionActiva(secciones[secciones.length - 1].id);
        return;
      }

      const lineaReferencia = window.innerHeight * 0.25;
      let idActivo = secciones[0].id;

      for (const seccion of secciones) {
        const elemento = document.getElementById(seccion.id);
        if (!elemento) continue;

        const rect = elemento.getBoundingClientRect();
        if (rect.top <= lineaReferencia) {
          idActivo = seccion.id;
        }
      }

      setSeccionActiva(idActivo);
    }

    calcularSeccionActiva();

    let ticking = false;
    function alScrollear() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calcularSeccionActiva();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", alScrollear);
    window.addEventListener("resize", alScrollear);

    return () => {
      window.removeEventListener("scroll", alScrollear);
      window.removeEventListener("resize", alScrollear);
    };
  }, []);

  const irASeccion = (id) => {
    const elemento = document.getElementById(id);
    if (!elemento) return;

    // Fijamos la seccion activa manualmente e ignoramos el calculo automatico
    // hasta que termine la animacion del scroll
    ignorarScroll.current = true;
    setSeccionActiva(id);

    elemento.scrollIntoView({ behavior: "smooth", block: "start" });

    setTimeout(() => {
      ignorarScroll.current = false;
    }, 1000);
  };

  return (
    <nav className="menu-lateral">
      {secciones.map((seccion) => (
        <button
          key={seccion.id}
          className={`solapa-menu ${seccionActiva === seccion.id ? 'activa' : ''}`}
          onClick={() => irASeccion(seccion.id)}
          aria-label={seccion.nombre}
          title={seccion.nombre}
        >
          <span className="icono-menu">{seccion.icono}</span>
          <span className="texto-menu">{seccion.nombre}</span>
        </button>
      ))}
    </nav>
  );
}

export default MenuLateral;
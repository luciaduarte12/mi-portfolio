import { useState, useEffect, useRef } from "react";

function Proyectos({ items }) {
  const [proyectoAbierto, setProyectoAbierto] = useState(null);
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
            proyecto.embebido ? (
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
        </div>
      ))}
    </section>
  );
}

export default Proyectos;
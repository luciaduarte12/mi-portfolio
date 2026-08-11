import { useState, useEffect } from 'react';

function MenuLateral() {
  const secciones = [
    { id: "sobre-mi", nombre: "Sobre mí" },
    { id: "formacion", nombre: "Formación" },
    { id: "habilidades", nombre: "Habilidades" },
    { id: "idiomas", nombre: "Idiomas" },
    { id: "proyectos", nombre: "Proyectos" },
    { id: "contacto", nombre: "Contacto" },
  ];

  const [seccionActiva, setSeccionActiva] = useState("sobre-mi");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entradas) => {
        let maxRatio = 0;
        let idGanador = null;

        entradas.forEach((entrada) => {
          if (entrada.intersectionRatio > maxRatio) {
            maxRatio = entrada.intersectionRatio;
            idGanador = entrada.target.id;
          }
        });

        if (idGanador) {
          setSeccionActiva(idGanador);
        }
      },
      { threshold: [0.1, 0.25, 0.5, 0.75, 1] }
    );

    secciones.forEach((seccion) => {
      const elemento = document.getElementById(seccion.id);
      if (elemento) observer.observe(elemento);
    });

    return () => observer.disconnect();
  }, []);

  const irASeccion = (id) => {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="menu-lateral">
      {secciones.map((seccion) => (
        <button
          key={seccion.id}
          className={`solapa-menu ${seccionActiva === seccion.id ? 'activa' : ''}`}
          onClick={() => irASeccion(seccion.id)}
        >
          {seccion.nombre}
        </button>
      ))}
    </nav>
  );
}

export default MenuLateral;
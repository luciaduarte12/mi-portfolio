import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function BotonArriba() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const controlarVisibilidad = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", controlarVisibilidad);
    return () => window.removeEventListener("scroll", controlarVisibilidad);
  }, []);

  const irArriba = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button className="boton-arriba" onClick={irArriba} title="Volver arriba">
      <FaArrowUp />
    </button>
  );
}

export default BotonArriba;
import { useState, useEffect } from 'react';

function ProgresoScroll() {
  const [progreso, setProgreso] = useState(0);

  useEffect(() => {
    let ticking = false;

    function calcular() {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const porcentaje = total > 0 ? (window.scrollY / total) * 100 : 0;
      setProgreso(Math.min(100, Math.max(0, porcentaje)));
    }

    function alScrollear() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calcular();
          ticking = false;
        });
        ticking = true;
      }
    }

    calcular();
    window.addEventListener('scroll', alScrollear);
    window.addEventListener('resize', alScrollear);

    return () => {
      window.removeEventListener('scroll', alScrollear);
      window.removeEventListener('resize', alScrollear);
    };
  }, []);

  return (
    <div className="progreso-scroll" aria-hidden="true">
      <div className="progreso-barra" style={{ width: `${progreso}%` }}></div>
    </div>
  );
}

export default ProgresoScroll;
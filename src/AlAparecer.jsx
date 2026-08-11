import { useState, useEffect, useRef } from 'react';

function AlAparecer({ children, id }) {
  const [visible, setVisible] = useState(false);
  const elementoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entrada]) => {
        setVisible(entrada.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (elementoRef.current) {
      observer.observe(elementoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id={id} ref={elementoRef} className={`al-aparecer ${visible ? 'visible' : ''}`}>
      {children}
    </div>
  );
}

export default AlAparecer;
import { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaDownload, FaRegCopy, FaCheck } from 'react-icons/fa';

const EMAIL = "luciaduarte198@gmail.com";

function Contacto() {
  const [copiado, setCopiado] = useState(false);

  const copiarEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      // Si el navegador no deja copiar, el link mailto: sigue funcionando
    }
  };

  const contactos = [
    { nombre: "LinkedIn", url: "https://www.linkedin.com/in/lucia-duarte-712b3223a", icono: <FaLinkedin /> },
    { nombre: "GitHub", url: "https://github.com/luciaduarte12", icono: <FaGithub /> },
    { nombre: "Descargar CV", url: "cv-lucia-duarte.pdf", icono: <FaDownload />, descarga: "CV-Lucia-Duarte.pdf" },
  ];

  return (
    <footer className="contacto" id="contacto">
      <h2>Contacto</h2>
      <ul>
        <li>
          <span className="icono"><FaEnvelope /></span>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <button
            className="boton-copiar"
            onClick={copiarEmail}
            aria-label="Copiar email"
            title="Copiar email"
          >
            {copiado ? <FaCheck /> : <FaRegCopy />}
          </button>
          <span className="aviso-copiado" role="status" aria-live="polite">
            {copiado ? '¡Copiado!' : ''}
          </span>
        </li>

        {contactos.map((contacto) => (
          <li key={contacto.nombre}>
            <span className="icono">{contacto.icono}</span>
            <a href={contacto.url} download={contacto.descarga}>
              {contacto.nombre}
            </a>
          </li>
        ))}
      </ul>

      <div className="footer-codigo">
        <div>
          <span className="comentario">// Diseñado y desarrollado por Lucía Duarte · 2026</span>
        </div>
        <div>
          <span className="funcion">console.log</span>(<span className="cadena">"Gracias por visitar"</span>);
        </div>
      </div>
    </footer>
  );
}

export default Contacto;
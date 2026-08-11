import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contacto() {
  const contactos = [
    { nombre: "luciaduarte198@gmail.com", url: null, icono: <FaEnvelope /> },
    { nombre: "LinkedIn", url: "https://www.linkedin.com/in/lucia-duarte-712b3223a", icono: <FaLinkedin /> },
    { nombre: "GitHub", url: "https://github.com/luciaduarte12", icono: <FaGithub /> },
  ];

  return (
    <footer className="contacto" id="contacto">
      <h2>Contacto</h2>
      <ul>
        {contactos.map((contacto) => (
          <li key={contacto.nombre}>
            <span className="icono">{contacto.icono}</span>
            {contacto.url ? (
              <a href={contacto.url}>{contacto.nombre}</a>
            ) : (
              <span>{contacto.nombre}</span>
            )}
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Contacto;
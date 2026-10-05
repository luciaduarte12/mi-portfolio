import TarjetaCodigo from './TarjetaCodigo';

function Header() {
  return (
    <header>
      <div className="hero-contenido">
        <div className="hero-texto">
          <img src="foto-cv.jpeg" alt="Foto de perfil de Lucía Duarte" className="foto-perfil" />
          <span className="hero-saludo">// hola, soy</span>
          <h1>Lucía <em>Duarte</em></h1>
          <p>Estudiante de Ingeniería en Sistemas de Información</p>
        </div>
        <TarjetaCodigo />
      </div>
    </header>
  );
}

export default Header;

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaDatabase,
  FaServer,
  FaFileExcel,
  FaRobot,
  FaWindows,
  FaLinux,
  FaDesktop,
  FaMicrochip,
  FaChartBar,
  FaChartLine,
} from 'react-icons/fa';

// Cada anillo es un grupo de tecnologías. Podés editar las listas y las descripciones a gusto.
// factor = tamaño del anillo (más grande = más afuera), segundos = velocidad (más = más lento)
const anillos = [
  {
    nombre: 'Desarrollo web',
    factor: 0.38,
    segundos: 40,
    sentido: 'normal',
    color: 'var(--dorado)',
    items: [
      {
        nombre: 'HTML',
        icono: <FaHtml5 />,
        descripcion: 'Lenguaje de marcado que estructura el contenido de una página web.',
      },
      {
        nombre: 'CSS',
        icono: <FaCss3Alt />,
        descripcion: 'Lenguaje de estilos que define el diseño y la apariencia de una web.',
      },
      {
        nombre: 'JavaScript',
        icono: <FaJs />,
        descripcion: 'Lenguaje de programación que le da interactividad a las páginas web.',
      },
      {
        nombre: 'React',
        icono: <FaReact />,
        descripcion: 'Biblioteca de JavaScript para construir interfaces a partir de componentes.',
      },
    ],
  },
  {
    nombre: 'Datos',
    factor: 0.66,
    segundos: 60,
    sentido: 'reverse',
    color: 'var(--rosa)',
    items: [
      {
        nombre: 'SQL Server',
        icono: <FaServer />,
        descripcion: 'Sistema de gestión de bases de datos relacionales de Microsoft.',
      },
      {
        nombre: 'PostgreSQL',
        icono: <FaDatabase />,
        descripcion: 'Sistema de bases de datos relacionales de código abierto.',
      },
      {
        nombre: 'Python',
        icono: <FaPython />,
        descripcion: 'Lenguaje de programación que uso para limpiar, procesar y analizar datos.',
      },
      {
        nombre: 'Power BI',
        icono: <FaChartBar />,
        descripcion: 'Herramienta de Microsoft para crear dashboards e informes con indicadores.',
      },
      {
        nombre: 'Tableau',
        icono: <FaChartLine />,
        descripcion: 'Plataforma de visualización para armar dashboards interactivos.',
      },
      {
        nombre: 'Excel',
        icono: <FaFileExcel />,
        descripcion: 'Planillas de cálculo para ordenar, calcular y analizar datos.',
      },
      {
        nombre: 'IA (APIs)',
        icono: <FaRobot />,
        descripcion: 'Integración de modelos de inteligencia artificial por API, por ejemplo para clasificar datos.',
      },
    ],
  },
  {
    nombre: 'Sistemas y soporte',
    factor: 0.82,
    segundos: 80,
    sentido: 'normal',
    color: 'var(--champagne)',
    items: [
      {
        nombre: 'Windows',
        icono: <FaWindows />,
        descripcion: 'Sistema operativo de Microsoft, el más usado en computadoras de escritorio.',
      },
      {
        nombre: 'Linux',
        icono: <FaLinux />,
        descripcion: 'Sistema operativo de código abierto, muy usado en servidores y desarrollo.',
      },
      {
        nombre: 'Armado de PC',
        icono: <FaDesktop />,
        descripcion: 'Elección y montaje de los componentes para ensamblar una computadora.',
      },
      {
        nombre: 'Hardware',
        icono: <FaMicrochip />,
        descripcion: 'Componentes físicos de una computadora y su diagnóstico ante fallas.',
      },
    ],
  },
];

const todasLasTecnologias = anillos
  .flatMap((anillo) => anillo.items.map((item) => item.nombre))
  .join(', ');

function OrbitaTecnologias() {
  return (
    <div className="orbita-seccion">
      <p className="orbita-titulo">// mi stack en órbita</p>

      <div
        className="orbita-contenedor"
        role="group"
        aria-label={`Diagrama animado con las tecnologías que manejo: ${todasLasTecnologias}`}
      >
        <div className="orbita-centro">
          <span>Mi stack</span>
          <span>◆</span>
        </div>

        {anillos.map((anillo, indiceAnillo) => (
          <div
            className="orbita"
            key={anillo.nombre}
            style={{
              '--tam': `calc(var(--lado) * ${anillo.factor})`,
              '--dur': `${anillo.segundos}s`,
              '--sentido': anillo.sentido,
              '--color': anillo.color,
            }}
          >
            {anillo.items.map((item, i) => (
              <div
                className="orbita-item"
                key={item.nombre}
                style={{
                  '--ang': `${(360 / anillo.items.length) * i + indiceAnillo * 25}deg`,
                }}
              >
                <span className="orbita-chip" tabIndex={0}>
                  {item.icono}
                  <span className="orbita-tip" role="tooltip">
                    <strong>{item.nombre}</strong>
                    <span>{item.descripcion}</span>
                  </span>
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <ul className="orbita-leyenda">
        {anillos.map((anillo) => (
          <li key={anillo.nombre} style={{ '--color': anillo.color }}>
            {anillo.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrbitaTecnologias;
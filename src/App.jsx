import Header from './Header';
import Sobre from './Sobre';
import Formacion from './Formacion';
import Habilidades from './Habilidades';
import Contacto from './Contacto';
import Idiomas from './Idiomas';
import Separador from './Separador';
import AlAparecer from './AlAparecer';
import MenuLateral from './MenuLateral';
import BotonArriba from './BotonArriba';
import Proyectos from './Proyectos';
import { useEffect } from 'react';

function App() {
  const miTexto = "Soy estudiante de Ingeniería en Sistemas de Información, con conocimientos en programación y bases de datos (SQL Server, modelado de datos, consultas avanzadas), además de experiencia en armado, reparación y mantenimiento de PC, orientada a soporte técnico. Complemento mi formación de forma autodidacta, ampliando mis conocimientos hacia Power BI para análisis de datos y desarrollo web. Busco una oportunidad laboral donde pueda poner en práctica mis conocimientos, continuar formándome junto a un equipo de trabajo y desempeñarme con responsabilidad y compromiso.";

  const miFormacion = [
    {
      carrera: "Ingeniería en Sistemas de Información",
      institucion: "Universidad Tecnológica Nacional - FRC",
      periodo: "2020 - Actualidad",
    },
    {
      carrera: "Certificación en Soporte Técnico Nivel 1. Armado, reparación y mantenimiento de PC",
      institucion: "Universidad Tecnológica Nacional - FRC",
      periodo: "julio 2025 - octubre 2025",
    },
    {
      carrera: "Certificación en Primeros auxilios con RCP y DEA",
      institucion: "Institución BADRA",
      periodo: "septiembre 2025",
      certificado: "certificado-rcp-dea.jpeg",
    },
  ];

  const misHabilidades = [
    {
      titulo: "Bases de datos",
      descripcion: "Diseño modelos relacionales y escribo consultas complejas. Por ejemplo, armé el backend del memotest de este portfolio con dos tablas en SQL Server (Azure), con inserts parametrizados para evitar SQL injection y consultas de ranking con ORDER BY y TOP.",
      items: ["SQL Server", "Modelado de datos", "Consultas avanzadas (JOINs, subconsultas)"],
    },
    {
      titulo: "Análisis de datos",
      descripcion: "Trabajo con Power BI y Excel para armar reportes y seguimiento de datos, aplicado por ejemplo a un tracker de mi propio avance académico con lógica de correlatividades y progreso visual.",
      items: ["Power BI", "Excel (nivel intermedio)"],
    },
    {
      titulo: "Desarrollo web",
      descripcion: "Construyo interfaces con React desde cero, incluyendo lógica de estado, componentes reutilizables y consumo de APIs propias. Este portfolio y el memotest embebido en él están hechos íntegramente con este stack.",
      items: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      titulo: "Soporte técnico",
      descripcion: "Armo, reparo y diagnóstico problemas de hardware en PC, con base en la certificación de Soporte Técnico Nivel 1 de la UTN.",
      items: ["Armado de PC", "Reparación de PC", "Mantenimiento de PC", "Componentes de Hardware", "Diagnóstico de Hardware"],
    },
    {
      titulo: "Sistemas operativos",
      descripcion: "Uso Windows y Linux en entornos de desarrollo y para tareas de soporte, incluyendo configuración básica de red y solución de problemas.",
      items: ["Windows", "Linux"],
    },
  ];

  const misIdiomas = [
    { 
      nombre: "Inglés", nivel: "B1 - Intermedio" 
    },
    { 
      nombre: "Portugués", nivel: "Básico" 
    },
  ];

  const misProyectos = [
    {
      nombre: "Portafolio personal",
      descripcion: "Sitio web desarrollado con React y Vite, con diseño propio, animaciones al hacer scroll, navegación interactiva y diseño responsive.",
      tecnologias: ["React", "JavaScript", "CSS", "Vite"],
      enlace: null,
    },
    {
      nombre: "Memotest",
      descripcion: "Juego de memoria con el stack tecnológico usado en este portfolio. Conectado a una base de datos real (SQL Server) con leaderboard de mejores tiempos. Sin login, se juega directo desde acá.",
      tecnologias: ["React", "Express", "SQL Server", "Vite"],
      enlace: "https://luciaduarte12.github.io/memotest-db/",
      textoBoton: "Jugar",
      embebido: true,
    },
  ];

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <MenuLateral />
      <BotonArriba />
      <Header />
      <AlAparecer id="sobre-mi">
        <Sobre texto={miTexto} />
      </AlAparecer>
      <Separador />
      <AlAparecer id="formacion">
        <Formacion items={miFormacion} />
      </AlAparecer>
      <Separador />
      <AlAparecer id="habilidades">
        <Habilidades categorias={misHabilidades} />
      </AlAparecer>
      <Separador />
      <AlAparecer id="idiomas">
        <Idiomas items={misIdiomas} />
      </AlAparecer>
      <Separador />
      <AlAparecer id="proyectos">
        <Proyectos items={misProyectos} />
      </AlAparecer>
      <Contacto />
      
    </div>
  );
}

export default App;
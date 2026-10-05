# Portafolio Personal — Lucía Duarte

Portafolio web personal desarrollado con React y Vite, con un diseño oscuro de estilo formal y tecnológico, animaciones, navegación interactiva y diseño responsive.

**🔗 Ver en vivo:** https://luciaduarte12.github.io/mi-portfolio/

## Características

- Diseño con identidad propia: fondo oscuro bordó/ciruela con detalles dorados, rosa y champagne, y una grilla sutil de fondo
- Tipografías: Playfair Display (títulos), Inter (texto) y JetBrains Mono (etiquetas y código)
- Portada con una tarjeta tipo editor de código que se escribe sola, con sonido de teclas opcional (generado con la Web Audio API, sin archivos de audio) y botón para volver a tipearla
- Órbita animada de tecnologías: tres anillos que giran (desarrollo web, datos, sistemas y soporte), con un ícono por tecnología y una tarjeta con su explicación al pasar el cursor
- Barra de estado fija en la parte inferior (disponibilidad, ubicación y tecnologías principales), visible solo en pantallas grandes
- Títulos de sección numerados (`01 / Sobre mí`) y una línea de código en el pie de página
- Menú de navegación lateral con sección activa resaltada
- Animaciones al hacer scroll con `IntersectionObserver`
- Botón "volver arriba"
- Respeta la preferencia de movimiento reducido del sistema (`prefers-reduced-motion`)
- Diseño responsive: en celular el menú pasa a una barra inferior y la portada se reordena en una columna
- Componentes reutilizables y datos separados de la presentación
- Proyecto destacado: un memotest full-stack (React + Express + PostgreSQL) embebido directamente en la sección de Proyectos, jugable sin salir del portfolio — [repo acá](https://github.com/luciaduarte12/memotest-db)
- Proyecto destacado: análisis de tickets de soporte técnico con generación de datos en Python, clasificación automática por IA (83% de acierto) y dashboard interactivo en Tableau Public embebido en la sección de Proyectos — [repo acá](https://github.com/luciaduarte12/analisis-tickets-soporte-ia)

## Tecnologías

- React
- Vite
- JavaScript (ES6+)
- CSS3 (variables, grid, animaciones, `color-mix`)
- Web Audio API
- [react-icons](https://react-icons.github.io/react-icons/)
- Google Fonts (Playfair Display, Inter, JetBrains Mono)

## Estructura del proyecto

```
mi-portafolio/
├── public/
│   ├── favicon.ico
│   ├── foto-cv.jpeg
│   └── certificado-rcp-dea.jpeg
├── src/
│   ├── Header.jsx
│   ├── TarjetaCodigo.jsx
│   ├── Sobre.jsx
│   ├── Formacion.jsx
│   ├── Habilidades.jsx
│   ├── OrbitaTecnologias.jsx
│   ├── Idiomas.jsx
│   ├── Proyectos.jsx
│   ├── Contacto.jsx
│   ├── MenuLateral.jsx
│   ├── BarraEstado.jsx
│   ├── BotonArriba.jsx
│   ├── Separador.jsx
│   ├── AlAparecer.jsx
│   ├── App.jsx
│   └── index.css
├── index.html
└── package.json
```

## Cómo correrlo localmente

```bash
git clone https://github.com/luciaduarte12/mi-portfolio.git
cd mi-portfolio
npm install
npm run dev
```

## Secciones

- **Portada** — presentación y tarjeta de código animada
- **Sobre mí** — perfil profesional y objetivos
- **Formación Académica** — estudios y certificaciones
- **Habilidades técnicas** — bases de datos, análisis de datos, desarrollo web, soporte técnico, sistemas operativos, más la órbita animada de tecnologías
- **Idiomas**
- **Proyectos**
- **Contacto**

## Autora

**Lucía Duarte**
Estudiante de Ingeniería en Sistemas de Información — UTN FRC

- Email: luciaduarte198@gmail.com
- LinkedIn: https://www.linkedin.com/in/lucia-duarte-712b3223a
- GitHub: [@luciaduarte12](https://github.com/luciaduarte12)
function Formacion({ items }) {
  return (
    <section className="formacion">
      <h2>Formación Académica</h2>
      {items.map((item) => (
        <div className="formacion-item" key={item.carrera}>
          <h3>{item.carrera}</h3>
          <p className="institucion">{item.institucion}</p>
          <p className="periodo">{item.periodo}</p>
          {item.certificado && (
            <a href={item.certificado} target="_blank" rel="noopener noreferrer" className="boton-certificado">Ver certificado</a>
          )}
        </div>
      ))}
    </section>
  );
}

export default Formacion;
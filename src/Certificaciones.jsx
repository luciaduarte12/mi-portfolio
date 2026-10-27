function Certificaciones({ items }) {
  return (
    <section className="formacion certificaciones">
      <h2>Certificaciones</h2>
      {items.map((item) => (
        <div className="formacion-item" key={item.titulo}>
          <h3>{item.titulo}</h3>
          <p className="institucion">{item.emisor}</p>
          <p className="periodo">{item.fecha}</p>
          {item.descripcion && (
            <p className="categoria-descripcion">{item.descripcion}</p>
          )}
          {item.habilidades && (
            <div className="chips">
              {item.habilidades.map((habilidad, indice) => (
                <span className="chip" key={habilidad} style={{ '--i': indice }}>
                  {habilidad}
                </span>
              ))}
            </div>
          )}
          {item.certificado && (
            <a href={item.certificado} target="_blank" rel="noopener noreferrer" className="boton-certificado">Ver certificado</a>
          )}
        </div>
      ))}
    </section>
  );
}

export default Certificaciones;
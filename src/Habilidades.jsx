function Habilidades({ categorias }) {
  return (
    <section className="habilidades">
      <h2>Habilidades técnicas</h2>
      {categorias.map((categoria) => (
        <div className="categoria" key={categoria.titulo}>
          <h3>{categoria.titulo}</h3>
          <div className="chips">
            {categoria.items.map((skill) => (
              <span className="chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Habilidades;
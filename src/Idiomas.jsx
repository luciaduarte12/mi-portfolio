function Idiomas({ items }) {
  return (
    <section className="idiomas">
      <h2>Idiomas</h2>
      <div className="chips">
        {items.map((idioma) => (
          <span className="chip" key={idioma.nombre}>
            {idioma.nombre} — {idioma.nivel}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Idiomas;
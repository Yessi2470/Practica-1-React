
function PlatoCard({ nombre, precio, descripcion, disponible }) {
  return (
    <article style={{ opacity: disponible ? 1 : 0.5,
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "16px",
    margin: "10px",
    backgroundColor: "#ffffff"
    }}>
      <h2>{nombre}</h2>
      <p>{descripcion}</p>

      {disponible ? (
        <p>${precio.toLocaleString("es-AR")}</p>
      ) : (
        <p>Agotado</p>
      )}
    </article>
  )
}

export default PlatoCard
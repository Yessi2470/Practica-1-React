function ResumenMenu({ platos }) {
    const totalPlatos = platos.length

    const platosDisponibles = platos.filter(
        (plato) => plato.disponible === true
    )
    const cantidadDisponibles = platosDisponibles.length

    const sumaPrecios = platosDisponibles.reduce(
        (acumulador, plato) => acumulador + plato.precio, 0
    )

    const precioPromedio = sumaPrecios / cantidadDisponibles

  return (
    <section>
      <h2>Resumen del menu</h2>

      <p>Total de platos: {totalPlatos}</p>

      <p>Platos disponibles: {cantidadDisponibles}</p>

      <p>Precio promedio: ${precioPromedio.toLocaleString("es-AR")}</p>

    </section>
  )
}

export default ResumenMenu
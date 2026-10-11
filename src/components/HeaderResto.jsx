function HeaderResto({ nombreLocal, eslogan, estaAbierto }) {
  return (
    <header>
      <h1>{nombreLocal}</h1>
      <p>{eslogan}</p>

      {estaAbierto ? (
        <span style={{ color: "green" }}>Abierto Ahora</span>
      ) : (
        <span style={{ color: "red" }}>Cerrado por el momento</span>
      )}
    </header>
  )
}

export default HeaderResto
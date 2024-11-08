export  const Menu=()=>{
    return(
        <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="/">Lista</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/empleados/crear">Crear</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Dummy Link</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
      </form>
    </div>
  </div>
</nav>        </>
    )
}
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
      <div className="container-fluid">
        {/* Cambiamos href por 'to' y <a> por <NavLink> */}
        <NavLink className="navbar-brand" to="/">CreditSmart</NavLink>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {/* NavLink agrega automáticamente la clase 'active' cuando coincide la ruta */}
              <NavLink className="nav-link" to="/">Catálogo</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/simulador">Simulador</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/solicitar">Solicitar Crédito</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
        <div className="container-fluid">
    <NavLink className="navbar-brand d-flex align-items-center" to="/">
        <i className="bi bi-bank2 text-primary fs-3 me-2"></i>
        <span className="fw-bold fs-4 text-dark">CreditSmart</span>
    </NavLink>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
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
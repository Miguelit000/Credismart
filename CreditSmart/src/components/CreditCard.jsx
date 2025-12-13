import { Link } from 'react-router-dom';

function CreditCard({ credit }) {
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow border-0 hover-effect">
                <img 
                    src={credit.imagen} 
                    className="card-img-top" 
                    alt={credit.nombre}
                    style={{ height: "200px", objectFit: "cover" }} 
                />
                
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-primary fw-bold">{credit.nombre}</h5>
                    
                    <ul className="list-group list-group-flush flex-grow-1 mb-3 border-0">
                        <li className="list-group-item border-0 ps-0">
                            <i className="bi bi-percent text-success me-2"></i>
                            <strong>Tasa:</strong> {credit.tasa}% Anual
                        </li>
                        <li className="list-group-item border-0 ps-0">
                            <i className="bi bi-cash-coin text-success me-2"></i>
                            <strong>Monto:</strong> ${credit.montoMin.toLocaleString()} - ${credit.montoMax.toLocaleString()}
                        </li>
                        <li className="list-group-item border-0 ps-0">
                            <i className="bi bi-calendar-check text-success me-2"></i>
                            <strong>Plazo:</strong> Hasta {credit.plazoMax} meses
                        </li>
                    </ul>

                    <div className="mt-auto">
                        <Link to="/solicitar" className="btn btn-primary w-100 fw-bold shadow-sm">
                            Solicitar ahora
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreditCard;
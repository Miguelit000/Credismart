// src/components/CreditCard.jsx
import { Link } from 'react-router-dom';

function CreditCard({ credit }) {
    // "credit" es el objeto con los datos (nombre, tasa, imagen, etc.)
    
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
                <img src={credit.imagen} className="card-img-top" alt={credit.nombre} />
                
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{credit.nombre}</h5>
                    
                    <ul className="list-group list-group-flush flex-grow-1 mb-3">
                        <li className="list-group-item">
                            <strong>Tasa:</strong> {credit.tasa}% Anual
                        </li>
                        <li className="list-group-item">
                            <strong>Monto:</strong> ${credit.montoMin.toLocaleString()} - ${credit.montoMax.toLocaleString()}
                        </li>
                        <li className="list-group-item">
                            <strong>Plazo:</strong> Hasta {credit.plazoMax} meses
                        </li>
                    </ul>

                    <div className="mt-auto">
                        <Link to="/solicitar" className="btn btn-primary w-100">
                            Solicitar
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreditCard;
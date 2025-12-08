import { useState } from 'react'; 
import { credits } from '../data/creditsData';
import CreditCard from '../components/CreditCard';

function Simulador() {
  const [busqueda, setBusqueda] = useState("");
  const [montoFiltro, setMontoFiltro] = useState("todos");

  const creditosFiltrados = credits.filter((credit) => {
    
    const coincideNombre = credit.nombre.toLowerCase().includes(busqueda.toLowerCase());

    let coincideMonto = true;
    if (montoFiltro === "bajo") {
      coincideMonto = credit.montoMin < 20000000;
    } else if (montoFiltro === "medio") {
      coincideMonto = credit.montoMin >= 20000000 && credit.montoMin < 100000000;
    } else if (montoFiltro === "alto") {
      coincideMonto = credit.montoMin >= 100000000;
    }

    return coincideNombre && coincideMonto;
  });

  return (
    <div>
      <h2 className="mb-4">Simulador de Crédito</h2>

      <div className="card card-body bg-light mb-4">
        <div className="row g-3 align-items-end">
          
          <div className="col-md-6">
            <label className="form-label">Buscar por nombre:</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Ej: Vehículo"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Filtrar por monto:</label>
            <select 
              className="form-select"
              value={montoFiltro}
              onChange={(e) => setMontoFiltro(e.target.value)}
            >
              <option value="todos">Cualquier monto</option>
              <option value="bajo">$1M - $20M</option>
              <option value="medio">$20M - $100M</option>
              <option value="alto">Más de $100M</option>
            </select>
          </div>

        </div>
      </div>

      <div className="row">
        {creditosFiltrados.length > 0 ? (
          creditosFiltrados.map((credit) => (
            <CreditCard key={credit.id} credit={credit} />
          ))
        ) : (
          <div className="col-12 text-center mt-5">
            <div className="alert alert-warning">
              No se encontraron créditos con esos criterios.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Simulador;
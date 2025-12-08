import { credits } from '../data/creditsData'; 
import CreditCard from '../components/CreditCard'; 

function Home() {
    return (
        <div>
            <h2 className="mb-4">Catálogo de Créditos</h2>
            <p className="mb-4">Consulta todas nuestras opciones de crédito disponibles diseñadas para ti.</p>

            <div className="row">
                {credits.map((credit) => (
                    <CreditCard key={credit.id} credit={credit} />
                ))}
            </div>
        </div>
    );
}

export default Home;
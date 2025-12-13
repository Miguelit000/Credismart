import { useState, useEffect } from 'react';
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import CreditCard from '../components/CreditCard';

function Home() {
  const [creditos, setCreditos] = useState([]);

  useEffect(() => {
    const obtenerCreditos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "creditos"));
        const docs = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCreditos(docs);
      } catch (error) {
        console.error("Error obteniendo créditos:", error);
      }
    };
    obtenerCreditos();
  }, []);

  return (
    <div>
      <div className="card bg-dark text-white mb-5 border-0 shadow rounded-4 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
          className="card-img" 
          alt="Banner Finanzas"
          style={{ height: "300px", objectFit: "cover", opacity: "0.4" }} 
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="display-4 fw-bold">Cumple tus metas hoy</h1>
          <p className="lead fs-3">Soluciones financieras rápidas, seguras y a tu medida.</p>
        </div>
      </div>

      <h2 className="mb-4 border-bottom pb-2">Catálogo de Créditos</h2>
      
      {creditos.length === 0 && <p className="text-center">Cargando productos...</p>}

      <div className="row">
        {creditos.map((credit) => (
          <CreditCard key={credit.id} credit={credit} />
        ))}
      </div>
    </div>
  );
}

export default Home;
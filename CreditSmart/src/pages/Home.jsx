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
        console.log("Datos descargados de Firebase:", docs);
        
      } catch (error) {
        console.error("Error obteniendo créditos:", error);
      }
    };

    obtenerCreditos();
  }, []);

  return (
    <div>
      <h2 className="mb-4">Catálogo de Créditos</h2>
      <p className="mb-4">Consulta todas nuestras opciones de crédito disponibles diseñadas para ti.</p>

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
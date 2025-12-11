import { useState, useEffect } from 'react';
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";

function Solicitar() {
  const [creditos, setCreditos] = useState([]);
  
  const [formData, setFormData] = useState({
    nombre: '',
    cedula: '',
    email: '',
    tipoCredito: '', 
    monto: '',
    plazo: 12,
    fecha: '' 
  });

  const [cuotaEstimada, setCuotaEstimada] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const [esError, setEsError] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  useEffect(() => {
    if (formData.monto && formData.tipoCredito) {
      const creditoSeleccionado = creditos.find(c => c.id === formData.tipoCredito); 
      
      if (creditoSeleccionado) {
        const tasaMensual = (creditoSeleccionado.tasa / 100) / 12;
        const monto = parseFloat(formData.monto);
        const plazo = parseInt(formData.plazo);

        const cuota = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazo));
        setCuotaEstimada(cuota);
      }
    } else {
      setCuotaEstimada(0);
    }
  }, [formData.monto, formData.plazo, formData.tipoCredito, creditos]);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setMensaje("Enviando solicitud...");
    setEsError(false);
    
    try {
      const solicitudAGuardar = {
        ...formData,
        cuotaEstimada: cuotaEstimada,
        fechaSolicitud: new Date().toISOString(), 
        estado: "Pendiente"
      };

      await addDoc(collection(db, "solicitudes"), solicitudAGuardar);

      setMensaje(`¡Éxito! Tu solicitud ha quedado registrada en nuestro sistema.`);
      setEsError(false);

      setFormData({
        nombre: '', cedula: '', email: '', tipoCredito: '', monto: '', plazo: 12, fecha: ''
      });
      setCuotaEstimada(0);

    } catch (error) {
      console.error("Error al guardar solicitud: ", error);
      setMensaje("Hubo un error al guardar tu solicitud. Intenta nuevamente.");
      setEsError(true);
    }
    
    setTimeout(() => setMensaje(""), 5000);
  };

  return (
    <div>
      <h2 className="mb-4">Solicitar Crédito</h2>

      {mensaje && (
        <div className={`alert ${esError ? 'alert-danger' : 'alert-success'}`}>
          {mensaje}
        </div>
      )}

      <form onSubmit={handleSubmit} className="card card-body shadow-sm">
        
        
        <h4 className="mb-3 text-primary">Datos Personales</h4>
        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <label className="form-label">Nombre completo</label>
            <input type="text" className="form-control" name="nombre" required value={formData.nombre} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Cédula</label>
            <input type="number" className="form-control" name="cedula" required value={formData.cedula} onChange={handleChange} />
          </div>
          <div className="col-md-12">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" name="email" required value={formData.email} onChange={handleChange} />
          </div>
        </div>

        <h4 className="mb-3 text-primary">Configura tu Crédito</h4>
        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <label className="form-label">Tipo de crédito</label>
            <select className="form-select" name="tipoCredito" required value={formData.tipoCredito} onChange={handleChange}>
              <option value="">Selecciona una opción...</option>
              {creditos.map(credit => (
                <option key={credit.id} value={credit.id}>
                  {credit.nombre} (Tasa: {credit.tasa}%)
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">Plazo (meses)</label>
            <select className="form-select" name="plazo" value={formData.plazo} onChange={handleChange}>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
              <option value="36">36 meses</option>
              <option value="48">48 meses</option>
              <option value="60">60 meses</option>
            </select>
          </div>

          <div className="col-md-12">
            <label className="form-label">Monto a solicitar ($)</label>
            <input type="number" className="form-control" name="monto" required min="1000000" value={formData.monto} onChange={handleChange} placeholder="Ej: 5000000" />
            {cuotaEstimada > 0 && (
              <div className="form-text text-success fw-bold mt-2">
                Cuota mensual estimada: ${cuotaEstimada.toLocaleString('es-CO', { maximumFractionDigits: 0 })}
              </div>
            )}
          </div>
        </div>

        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary btn-lg">
            Enviar Solicitud
          </button>
        </div>
      </form>
    </div>
  );
}

export default Solicitar;
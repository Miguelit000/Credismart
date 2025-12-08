import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; 
import Simulador from './pages/Simulador';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} /> 
          
          <Route path="/simulador" element={<Simulador />} />
          <Route path="/solicitar" element={<h1>Aquí irá el Formulario</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
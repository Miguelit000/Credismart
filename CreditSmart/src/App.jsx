import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} /> 
          
          <Route path="/simulador" element={<h1>Aquí irá el Simulador</h1>} />
          <Route path="/solicitar" element={<h1>Aquí irá el Formulario</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
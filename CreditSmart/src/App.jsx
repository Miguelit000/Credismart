import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; 
import Simulador from './pages/Simulador';
import Solicitar from './pages/Solicitar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} /> 
          
          <Route path="/simulador" element={<Simulador />} />
          <Route path="/solicitar" element={<Solicitar />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
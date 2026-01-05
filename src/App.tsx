
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import IncentivosPortugal2020 from './pages/IncentivosPortugal2020';
import Accounting from './pages/Accounting';
import Certificacoes from './pages/Certificacoes';
import Contactos from './pages/Contactos';
import OfertaFormativa from './pages/OfertaFormativa';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/incentivos-portugal-2020" element={<IncentivosPortugal2020 />} />
        <Route path="/contabilidade" element={<Accounting />} />
        <Route path="/certificacoes" element={<Certificacoes />} />
        <Route path="/oferta-formativa" element={<OfertaFormativa />} />
        <Route path="/contactos" element={<Contactos />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

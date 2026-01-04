
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import IncentivosPortugal2020 from './pages/IncentivosPortugal2020';
import Accounting from './pages/Accounting';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/incentivos-portugal-2020" element={<IncentivosPortugal2020 />} />
        <Route path="/contabilidade" element={<Accounting />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

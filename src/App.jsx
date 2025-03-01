import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4" style={{ marginLeft: '250px' }}>
        <Routes>
          <Route path="/" element={<h1>Início</h1>} />
          <Route path="/sobre" element={<h1>Sobre</h1>} />
          <Route path="/certificados" element={<h1>Certificados</h1>} />
          <Route path="/skills" element={<h1>Skills</h1>} />
          <Route path="/projetos" element={<h1>Projetos</h1>} />
          <Route path="/estatisticas" element={<h1>Estatísticas</h1>} />
          <Route path="/contato" element={<h1>Contato</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
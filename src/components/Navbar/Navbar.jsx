import { Link } from "react-router-dom";
import { FaHome, FaUser, FaCertificate, FaTools, FaProjectDiagram, FaChartBar, FaEnvelope } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="sidebar">
      <ul className="nav-list">
        <li>
          <Link to="/">
            <FaHome />
            <span>Início</span>
          </Link>
        </li>
        <li>
          <Link to="/sobre">
            <FaUser />
            <span>Sobre</span>
          </Link>
        </li>
        <li>
          <Link to="/certificados">
            <FaCertificate />
            <span>Certificados</span>
          </Link>
        </li>
        <li>
          <Link to="/skills">
            <FaTools />
            <span>Skills</span>
          </Link>
        </li>
        <li>
          <Link to="/projetos">
            <FaProjectDiagram />
            <span>Projetos</span>
          </Link>
        </li>
        <li>
          <Link to="/estatisticas">
            <FaChartBar />
            <span>Estatísticas</span>
          </Link>
        </li>
        <li>
          <Link to="/contato">
            <FaEnvelope />
            <span>Contato</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

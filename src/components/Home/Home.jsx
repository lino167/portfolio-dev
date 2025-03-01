import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "./Particle";
import TypewriterEffect from "./Typewriter";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-section">
      <Particle /> {/* Partículas no fundo */}
      <Container className="home-content">
        <Row>
          {/* Texto de apresentação */}
          <Col md={7} className="home-text">
            <h1 className="heading">
              Olá, eu sou <span className="highlight">Zacarias Ramos</span> 👋
            </h1>
            <TypewriterEffect />
            <p className="description">
              Desenvolvedor Fullstack focado em criar soluções eficientes e inovadoras.
            </p>
            <Button variant="primary" href="#projetos" className="cta-button">
              Veja Meus Projetos
            </Button>
          </Col>

          {/* Imagem ou Ilustração */}
          <Col md={5} className="home-image">
            <img
              src="https://via.placeholder.com/350"
              alt="Minha imagem"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "./Particle";
import TypewriterEffect from "./Typewriter";
import TypewriterWelcome from "./TypewriterWelcome";
import avatar from "../../assets/avatar.png"; // Importa a imagem de avatar
import "./Home.css";

const Home = () => {
  return (
    <section className="home-section">
      <Particle /> {/* Partículas no fundo */}
      <Container className="home-content">
        <div className="welcome-text">
          <TypewriterWelcome />
        </div>
        <div className="home-text">
          <h1 className="heading">
            Olá, eu sou <span className="highlight">Zacarias Ramos</span> 👋
          </h1>
          <TypewriterEffect />
          <p className="description">
            Sou desenvolvedor Fullstack, com um forte foco em Python, Ruby e outras tecnologias que me permitem criar soluções completas e inovadoras. Atualmente, estou aprimorando minhas habilidades em Frontend, Backend, Inteligência Artificial, Mobile com React Native e análise de dados. Com uma abordagem prática e focada, estou preparado para construir desde aplicações web dinâmicas até sistemas complexos de automação e análise.
          </p>
        </div>
        <div className="home-image">
          <img
            src={avatar} // Utiliza a imagem importada
            alt="Minha imagem"
            className="img-fluid avatar"
          />
          <Button variant="primary" href="#projetos" className="cta-button">
            Saiba mais
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Home;
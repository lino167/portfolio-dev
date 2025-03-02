import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterEffect = () => {
  return (
    <h2 className="typewriter">
      <Typewriter
        options={{
          strings: [
            "Desenvolver aplicações Fullstack",
            "Criar soluções de automação e análise de dados",
            "Construir plataformas robustas com Ruby on Rails",
            "Desenvolver soluções com Inteligência Artificial",
          ],
          autoStart: true,
          loop: true,
          delay: 150,
          deleteSpeed: 100,
        }}
      />
    </h2>
  );
};

export default TypewriterEffect;

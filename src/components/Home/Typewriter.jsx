import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterEffect = () => {
  return (
    <h2 className="typewriter">
      <Typewriter
        options={{
          strings: [
            "Desenvolvedor Fullstack",
            "Criador de Soluções Web",
            "Apaixonado por Tecnologia",
            "Desenvolvedor python",
          ],
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 50,
        }}
      />
    </h2>
  );
};

export default TypewriterEffect;

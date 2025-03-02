import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterWelcome = () => {
  return (
    <h2 className="typewriter">
      <Typewriter
        options={{
          strings: ["Bem-vindo ao meu universo <span class='highlight'>digital</span>!"],
          autoStart: true,
          loop: true,
          delay: 150,
          deleteSpeed: 10000,
        }}
      />
    </h2>
  );
};

export default TypewriterWelcome;
import React from "react";
import Particles from "react-tsparticles";

const Particle = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        particles: {
          number: { value: 100 },
          color: { value: "#f7df1e" },
          size: { value: 7 },
          move: { speed: 8 },
        },
      }}
    />
  );
};

export default Particle;

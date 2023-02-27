import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from './config/ParticleConfig';

function Particlesbg(){
  const particlesInit = async (main) =>{
    console.log(main);
    await loadFull(main);
  };
  const particlesLoaded = (container) =>{
    console.log(container);
  }

  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    Loaded={particlesLoaded}
    options={particlesConfig}></Particles>
  )
}

export default Particlesbg
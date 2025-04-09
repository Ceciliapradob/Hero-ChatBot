import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PC from "./assets/pc.jpg";

// Contenedor general con posición relativa
const containerStyle = {
  position: "relative",
  overflow: "hidden"
};

// Imagen de fondo
const backgroundStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: `url(${PC})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  zIndex: 0
};

// Capa de opacidad encima de la imagen
const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.7)", // opacidad ajustable
  zIndex: 1
};

// Contenido encima
const contentStyle = {
  position: "relative",
  zIndex: 2
};

const App = () => {
  return (
    <header className="overflow-x-hidden">
      <div style={containerStyle}>
        <div style={backgroundStyle}></div>
        <div style={overlayStyle}></div>
        <div style={contentStyle}>
          <Navbar />
          <Hero />
        </div>
      </div>
    </header>
  );
};

export default App;

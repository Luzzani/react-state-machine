import React from "react";
import "./Welcome.css";

export const Welcome = ({ state, send }) => {
  const startBooking = () => {
    send("START");
  };

  return (
    <div className="Welcome">
      <p className="Welcome-title title">¡Hoy es el día!</p>
      <p className="Welcome-description description">
       Gracias por volar con Los Pibe
      </p>
      <button onClick={startBooking} className="Welcome-cancel button">
        Comenzar
      </button>
    </div>
  );
};

import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [welcomeMessage, setWelcomeMessage] = useState('Bienvenido a nuestra tienda en línea!');

  const changeMessage = () => {
    setWelcomeMessage('Gracias por visitarnos!');
  };

  return (
    <div className="home">
      <h1>{welcomeMessage}</h1>
      <button onClick={changeMessage}>Cambiar Mensaje</button>
    </div>
  );
};

export default Home;
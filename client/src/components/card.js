import React from 'react';

function Card({ flag, name, continent }) {
  return (
    <div>
      <div>
      <img src= {flag} alt={`${name} flag`}/>
      <h3>Nombre: {name}</h3>
      <h5>Continente: {continent}</h5>
      </div>
    </div>
  )
}

export default Card;

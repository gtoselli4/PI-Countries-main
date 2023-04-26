import React from 'react';
import {Link} from 'react-router-dom';

const LandingPage(){
  return(
    <div>
      <h1>Bienvenidos</h1>
      <h4>Bienvenidos a nuestra web, el armado de tu viaje ideal comienza aca!</h4>
      <p>Nuestra web ofrece destinos turisticos alrededor de todo el globo, junto a una extensa variedad de actividades turisticas.</p>
      <Link to ='/home'>
        <button>Ingresar</button>
      </Link>
    </div>
  )
}

export default LandingPage;

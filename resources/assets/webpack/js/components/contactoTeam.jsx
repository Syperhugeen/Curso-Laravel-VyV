import React from 'react';

import './../../css/components/contactoTeam.scss';

import FotoTeam2 from './../../img/Contacto/leandro.jpg';
import FotoTeam3 from './../../img/Contacto/mariano.jpg';
import FotoTeam4 from './../../img/Contacto/maxi.jpg';

const ContactoTeam = (props) => {
  return (
    <div className="d-flex flex-row align-items-center">
      <img
        src={FotoTeam2}
        className="contacto-team-img mr-2"
        alt="Imagen de Leandro"
      />
      <img
        src={FotoTeam3}
        className="contacto-team-img mr-2"
        alt="Imagen de Mariano"
      />
      <img
        src={FotoTeam4}
        className="contacto-team-img mr-2"
        alt="Imagen de Maxi"
      />
    </div>
  );
};

export default ContactoTeam;

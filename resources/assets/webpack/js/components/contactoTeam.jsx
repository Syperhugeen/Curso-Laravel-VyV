import React from 'react';

import './../../css/components/contactoTeam.scss';

import FotoTeam1 from './../../img/Contacto/analia.jpg';
import FotoTeam2 from './../../img/Contacto/leandro.jpg';
import FotoTeam3 from './../../img/Contacto/mariano.jpg';

const ContactoTeam = (props) => {
  return (
    <div className="d-flex flex-row align-items-center">
      <img
        src={FotoTeam1}
        className="contacto-team-img mr-2"
        alt="Imagen de Analia"
      />
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
    </div>
  );
};

export default ContactoTeam;

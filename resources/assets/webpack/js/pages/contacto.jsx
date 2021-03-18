import React, { useEffect } from 'react';
import {
  FaMobileAlt,
  FaWhatsapp,
  FaEnvelopeOpenText,
  FaPhone,
} from 'react-icons/fa';
import DefaultLayout from '../components/layout';
import FormularioContacto from '../components/formularioContacto';
import Data from '../config/data';
import ContactoTeam from '../components/contactoTeam';

const Contacto = () => {
  useEffect(() => {
    if (window.scrollY != 0) {
      window.scrollTo(0, 0);
    }
    // Update the document title using the browser API
    document.title = `Contactar a Javier Mangini`;
  });
  return (
    <DefaultLayout>
      <div className="container">
        <h1 className=" text-center my-5">¿Hablamos?</h1>
        <p className="text-center mb-4">
          Hay un equipo listo para <strong>cotizar tu proyecto</strong> o para
          atender cualquier consulta.
        </p>
        <div className="w-100 d-flex flex-column align-items-center mb-4">
          {<ContactoTeam />}
        </div>
        <h2 className="h2 text-center mb-5">
          Podés contactarte de 3 maneras diferentes.
        </h2>

        <ol>
          <li className="mb-4">
            {' Llamá al '}
            {<FaPhone />}
            <strong>{` ${Data.phone}`}</strong>o al {<FaMobileAlt />}{' '}
            <strong>{` ${Data.cellphone}`}</strong>
            {`. Atendemos de  `}
            <strong>{` ${Data.business_hours}`}</strong>
            {`. `}
          </li>

          <li className="mb-4">
            {' Enviá un mensaje de texto al'}
            {<FaMobileAlt />}

            <strong>{` ${Data.cellphone}`}</strong>
            {`  o por Whatsapp tocando
          este botón `}
            <a href={Data.whatsapp_link} className="btn btn-success">
              {` Enviar mensaje por whatsapp `}
              {<FaWhatsapp />}
            </a>
          </li>

          <li className="mb-4">
            {' Enviá un email '}
            {<FaEnvelopeOpenText />}
            {' a '}
            <strong>{` ${Data.email}`}</strong>

            {` o bien rellená el
          formulario de aquí abajo. `}
          </li>
        </ol>
      </div>

      <FormularioContacto />
    </DefaultLayout>
  );
};

export default Contacto;

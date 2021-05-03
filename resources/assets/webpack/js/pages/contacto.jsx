import React, { useEffect } from 'react';
import {
  FaMobileAlt,
  FaWhatsapp,
  FaEnvelopeOpenText,
  FaPhone,
  FaPaperPlane,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import DefaultLayout from '../components/layout';
import FormularioContacto from '../components/formularioContacto';
import Data from '../config/data';
import ContactoTeam from '../components/contactoTeam';
import SectionImgFondo from '../components/sectionConImagenDeFondo';
import DataPortada from '../data/DataDePaginas/contactar';

const Contacto = () => {
  useEffect(() => {
    if (window.scrollY != 0) {
      window.scrollTo(0, 0);
    }
    // Update the document title using the browser API
    document.title = `Contactar`;
  });
  return (
    <DefaultLayout>
      <SectionImgFondo data={DataPortada} />
      <div className="container">
        <h1 className=" text-center my-5">¿Hablamos?</h1>
        <p className="text-center mb-4">
          Hay un equipo listo para <strong>cotizar su proyecto</strong> y
          atender sus consultas.
        </p>
        <div className="w-100 d-flex flex-column align-items-center mb-4">
          {<ContactoTeam />}
        </div>

        <p className="mb-5 text-center">
          Canales y vías de comunicación de Veiga Ventós
        </p>

        <div className="row justify-content-center">
          <ol className="col-12 col-lg-10">
            <li className="mb-4">
              {'Estamos ubicados en Carrasco. '}
              {<FaMapMarkerAlt />}
              <strong>{` ${Data.address}`}</strong>
              {`. Atendemos de  `}
              <strong>{` ${Data.business_hours}`}</strong>
              {`. `}
            </li>
            <li className="mb-4">
              {'Celular '}
              {<FaMobileAlt />}
              <strong>{` ${Data.cellphone}`}</strong> o {<FaMobileAlt />}{' '}
              <strong>{` ${Data.cellphone1}`}</strong>
              {`. `}
            </li>

            <li className="mb-4">
              {' Mensajes de texto '}
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
              {' Email '}
              {<FaEnvelopeOpenText />} <strong>{` ${Data.email} `}</strong>.
            </li>
            <li className="mb-4">
              {<FaPaperPlane />}{' '}
              {` Para enviarnos un mensaje personalizado, rellene
            el siguiente formulario y será correspondido a la brevedad por
            nuestro equipo de trabajo`}
              .
            </li>
          </ol>
        </div>
      </div>

      <FormularioContacto />
    </DefaultLayout>
  );
};

export default Contacto;

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
import DataPortada from '../data/DataDePaginas/cotizar';

const Contacto = () => {
  useEffect(() => {
    if (window.scrollY != 0) {
      window.scrollTo(0, 0);
    }
    // Update the document title using the browser API
    document.title = `Cotizar proyecto`;
  });
  return (
    <DefaultLayout>
      <SectionImgFondo data={DataPortada} />
      <div className="container">
        <h1 className=" text-center my-5">Cotizar proyecto</h1>
        <p className="text-center mb-4">
          Hay un equipo listo para trabajar su proyecto.
        </p>
        <div className="w-100 d-flex flex-column align-items-center mb-4">
          {<ContactoTeam />}
        </div>

        <p className="mb-5 h2 text-center text-dark">Contacto</p>

        <p className="text-center ">
          Para cotizar un proyecto con nosotros comuniquese directamente al{' '}
          <FaMobileAlt />
          {Data.cellphone} - De lo contrario puede enviarnos un mail a{' '}
          <FaEnvelopeOpenText /> {Data.email} o llenar el siguiente formulario y
          un especialista se pondrá en contacto directo con usted a la brevedad.
        </p>
      </div>

      <FormularioContacto
        title="Formulario de cotización de proyecto"
        url="/post_envio_solicitud_cotizacion_proyecto_form"
        with_file={false}
      />
    </DefaultLayout>
  );
};

export default Contacto;

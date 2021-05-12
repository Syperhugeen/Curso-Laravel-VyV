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
    document.title = `Formá parte del equipo de Veiga Ventós`;
  });
  return (
    <DefaultLayout>
      <SectionImgFondo data={DataPortada} />
      <div className="container">
        <h1 className=" text-center my-5">Formá parte de Veiga Ventós</h1>
        <p className="text-center mb-4">
          Hay un equipo listo para trabajar su proyecto.
        </p>
        <div className="w-100 d-flex flex-column align-items-center mb-4">
          {<ContactoTeam />}
        </div>

        <p className="text-center ">
          ¿Te gustaría desarrollarte creando proyectos de ingeniería civil?{' '}
          Dejanos tus datos junto a tu curriculum vitae, y serás un candidato
          con preferencia cuando surgan oportunidades.
        </p>
      </div>

      <FormularioContacto
        title="Formulario para enviar CV"
        url="/post_envio_solicitud_trabajo_form"
        with_file={true}
      />
    </DefaultLayout>
  );
};

export default Contacto;

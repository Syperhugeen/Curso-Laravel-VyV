import React, { useEffect } from 'react';

import DefaultLayout from '../components/layout';

import Data from '../config/data';
import { Link } from 'react-router-dom';
import '../../css/helpers/video.scss';
import Team from '../components/team';
import SectionImgFondo from '../components/sectionConImagenDeFondo';
import DataPortada from '../data/DataDePaginas/sobre';
import ImagensBanerOficina from '../../img/Oficina/baner.jpg';
import {
  FaMobileAlt,
  FaWhatsapp,
  FaEnvelopeOpenText,  
  FaInstagram,
} from 'react-icons/fa';


import FotoLenadro from './../../img/Contacto/leandro.jpg';
import FotoMariano from './../../img/Contacto/mariano.jpg';
import FotoMaxi from './../../img/Contacto/maxi.jpg';

const SobreMi = (props) => {
  useEffect(() => {
    if (window.scrollY != 0) {
      window.scrollTo(0, 0);
    }

    let titulo = `Acerca de V & V | Estudio de ingeniería`;
    document.title = titulo;
    Data.set_analitic(titulo, props.location.pathname);
  });

  return (
    <DefaultLayout>
      <SectionImgFondo data={DataPortada} />
      <div className="w-100 py-5 bg-light">
        <div className="container  mt-5 mb-3 " style={{ minHeight: '40vh' }}>
          <div className="text-center text-secondary text-uppercase mb-1 letter-space-lg">
            <strong>¿Qué somos?</strong>
          </div>
          <h1 className="text-center col-12 mb-5">Sobre Veiga Ventós</h1>

          <div className="row mx-0">
            <div className="col-12 px-2 px-4">
              <p className="mb-5 text-center">
                Veiga Ventós es un estudio de ingeniería civil que fundamos en
                el año 2017 los hermanos{' '}
                <strong>Mariano y Leandro Veiga Ventós</strong>. Hemos trabajado
                en más de 300 proyectos y desarrollado un gran expertise dentro
                del sistema constructivo Steel Framing. Nuestra búsqueda y
                compromiso esta orientado al crecimiento organizacional por
                medio de la transparencia y el profesionalismo. Con estos
                valores y atributos llevamos adelante cada uno de nuestros
                proyectos y desafíos de ingeniería civil.
              </p>
            </div>
          </div>
        </div>
      </div>

      <SectionImgFondo
        data={{
          header: 'h2',
          position: 'center',
          minHeight: '50vh',
          img: ImagensBanerOficina,
          titulo: '',
          text: '',
          callToAction: '',
          link: '',
          opacity_value: 0.2,
        }}
      />

      <div className="w-100 py-5  ">
        <div className="container  my-5">
          <div className="text-center text-secondary text-uppercase mb-1 letter-space-lg">
            <strong>¿Quiénes somos?</strong>
          </div>
          <h2 className="text-center  col-12 mb-5">Equipo de Veiga Ventós</h2>
          <div className="row mx-0 justify-content-center">
            <Team
              abierto={false}
              data={{
                name: 'Mariano',
                img: FotoMariano,
                cargo: 'Ing Civil',
                description: 'Fundador y Director de Veiga Ventós',
                link_linkedin:
                  'https://www.linkedin.com/in/mariano-veiga-2154a9b3/',
              }}
            />
            <Team
              abierto={false}
              data={{
                name: 'Leandro',
                img: FotoLenadro,
                cargo: 'Ing Civil',
                description: 'Fundador y Director de Veiga Ventós',
                link_linkedin:
                  'https://www.linkedin.com/company/v-v-ingenieria/?viewAsMember=true',
              }}
            />

           
          </div>
          <div className="row mx-0 ">
            <div className="col-12 mt-5 text-center">
              ¡Sumate al equipo!{' '}
              <Link exact to="/se-parte-de-veiga-ventos" className="">
                Envianos tu curriculum aquí
              </Link>{' '}
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5 ">
        <div className="row mx-0">
          <div className="col-12 px-2 px-4">
            <p className="mb-5 h1 text-center text-dark">
              <b>Contacto</b>
            </p>

            <ul className="mb-2  p-3 pl-5">
              <li className="mb-4">
                {'Celular '}
                {<FaMobileAlt />}
                <strong>{` ${Data.cellphone2}`}</strong> o al {<FaMobileAlt />}{' '}
                <strong>{` ${Data.cellphone}`}</strong>
                {`. Atendemos de  `}
                <strong>{` ${Data.business_hours}`}</strong>
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

              <li className="mb-0">
                {' Email '}
                {<FaEnvelopeOpenText />}
                {' a '}
                <strong>{` ${Data.email}`}</strong>
                {` o bien rellená el formulario `}
                <Link exact to="/contactar" className="">
                  que está en este link
                </Link>{' '}
                .
              </li>
            </ul>

            <p className="my-5 text-center">
              Siga nuestros proyectos en{' '}
              <a href={Data.instagram_link}>{<FaInstagram />}</a>
            </p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SobreMi;

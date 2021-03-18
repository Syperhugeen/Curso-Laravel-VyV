import React, { useEffect } from 'react';

import DefaultLayout from '../components/layout';

import Data from '../config/data';
import { Link } from 'react-router-dom';
import '../../css/helpers/video.scss';
import Logo from '../../img/logo-v-y-v-ingenieria.png';

const SobreMi = () => {
  useEffect(() => {
    if (window.scrollY != 0) {
      window.scrollTo(0, 0);
    }
    document.title = `Sobre Javier Mangini`;
  });

  return (
    <DefaultLayout>
      <div className="container">
        <h1 className="text-center col-12 my-5">Sobre</h1>

        <div className="row mx-0">
          <div className="col-12 px-2 px-4">
            <p className="mb-5">
              ¡Esto es genial! Nos alegra saber que hay más personas a las que
              también le gusta ver la pagina de "Quiénes somos". Así que si
              estás aquí, seguramente sea por una de estas razones:
            </p>
            <ol>
              <li className="mb-3">
                Querés verificar que V&V sea una empresa profesional a la cual
                le puedas confiar tu proyecto.
              </li>
              <li className="mb-5">
                Tenés curiosidad por conocer un poco más sobre V&V.
              </li>
            </ol>
            <p className="mb-4">
              Si estás en el primer grupo, nuestra experiencia nos dicta, que la
              mejor manera de aclarar tus dudas es que tengas una conversación
              con nosotros. Para eso llamá a al celular{' '}
              <strong>{Data.cellphone}</strong> o{' '}
              <Link className="" to="/contactar">
                contactanos aquí
              </Link>{' '}
              y en breve estaremos en contacto.
            </p>
            <p className="mb-5">
              Si estás en el segundo grupo, mirá el video de aquí abajo en el
              cual los directores de V & V Mariano y Leandro te presentaran la
              empresa{' '}
            </p>
          </div>
        </div>
      </div>

      <div className="w-100 my-5 py-5 bg-dark">
        <div className="container  py-4 py-lg-2">
          <div className="col-12 d-flex flex-column align-items-center mb-5">
            <img src={Logo} alt="" className="img-fluid" />
          </div>
          <div className="col-12 ">
            <div className="video-responsive shadow  px-0">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Wf1vV9v28z8"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SobreMi;

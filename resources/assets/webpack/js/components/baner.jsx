import React from 'react';
import { Link } from 'react-router-dom';

import Typewriter from 'typewriter-effect';
import Data from '../config/data';

import Foto from '../../img/Home/v-y-v-steel-framing.jpg';

const Baner = () => (
  <section className="w-100 py-5">
    <div className="container d-flex flex-column align-items-center">
      <h1 className="mb-5 text-center decoracionHeaders text-wrap">
        Estudio de ingeniería experto en Steel Framing en Uruguay
      </h1>
      <div className="col-12 row mx-0 align-items-center  ">
        <div className="col-12 col-lg-6  px-2 mb-4 mb-lg-0">
          <div className="col-12  p-3 ">
            <img
              className="img-fluid shadow p-1"
              src={Foto}
              alt="Foro de Javier Mangini en la radio"
            />
          </div>
        </div>
        <div className="col-12 col-lg-6 px-2">
          <p>
            Somo expertos en realizar{' '}
            <strong> proyectos en Steel Framing</strong> y además{' '}
            <strong>tenemos planes de formación enfocados</strong> a arquitectos e ingenieros 
            en los cuales compartimos las buenas prácticas y procedimientos a la hora de construir con Stell Framing.
            {` `}
          </p>

          <h3 className="mb-4">
            <Typewriter
              options={{
                strings: ['¿Tenés un proyecto para cotizar?'],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>

          <Link
            exact
            to="/contactar"
            className="btn btn-primary btn-lg text-uppercase"
          >
            Contactanos
          </Link>
          <p className="my-4">¡Sin compromiso!</p>
        </div>
      </div>
    </div>
  </section>
);

export default Baner;

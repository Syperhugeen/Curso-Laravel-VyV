import React from 'react';
import { Link } from 'react-router-dom';

import Typewriter from 'typewriter-effect';
import Slider from '../components/slider';

import Data from '../config/data';

import Foto from '../../img/Home/steel-framing-v-y-v.jpg';

const Baner = () => (
  <section className="w-100 pb-5">
    <Slider />
    <div className="container d-flex flex-column align-items-center">
      <h1 className="my-5 text-center  text-wrap">
        Estudio de ingeniería experto en Steel Framing
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
            <strong>tenemos planes de formación enfocados</strong> a arquitectos
            e ingenieros en los cuales compartimos las buenas prácticas y
            procedimientos a la hora de construir con Stell Framing.
            {` `}
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Baner;

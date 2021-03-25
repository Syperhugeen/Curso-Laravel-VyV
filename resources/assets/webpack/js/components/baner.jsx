import React from 'react';
import { Link } from 'react-router-dom';

import Typewriter from 'typewriter-effect';
import Slider from '../components/slider';

import Data from '../config/data';

import Foto from '../../img/Home/steel-framing-v-y-v.jpg';

const Baner = () => (
  <section className="w-100  bg-gray-1">
    <Slider />
    <div className="container d-flex flex-column align-items-center my-5 py-5">
      <div className="text-center text-secondary text-uppercase mb-1 letter-space-lg">
        <strong>¿Qué somos?</strong>
      </div>
      <h1 className="mb-5 text-center  text-wrap">
        Estudio de ingeniería experto en Steel Framing
      </h1>
      <div className="col-12 row mx-0 align-items-center ">
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
            En Veiga Ventós (V & V) ingeniería estamos especializado en
            cálculos, diseño, planificación y gerenciamiento de obras de{' '}
            <strong>ingeniería en steel framing</strong>. Trabajamos y operamos
            conjuntamente con estudios de arquitectura, para realizar proyectos
            que satisfagan al cliente de la mejor manera y que complementen
            nuestros servicios de ingeniería.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Baner;

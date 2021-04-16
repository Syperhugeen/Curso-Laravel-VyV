import React from 'react';
import Item from './item';
import { Link } from 'react-router-dom';

const SectionServicios = () => (
  <div className="w-100 py-5 ">
    <div className="container my-5">
      <div className="row   ">
        <div className="col-12 d-flex flex-column align-items-center my-3 ">
          <div className="text-center text-secondary text-uppercase mb-1 letter-space-lg">
            <strong>¿Qué hacemos?</strong>
          </div>
          <h1 className="mb-0 text-center text-wrap">
            Conozca nuestros servicios en ingeniería civil
          </h1>
        </div>
      </div>
    </div>
  </div>
);

export default SectionServicios;

import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Logo from '../../img/Iconos/presupuesto.png';

const BanerContacto = (props) => (
  <div className="w-100 py-5 bg-dark">
    <div className="container py-4 p-lg-2">
      <div className="row mx-0 justify-content-center">
        <div className="col-12 col-lg-10 text-left align-self-center text-intro p-lg-4">
          <div className="row  align-items-center  justify-content-center mx-0">
            <div className=" col-12 col-lg-2 d-flex flex-column align-items-center mb-4 mt-5 mt-lg-0 mb-lg-0 p-1">
              <div className="col-5 col-lg-8">
                <img
                  src={Logo}
                  alt="Icono de presupuesto"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className=" col-12 col-lg-6 p-1 mb-2 mb-lg-0">
              <h2 className="h2 text-secondary  mb-1 text-center text-lg-left">
                Cotice su proyecto ahora
              </h2>
              <p className="text-secondary  mb-0 mb-lg-0 text-center text-lg-left">
                Sin compromisos. Le hacemos la cotización en un tiempo record.
              </p>
            </div>
            <div className="col-12 col-lg-4">
              <Link to="/contactar">
                <div className="btn btn-outline-primary btn-lg  w-100 text-uppercase">
                  Cotizar proyecto
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BanerContacto;

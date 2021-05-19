import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import Data from '../config/data';

const Footer = () => {
  return (
    <footer className="w-100 position-relative contenedor-footer">
      <div className="w-100 py-5  bg-gray-1">
        <div className="container">
          <div className="row">
            <nav className="row mx-0 col-12 col-lg-12">
              <div className=" col-12 col-md-4 mb-3 ">
                <Link
                  className="btn btn-outline-primary   w-100"
                  to="/sobre-v-y-v"
                >
                  {' '}
                  Sobre V & V
                </Link>
              </div>
              <div className=" col-12 col-md-4  mb-3">
                <Link
                  className="btn btn-outline-primary   w-100"
                  to="/proyectos"
                >
                  {' '}
                  Proyectos
                </Link>
              </div>
              <div className=" col-12 col-md-4  mb-3">
                <Link
                  className="btn btn-outline-primary   w-100"
                  to="/contactar"
                >
                  {' '}
                  Contactar
                </Link>
              </div>
              <div className=" col-12 col-md-4  mb-3">
                <a
                  className="btn btn-outline-primary   w-100"
                  href={Data.whatsapp_link}
                >
                  {' '}
                  {`Whatsapp `} <FaWhatsapp />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="w-100 py-3 bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center text-white mb-0">
                <small>
                  {Data.name} © todos los derechos reservados
                  {` ${new Date().getFullYear()}`}
                  {` | `}
                  <strong>
                    <a href="https://mwebs.com.uy/dise%C3%B1o-web-uruguay">
                      Diseño web en Uruguay
                    </a>
                  </strong>
                  {` hecho por por `}
                  <strong>
                    <a href="https://mwebs.com.uy/dise%C3%B1o-web-uruguay">
                      mwebs
                    </a>
                  </strong>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

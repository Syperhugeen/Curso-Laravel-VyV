import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaMobileAlt,
  FaEnvelopeOpenText,
  FaInstagram,
} from 'react-icons/fa';
import Data from '../config/data';
import Logo from '../../img/logo-v-y-v-ingenieria.png';
import '../../css/components/footerSimple.scss';

const Footer = () => {
  return (
    <>
      <footer className="py-5 border-top border-primary">
        <div className="footer-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-3 mb-5 mb-lg-0 border-bottom border-light">
                <div className="d-flex align-items-center flex-column px-5 px-lg-4 h-100 justify-content-center">
                  <Link className="" to="/">
                    <img
                      className="img-fluid my-5"
                      src={Logo}
                      alt="logo-footer"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-10 col-lg-3 px-5 px-lg-4 mb-5 mb-lg-0 border-bottom border-light">
                <h3 className="mb-4 pt-lg-3">Rutas de interés</h3>
                <p className="footer-p">
                  <NavLink
                    exact
                    to="/"
                    className="footer-simple-link"
                    activeClassName="footer-simple-link__active"
                  >
                    Inicio
                  </NavLink>
                </p>
                <p className="footer-p">
                  <NavLink
                    exact
                    to="/servicios"
                    className="footer-simple-link"
                    activeClassName="footer-simple-link__active"
                  >
                    Servicios
                  </NavLink>
                </p>
                <p className="footer-p">
                  <NavLink
                    exact
                    to="/proyectos"
                    className="footer-simple-link"
                    activeClassName="footer-simple-link__active"
                  >
                    Proyectos
                  </NavLink>
                </p>
                <p className="footer-p">
                  <NavLink
                    exact
                    to="/sobre-v-y-v"
                    className="footer-simple-link"
                    activeClassName="footer-simple-link__active"
                  >
                    Sobre V & V
                  </NavLink>
                </p>
                <p className="footer-p">
                  <NavLink
                    exact
                    to="/contactar"
                    className="footer-simple-link"
                    activeClassName="footer-simple-link__active"
                  >
                    Contacto
                  </NavLink>
                </p>
                <p className="footer-p">
                  <NavLink
                    exact
                    to="/cotizar-proyecto"
                    className="footer-simple-link"
                    activeClassName="footer-simple-link__active"
                  >
                    Cotizar proyecto
                  </NavLink>
                </p>
              </div>
              <div className="col-10 col-lg-3 px-5 px-lg-4 mb-5 mb-lg-0 border-bottom border-light">
                <h3 className="mb-4 pt-lg-3">Contacto</h3>
                <p className="footer-p">
                  <FaMapMarkerAlt />
                  {` Dirección: ${Data.address}`}
                </p>
                <p className="footer-p">
                  <FaPhone /> {`Teléfono: ${Data.phone}`}
                </p>
                <p className="footer-p">
                  <FaMobileAlt /> {`Celular:  ${Data.cellphone}`}
                </p>
                <p className="footer-p">
                  <FaWhatsapp />
                  {' Whatsapp: '}
                  <a href={Data.whatsapp_link}>{` ${Data.cellphone}`}</a>
                </p>
                <p className="footer-p">
                  <FaEnvelopeOpenText />
                  {` Email:  ${Data.email}`}
                </p>
              </div>
              <div className="col-10 col-lg-3 px-5 px-lg-4 mb-0 ">
                <h3 className="mb-4 pt-lg-3">Seguinos en ..</h3>
                <p className="footer-p">
                  <FaInstagram />
                  <a href={Data.instagram_link}>{` Instagram`}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
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
    </>
  );
};

export default Footer;

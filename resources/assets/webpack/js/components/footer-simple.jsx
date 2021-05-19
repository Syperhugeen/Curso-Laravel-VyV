import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaMobileAlt,
  FaEnvelopeOpenText,
  FaInstagram,
  FaLinkedinIn,
  FaFacebook,
} from 'react-icons/fa';
import Data from '../config/data';
import Logo from '../../img/logo-v-y-v-ingenieria.png';
import '../../css/components/footerSimple.scss';

const Footer = () => {
  return (
    <>
      <footer className="py-5 border-top bg-dark border-primary footer-container row mx-0 align-items-center justify-content-center">
        <div className="footer-top w-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-3 mb-5 mb-lg-0  d-flex align-items-center justify-content-center">
                <div className="d-flex align-items-center flex-column px-5 px-lg-4 justify-content-center">
                  <Link className="" to="/">
                    <img
                      className="img-fluid mb-3"
                      src={Logo}
                      alt="logo-footer"
                    />
                  </Link>
                  <p className="footer-p mb-0 col-10 col-lg-12 text-center text-lg-left">
                    Veiga Ventos – Estudio de Ingeniería Civil
                  </p>
                </div>
              </div>
              <div className="col-10 col-lg-3 px-3 px-lg-4 mb-5 mb-lg-0 ">
                <h3 className="mb-5 footer-titulo-seccion pt-lg-3">
                  Rutas de interés
                </h3>

                <p className="footer-p">
                  <NavLink
                    exact
                    to="/servicios"
                    className="footer-simple-link"
                    activeClassName="footer-simple-link__active"
                    style={{ fontSize: '19px' }}
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
                    style={{ fontSize: '19px' }}
                  >
                    Proyectos
                  </NavLink>
                </p>

                <p className="footer-p">
                  <NavLink
                    exact
                    to="/contactar"
                    className="footer-simple-link"
                    activeClassName="footer-simple-link__active"
                    style={{ fontSize: '19px' }}
                  >
                    Contacto
                  </NavLink>
                </p>
              </div>
              <div className="col-10 col-lg-3 px-3 px-lg-4 mb-5 mb-lg-0 ">
                <h3 className="mb-5 pt-lg-3 footer-titulo-seccion">
                  Datos de contacto
                </h3>

                <p className="footer-p">
                  <FaMobileAlt /> {`Celular:  ${Data.cellphone}`}
                </p>
                <p className="footer-p">
                  <FaMobileAlt /> {`Celular:  ${Data.cellphone2}`}
                </p>

                <p className="footer-p ">
                  <FaWhatsapp />
                  {' Whatsapp: '}
                  <a href={Data.whatsapp_link}>{` ${Data.cellphone}`}</a>
                </p>
                <p className="footer-p">
                  <FaEnvelopeOpenText />
                  {` Email:  ${Data.email}`}
                </p>
              </div>
              <div className="col-10 col-lg-3 px-3 px-lg-4 mb-0 ">
                <h3 className="mb-5 pt-lg-3 footer-titulo-seccion">Social</h3>
                <p className="footer-p">
                  <FaInstagram />
                  <a href={Data.instagram_link}>{` Instagram`}</a>
                </p>
                <p className="footer-p">
                  <FaFacebook />
                  <a href={Data.facebook_link}>{` Facebook`}</a>
                </p>
                <p className="footer-p">
                  <FaLinkedinIn />
                  <a href={Data.linkedin_link}>{` Linkedin`}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-100 py-3 bg-gray-9 footer-container-firma row mx-0 align-items-center justify-content-center">
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

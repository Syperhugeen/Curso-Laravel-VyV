import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../img/logo-v-y-v-ingenieria.png';
import '../../css/components/header.scss';
import MenuMovil from '../components/menuMovil';

const Header = (props) => (
  <header id="header-nav" className="w-100 header  shadow-sm ">
    <div className=" d-flex flex-column align-items-center h-100">
      <div className="col-12  row mx-0 align-items-center h-100 ">
        <div className="col-4 col-md-3  col-lg-2 d-flex flex-column align-items-start justify-content-center px-0">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo de V & V ingeniería. Veiga y Ventos"
              className="header-logo-img"
            />
          </Link>
        </div>

        <div className=" col-8  col-md-9 col-lg-10 d-flex flex-column justify-content-center align-items-end h-100 pr-0 pr-lg-2">
          <span className="d-flex align-items-center ">
            <nav className="d-none d-lg-flex align-items-center h-100">
              <NavLink
                exact
                to="/"
                className="nav-class"
                activeClassName="nav-active-class"
              >
                Inicio
              </NavLink>
              <NavLink
                exact
                to="/servicios"
                className="nav-class"
                activeClassName="nav-active-class"
              >
                Servicios
              </NavLink>
              <NavLink
                exact
                to="/proyectos"
                className="nav-class"
                activeClassName="nav-active-class"
              >
                Proyectos
              </NavLink>
              <NavLink
                exact
                to="/sobre-v-y-v"
                className="nav-class"
                activeClassName="nav-active-class"
              >
                Sobre v&v
              </NavLink>
              <NavLink
                exact
                to="/contactar"
                className="nav-class"
                activeClassName="nav-active-class"
              >
                Contacto
              </NavLink>
            </nav>
            <div className="px-0" style={{ maxWidth: '100%' }}>
              <Link
                exact
                to="/cotizar-proyecto"
                className="btn btn-primary  text-uppercase"
              >
                cotizar proyecto
              </Link>
            </div>
          </span>
        </div>
      </div>
    </div>
    {<MenuMovil />}
  </header>
);

export default Header;

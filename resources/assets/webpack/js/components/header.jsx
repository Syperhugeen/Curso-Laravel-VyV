import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../img/logo-v-y-v-ingenieria.png';
import '../../css/components/header.scss';

const Header = (props) => (
  <header id="header-nav" className="w-100 header  shadow-sm ">
    <div className="container d-flex flex-column align-items-center h-100">
      <div className="col-12  row mx-0 align-items-center h-100">
        <div className="col-4 col-md-3  col-lg-2 d-flex flex-column align-items-center justify-content-center ">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo de V & V ingeniería. Veiga y Ventos"
              className="header-logo-img"
            />
          </Link>
        </div>

        <div className="d-none d-lg-flex col-8  col-md-9 col-lg-10 flex-column align-items-end h-100">
          <nav className="d-flex align-items-center h-100">
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
              exact
            >
              Proyectos
            </NavLink>
            <NavLink
              exact
              to="/sobre-v-y-v"
              className="nav-class"
              activeClassName="nav-active-class"
              exact
            >
              Sobre v&v
            </NavLink>

            <div className="px-2">
              <Link
                exact
                to="/contactar"
                className="btn btn-primary btn-lg text-uppercase"
              >
                cotizar proyecto
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
);

export default Header;

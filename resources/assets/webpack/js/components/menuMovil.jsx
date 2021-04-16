import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

import Modal from '../components/modal';
import '../../css/components/menuMovil.scss';

const MenuMovil = () => {
  const modal = useRef(null);
  const Menu = () => (
    <div className="col-12">
      <nav className="d-flex flex-column align-items-start">
        <NavLink
          exact
          to="/"
          className="nav-class-menu-movil"
          activeClassName="nav-active-class-menu-movil"
        >
          Inicio
        </NavLink>
        <NavLink
          exact
          to="/servicios"
          className="nav-class-menu-movil"
          activeClassName="nav-active-class-menu-movil"
        >
          Servicios
        </NavLink>
        <NavLink
          exact
          to="/proyectos"
          className="nav-class-menu-movil"
          activeClassName="nav-active-class-menu-movil"
          exact
        >
          Proyectos
        </NavLink>
        <NavLink
          exact
          to="/sobre-v-y-v"
          className="nav-class-menu-movil"
          activeClassName="nav-active-class-menu-movil"
          exact
        >
          Sobre v&v
        </NavLink>
        <NavLink
          exact
          to="/contactar"
          className="nav-class-menu-movil"
          activeClassName="nav-active-class-menu-movil"
        >
          Contacto
        </NavLink>
      </nav>
    </div>
  );

  return (
    <div className="boton-menu-flotante-contenedor d-lg-none">
      <button
        className="boton-menu-flotante-boton"
        type="button"
        onClick={() => modal.current.open()}
      >
        {<FaBars />}
      </button>

      <Modal ref={modal}>{<Menu />}</Modal>
    </div>
  );
};

export default MenuMovil;

import React, { useEffect } from 'react';
import DefaultLayout from '../components/layout';
import SectionBlog from '../components/sectionBlog';
import SectionImgFondo from '../components/sectionConImagenDeFondo';
import DataPortada from '../data/DataDePaginas/proyectos';
import Data from '../config/data';

const Contacto = (props) => {
  useEffect(() => {
    if (window.scrollY != 0) {
      window.scrollTo(0, 0);
    }

    let titulo = `Proyectos`;
    document.title = titulo;
    Data.set_analitic(titulo, props.location.pathname);
  });

  return (
    <DefaultLayout>
      <SectionImgFondo data={DataPortada} />
      <SectionBlog formato="galeria" cantidad="9" destacarPrimero={false}>
        {' '}
        <div className="text-center text-secondary text-uppercase mb-1 letter-space-lg">
          <strong>Trabajos realizados</strong>
        </div>
        <h1 className="mb-3 text-center ">
          Portfolio de trabajos y artículos Veiga & Ventós
        </h1>
        <p className="col-12 text-center mb-5">
          Mire nuestros últimos proyectos realizados.
        </p>
      </SectionBlog>
    </DefaultLayout>
  );
};

export default Contacto;

import React, { useEffect } from 'react';
import DefaultLayout from '../components/layout';
import SectionServicios from '../components/SectionServicios';
import SectionImgFondo from '../components/sectionConImagenDeFondo';
import DataPortada from '../data/DataDePaginas/servicios';

const Servicios = () => {
  useEffect(() => {
    if (window.scrollY != 0) {
      window.scrollTo(0, 0);
    }
    // Update the document title using the browser API
    document.title = `Blog del psicólogo Javier Mangini`;
  });

  return (
    <DefaultLayout>
        <SectionImgFondo data={DataPortada}/>
      <SectionServicios />
    </DefaultLayout>
  );
};

export default Servicios;
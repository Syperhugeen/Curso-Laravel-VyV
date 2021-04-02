import React, { useState, useEffect, useRef } from 'react';

import DefaultLayout from '../components/layout';

import BanerContacto from '../components/banerContacto';

import SectionBlog from '../components/sectionBlog';
import SectionImgFondo from '../components/sectionConImagenDeFondo';
import Data from '../config/data';
import ServicioData from '../data/servicioHomeData';
import QuienesSomosData from '../data/QuienesSomosData';
import ProyectosData from '../data/ProyectosData';

const Home = () => {
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);
  const [muestra, setMuestra] = useState(false);
  





  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Estudio de ingeniería en Uruguay | V & V`;
  });

  return (
    <DefaultLayout>
     
      <SectionImgFondo data={QuienesSomosData} />
      <SectionImgFondo data={ServicioData} />
      <BanerContacto text1="Contactame ahora mismo" text2="¡Sin compromiso!" />
      <SectionImgFondo data={ProyectosData} />
     
    </DefaultLayout>
  );
};

export default Home;

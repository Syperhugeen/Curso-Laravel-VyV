import React, { useState, useEffect, useRef } from 'react';

import DefaultLayout from '../components/layout';

import BanerContacto from '../components/banerContacto';

import SectionBlog from '../components/sectionBlog';
import SectionImgFondo from '../components/sectionConImagenDeFondo';
import Data from '../config/data';
import ServicioData from '../data/servicioHomeData';
import QuienesSomosData from '../data/QuienesSomosData';
import ProyectosData from '../data/ProyectosData';
import useScrollSnap from 'react-use-scroll-snap';

const Home = () => {
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);
  const [muestra, setMuestra] = useState(false);

  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Estudio de ingeniería en Uruguay | V & V`;
  });

  return (
    <DefaultLayout>
      <div ref={scrollRef}>
        <SectionImgFondo data={QuienesSomosData} />
        <SectionImgFondo data={ServicioData} />
      </div>

      <BanerContacto text1="Contactame ahora mismo" text2="¡Sin compromiso!" />
      <SectionImgFondo data={ProyectosData} />
    </DefaultLayout>
  );
};

export default Home;

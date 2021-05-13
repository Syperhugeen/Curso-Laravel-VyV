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
  useScrollSnap({ ref: scrollRef, duration: 10, delay: 20 });

  useEffect(() => {
    if (window.scrollY != 0) {
      window.scrollTo(0, 0);
    }
    // Update the document title using the browser API
    document.title = `Estudio de ingeniería en Uruguay | V & V`;
  });

  return (
    <DefaultLayout>
      <div ref={scrollRef}>
        <SectionImgFondo data={QuienesSomosData} />
        <SectionImgFondo data={ServicioData} />
        <SectionImgFondo data={ProyectosData} />
      </div>
      <BanerContacto
        text1="Contactame ahora mismo"
        text2="¡Sin compromiso!"
        ok
      />
    </DefaultLayout>
  );
};

export default Home;

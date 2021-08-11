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

const Home = (props) => {
  const scrollRef = useRef(null);

  if (window.screen.width > 500) {
    useScrollSnap({ ref: scrollRef, duration: 10, delay: 20 });
  }

  useEffect(() => {
    if (window.scrollY != 0) {
      window.scrollTo(0, 0);
    }
    // Update the document title using the browser API
    let titulo = `Estudio de ingeniería en Uruguay | V & V`;
    document.title = titulo;
    Data.set_analitic(titulo, props.location.pathname);
  }, []);

  return (
    <DefaultLayout>
      <div className="w-100" ref={scrollRef}>
        <SectionImgFondo data={QuienesSomosData} />
        <SectionImgFondo data={ServicioData} />
        <SectionImgFondo data={ProyectosData} />
        <BanerContacto
          text1="Contactame ahora mismo"
          text2="¡Sin compromiso!"
        />
      </div>
    </DefaultLayout>
  );
};

export default Home;

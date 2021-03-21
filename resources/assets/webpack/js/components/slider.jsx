import React from 'react';

import Portada1 from '../../img/Home/construccion-con-steel-framing-2.jpg';
import Portada2 from '../../img/Home/construccion-con-steel-framing.jpg';
import SliderSimple from '../components/sliderSimple';

const Slider = () => {
  const IMAGENES = [Portada1, Portada2];
  return (
    <div className="w-100 p-0  ">
      <SliderSimple images={IMAGENES} />
    </div>
  );
};

export default Slider;

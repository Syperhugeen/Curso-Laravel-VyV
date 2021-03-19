import React from 'react';

import Portada1 from '../../img/Home/construccion-con-steel-framing-2.jpg';
import Portada2 from '../../img/Home/construccion-con-steel-framing.jpg';

import ReactBootstrapCarousel from 'react-bootstrap-carousel';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';

const Slider = () => {
  return (
    <div className="w-100 p-0 p-lg-2  bg-gray-2">
      <ReactBootstrapCarousel
        autoplay={false}
        pauseOnVisibility={true}
        slideshowSpeed={2000}
        version={4}
        indicators={true}
      >
        <div>
          <img className="img-fluid" src={Portada1} />
          <div className="carousel-caption">Image</div>
        </div>
        <div>
          <img className="img-fluid" src={Portada2} />
        </div>
      </ReactBootstrapCarousel>
    </div>
  );
};

export default Slider;

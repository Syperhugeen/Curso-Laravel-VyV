import React, { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import '../../css/components/sliderSimple.scss';
const SliderSimple = ({ images }) => {
  // takes in images as props
  const [current, setCurrent] = useState(0); // create state to keep track of images index, set the default index to 0
  const length = images.length;

  <i class="far fa-arrow-alt-circle-left"></i>;

  const slideRight = () => {
    setCurrent(current === length - 1 ? 0 : current + 1); // increases current by 1
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      <button className="slider-simple-before" onClick={slideLeft}>
        {<FaArrowAltCircleLeft />}
      </button>

      {images.map((img, index) => {
        return (
          <div
            key={index}
            className={index === current ? 'slide active' : 'slide'}
          >
            {index === current && (
              <img className="img-fluid" src={img} alt={index} />
            )}
          </div>
        );
      })}

      <button className="slider-simple-next" onClick={slideRight}>
        {<FaArrowAltCircleRight />}
      </button>
    </div>
  );
};

export default SliderSimple;

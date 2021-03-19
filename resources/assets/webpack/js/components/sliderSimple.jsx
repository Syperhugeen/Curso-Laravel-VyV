import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import '../../css/components/sliderSimple.scss';
const SliderSimple = ({ images }) => {
  // takes in images as props
  const [index, setIndex] = useState(0); // create state to keep track of images index, set the default index to 0

  const slideRight = () => {
    setIndex((index + 1) % images.length); // increases index by 1
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1); // returns last index of images array if index is less than 0
    } else {
      setIndex(nextIndex);
    }
  };

  return (
    <div className="slider-simpl-contenedor">
      {index != 0 && images.length > 1 && (
        <button className="slider-simple-before" onClick={slideLeft}>
          {'<'}
        </button>
      )}

      <TransitionGroup>
        <CSSTransition
          key={index}
          timeout={0}
          classNames="slider-simple-transition"
        >
          <img className="img-fluid" src={images[index]} alt={index} />
        </CSSTransition>
      </TransitionGroup>

      {index < images.length - 1 && (
        <button className="slider-simple-next" onClick={slideRight}>
          {'>'}
        </button>
      )}
    </div>
  );
};

export default SliderSimple;

import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import '../../css/components/sliderSimple.scss';
const SliderSimple = ({ images, height, opacity }) => {
  // takes in images as props
  const [current, setCurrent] = useState(0); // create state to keep track of images index, set the default index to 0

  const [cantidadDeImagenesCargadas, setCantidadDeImagenesCargadas] = useState(
    0
  );

  const [loaded, setLoaded] = useState(false);
  const length = images.length;

  <i class="far fa-arrow-alt-circle-left"></i>;

  const slideRight = () => {
    setCurrent(current === length - 1 ? 0 : current + 1); // increases current by 1
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    images.forEach((image) => {
      let img = new Image();
      img.src = image;

      const timeOut = setTimeout(function () {
        setLoaded(true);
      }, 400);

      return () => {
        clearTimeout(timeOut);
      };
    });
  }, []);

  return (
    <>
      {!loaded ? (
        <div className="container my-3">
          <div className="w-100 mb-2 ">
            <Skeleton count={3} />
          </div>
          <div className="w-100 mb-2 ">
            <Skeleton count={3} />
          </div>
          <div className="w-100 mb-2 ">
            <Skeleton count={3} />
          </div>
          <div className="w-100 mb-2 ">
            <Skeleton count={3} />
          </div>
        </div>
      ) : (
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
                  <img
                    className="img-background"
                    style={{ height: height }}
                    alt=""
                    src={img}
                    alt={index}
                  />
                )}
              </div>
            );
          })}

          <div className="opasity-layer" style={{ opacity: opacity }}></div>

          <button className="slider-simple-next" onClick={slideRight}>
            {<FaArrowAltCircleRight />}
          </button>
        </div>
      )}
    </>
  );
};

export default SliderSimple;

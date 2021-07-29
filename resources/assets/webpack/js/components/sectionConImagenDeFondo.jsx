import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/components/sectionConImagenDeFondo.scss';

const SectionConImagenDeFondo = (props) => {
  const Data = props.data;

  const Width = window.screen.width;

  const positionText =
    Data.position === 'left'
      ? ''
      : Data.position === 'center'
      ? 'text-center'
      : 'text-right';

  const positionBlock =
    Data.position === 'left'
      ? 'align-items-start'
      : Data.position === 'center'
      ? 'align-items-center'
      : 'align-items-end';

  return (
    <section className="w-100  bg-gray-1 position-relative ">
      <div className="contenedor d-flex flex-row align-items-center justify-content-center">
        <div className="py-3 py-5 w-100">
          <div
            className={`container w-100 d-flex flex-column ${positionBlock}`}
          >
            {Data.titulo != '' && (
              <>
                {Data.header === 'h1' ? (
                  <h1
                    className={`section-titulo mb-4 text-wrap ${positionText}`}
                  >
                    {' '}
                    {Data.titulo}{' '}
                  </h1>
                ) : (
                  <h2
                    className={`section-titulo mb-4 text-wrap  ${positionText}`}
                  >
                    {Data.titulo}
                  </h2>
                )}
              </>
            )}

            {Data.text != '' && (
              <p className={`mb-5 text-white ${positionText}`}>{Data.text}</p>
            )}

            {Data.link != '' && (
              <Link
                exact
                to={Data.link}
                className={`${
                  Width > 600 ? 'btn-xl' : ''
                } btn btn-primary  text-uppercase`}
              >
                {Data.callToAction}
              </Link>
            )}
          </div>
        </div>
      </div>
      <img
        className="img-background"
        src={Data.img}
        style={{ height: Data.minHeight }}
        alt=""
        height={Data.minHeight}
      />
      <div
        className="opasity-layer"
        style={{ opacity: Data.opacity_value }}
      ></div>
    </section>
  );
};

export default SectionConImagenDeFondo;

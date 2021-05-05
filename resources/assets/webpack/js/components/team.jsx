import React, { useState } from 'react';

import { FaChevronUp, FaChevronDown, FaLinkedinIn } from 'react-icons/fa';

const item = (props) => {
  const DATA = props.data;

  let [abierto, setAbierto] = useState(props.abierto);
  const [description, setDescription] = useState(DATA.description);

  const descriptionComputada = (estaAbierto, description) => {
    const lengthIdeal = 30;
    if (!estaAbierto) {
      return `${description.slice(0, lengthIdeal)} ...`;
    }
    return description;
  };

  return (
    <div className="col-3 mb-4 ">
      <div
        onClick={() => {
          setAbierto((abierto = !abierto));
        }}
        className={` ${
          abierto ? 'item-contenedor__active' : ''
        }  shadow-sm p-3 bg-light w-100 cursor-pointer item-contenedor `}
      >
        <div className="w-100 d-flex align-items-center flex-column mb-3">
          <div className="text-center mb-3">
            <small>
              <strong>{DATA.cargo}</strong>
            </small>
          </div>
          <div className="w-100 d-flex align-items-center flex-column ">
            <img src={DATA.img} className="img-fluid rounded-circle" alt="" />
          </div>
          <h3
            className={`${
              abierto ? 'text-primary' : ''
            }  w-100  text-center font-weight-bold`}
          >
            {DATA.name}
          </h3>
          <small className={` ${abierto ? 'text-primary' : ''}`}>
            {abierto ? <FaChevronUp /> : <FaChevronDown />}
          </small>
        </div>

        <p className={`${abierto ? '  ' : ''} item-description w-100`}>
          {description}
        </p>
        {DATA.link_linkedin != '' && (
          <a href={DATA.link_linkedin}>
            {' '}
            <h3 className="text-center text-primary">
              {' '}
              <FaLinkedinIn />
            </h3>
          </a>
        )}
      </div>
    </div>
  );
};

export default item;

import React from 'react';
import Item from './item';
import { Link } from 'react-router-dom';

const sectionHome1 = () => (
  <div className="w-100 py-4 ">
    <div className="container">
      <div className="row   ">
        <div className="col-12 d-flex flex-column align-items-center my-3 ">
          <h2 className="mb-5 text-center text-wrap">
            Nuestros principales servicios son
          </h2>
        </div>

        <Item
          abierto={false}
          name="Diseño estructural y cálculos de ingeniería para obras"
          description="Explicar un poquito más sobre -> Diseño estructural y cálculos de ingeniería para obras"
        />
        <Item
          abierto={false}
          name="Consultoría y asesoramiento en obras"
          description="Explicar un poquito más sobre ->"
        />
        <Item
          abierto={false}
          name="Planificación y gerenciamiento en proyectos de ing. civil"
          description="Explicar un poquito más sobre ->"
        />
        <Item
          abierto={false}
          name="Asistencia técnica en problemas de ingeniería  civil"
          description="Explicar un poquito más sobre ->"
        />

        <div className="col-12 my-4 text-center">
          <Link to="/servicios">Ver todos los servicios</Link>
        </div>
      </div>
    </div>
  </div>
);

export default sectionHome1;

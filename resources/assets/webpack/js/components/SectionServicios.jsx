import React from 'react';
import Item from './item';
import { Link } from 'react-router-dom';

const SectionServicios = () => (
  <div className="w-100 py-5 ">
    <div className="container my-5">
      <div className="row   ">
        <div className="col-12 d-flex flex-column align-items-center my-3 ">
          <div className="text-center text-secondary text-uppercase mb-1 letter-space-lg">
            <strong>¿Qué hacemos?</strong>
          </div>
          <h2 className="mb-5 text-center text-wrap">
            Diseño, consultoría y planificación de proyectos de ingeniería
            civil.
          </h2>
        </div>

        <Item
          abierto={false}
          name="Diseño estructural y cálculos de ingeniería para obras"
          description="Diseñamos, calculamos y realizamos las verificaciones de la estructura que desee."
        />
        <Item
          abierto={false}
          name="Consultoría y asesoramiento en obras"
          description="Realizamos o ajustamos su proyecto para que sea lo más rentable posible y se lleve a cabo con la mayor rapidez que se pueda lograr."
        />
        <Item
          abierto={false}
          name="Planificación y gerenciamiento en proyectos de ing. civil"
          description="En V&V trabajamos y operamos conjuntamente con estudios de Arquitectura que cuentan con profesionales de alto nivel, para realizar proyectos que satisfagan al cliente de la mejor manera y complementan nuestros Servicios de Ingeniería."
        />
        <Item
          abierto={false}
          name="Asistencia técnica en problemas de ingeniería  civil"
          description="Respondemos sus dudas sobre su obra o proyecto y le brindaremos soluciones prácticas, precisas, confiables e innovadoras."
        />

        
      </div>
    </div>
  </div>
);

export default SectionServicios;

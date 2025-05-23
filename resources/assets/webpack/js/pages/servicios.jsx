import React, { useEffect } from 'react';
import DefaultLayout from '../components/layout';
import SectionServicios from '../components/SectionServicios';
import SectionImgFondo from '../components/sectionConImagenDeFondo';
import DataPortada from '../data/DataDePaginas/servicios';
import ImgServicio1 from '../../img/Servicios/diseño-estructural.jpg';
import ImgServicio2 from '../../img/Servicios/consultoria-y-asesoramiento.jpg';
import ImgServicio3 from '../../img/Servicios/ejecutivo-steel-framing.jpg';
import ImgServicio4 from '../../img/Servicios/proyectos.jpg';
import { Link } from 'react-router-dom';
import Data from '../config/data';

const Servicios = (props) => {
  useEffect(() => {
    if (window.scrollY != 0) {
      window.scrollTo(0, 0);
    }

    let titulo = `Servicios`;
    document.title = titulo;
    Data.set_analitic(titulo, props.location.pathname);
  });

  return (
    <DefaultLayout>
      <SectionImgFondo data={DataPortada} />

      <SectionServicios />

      <div className="w-100 d-flex flex-column align-items-center">
        <div className="col-11 col-lg-10  bg-gray-1 px-0  mb-5  shadow">
          <SectionImgFondo
            data={{
              header: 'h2',
              position: 'center',
              minHeight: '50vh',
              img: ImgServicio1,
              titulo: '',
              text: '',
              callToAction: '',
              link: '',
              opacity_value: 0.3,
            }}
          />
          <div className=" py-4 px-3 px-lg-4 ">
            <h2 className="h3 font-weight-bold">Diseño estructural</h2>
            <h3 className="mb-4 h5">
              Estructuración, predimensionado y análisis - determinacion y
              concepción del modelo estructural eficiente
            </h3>
            <ul className="mb-3">
              <li>Definición de estructura</li>
              <li>Planos de estructura</li>
              <li>Memoria de cálculo</li>
            </ul>
            <p>
              Análisis de estructura mediante softwares de cálculo /
              certificaciones y normas.
            </p>
            <p>
              Servicios de modelados de estructuras con software BIM (building
              information modeling).
            </p>

            <div className="">
              <Link exact to="/contactar" className="btn btn-primary  ">
                Contactar por diseño estructural
              </Link>
            </div>
          </div>
        </div>

        <div className="col-11 col-lg-10  bg-gray-1 px-0  mb-5  shadow">
          <SectionImgFondo
            data={{
              header: 'h2',
              position: 'center',
              minHeight: '50vh',
              img: ImgServicio3,
              titulo: '',
              text: '',
              callToAction: '',
              link: '',
              opacity_value: 0.2,
            }}
          />
          <div className=" py-4 px-3 px-lg-4 ">
            <h2 className="h3 font-weight-bold">Ejecutivo de steel framing</h2>
            <h3 className="mb-4 h5">
              Comprende, además del diseño estructural, la elaboración de planos
              de despiece y optimización de todos los elementos. Paneles,
              entrepisos, cubiertas, cerchas.
            </h3>

            <div className="">
              <Link exact to="/contactar" className="btn btn-primary  ">
                Contactar por ejecutivo de steel framing
              </Link>
            </div>
          </div>
        </div>

        <div className="col-11 col-lg-10  bg-gray-1 px-0  mb-5  shadow">
          <SectionImgFondo
            data={{
              header: 'h2',
              position: 'center',
              minHeight: '50vh',
              img: ImgServicio2,
              titulo: '',
              text: '',
              callToAction: '',
              link: '',
              opacity_value: 0.3,
            }}
          />
          <div className=" py-4 px-3 px-lg-4 ">
            <h2 className="h3 font-weight-bold">
              Asesoramiento en ingeniería civil
            </h2>
            <h3 className="mb-4 h4">
              Evaluación de estructuras existentes, elaboración de informes y
              asistencia en dirección de obra.
            </h3>
            <ul className="mb-3">
              <li>Soluciones constructivas</li>
              <li>Soluciones durante el montaje</li>
              <li>Informes técnicos de estado</li>
            </ul>

            <div className="">
              <Link exact to="/contactar" className="btn btn-primary  ">
                Contactar por asesoriamiento en ingeniería civil
              </Link>
            </div>
          </div>
        </div>

        <div className="col-11 col-lg-10  bg-gray-1 px-0  mb-5  shadow">
          <SectionImgFondo
            data={{
              header: 'h2',
              position: 'center',
              minHeight: '50vh',
              img: ImgServicio4,
              titulo: '',
              text: '',
              callToAction: '',
              link: '',
              opacity_value: 0.2,
            }}
          />
          <div className=" py-4 px-3 px-lg-4 ">
            <h2 className="h3 font-weight-bold">V&V Proyectos</h2>
            <h3 className="mb-4 h5">
              Elaboración y gerenciamiento de proyectos de inversión en
              ingeniería civil.
            </h3>
            <p className="mb-4">
              Participación y respaldo técnico en proyectos de ingeniería civil.
            </p>

            <div className="">
              <Link exact to="/contactar" className="btn btn-primary  ">
                Contactar por proyectos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Servicios;

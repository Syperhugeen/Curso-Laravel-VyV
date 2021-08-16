import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

import DefaultLayout from '../components/layout';
import SectionBlog from '../components/sectionBlog';
import SliderSimple from '../components/sliderSimple';
import Data from '../config/data';
import SectionImgFondo from '../components/sectionConImagenDeFondo';
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaHammer,
  FaIdBadge,
} from 'react-icons/fa';

const BlogIndividual = (props) => {
  const Id = useParams().id;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetcData = () => {
    setLoading(true);

    return fetch(`${Data.path_url}/get_projecto_individual_ajax?id=${Id}`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((responseAsJson) => {
        const data = responseAsJson;
        if (data.Validation === false) {
        } else {
          setBlog(data.Data);
          document.title = data.Data.name;
          Data.set_analitic(titulo, props.location.pathname);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (window.scrollY != 0) {
      window.scrollTo(0, 0);
    }
    fetcData();
  }, [Id]);

  return (
    <DefaultLayout>
      <>
        {loading && (
          <div
            className="w-100 mb-5 d-flex flex-row align-items-center justify-content-center bg-dark p-5 "
            style={{ height: `80vh` }}
          >
            <div className="w-100  ">
              <div className="row mx-0 w-100"></div>
            </div>
          </div>
        )}

        {!loading && blog != null && (
          <SectionImgFondo
            data={{
              header: 'h2',
              position: 'center',
              minHeight: '80vh',
              img: blog.imagenesproyecto['0'].url_img,
              titulo: '',
              text: '',
              callToAction: '',
              link: '',
              opacity_value: 0.3,
            }}
          />
        )}

        <div className="container ">
          <div className="col-12  p-2 py-lg-0 bg-white rounded">
            {loading && (
              <div className="w-100 mb-5 ">
                <div className="w-100 mb-5 ">
                  <Skeleton count={4} />
                </div>

                <div className="w-100 mb-5 ">
                  <Skeleton count={4} />
                </div>

                <div className="w-100 mb-5 ">
                  <Skeleton count={4} />
                </div>
              </div>
            )}

            {!loading && blog != null && (
              <div>
                <h2 className="text-wrap  my-5 text-center  decoracionHeaders">
                  {` ${blog.name} `}
                </h2>
                <div className="p-2  shadow-sm ">
                  <SliderSimple
                    images={blog.imagenesproyecto.map(function (img) {
                      return img.url_img;
                    })}
                    height={`80vh`}
                    opacity={`0.3`}
                  />

                  <div className="row justify-content-center mx-0 mt-4">
                    <div className="col-6 col-lg-3 mb-3 mb-lg-0 ">
                      <div className=" bg-gray-2 text-center py-2 contenedor-blog-atributos h-100">
                        <span className="text-primary">
                          <FaCalendarAlt />
                        </span>

                        {`  ${blog.fecha} `}
                      </div>
                    </div>
                    <div className="col-6 col-lg-3 mb-3 mb-lg-0  ">
                      <div className=" bg-gray-2 text-center py-2 contenedor-blog-atributos h-100">
                        <span className="text-primary">
                          <FaMapMarkerAlt />
                        </span>

                        {`  ${blog.ubicacion} `}
                      </div>
                    </div>
                    <div className="col-6 col-lg-3 mb-3 mb-lg-0  ">
                      <div className=" bg-gray-2 text-center py-2 contenedor-blog-atributos h-100">
                        <span className="text-primary">
                          <FaHammer />
                        </span>

                        {`  ${blog.metodo_de_construccion} `}
                      </div>
                    </div>
                    <div className="col-6 col-lg-3 mb-3 mb-lg-0  ">
                      <div className=" bg-gray-2 text-center py-2 contenedor-blog-atributos h-100">
                        <span className="text-primary">
                          <FaIdBadge />
                        </span>

                        {`  ${blog.autores} `}
                      </div>
                    </div>
                  </div>

                  <div
                    className="p-2 p-lg-5 d-flex flex-column align-items-center"
                    dangerouslySetInnerHTML={{
                      __html: blog.description_parrafo,
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        {!loading && (
          <SectionBlog formato="galeria" cantidad="6" evitarIds={Id}>
            {' '}
            <h2 className="mb-5 text-center mb-5 ">
              Más proyectos relacionados
            </h2>
          </SectionBlog>
        )}
      </>
    </DefaultLayout>
  );
};

export default BlogIndividual;

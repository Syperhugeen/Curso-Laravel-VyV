import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

import DefaultLayout from '../components/layout';
import SectionBlog from '../components/sectionBlog';
import Data from '../config/data';
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaHammer,
  FaIdBadge,
} from 'react-icons/fa';

const BlogIndividual = () => {
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
      <div className="container d-flex flex-column align-items-center">
        <div className="col-12 col-lg-10 my-4 p-2 p-lg-5  bg-white rounded">
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
              <h2 className="text-wrap  text-center mb-5 decoracionHeaders">
                {` ${blog.name} `}
              </h2>
              <div className="p-2 mb-5 shadow-sm ">
                <img
                  className="img-fluid mb-5"
                  src={blog.url_img}
                  alt={`Foto de ${blog.name}`}
                />

                <div className="row justify-content-center mx-0">
                  <div className="col-6 col-lg-3 mb-3 mb-lg-0 contenedor-blog-atributos bg-gray-2 text-center py-2">
                    <span className="text-primary">
                    <FaCalendarAlt/> 
                    </span>
                    
                   {`  ${blog.fecha} `}
                  </div>
                  <div className="col-6 col-lg-3 mb-3 mb-lg-0 contenedor-blog-atributos bg-gray-2 text-center py-2">
                    <span className="text-primary">
                    <FaMapMarkerAlt/> 
                    </span>
                    
                   {`  ${blog.ubicacion} `}
                  </div>
                  <div className="col-6 col-lg-3 mb-3 mb-lg-0 contenedor-blog-atributos bg-gray-2 text-center py-2">
                    <span className="text-primary">
                    <FaHammer/> 
                    </span>
                    
                   {`  ${blog.metodo_de_construccion} `}
                  </div>
                  <div className="col-6 col-lg-3 mb-3 mb-lg-0 contenedor-blog-atributos bg-gray-2 text-center py-2">
                    <span className="text-primary">
                    <FaIdBadge/> 
                    </span>
                    
                   {`  ${blog.autores} `}
                  </div>



                </div>

                <div
                  className="p-2 p-lg-5 d-flex flex-column align-items-center"
                  dangerouslySetInnerHTML={{ __html: blog.description_parrafo }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {!loading && (
        <SectionBlog cantidad="4" evitarIds={Id}>
          {' '}
          <h2 className="mb-5 text-center mb-5 ">Más proyectos relacionados</h2>
         
        </SectionBlog>
      )}
    </DefaultLayout>
  );
};

export default BlogIndividual;

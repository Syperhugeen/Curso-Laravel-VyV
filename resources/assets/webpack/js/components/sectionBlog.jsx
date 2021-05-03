import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import Blog from './blog';
import BlogDestacado from './blogDestacado';
import Data from '../config/data';

const SectionBlog = (props) => {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [loadMore, setLoadMore] = useState(true);

  const blogsYaIterados = blogs.map((blog, index) => {
    return props.destacarPrimero && index == 0 ? (
      <BlogDestacado blog={blog} key={blog.id} />
    ) : (
      <Blog blog={blog} key={blog.id} />
    );
  });

  const fetcData = () => {
    if (!loadMore) {
      return '';
    }

    setLoading(true);

    let idsYaUsados = blogs.map((obj) => obj.id);

    props.evitarIds != '' ? idsYaUsados.push(props.evitarIds) : '';

    idsYaUsados = idsYaUsados.length > 0 ? idsYaUsados.join() : '';

    const CANTIDAD =
      props.destacarPrimero && blogs.length == 0
        ? parseInt(props.cantidad) + 1
        : props.cantidad;

    return fetch(
      `${Data.path_url}/get_trabajos_ajax?ids=${idsYaUsados}&cantidad=${CANTIDAD}`,
      { mode: 'no-cors' }
    )
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response.json();
      })
      .then((responseAsJson) => {
        const data = responseAsJson;
        if (data.Data.length === 0 || data.Validation === false) {
          setLoadMore(false);
        } else {
          setBlogs(blogs.concat(data.Data));
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetcData();
  }, []);

  return (
    <section className="w-100 py-5" style={{ minHeight: '40vh' }}>
      <div className="container d-flex flex-column align-items-center my-5">
        {props.children}

        <div className="row col-12 col-lg-8 mx-0">{blogsYaIterados}</div>

        {loading && (
          <div className="w-100 mb-5 ">
            <Skeleton count={5} />
          </div>
        )}

        {!loading && loadMore && (
          <div className="row my-5">
            <div className="col-12 d-lfex align-items-center flex-column">
              <button
                type="button"
                onClick={fetcData}
                className="btn btn-secondary btn-lg   text-uppercase"
              >
                Cargar más
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionBlog;

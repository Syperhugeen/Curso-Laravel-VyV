import React from 'react';
import { Link } from 'react-router-dom';
import ValidarURL from '../helpers/validarUrl';

const Blog = (props) => {
  const Post = props.blog;

  return (
    <div className="col-12 mb-5 ">
      <div className="w-100 shadow h-100">
        <img
          className="blog-card-img"
          style={{
            height: '50vh',
          }}
          src={Post.url_img}
          alt={`Foto del post ${Post.name}`}
        />
        <div className="w-100 py-4 p-3">
          <h5 className="card-title">{`${Post.name.slice(0, 30)} ...`}</h5>
          <p className="card-text" />

          <Link
            className="btn btn-primary"
            to={`/proyectos/${Post.name.replace(ValidarURL, '-')}/${Post.id}`}
          >
            Leer más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;

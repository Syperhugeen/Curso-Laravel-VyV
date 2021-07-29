import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ValidarURL from '../helpers/validarUrl';

const Blog = (props) => {
  const Post = props.blog;

  const [loaded, setLoaded] = useState(false);

  return (
    <div className="col-12 mb-5 " style={loaded ? {} : { display: 'none' }}>
      <div className="w-100 shadow h-100">
        <img
          className="blog-card-img"
          style={loaded ? { height: '50vh' } : { display: 'none' }}
          src={Post.url_img}
          alt={`Foto del post ${Post.name}`}
          onLoad={() => setLoaded(true)}
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

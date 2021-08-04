import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ValidarURL from '../helpers/validarUrl';
import '../../css/components/proyecto.scss';

const Proyecto = (props) => {
  const Post = props.blog;

  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="col-6 col-lg-4 p-1"
      style={loaded ? {} : { display: 'none' }}
    >
      <div className="w-100 shadow h-100 position-relative img-hover">
        <Link
          to={`/proyectos/${Post.name.replace(ValidarURL, '-')}/${Post.id}`}
        >
          <img
            className="blog-card-img "
            style={loaded ? { height: '35vh' } : { display: 'none' }}
            src={Post.url_img}
            alt={`Foto del post ${Post.name}`}
            onLoad={() => setLoaded(true)}
          />
        </Link>
        <div style={{ position: 'absolute', bottom: '0', left: '0' }}>
          <div className="w-100  p-3">
            <Link
              to={`/proyectos/${Post.name.replace(ValidarURL, '-')}/${Post.id}`}
            >
              <h5 className="h6 mb-0 text-white">{`${Post.name.slice(
                0,
                30
              )} ...`}</h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyecto;

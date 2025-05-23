import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/components/contacto.scss';
import Sweetalert from 'sweetalert';
import {
  FaCheckCircle,
  FaCloudUploadAlt,
  FaArrowCircleLeft,
} from 'react-icons/fa';

const formularioContacto = (props) => {
  const [values, setValues] = useState({
    name: '',
    nameValidation: '',
    email: '',
    emailValidation: '',
    celular: '',
    celularValidation: '',
    message: '',
    messageValidation: '',
  });

  const [file, setFile] = useState('');

  const rules = {
    name: /[A-Za-z ]{3,}/,
    email: /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/,
    celular: /[0-9]{9,}/,
    message: /[_A-Za-z0-9-]{3,}/,
  };

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const handlerChange = (event) => {
    const { target } = event;

    const value = target.type === 'checkbox' ? target.checked : target.value;

    const { name } = target;
    const nameValidatio = `${name}Validation`;

    setValues((prevState) => ({
      ...prevState,
      [nameValidatio]: target.required
        ? rules[name].test(value) && value !== ''
        : true,
    }));

    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlerChangeFile = async (e) => {
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length) return;

    setFile(files[0]);
  };

  const submitCheck = () => {
    let validation = true;
    const propiedades = Object.keys(rules);
    propiedades.forEach((propiedad) => {
      const nameValidatio = `${propiedad}Validation`;
      setValues((prevState) => ({
        ...prevState,
        [nameValidatio]: rules[propiedad].test(values[propiedad]),
      }));
      if (rules[propiedad].test(values[propiedad]) === false) {
        validation = false;
      }
    });

    return validation;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkInputs = submitCheck();

    setErrors([]);

    if (checkInputs === false) {
    }

    setLoading(true);
    const csrfToken = document.head.querySelector('[name~=csrf-token][content]')
      .content;

    const url =
      props.url && props.url != '' ? props.url : '/post_contacto_form';

    var formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      console.log(key, ':', value);
      formData.append(key, value);
    });

    formData.append('file', file);

    console.log(file);

    let data = formData;

    try {
      const rawResponse = await fetch(url, {
        method: 'POST',
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin',
        headers: {
          Accept: 'application/json',

          'X-CSRF-Token': csrfToken,
        },
        body: data,
      });
      const response = await rawResponse.json();
      //99

      if (response.Validacion) {
        setSubmitted(true);
        setLoading(false);
        Sweetalert({
          title: '¡Buen trabajo!',
          text: '¡Mensaje enviado con éxito!',
          icon: 'success',
          button: 'Seguir navegando',
        });
      } else {
        setLoading(false);
        setErrors(Object.values(response.Data));
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return submitted ? (
    <>
      <div className="my-5 p-4 bg-gray-1 border border-primary">
        <h1 className="text-center h4 mb-2  text-success">
          {' '}
          Mensaje enviado correctamente <FaCheckCircle />
        </h1>
        <p className="text-center mb-5">En breve te responderemos. </p>

        <div className="row justify-content-center">
          <Link className="" to="/">
            <div className="btn btn-primary btn-lg ">
              <FaArrowCircleLeft /> Regresar
            </div>
          </Link>
        </div>
      </div>
    </>
  ) : (
    <div className="w-100 my-5  d-flex flex-column align-items-center px-3 ">
      <div className="container row mx-0 bg-light p-1 p-lg-5 shadow-sm">
        <h3 className="h5 col-12 my-4">{props.title}</h3>

        <div className="col-6 mb-4">
          <fieldset className="float-label ">
            <input
              name="name"
              id=""
              autoComplete="off"
              type="text"
              className="form-control"
              value={values.name}
              onChange={handlerChange}
              required
            />
            <label htmlFor="name">Nombre </label>
          </fieldset>

          {values.nameValidation === false && (
            <small className="col-12 text-danger font-weight-bold">
              Debe tener al menos 3 carácteres.
            </small>
          )}
        </div>

        <div className="col-6 mb-4">
          <fieldset className="float-label">
            <input
              name="celular"
              type="number"
              className="form-control"
              value={values.celular}
              onChange={handlerChange}
              required
            />
            <label htmlFor="celular">Celular</label>
          </fieldset>
          {values.celularValidation === false && (
            <small className="col-12 text-danger font-weight-bold">
              Debe ser un número de celular válido.
            </small>
          )}
        </div>

        <div className="col-12 mb-4">
          <fieldset className="float-label">
            <input
              name="email"
              type="text"
              className="form-control"
              value={values.email}
              onChange={handlerChange}
              required
            />
            <label htmlFor="email">Email</label>
          </fieldset>
          {values.emailValidation === false && (
            <small className="col-12 text-danger font-weight-bold">
              Debe ser un email válido.
            </small>
          )}
        </div>

        <div className="col-12 mb-4">
          <fieldset className="float-label">
            <textarea
              name="message"
              type="text"
              className="form-control"
              value={values.message}
              onChange={handlerChange}
              required
            />

            <label htmlFor="message">Mensaje</label>
          </fieldset>
          {values.messageValidation === false && (
            <small className="col-12 text-danger font-weight-bold">
              Escribe algo solo con letras y números.
            </small>
          )}
        </div>
        {props.with_file && (
          <div className="col-12 mb-4">
            <input
              name="file"
              type="file"
              id="file-upload"
              className="d-none"
              onChange={handlerChangeFile}
              required
            />

            <label htmlFor="file-upload" className="btn btn-outline-secondary">
              <FaCloudUploadAlt /> Adjuntar CV
            </label>
            {file != '' && (
              <div>
                <div>Hay un archivo pre cargado listo para ser adjuntado.</div>
                <div>Nombre: {file.name}</div>
                <div>Type: {file.type}</div>
              </div>
            )}
          </div>
        )}

        <div className="col-12  col-lg-6 mb-4">
          {errors.length > 0 && (
            <ul className="my-3 py-3 border border-danger bg-white">
              {errors.map((error, index) => (
                <li>
                  <strong>
                    <small className="mb-3 text-danger">{error[0]}</small>
                  </strong>
                </li>
              ))}
            </ul>
          )}

          {!loading ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="btn btn-block btn-lg btn-primary w-100"
            >
              Enviar solicitud
            </button>
          ) : (
            <div className="btn btn-block btn-lg btn-primary w-100 d-flex align-items-center justify-content-center">
              <span
                className="spinner-grow spinner-grow-sm mr-2"
                role="status"
                aria-hidden="true"
              />
              Enviando...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default formularioContacto;

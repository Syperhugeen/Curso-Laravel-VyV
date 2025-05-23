import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoaderPage from './loaderPage';
import ErrorWrapper from './error';

const Home = lazy(() => import('../pages/home'));
const Contacto = lazy(() => import('../pages/contacto'));
const Cotizar = lazy(() => import('../pages/cotizar'));
const Blog = lazy(() => import('../pages/blog'));
const SobreMi = lazy(() => import('../pages/sobreMi'));
const BlogIndividual = lazy(() => import('../pages/blogIndividual'));
const Servicios = lazy(() => import('../pages/servicios'));
const TrabajaConNosotros = lazy(() => import('../pages/trabajaConNosotros'));

const App = () => (
  <Router>
    <Suspense fallback={<LoaderPage />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <ErrorWrapper>
          <Route exact path="/contactar" component={Contacto} />
          <Route exact path="/cotizar-proyecto" component={Cotizar} />
          <Route
            exact
            path="/se-parte-de-veiga-ventos"
            component={TrabajaConNosotros}
          />

          <Route exact path="/proyectos" component={Blog} />
          <Route exact path="/sobre-v-y-v" component={SobreMi} />
          <Route exact path="/servicios" component={Servicios} />
          <Route exact path="/proyectos/:name/:id" component={BlogIndividual} />
        </ErrorWrapper>
      </Switch>
    </Suspense>
  </Router>
);

export default App;

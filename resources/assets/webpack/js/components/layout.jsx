import React from 'react';
import Header from './header';
import Footer from './footer-simple';

const defaultLayout = (props) => (
  <div>
    <Header />

    <div className="w-100 d-flex flex-column align-items-center ">
      {props.children}
    </div>

    <Footer />
  </div>
);

export default defaultLayout;

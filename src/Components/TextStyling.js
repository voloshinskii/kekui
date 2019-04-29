import React, { Component } from 'react';


const H1 = ({className, children}) => (
  <h1 className={`${ className }`}>
      {children}
  </h1>
);

const H2 = ({className, children}) => (
  <h2 className={`${ className }`}>
      {children}
  </h2>
);

const H3 = ({className, children}) => (
  <h3 className={`${ className }`}>
      {children}
  </h3>
);

const H4 = ({className, children}) => (
  <h4 className={`${ className }`}>
      {children}
  </h4>
);

const H5 = ({className, children}) => (
  <h5 className={`${ className }`}>
      {children}
  </h5>
);

const H6 = ({className, children}) => (
  <h6 className={`${ className }`}>
      {children}
  </h6>
);


export {
  H1, H2, H3, H4, H5, H6
}

import React, { Component } from 'react';

const Content = ({className, children}) => (
  <div className={`content ${ className }`}>
      {children}
  </div>
);

const DisplayCenter = ({className, children}) => (
  <div className={`displayCenter ${ className }`}>
      {children}
  </div>
);

const Grid = ({className, children}) => (
  <div className={`grid ${ className }`}>
      {children}
  </div>
);


const Block = ({className, children}) => (
  <div className={`block ${ className }`}>
      {children}
  </div>
);

export {
  DisplayCenter,
  Grid,
  Block,
  Content
}

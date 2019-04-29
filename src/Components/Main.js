import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
        <div className="header">
          <header className="headerInner">
            <Navbar>
              <NavLink href="/">Главная</NavLink>
            </Navbar>
            <Navbar className="right">
              <NavLink href="/">Вход</NavLink>
            </Navbar>
          </header>
        </div>
    );
  }
}

const Content = ({className, children}) => (
  <div className={`content ${ className }`}>
      {children}
  </div>
);

const Navbar = ({className, children}) => (
  <ul className={`navbar ${ className }`}>
      {children}
  </ul>
);

const NavLink = ({className, href, children}) => (
  <li>
    <a href={href}>
      {children}
    </a>
  </li>
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
  Header,
  DisplayCenter,
  Grid,
  Block,
  Content
}

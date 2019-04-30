import React, { Component } from 'react';

import Navbar from './Navbar';
import NavLink from './NavLink';


export default class Header extends Component {

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

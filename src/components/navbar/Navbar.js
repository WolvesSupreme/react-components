import React, { Component } from "react";
import {MenuItems} from './MenuItems';

class Navbar extends Component {
  state = { clicked: false}

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return (
      <nav className="navbarItems">
        <h1 className="navbarItems__logo">Stuwar</h1>
        <div className="navbarItems__menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'navbarItems__menu active' : 'navbarItems__menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;

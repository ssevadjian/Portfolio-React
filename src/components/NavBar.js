import React, { Component } from 'react';
import 'materialize-css';
import { NavBar } from 'react-materialize';

export default class Nav extends Component {
    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-light mycolor">
          <nav className="mynavbrand col-8 col-6-md">
            <div className="nameFont">Stephanie Sevadjian</div>
          </nav>
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
            <li className="nav-item">
              <a className="mynavlink" href="#">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="mynavlink" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="mynavlink" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        )
    }
}
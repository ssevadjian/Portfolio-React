import React, { Component } from 'react';
import 'materialize-css';
import { NavBar } from 'react-materialize';

export default class Nav extends {NavBar} {
    render() {
        return (
        <nav class="navbar navbar-expand-lg navbar-light mycolor">
          <nav class="mynavbrand col-8 col-6-md">
            <div class="nameFont">Stephanie Sevadjian</div>
          </nav>
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0 ">
            <li class="nav-item">
              <a class="mynavlink" href="#">
                About Me
              </a>
            </li>
            <li class="nav-item">
              <a class="mynavlink" href="#">
                Portfolio
              </a>
            </li>
            <li class="nav-item">
              <a class="mynavlink" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        )
    }
}
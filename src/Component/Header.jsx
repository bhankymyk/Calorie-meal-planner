/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className="">
    <nav class="navbar navbar-expand-lg bg-light">
<div class="container-fluid">
    <Link to="/" >
  <a class="navbar-brand tHead" >MEALY</a>
    </Link>

  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <Link to="/mealy">
        <a class="nav-link" >Meal Planner</a>
        </Link>
      </li>
      <li class="nav-item">
      <Link to="/about">
        <a class="nav-link" >About</a>
      </Link>
      </li>
    </ul>
    {/* <span class="navbar-text">
      Navbar
    </span>
    <span class="navbar-text">
      Navbar
    </span> */}
  </div>
</div>
</nav>
    </div>
  )
}

export default Header
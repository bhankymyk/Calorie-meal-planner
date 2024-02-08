/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Container, Row} from 'react-bootstrap';
import styles from '../Component/Assests/LandingPage.module.css';
import image from '../Component/Assests/Mealy.jpg';
// import Footer from './Component/Footer';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function LandingPage() {
  return (

      <div className={styles.Lbody}>
        <Container fluid>
      <Row>
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
      </Row>  

      <Row>
        <div className={`col ${styles.mBody}`}>
          <h3>Are You Finding It Hard to Plan Your Meal Based On Calorie ?</h3>
          {/* <h4> Get a Personalized Meal <br/> Plan in Just a Few Clicks</h4> */}
        </div>
        <div className="">
          <p>Experience a more sustainable and easy way to <br/> eat healthy and manage yourself </p>
        </div>
        <div className={`text-center ${styles.button}`}>
          <Link to="/mealy">
          <button className='btn btn-dark'>Click here to find out how</button>
          </Link>
        </div>
      </Row>

      <Row>
        <div className={`col mt-5 ${styles.mImg}`}>
          <img src={image}  className='img-fluid' alt="hhh" />
        </div>
      </Row>
    </Container> 
    <div className=''>
    <Footer/>
    </div>
      </div>
  )
}

export default LandingPage
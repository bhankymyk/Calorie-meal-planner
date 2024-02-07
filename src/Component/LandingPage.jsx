import React from 'react';
import { Container, Row} from 'react-bootstrap';
import styles from '../Component/Assests/LandingPage.module.css';
import image from '../Component/Assests/Mealy.jpg';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (

      <div className={styles.Lbody}>
        <Container fluid>
      <Row>
      <div className="mt-4">
      <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" >MEALY</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">About</a>
        </li>
      </ul>
      <span class="navbar-text">
        Navbar
      </span>
      <span class="navbar-text">
        Navbar
      </span>
    </div>
  </div>
</nav>
      </div>
      </Row>  

      <Row>
        <div className={`col ${styles.mBody}`}>
          <h2> Get a Personalized Meal <br/> Plan in Just a Few Clicks</h2>
        </div>
        <div className="">
          <p>Experience a more sustainable and easy way to <br/> eat healthy and manage yourself </p>
        </div>
        <div className={`text-center ${styles.button}`}>
          <Link to="/homePage">
          <button className='btn btn-dark'>Click here to find out how</button>
          </Link>
        </div>
      </Row>

      <Row>
        <div className={`col ${styles.mImg}`}>
          <img src={image}  className='img-fluid' alt="hhh" />
        </div>
      </Row>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci error perferendis fuga delectus, maxime numquam vero suscipit, deleniti corporis consequuntur corrupti rerum vitae saepe debitis accusantium id ipsum? Mollitia, doloribus.
      </div>
    </Container> 
      </div>
  )
}

export default LandingPage
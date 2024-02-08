import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Route} from "react-router-dom";
import LandingPage from './Component/LandingPage';
import Mealy from './Component/Mealy';
import About from './Component/About';


function App() {
  return (
    <>
      <div>
          {/* <Route path="/" component={App} /> */}
          <Route path="/" exact component={LandingPage} />
          <Route path="/mealy" exact component={Mealy} />
          <Route path="/About" exact component={About} />
      </div>
    </>
  );
}

export default App;

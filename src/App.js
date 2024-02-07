import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Route} from "react-router-dom";
import LandingPage from './Component/LandingPage';
import HomePage from './Component/HomePage';


function App() {
  return (
    <>
      <div>
          {/* <Route path="/" component={App} /> */}
          <Route path="/" exact component={LandingPage} />
          <Route path="/HomePage" exact component={HomePage} />
      </div>
    </>
  );
}

export default App;

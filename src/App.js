import React from 'react';
// import { Route} from 'react-router-dom';
import {Route} from "react-router-dom";
// import MealList from './Component/MealList';
import 'bootstrap/dist/css/bootstrap.min.css';
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

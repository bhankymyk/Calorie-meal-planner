import React, {useState} from 'react';
import MealList from './Component/MealList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Button} from 'react-bootstrap';
// import { useState } from 'react';

function App() {
  const [mealData, setMealData] = useState (null);
  const [calories, setCalories] = useState (2000);

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=8c171682aa064b2d9b5a88c13168267e&timeFrame=day&targetCalories=${calories}`
    )
    .then((response) => response.json())
    .then((data) => {
      setMealData(data);
    })
    .catch(() => {
      console.log("error");
    });
  }

  function handleChange(e) {
    setCalories(e.target.value)
  } 

  
  return (
    <Container fluid>
<Row>
      <div className="main">
        <input type="number" placeholder="Calories" onChange={handleChange}/> <br/> <br/> 
      <Button onClick={getMealData} className="btn btn-success btn-block" >
Get daily meal plans
      </Button>
      </div>
      </Row>
        {mealData && <MealList mealData={mealData} />}     
    </Container>
  );
}

export default App;

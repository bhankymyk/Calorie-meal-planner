import React, {useState} from 'react';
import MealList from './MealList';
// import Footer from './Footer';
import Header from './Header';
import { Container, Row, Button} from 'react-bootstrap';

function App() {
  const [mealData, setMealData] = useState (null);
  const [calories, setCalories] = useState (2000);

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=600c1c546f094df4b60cd6aca43ead55&timeFrame=day&targetCalories=${calories}`
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
    <>

    <Container fluid>
<Row>
  <Header/>
      <div className="main mt-4">
        <input type="number" className='' placeholder="Calories e.g: 400" onChange={handleChange}/>
      <Button onClick={getMealData} className="btn btn-success btn-block" >
Get daily meal plans
      </Button>
      </div>
      </Row>
        {mealData && <MealList mealData={mealData} />}     
        {/* <Footer/> */}
    </Container>
    </>
  );
}

export default App;

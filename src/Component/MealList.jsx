import React from 'react';
import Meal from './Meal';

function MealList({mealData}) {
  const nutrients = mealData.nutrients;

    return (
    <div>
        <div className='mealmain'>
            <h1>Macros</h1>
            <ul>
                <li>Calories: {nutrients.calories.toFixed(0)} </li>
                <li>Carbohydrate: {nutrients.carbohydrate.toFixed(0)} </li>
                <li>Fat: {nutrients.fat.toFixed(0)} </li>
                <li>Protein: {nutrients.protein.toFixed(0)} </li>
            </ul>
        </div>

        <div>
            {mealData.meals.map((meal) => {
                return <Meal key={meal.id} meal={meal} />
            })}
        </div>
    </div>
  );
}

export default MealList
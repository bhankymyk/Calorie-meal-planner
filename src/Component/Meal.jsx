import React, { useEffect, useState } from 'react'

export default function Meal({ meal }) {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        fetch(
            `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=8c171682aa064b2d9b5a88c13168267e&includeNutrition=false`
        )
        .then((response) => response.json())
        .then((data) => {
            setImageUrl(data.image)
        })
        .catch(() => {
            console.log("error");
        })
    }, [meal.id]);


  return (
        <div className="mealmains">
            <h1>{meal.title} </h1>
            <img src={imageUrl} alt="recipe"/>
            <ul>
                <li>Preparation time: {meal.readyInMinutes} minute</li>
                <li>Number of servings: {meal.servings}</li>
            </ul>

            <a href={meal.sourceUrl}><button className="btn btn-success btn-block">Go to Recipe</button></a>
        </div>
  )
}

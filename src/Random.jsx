import React, { useEffect, useState } from 'react'

export default function Random() {
    let [randomMeal,setRandomMeal] = useState([]);

    useEffect(() => {
        fetchRandomMeal();
    },[])

    let fetchRandomMeal = () => {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((res) => res.json())
        .then((res) => {
            setRandomMeal(res.meals[0]);
        })
    }

  return (
    <div className='meal-container'>
        <div className='meal'>
            <h1>{randomMeal.strMeal}</h1>
            <img src={randomMeal.strMealThumb} alt="no" className='meal-style'></img>
            <h4>Category - {randomMeal.strCategory}</h4>
            <h4>Origin - {randomMeal.strArea}</h4>
        </div>
    </div>
  )
}

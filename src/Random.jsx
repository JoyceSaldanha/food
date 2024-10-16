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
        <h1>{randomMeal.strMeal}</h1>
        <img src={randomMeal.strMealThumb} alt="no" className='image-style'></img>
    </div>
  )
}

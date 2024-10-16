import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function Recipe() {
    let [enteredValue, setEnteredValue] = useState('');
    let [meals,setMeals] = useState([])

    let searchRecipes = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${enteredValue}`)
        .then((res) => res.json())
        .then((res) => {
            setMeals(res.meals);
        })
    }

    let meal = meals.map((item,i) => {
        return(
            <div key={i} className='card'>
                <h4>{item.strMeal}</h4>
                <img src={item.strMealThumb} alt="no" className='image-style'></img>
            </div>
        )
    })

  return (
    <>
        <h2>Search any recipe</h2>
        <div className='button-container'>
            <InputText value={enteredValue} onChange={(e) => setEnteredValue(e.target.value)}/> <Button label="Seach" onClick={searchRecipes}/>
        </div>
        
        <div className='card-container'>
            {meal}
        </div>
    </>
  )
}

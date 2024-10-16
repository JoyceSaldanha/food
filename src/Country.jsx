import React, { useState } from 'react';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
        

export default function Country() {
    
    let [filteredFoodData,setFilteredFoodData] = useState([]);
    let [searchValue,setSearchValue] = useState('')   

    let filterRecipes = () => {
        console.log(searchValue);
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${searchValue}`)
        .then((res) => res.json())
        .then((res) => {
            setFilteredFoodData(res.meals);
        })
    }

    let food = filteredFoodData.map((item,i) => {
        return(
            <div key={i}>
                <h4>{item.strMeal}</h4>
                <img src={item.strMealThumb} alt="no" className='image-style'></img>
            </div>
        )
    })

  return (
    <>
        <h2>Enter Country Name</h2>
        <div className='button-container'>
            <InputText value={searchValue} onChange={(e) => setSearchValue(e.target.value)} /> <Button label="Seach" onClick={filterRecipes} />
        </div>

        <div className='card-container'>
            {food}
        </div> 
    </>
  )
}

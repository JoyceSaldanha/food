import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Category() {
    let [categoryData,setCategoryData] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        fetchFoodCategory();
    },[])

    let fetchFoodCategory = async() => {
        await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then((res) => res.json())
        .then((res) => {
            setCategoryData(res.categories);
        }) 
    }

    let category = categoryData.map((item,i) => {
        return(
            <div key={i} className='category-card' onClick={() => navigate(`/${item.strCategory}`)}>
                <img src={item.strCategoryThumb} alt="no" className='image-style'></img>
                <h4>{item.strCategory}</h4>
            </div>
        )
    })

  return (
    <>
        <h2>List of Categories</h2>
        <div className='card-container'>
            {category}
        </div>
    </>
  )
}

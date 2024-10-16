import React, { useEffect, useState } from 'react';

export default function Category() {
    let [categoryData,setCategoryData] = useState([]);

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
            <div key={i}>
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

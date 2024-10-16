import { Button } from 'primereact/button';
import React,{useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function CategoryDetails() {
    const { categoryName } = useParams();
    let navigate = useNavigate();
    let [selectedCategoryData,setSelectedCategoryData] = useState([]);

    useEffect(() => {
        listBasedOnCategory(categoryName);
    },[categoryName])

    let listBasedOnCategory = (categoryName) => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
        .then((res) => res.json())
        .then((res) => {
            setSelectedCategoryData(res.meals); 
        })
    }

    let item = selectedCategoryData.map((data,i) => {
        return(
            <div key={i}>
                <h3>{data.strMeal}</h3>
                <img src={data.strMealThumb} alt="no" className='image-style'></img>
            </div>
        )
    })
  return (
    <>
        <Button label='Back' onClick={() => navigate('/category')}></Button>
        <div className='card-container'>
            {item}
        </div>
    </>
  )
}

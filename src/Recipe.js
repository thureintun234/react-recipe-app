import React from 'react'
import style from './recipe.module.css'

const Recipe = (props) => {
    const {
        title,
        calories,
        image,
        ingredients
    }=props
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img className={style.image} src={image} alt="" />
            <ul type="disc"><h3>Ingredients</h3>
               {
                   ingredients.map(ingredient => (
                   <li>{ingredient.text}</li>
                   ))
               }
            </ul>   
            <p>Calories={calories}</p>
            
        </div>
    )
}

export default Recipe
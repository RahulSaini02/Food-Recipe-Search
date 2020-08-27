import React from 'react';
import style from './recipe.module.css'

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h2>Dish: {title}</h2>
            <img className ={style.image } src={image} alt="" />
            <p>{calories} Calories</p>
            <ol>{ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}</ol>
        </div>
    );
}

export default Recipe;
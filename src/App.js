import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import logo from './food.png';
import './App.css';

const App = () => {
  const APP_ID = "891045c9";
  const APP_KEY = "4a364a6014ad7ee031a874dcf6dfb089";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return (
    <div className="App">
      <nav className="nav-bar">
        <div className="logo">
          <img className="bg" src={logo} />
          <h2>Food Recipes </h2>
        </div>
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch} />
          <button className="search-button" type="submit">Search</button>
        </form>
      </nav>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            title={recipe.recipe.label}
            calories={parseInt(recipe.recipe.calories)}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients} />
        ))}
      </div>

    </div>
  );
}

export default App;

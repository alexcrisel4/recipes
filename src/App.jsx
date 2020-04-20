import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './recipe'

const App = () => {
  const APP_ID = "5ee4579d"
  const APP_KEY = "3d83b2b4f54ba529566b89394e81d79b"

const [recipes, setRecipes] = useState([])

  useEffect( ()=> {
    getRecipes()
  }, [])

  const getRecipes = async  () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
  }
  
  
  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map((recipe, idx) => {
        return (
          <Recipe key={idx}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          />
        )
      })}
    </div>
  )
}

export default App;

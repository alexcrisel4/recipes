import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './recipe'
import APP_ID from './keys'
import APP_KEY from './keys'

const App = () => {
 

const [recipes, setRecipes] = useState([])
const [search, setSearch] = useState("")
const [query, setQuery] = useState("chicken")

const updateSearch = (e) => {
  setSearch(e.target.value)
}

  useEffect( ()=> {
    getRecipes()
  }, [])

  const getRecipes = async  () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
  }
  
  const getSearch = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch("")
  }
  
  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input value={search} onChange={updateSearch} className="search-bar" type="text"/>
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

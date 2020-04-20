import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';


const App = () => {
  const APP_ID = "5ee4579d"
  const APP_KEY = "3d83b2b4f54ba529566b89394e81d79b"


  useEffect( ()=> {
    getRecipes()
  }, [])

  const getRecipes = async  () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    console.log(data.hits);
  }
  
  
  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  )
}

export default App;

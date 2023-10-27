import { useState, useEffect, useSyncExternalStore } from 'react'
import  Recipe  from "./Recipe"

export default function App(){

  const APP_ID = "927a369b";
  const APP_KEY = "55b42b412d25e812aba9e8fee39bf32c";
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect(() =>{
    getRecipes();
  }, [query]);

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data =  await response.json(); // Await for any external request. For data that doesnt come back instantly
    setRecipes(data.hits);
    console.log(data.hits);
  }

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
      <h1 className="header">Tasteful Recipes</h1>
      <form onSubmit={getSearch} className="search-form" >
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>{
        return(
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image} 
        ingredients={recipe.recipe.ingredients}
        />
        )
      })}
    </div>
    </div>
  )
}

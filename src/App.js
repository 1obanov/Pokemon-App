import React, { useEffect, useState } from 'react'
import Pokemon from './components/Pokemon'
import useLocalStorage from 'use-local-storage';


const App = () => {


   const [allPokemons, setAllPokemons] = useState([])
   const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')
   const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
   const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');


  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results) {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
      })
    }
    createPokemonObject(data.results)
  }
  
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

 useEffect(() => {
  getAllPokemons()
 }, [])


return (
    <div className="pokemonApp" data-theme={theme}>
      <div className="container">
        <div>
           <h1>Pokemon App</h1>
           <button onClick={switchTheme} className="btn">
             Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
           </button>
           <ul className="pokedex-list">
             {allPokemons.map((pokemon, idx) => {
               return <Pokemon
               pokemon={pokemon} 
               key={pokemon.name} 
               />
              })}
           </ul>
           <button className="btn" onClick={() => getAllPokemons()}>Load more</button>
        </div>
      </div>
    </div>
  );
}

export default App;
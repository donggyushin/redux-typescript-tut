import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { RootStore } from './Store'
import { getPokemon } from './actions/PokemonActions'

function App() {
  const [pokemonName, setPokemonName] = useState("")
  const pokemonState = useSelector((state: RootStore) => state.pokemonReducer)
  const handlePokemonName = (event: React.ChangeEvent<HTMLInputElement>) => setPokemonName(event.target.value)
  const dispatch = useDispatch()
  const searchPokemon = () => {
    dispatch(getPokemon(pokemonName))
  }

  return (

    <div className="App">
      <input value={pokemonName} onChange={handlePokemonName} />
      <button onClick={searchPokemon}>Search</button>
      {pokemonState.pokemon && <div>
        <p>{pokemonName}</p>
        {pokemonState.pokemon.abilities.map((ability) => {
          return <div>
            <p>{ability.ability.name}</p>
            <p>{ability.slot}</p>
          </div>
        })}
        <p><img src={pokemonState.pokemon?.sprites.front_default} /></p>
        {pokemonState.pokemon.stats.map((stat) => {
          return <div>
            <p>{stat.base_stat}</p>
            <p>{stat.stat.name}</p>
          </div>
        })}
      </div>}
    </div>

  );
}

export default App;

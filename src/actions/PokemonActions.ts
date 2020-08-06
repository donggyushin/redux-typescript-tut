import { POKEMOM_FAIL, POKEMOM_LOADING, POKEMOM_SUCCESS, PokemonDispatchType } from './PokemonActionTypes'

import { Dispatch } from 'redux'
import axios from 'axios'

export const getPokemon = (pokemonName: string) => async (dispatch: Dispatch<PokemonDispatchType>) => {
    try {
        dispatch({
            type: POKEMOM_LOADING
        })

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        dispatch({
            type: POKEMOM_SUCCESS,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: POKEMOM_FAIL
        })
    }
}
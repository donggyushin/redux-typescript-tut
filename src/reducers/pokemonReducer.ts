import { POKEMOM_FAIL, POKEMOM_LOADING, POKEMOM_SUCCESS, PokemonDispatchType, PokemonType } from '../actions/PokemonActionTypes'

interface InitialStateI {
    loading: boolean
    pokemon?: PokemonType
}

const initialState: InitialStateI = {
    loading: false
}

const pokemonReducer = (state = initialState, action: PokemonDispatchType): InitialStateI => {
    switch (action.type) {
        case POKEMOM_SUCCESS:
            return pokemonSuccess(state, action)
        case POKEMOM_LOADING:
            return pokemonLoading(state, action)
        case POKEMOM_FAIL:
            return pokemonFail(state, action)
        default:
            return state
    }
}

const pokemonFail = (state: InitialStateI, action: PokemonDispatchType): InitialStateI => {
    return {
        ...state,
        loading: false
    }
}

const pokemonSuccess = (state: InitialStateI, action: PokemonDispatchType): InitialStateI => {
    if (action.type === POKEMOM_SUCCESS) {
        const { abilities, stats, sprites } = action.payload
        return {
            ...state,
            pokemon: {
                abilities,
                stats,
                sprites
            }
        }
    } else {
        return state
    }
}
const pokemonLoading = (state: InitialStateI, action: PokemonDispatchType): InitialStateI => {
    return {
        ...state,
        loading: true
    }
}

export default pokemonReducer
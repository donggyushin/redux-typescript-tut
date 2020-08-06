export const POKEMOM_LOADING = 'LOADING'
export const POKEMOM_FAIL = 'FAIL'
export const POKEMOM_SUCCESS = 'SUCCESS'

export type PokemonType = {
    abilities: PokemonAbility[]
    sprites: PokemonSprite,
    stats: PokemonStat[]
}

export type PokemonAbility = {
    ability: {
        name: string
        url: string
    },
    is_hidden: boolean
    slot: number
}

export type PokemonSprite = {
    back_default: string
    front_default: string
}

export type PokemonStat = {
    base_stat: number
    stat: {
        name: string
        url: string
    }
}

export interface PokemonLoading {
    type: typeof POKEMOM_LOADING
}

export interface PokemonSuccess {
    type: typeof POKEMOM_SUCCESS
    payload: {
        abilities: PokemonAbility[]
        sprites: PokemonSprite,
        stats: PokemonStat[]
    }
}

export interface PokemonFail {
    type: typeof POKEMOM_FAIL
}

export type PokemonDispatchType = PokemonSuccess | PokemonLoading | PokemonFail
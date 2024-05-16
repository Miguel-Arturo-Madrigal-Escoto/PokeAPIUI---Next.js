'use client';

import { useQuery } from '@tanstack/react-query';
import { Pokemon } from '@/types/pokemon';
import api from '..';


const searchPokemon = async (poke?: string): Promise<Pokemon> => {
    const resp = await api.get<Pokemon>(`pokemon/${poke}/pokeapi_search/`);
    const pokemon = resp.data;
    return pokemon;
}

export const usePokeAPISearch = (pokemon?: string) => {
    const query = useQuery(
        { 
            queryKey: [`pokemons/search/${pokemon}`], 
            queryFn: () => searchPokemon(pokemon),
            enabled: false 
        }
    )

    return query;
}

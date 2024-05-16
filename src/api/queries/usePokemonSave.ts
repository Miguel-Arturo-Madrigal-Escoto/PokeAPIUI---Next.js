'use client';

import { useQuery } from '@tanstack/react-query';
import { Pokemon } from '@/types/pokemon';
import api from '..';


const savePokemon = async (poke: Pokemon): Promise<void> => {
    await api.post<Pokemon>(`pokemon/`, { ...poke });
}

export const usePokemonSave = (pokemon: Pokemon) => {
    const query = useQuery(
        { 
            queryKey: [`pokemons/save/${pokemon.id}`], 
            queryFn: () => savePokemon(pokemon),
            enabled: false 
        }
    )

    return query;
}

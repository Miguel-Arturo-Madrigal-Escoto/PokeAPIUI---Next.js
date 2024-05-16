'use client';

import { useQuery } from '@tanstack/react-query';
import { Pokemon } from '@/types/pokemon';
import api from '..';


const getPokemonByID = async (id: string): Promise<Pokemon> => {
    const resp = await api.get<Pokemon>(`pokemon/${id}/`);
    const pokemon = resp.data;
    return pokemon;
}

export const useFetchPokemon = (id: string) => {
    const query = useQuery(
        { queryKey: [`pokemon/${id}`], queryFn: () => getPokemonByID(id) }
    )

    return query;
}

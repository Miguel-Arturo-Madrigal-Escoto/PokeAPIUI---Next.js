'use client';

import { useQuery } from '@tanstack/react-query';
import { Pokemon } from '@/types/pokemon';
import api from '..';


const getPokemons = async (): Promise<Pokemon[]> => {
    const resp = await api.get<Pokemon[]>('pokemon/');
    const pokemons = resp.data;
    return pokemons;
}

export const useFetchPokemons = () => {
    const query = useQuery(
        { queryKey: ['pokemons'], queryFn: getPokemons }
    )

    return query;
}

'use client';

import { useQuery } from '@tanstack/react-query';
import api from '..';


const getPokemonScore = async (id: string): Promise<number> => {
    const resp = await api.get<number>(`pokemon/${id}/score/`);
    const score = resp.data;
    return score;
}

export const useCalculatePokemonScore = (id: string) => {
    const query = useQuery(
        { 
            queryKey: [`pokemons/score/${id}`], 
            queryFn: () => getPokemonScore(id),
            enabled: false
        }
    )

    return query;
}

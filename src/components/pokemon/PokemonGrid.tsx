import { FC } from 'react'
import { useFetchPokemons } from '@/api/queries/useFetchPokemons';
import PokemonCard from './PokemonCard';

export const PokemonGrid: FC = () => {

    const { data } = useFetchPokemons();

    return (
        <div className='flex flex-wrap justify-center items-center'>
            {
                data?.map(pokemon => (
                    <PokemonCard
                        key={pokemon.id}
                        pokemon={pokemon}
                        detailed={false}
                    />
                ))
            }
        </div>
    )
}

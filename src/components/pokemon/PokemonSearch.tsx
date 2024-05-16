'use client';

import { useState } from 'react'
import { usePokeAPISearch } from '@/api/queries/usePokeAPISearch';
import { Loading } from '../common/Loading';
import PokemonCard from './PokemonCard';
import { Error } from '../common/Error';


export const PokemonSearch = () => {

    const [value, setValue] = useState<string>('');
    const { data: pokemon, refetch, isLoading, error } = usePokeAPISearch(value);

    const onFetchPokemon = (e: any) => {
        e.preventDefault();
        refetch();
    }

    if (isLoading) return <Loading />
    if (error) return <Error message='Pokemon not found.' />

    return (
        <div className='flex flex-col w-full justify-center items-center'>
            <form onSubmit={ onFetchPokemon } className='w-3/12'>
                <div className="mb-10 space-y-3">
                    <div className="space-y-1">
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Pokemon</label>
                            <input className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="pokemon" placeholder="pikachu" name="pokemon" onChange={ ({ target }) => setValue(target.value) } />
                        </div>
                    </div>
                    <button 
                        className="ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" type="submit"
                    >
                        Search
                    </button>
                </div>
            </form>
            <div className='flex flex-col w-full justify-center items-center'>
                { pokemon &&  <PokemonCard pokemon={pokemon} detailed />}
            </div>
        </div>
    )
}

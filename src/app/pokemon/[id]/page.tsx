'use client';

import { notFound } from "next/navigation";
import { useFetchPokemon } from "@/api/queries/useFetchPokemon";
import PokemonCard from "@/components/pokemon/PokemonCard";
import { Loading } from "@/components/common/Loading";

interface Props {
    params: {
        id: string
    }
}

export default function PokemonByIDPage({ params }: Props) {

    const { data: pokemon, isLoading } = useFetchPokemon(params.id);

    if (isLoading) return <Loading />

    if (!pokemon) notFound();

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <PokemonCard pokemon={pokemon} detailed />
        </div>
    );
}
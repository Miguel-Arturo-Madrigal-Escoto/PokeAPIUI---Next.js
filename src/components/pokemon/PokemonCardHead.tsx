import { FC } from "react";
import Image from "next/image";
import { MdCatchingPokemon } from "react-icons/md";
import { Pokemon } from "@/types/pokemon";
import Link from "next/link";

interface Props {
    pokemon: Pokemon;
    detailed?: boolean
}


export const PokemonCardHead: FC<Props> = ({ pokemon, detailed = false }) => {
    return (
        <div className="text-center p-6 bg-gray-800 border-b flex flex-col justify-center items-center">
            <Image
                src={pokemon.sprite_url}
                width={50}
                height={50}
                alt={`Pokemon ${pokemon.name}`}
            />
            <p className="pt-2 text-lg font-semibold text-gray-50">{pokemon.name}</p>
            <p className="text-sm text-gray-100 flex flex-row justify-center items-center ">
                <MdCatchingPokemon className='text-red-600 text-lg' />
                <span className='m-1'>
                    {pokemon.types.join(' ')}
                </span>
            </p>
            <button className="mt-5">
                {
                    !detailed && (
                        <Link
                            href={`pokemon/${pokemon.id}/`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            Click to see details
                        </Link>
                    )
                }
            </button>
        </div>
    );
}

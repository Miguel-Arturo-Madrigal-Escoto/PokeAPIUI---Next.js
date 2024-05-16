'use client';

import Link from "next/link";
import { PokemonGrid } from "@/components/pokemon/PokemonGrid";


export default function PokemonsPage() {
    return (
        <div className="mt-5 flex flex-col justify-center items-center">
            <h1 className="text-center mx-auto text-5xl text-gray-800">Pokemon App</h1>
            <div className={`bg-gray-900 flex flex-row justify-center items-center mb-0 p-3 w-1/12 mt-10`}>
                <Link
                    href="/pokemon/search"
                >
                    <p className="text-sm font-medium text-white leading-none">
                        Search Pokemon
                    </p>
                </Link>
            </div>
            <PokemonGrid />
        </div>
    )
}
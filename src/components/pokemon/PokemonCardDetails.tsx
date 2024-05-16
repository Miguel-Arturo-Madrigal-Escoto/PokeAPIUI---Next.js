import { FC } from "react";
import { MdSpoke } from "react-icons/md";
import { FaDotCircle } from "react-icons/fa";
import { FaRuler } from "react-icons/fa";
import { AiOutlineColumnWidth } from "react-icons/ai";
import { Pokemon } from "@/types/pokemon";


interface Props {
    pokemon: Pokemon
}


export const PokemonCardDetails: FC<Props> = ({ pokemon }) => {
    return (
        <div>
            <h2 className="text-sm text-gray-500 text-center m-2">Abilities</h2>
            {
                pokemon.abilities.map(ability => (
                    <div key={ability}>
                        <div className="px-4 py-2 hover:bg-gray-100 flex">
                            <div className="text-blue-600">
                                <MdSpoke />
                            </div>
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">
                                    {ability}
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }

            <h2 className="text-sm text-gray-500 text-center m-2">Base stats</h2>
            {
                Object.entries(pokemon.base_stats).map(([key, value], idx) => (
                    <div key={idx} className="px-4 py-2 hover:bg-gray-100 flex">
                        <div className="text-red-500">
                            <FaDotCircle />
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                                {key}: {value}
                            </p>
                        </div>
                    </div>
                ))
            }

            <h2 className="text-sm text-gray-500 text-center m-2">Other</h2>
            <div className="px-4 py-2 hover:bg-gray-100 flex">
                <div className="text-black">
                    <AiOutlineColumnWidth />
                </div>
                <div className="pl-3">
                    <p className="text-sm font-medium text-gray-800 leading-none">
                        Weight: { pokemon.weight }
                    </p>
                </div>
            </div>
            <div className="px-4 py-2 hover:bg-gray-100 flex">
                <div className="text-black">
                    <FaRuler />
                </div>
                <div className="pl-3">
                    <p className="text-sm font-medium text-gray-800 leading-none">
                        Height: { pokemon.height }
                    </p>
                </div>
            </div>
        </div>
    )
}

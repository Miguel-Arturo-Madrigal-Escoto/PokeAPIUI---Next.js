import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { Pokemon } from '@/types/pokemon';
import { PokemonCardHead } from './PokemonCardHead';
import { PokemonCardDetails } from './PokemonCardDetails';
import { PokemonScore } from './PokemonScore';
import { PokemonSave } from './PokemonSave';

interface Props {
    pokemon: Pokemon;
    detailed: boolean
}


const PokemonCard: FC<Props> = ({ pokemon, detailed }) => {

    const pathname = usePathname();

    return (
        <div className="mx-2 right-0 w-3/12 mt-16">
            <div className="bg-white rounded overflow-hidden shadow-lg">
                <PokemonCardHead pokemon={pokemon} detailed={detailed} />
                { detailed && <PokemonCardDetails pokemon={pokemon} /> }
                { pathname.includes('search') ? <PokemonSave pokemon={pokemon} />: <PokemonScore id={ pokemon.id }/> }
            </div>
        </div>
    )

}

export default PokemonCard;
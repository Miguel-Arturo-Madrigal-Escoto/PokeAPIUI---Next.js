import { FC } from 'react'
import { Loading } from '../common/Loading';
import { usePokemonSave } from '@/api/queries/usePokemonSave';
import { Pokemon } from '@/types/pokemon';
import { useRouter } from 'next/navigation';

interface Props {
    pokemon: Pokemon;
}


export const PokemonSave: FC<Props> = ({ pokemon }) => {

    const { refetch } = usePokemonSave(pokemon);
    const router = useRouter();

    const onSave = () => {
        refetch();
        router.push('/pokemon/')
    }


    return (
        <div className={`bg-blue-600 flex flex-row justify-center items-center m-0 p-3`}>
            <button 
                className="w-full"
                onClick={ onSave }
            >
                <p className="text-sm font-medium text-white leading-none">
                    Save
                </p>
            </button>
        </div>
    );
}

import { FC } from 'react'
import { useCalculatePokemonScore } from '@/api/queries/useCalculatePokemonScore';
import { Loading } from '../common/Loading';

interface Props {
    id: string;
}


export const PokemonScore: FC<Props> = ({ id }) => {

    const { data: score, isLoading, refetch } = useCalculatePokemonScore(id);

    const onCalculateScore = () => refetch();


    return (
        <div className={`${ !score ? 'bg-gray-600' : 'bg-green-600'} flex flex-row justify-center items-center m-0 p-3`}>
            <button 
                className="w-full"
                onClick={ onCalculateScore }
            >
                <p className="text-sm font-medium text-white leading-none">
                    {
                        !score && !isLoading 
                        ? 'Calculate Score'
                        : isLoading ? <Loading />
                        : `Score: ${score}`
                    }
                </p>
            </button>
        </div>
    );
}

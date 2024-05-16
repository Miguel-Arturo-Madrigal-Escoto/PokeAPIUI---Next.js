
interface Props {
    message: string;
}


export const Error = ({ message }: Props) => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <p>{ message }</p>
        </div>
    )
}

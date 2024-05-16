import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='w-full h-screen justify-center items-center flex flex-col'>
            <p>Could not find requested pokemon</p>
            <Link href="/pokemon" className='text-blue-600'>Return Home</Link>
        </div>
    )
}
'use client'

import { Loading } from '@/components/common/Loading';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/pokemon');
    }, []);

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            Loading...
        </div>
    )
}

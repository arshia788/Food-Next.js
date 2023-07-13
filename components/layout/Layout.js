import Link from 'next/link'
import React from 'react'

export default function Layout({ children }) {
    return (
        <>
            <header className='xs:w-full sm:w-6/12 xs:px-4 
            flex justify-between items-center mx-auto mt-4'>

                <h1 className='font-semibold text-green-700 text-lg'>
                    <Link href='/'>BotoFood</Link>
                </h1>

                <ul className='flex items-center gap-x-4'>
                    <li><Link href="/menu">Menu</Link></li>
                    <li><Link href="/categories">Categories</Link></li>
                </ul>

            </header>

            <div className='xs:w-full sm:w-6/12 m-auto xs:px-4 min-h-screen'>
                {children}
            </div>

            <footer className='bg-green-700 text-center
            
            text-zinc-50 p-0.5'>
                <p>This a food project with SSR&SSG</p>
            </footer>

        </>
    )
}


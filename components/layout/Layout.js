import Link from 'next/link'
import React from 'react'

export default function Layout({ children }) {
    return (
        <>
            <header className='w-6/12 flex justify-between items-center mx-auto mt-4'>

                <h1 className='font-semibold text-green-700 text-lg'>
                    <Link href='/'>BotoFood</Link>
                </h1>

                <ul className='flex items-center gap-x-4'>
                    <li><Link href="/menu">Menu</Link></li>
                    <li><Link href="/categories">Categories</Link></li>
                </ul>

            </header>

            <div className='w-6/12 m-auto'>
                {children}
            </div>

            <footer className='bg-green-700 text-center text-zinc-50 p-0.5'>
                <p>This a food project with SSR&SSG</p>
            </footer>

        </>
    )
}


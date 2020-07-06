import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <React.Fragment>
            <div className='bg-gray-300 p-4 shadow-md z-50' >
                <div className='container mx-auto'>
                    <Link href='/'>
                        <a>
                            <img className='mx-auto w-32 h-auto' src='/Logos/logo_paplpitebox.png' alt='Palpite-Box'></img>
                        </a>
                    </Link>
                </div>
            </div>
            <div className='bg-gray-400 p-4 shadow-md text-center'>
            <Link href='/sobre'>
                <a className='px-2 hover:underline'> Sobre o restaurante </a>
            </Link>
            <Link href='/contato'>
                <a className='px-2 hover:underline'> Contato </a>
            </Link>
            <Link href='/pesquisa'>
                <a className='px-2 hover:underline'> Pesquisa </a>
            </Link>
            </div>
        </React.Fragment>
    )
}

export default Header
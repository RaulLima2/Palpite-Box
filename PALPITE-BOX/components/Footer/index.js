import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-700 p-4 shadow-md'>
            <div className='container mx-auto text-center font-bold text-white'>
                Projeto desenvolvido por: Raul Bruno / {' '}
                <a className='hover:underline' href=''>Linkedin </a> / {' '}
                <a className='hover:underline' href='https://github.com/RaulLima2'> Github </a> {' '}

                <div className='mt-2'>
                    <img className='inline p-4 w-32' src='/Logos/logo_semana_fsm.png' />
                    <img className='inline w-32' src='/Logos/logo_devpleno.png' />
                </div>
            </div>
        </div>
    )
}

export default Footer
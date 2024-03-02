'use client'
import Image from 'next/image'
import React from 'react'
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid"
import Avatar from 'react-avatar'

const Header = () => {
    return <header>
        <div className=' flex flex-column md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl'>
            <Image src="https://links.papareact.com/c2cdd5" alt='Trello Logo' width={300} height={100}
                className='w-44 md:w-56 pb-10 md:pb-0 object-contain'
            />
            <div className=''>
                <form action="" className='flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md-flex-initial'>
                    <MagnifyingGlassIcon className='h-6 w-6 text-gray-400' />
                    <input type="text" name="" id="" placeholder='Search' className='flex-1 outline-none' />
                    <button hidden type='submit'>Search</button>
                </form>
                <Avatar name="Ameer Hamza" size='50' round color='#0b62dd' />
            </div>
        </div>
    </header>
}

export default Header

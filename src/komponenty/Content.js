import React from 'react'
import ImageOne from '../obrazky/gancar.png'
import { Link } from 'react-router-dom'

const Content = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
            <img src={ImageOne} alt='barvy' className='lg:h-full object-cover rounded mb-20 md:object-scale-down sm:object-scale-down' />
                <div className='lg:flex space-x-6 justify-between items-center'>
                    <Link className="py-6 px-10 bg-gradient-to-r from-yellow-500 to-red-600 rounded-full text-3xl hover:bg-gradient-to-r from-red-600 to-red-500 transition duration-300 ease-in-out flex items-center">
                    TELEFON<svg className="w-6 h-6 ml-4" fill="none" 
                                stroke="currentColor" viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"><path 
                                strokeLinecap="round" strokeLinejoin="round" 
                                strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                    </Link>
                    <Link className="py-6 px-10 bg-gradient-to-r from-yellow-500 to-red-600 rounded-full text-3xl hover:bg-gradient-to-r from-red-600 to-red-500 transition duration-300 ease-in-out flex items-center">
                    E-MAIL<svg className="w-6 h-6 ml-14" fill="none" 
                               stroke="currentColor" viewBox="0 0 24 24" 
                               xmlns="http://www.w3.org/2000/svg"><path 
                               strokeLinecap="round" strokeLinejoin="round" 
                               strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                    </Link>
                </div>
        </div>
    )
}

export default Content

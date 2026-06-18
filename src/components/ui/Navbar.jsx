'use client';

import Link from 'next/link';

import { IoMenu, IoClose } from 'react-icons/io5';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
    const pathname = usePathname();

    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggleMenu = () => {
        setToggleMenu((prev) => !prev);
    };

    return (
        <nav className='w-fit'>
            <button
                type='button'
                role='button'
                aria-label='button'
                onClick={handleToggleMenu}
                className='flex items-center justify-center cursor-pointer'
            >
                <IoMenu
                    size={28}
                    className='text-white transition-colors duration-200 ease-linear hover:text-green-500'
                />
            </button>
            <div
                className={`fixed inset-0 bg-gray-950/20 transition-all duration-200 ease-linear ${toggleMenu ? 'visible opacity-100' : 'invisible opacity-0 delay-500'} z-40`}
            >
                <div
                    className={`fixed top-0 right-0 w-full max-w-[350px] h-screen px-5 bg-gray-950 transition-all duration-200 ease-linear delay-300 ${toggleMenu ? 'translate-x-0' : 'translate-x-full'} z-50`}
                >
                    <div className='w-full h-[64px] flex items-center'>
                        <button
                            type='button'
                            role='button'
                            aria-label='button'
                            onClick={handleToggleMenu}
                            className='flex items-center justify-center cursor-pointer'
                        >
                            <IoClose
                                size={28}
                                className='text-white transition-colors duration-200 ease-linear hover:text-green-500'
                            />
                        </button>
                    </div>
                    <div className='w-full mt-8 flex flex-col gap-5'>
                        <button
                            type='button'
                            role='button'
                            aria-label='button'
                            onClick={handleToggleMenu}
                            className='w-fit'
                        >
                            <Link
                                href={'/'}
                                className={`text-sm text-gray-500 transition-colors duration-200 ease-linear hover:text-green-500 ${pathname === '/' ? 'text-green-500' : 'text-gray-500 hover:text-green-500'}`}
                            >
                                Home
                            </Link>
                        </button>
                        <div className='w-full h-px bg-gray-900'></div>
                        <button
                            type='button'
                            role='button'
                            aria-label='button'
                            onClick={handleToggleMenu}
                            className='w-fit'
                        >
                            <Link
                                href={'/facilities'}
                                className={`text-sm text-gray-500 transition-colors duration-200 ease-linear hover:text-green-500 ${pathname === '/facilities' ? 'text-green-500' : 'text-gray-500 hover:text-green-500'}`}
                            >
                                Facilities
                            </Link>
                        </button>
                        <div className='w-full h-px bg-gray-900'></div>
                        <button
                            type='button'
                            role='button'
                            aria-label='button'
                            onClick={handleToggleMenu}
                            className='w-fit'
                        >
                            <Link
                                href={'/bookings'}
                                className={`text-sm text-gray-500 transition-colors duration-200 ease-linear hover:text-green-500 ${pathname === '/bookings' ? 'text-green-500' : 'text-gray-500 hover:text-green-500'}`}
                            >
                                Bookings
                            </Link>
                        </button>
                        <div className='w-full h-px bg-gray-900'></div>
                        <button
                            type='button'
                            role='button'
                            aria-label='button'
                            onClick={handleToggleMenu}
                            className='w-fit'
                        >
                            <Link
                                href={'/create-facility'}
                                className={`text-sm text-gray-500 transition-colors duration-200 ease-linear hover:text-green-500 ${pathname === '/create-facility' ? 'text-green-500' : 'text-gray-500 hover:text-green-500'}`}
                            >
                                Create Facility
                            </Link>
                        </button>
                        <div className='w-full h-px bg-gray-900'></div>
                        <button
                            type='button'
                            role='button'
                            aria-label='button'
                            onClick={handleToggleMenu}
                            className='w-fit'
                        >
                            <Link
                                href={'/manage-facilities'}
                                className={`text-sm text-gray-500 transition-colors duration-200 ease-linear hover:text-green-500 ${pathname === '/manage-facilities' ? 'text-green-500' : 'text-gray-500 hover:text-green-500'}`}
                            >
                                Manage Facilities
                            </Link>
                        </button>
                    </div>
                    <div className='w-full mt-15 flex items-center justify-center gap-5'>
                        <button
                            type='button'
                            role='button'
                            aria-label='button'
                            onClick={handleToggleMenu}
                        >
                            <Link
                                href={'/auth/register'}
                                className={`text-sm text-gray-500 transition-colors duration-200 ease-linear hover:text-green-500 ${pathname === '/auth/register' ? 'text-green-500' : 'text-gray-500 hover:text-green-500'}`}
                            >
                                Sign up
                            </Link>
                        </button>
                        <div className='w-px h-5 bg-gray-900'></div>
                        <button
                            type='button'
                            role='button'
                            aria-label='button'
                            onClick={handleToggleMenu}
                        >
                            <Link
                                href={'/auth/login'}
                                className={`text-sm text-gray-500 transition-colors duration-200 ease-linear hover:text-green-500 ${pathname === '/auth/login' ? 'text-green-500' : 'text-gray-500 hover:text-green-500'}`}
                            >
                                Login
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

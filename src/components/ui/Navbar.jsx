'use client';

import Link from 'next/link';

import { IoMenu, IoClose } from 'react-icons/io5';
import { motion, AnimatePresence } from 'motion/react';
import { ClickAwayListener } from '@mui/material';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggleMenu = () => {
        setToggleMenu((prev) => !prev);
    };

    return (
        <nav>
            <button
                type='button'
                role='button'
                aria-label='button'
                onClick={handleToggleMenu}
                className='flex items-center justify-center cursor-pointer'
            >
                <IoMenu size={28} className='text-gray-950' />
            </button>
            <AnimatePresence>
                {toggleMenu && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='fixed inset-0 bg-gray-950/20 z-40'
                    >
                        <ClickAwayListener onClickAway={handleToggleMenu}>
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ duration: 0.3 }}
                                className='absolute w-full max-w-[400px] h-screen bg-white right-0 z-50'
                            >
                                <div className='w-full p-5'>
                                    <button
                                        type='button'
                                        role='button'
                                        aria-label='button'
                                        onClick={handleToggleMenu}
                                        className='flex items-center justify-center cursor-pointer'
                                    >
                                        <IoClose
                                            size={28}
                                            className='text-gray-950'
                                        ></IoClose>
                                    </button>
                                    <nav className='w-full mt-10 flex flex-col gap-5'>
                                        <Link
                                            href={'/'}
                                            className={`text-base transition-colors duration-200 ease-linear ${pathname === '/' ? 'text-green-500' : 'text-gray-500 hover:text-gray-950'}`}
                                        >
                                            Home
                                        </Link>
                                        <div className='w-full h-px bg-gray-200'></div>
                                        <Link
                                            href={'/all-facilities'}
                                            className={`text-base transition-colors duration-200 ease-linear ${pathname === '/all-facilities' ? 'text-green-500' : 'text-gray-500 hover:text-gray-950'}`}
                                        >
                                            All facilities
                                        </Link>
                                    </nav>
                                    <div className='w-full flex items-center justify-center gap-5 mt-10'>
                                        <button
                                            type='button'
                                            role='button'
                                            aria-label='button'
                                            onClick={handleToggleMenu}
                                            className='w-full'
                                        >
                                            <Link
                                                href={'/auth/register'}
                                                className='flex items-center justify-center w-full bg-green-500 cursor-pointer py-[15px] rounded-xl text-base text-white transition-colors duration-200 ease-linear hover:bg-green-400'
                                            >
                                                Register
                                            </Link>
                                        </button>

                                        <button
                                            type='button'
                                            role='button'
                                            aria-label='button'
                                            onClick={handleToggleMenu}
                                            className='w-full'
                                        >
                                            <Link
                                                href={'/auth/login'}
                                                className='flex items-center justify-center w-full border border-gray-950 cursor-pointer py-[15px] rounded-xl text-base text-gray-950'
                                            >
                                                Login
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </ClickAwayListener>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

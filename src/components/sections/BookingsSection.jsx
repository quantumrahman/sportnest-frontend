'use client';

import { filterType } from '@/constants/filter.type';
import { ClickAwayListener } from '@mui/material';
import { useState } from 'react';
import {
    FaAnglesLeft,
    FaAnglesRight,
    FaMagnifyingGlass,
} from 'react-icons/fa6';
import BookingsCard from '../ui/BookingsCard';

export default function BookingsSection() {
    const [toggleSelect, setToggleSelect] = useState(false);

    const handleToggleSelect = () => {
        setToggleSelect((prev) => !prev);
    };
    return (
        <section className='w-full'>
            <div className='w-full flex flex-col items-center justify-between gap-3 md:flex-row'>
                <div className='w-full md:max-w-[180px]'>
                    <div className='w-full relative flex items-center justify-start'>
                        <button
                            type='button'
                            role='button'
                            aria-label='button'
                            onClick={handleToggleSelect}
                            className='w-full py-3 px-4 bg-transparent border border-gray-300 rounded-xl flex items-center cursor-pointer'
                        >
                            <p className='text-sm text-gray-950 flex items-center justify-center gap-2'>
                                <span className='block text-sm text-gray-950'>
                                    Filter By:
                                </span>
                                <span className='block text-sm text-gray-500'>
                                    All
                                </span>
                            </p>
                        </button>
                        {toggleSelect && (
                            <ClickAwayListener onClickAway={handleToggleSelect}>
                                <div className='w-full bg-white absolute top-15 left-0 z-20 border border-gray-300 rounded-xl overflow-hidden'>
                                    {filterType.map((type) => (
                                        <button
                                            key={type.id}
                                            type='button'
                                            role='button'
                                            aria-label='button'
                                            onClick={handleToggleSelect}
                                            className='w-full text-sm text-gray-950 py-3 px-5 flex items-center transition-all duration-200 ease-linear hover:bg-gray-100 cursor-pointer'
                                        >
                                            <span className='block'>
                                                {type.label}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </ClickAwayListener>
                        )}
                    </div>
                </div>
                <div className='w-full md:max-w-[300px] flex flex-col items-center justify-center gap-3 md:flex-row'>
                    <div className='w-full bg-transparent border border-gray-300 relative rounded-xl overflow-hidden flex items-center'>
                        <div className='size-[44px] flex items-center justify-center'>
                            <FaMagnifyingGlass className='text-sm text-gray-950' />
                        </div>
                        <label htmlFor='search-facility' className='w-full'>
                            <input
                                id='search-facility'
                                type='text'
                                name='search-facility'
                                aria-label='input'
                                autoComplete='off'
                                placeholder='Search facility'
                                className='w-full bg-transparent outline-none py-3 pr-4 text-sm text-gray-950 placeholder:text-gray-500'
                            />
                        </label>
                    </div>
                    <button className='w-full md:w-fit bg-green-500 py-3 px-4 text-sm text-white transition-colors duration-200 ease-linear cursor-pointer rounded-xl hover:bg-green-400'>
                        Search
                    </button>
                </div>
            </div>
            <div className='w-full grid grid-cols-1 gap-6 my-15'>
                <BookingsCard />
                <BookingsCard />
                <BookingsCard />
            </div>
            <div className='w-full flex items-center justify-center gap-3'>
                <button
                    type='button'
                    role='button'
                    aria-label='button'
                    className='w-fit p-[15px] border border-gray-300 rounded-lg text-sm text-gray-500 transition-colors duration-200 ease-linear hover:text-gray-950 cursor-pointer'
                >
                    <FaAnglesLeft />
                </button>
                <div className='size-[46px] bg-green-500 rounded-lg flex items-center justify-center cursor-default'>
                    <span className='text-sm text-white'>01</span>
                </div>
                <button
                    type='button'
                    role='button'
                    aria-label='button'
                    className='w-fit p-[15px] border border-gray-300 rounded-lg text-sm text-gray-500 transition-colors duration-200 ease-linear hover:text-gray-950 cursor-pointer'
                >
                    <FaAnglesRight />
                </button>
            </div>
        </section>
    );
}

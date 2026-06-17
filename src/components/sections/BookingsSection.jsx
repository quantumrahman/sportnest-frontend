'use client';

import { ListBox, Select } from '@heroui/react';
import { filterType } from '@/constants/filter.type';
import {
    FaAnglesLeft,
    FaAnglesRight,
    FaMagnifyingGlass,
} from 'react-icons/fa6';
import BookingsCard from '../ui/BookingsCard';

export default function BookingsSection() {
    return (
        <section className='w-full'>
            <div className='w-full flex flex-col items-center justify-between gap-3 md:flex-row'>
                <div className='w-full md:max-w-[120px]'>
                    <Select fullWidth placeholder='Filter'>
                        <Select.Trigger className='bg-transparent border border-gray-200 rounded-md py-3 px-5 shadow-none hover:border-green-500 focus:border-green-500 outline-none'>
                            <Select.Value className='text-sm text-green-500' />
                        </Select.Trigger>
                        <Select.Popover className='border border-gray-200 rounded-md bg-white shadow-none'>
                            <ListBox className='p-0'>
                                {filterType.map((filter) => (
                                    <ListBox.Item
                                        key={filter.id}
                                        id={filter.sport}
                                        textValue={filter.label}
                                        className='w-full hover:bg-gray-50 rounded-none py-3 px-4 transform translate-0'
                                    >
                                        {filter.label}
                                    </ListBox.Item>
                                ))}
                            </ListBox>
                        </Select.Popover>
                    </Select>
                </div>
                <div className='w-full flex flex-col items-center justify-center gap-3 md:flex-row md:max-w-[300px]'>
                    <div className='w-full bg-transparent border border-gray-200 relative rounded-md overflow-hidden flex items-center'>
                        <div className='size-[44px] flex items-center justify-center'>
                            <FaMagnifyingGlass className='text-sm text-green-500' />
                        </div>
                        <label htmlFor='search-facility' className='w-full'>
                            <input
                                id='search-facility'
                                type='text'
                                name='search-facility'
                                aria-label='input'
                                autoComplete='off'
                                placeholder='Search facility'
                                className='w-full bg-transparent outline-none py-3 pr-4 text-sm text-gray-950 caret-green-500 placeholder:text-gray-400'
                            />
                        </label>
                    </div>
                    <button className='w-full bg-green-500 p-3 text-sm text-white transition-colors duration-200 ease-linear cursor-pointer rounded-md hover:bg-green-400 md:w-fit'>
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
                    className='w-fit p-3 border border-gray-200 rounded-md text-sm text-gray-400 transition-colors duration-200 ease-linear hover:text-gray-950 cursor-pointer'
                >
                    <FaAnglesLeft />
                </button>
                <div className='size-10 bg-green-500 rounded-md flex items-center justify-center cursor-default'>
                    <span className='text-sm text-white'>01</span>
                </div>
                <button
                    type='button'
                    role='button'
                    aria-label='button'
                    className='w-fit p-3 border border-gray-200 rounded-md text-sm text-gray-400 transition-colors duration-200 ease-linear hover:text-gray-950 cursor-pointer'
                >
                    <FaAnglesRight />
                </button>
            </div>
        </section>
    );
}

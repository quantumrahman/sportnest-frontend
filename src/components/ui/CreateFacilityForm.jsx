'use client';

import Link from 'next/link';

import { FaCaretDown, FaUpload } from 'react-icons/fa6';
import { sportType } from '@/constants/sport.type';
import { ClickAwayListener } from '@mui/material';
import { useRef, useState } from 'react';

export default function CreateFacilityForm() {
    const fileInputRef = useRef(null);

    const [toggleSelect, setToggleSelect] = useState(false);

    const handleToggleSelect = () => {
        setToggleSelect((prev) => !prev);
    };

    const handleChooseFile = () => {
        fileInputRef.current.click();
    };

    return (
        <form>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-x-6'>
                <label htmlFor='facility-name'>
                    <span className='block text-base text-gray-950'>
                        Facility Name
                    </span>
                    <input
                        id='facility-name'
                        type='text'
                        aria-label='input'
                        name='facility-name'
                        placeholder='e.g. Green turf arena'
                        autoComplete='off'
                        className='w-full outline-none bg-transparent border border-gray-300 rounded-xl py-[15px] px-5 text-sm text-gray-950 caret-green-500 mt-3 focus:border-green-500 placeholder:text-gray-400'
                    />
                    <div className='w-full h-6'>
                        <span className='text-sm text-red-500'></span>
                    </div>
                </label>
                <label htmlFor='facility-type'>
                    <span className='block text-base text-gray-950'>
                        Facility Type
                    </span>
                    <input
                        id='facility-type'
                        type='hidden'
                        aria-label='input'
                        name='facility-type'
                        autoComplete='off'
                    />
                    <div className='relative mt-3'>
                        <button
                            type='button'
                            role='button'
                            aria-label='button'
                            onClick={handleToggleSelect}
                            className='w-full bg-transparent border border-gray-300 rounded-xl py-[15px] px-5 flex items-center justify-between cursor-pointer transition-colors duration-200 ease-linear hover:border-green-500'
                        >
                            <span className='text-sm text-gray-400'>
                                Select type sport
                            </span>
                            <FaCaretDown className='text-sm text-gray-400' />
                        </button>
                        {toggleSelect && (
                            <ClickAwayListener onClickAway={handleToggleSelect}>
                                <div className='absolute top-15 left-0 z-20 w-full bg-white border border-gray-300 rounded-xl overflow-hidden'>
                                    {sportType.map((type) => (
                                        <button
                                            key={type.id}
                                            type='button'
                                            role='button'
                                            aria-label='button'
                                            onClick={handleToggleSelect}
                                            className='w-full p-3 flex items-center justify-start transition-colors duration-200 ease-linear cursor-pointer hover:bg-gray-100'
                                        >
                                            <span className='text-sm text-gray-950'>
                                                {type.label}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </ClickAwayListener>
                        )}
                        <div className='w-full h-6'>
                            <span className='text-sm text-red-500'></span>
                        </div>
                    </div>
                </label>
                <label htmlFor='facility-location'>
                    <span className='block text-base text-gray-950'>
                        Location
                    </span>
                    <input
                        id='facility-location'
                        type='text'
                        aria-label='input'
                        name='facility-location'
                        placeholder='e.g. Gulshan, Dhaka'
                        autoComplete='off'
                        className='w-full outline-none bg-transparent border border-gray-300 rounded-xl py-[15px] px-5 text-sm text-gray-950 caret-green-500 mt-3 focus:border-green-500 placeholder:text-gray-400'
                    />
                    <div className='w-full h-6'>
                        <span className='text-sm text-red-500'></span>
                    </div>
                </label>
                <label htmlFor='facility-price'>
                    <span className='block text-base text-gray-950'>
                        Price Per Hour
                    </span>
                    <input
                        id='facility-price'
                        type='text'
                        aria-label='input'
                        name='facility-price'
                        placeholder='e.g. 800'
                        autoComplete='off'
                        pattern='[0-9]*'
                        inputMode='numeric'
                        className='w-full outline-none bg-transparent border border-gray-300 rounded-xl py-[15px] px-5 text-sm text-gray-950 caret-green-500 mt-3 focus:border-green-500 placeholder:text-gray-400'
                    />
                    <div className='w-full h-6'>
                        <span className='text-sm text-red-500'></span>
                    </div>
                </label>
                <label htmlFor='facility-capacity'>
                    <span className='block text-base text-gray-950'>
                        Capacity
                    </span>
                    <input
                        id='facility-capacity'
                        type='text'
                        aria-label='input'
                        name='facility-capacity'
                        placeholder='e.g. 22'
                        autoComplete='off'
                        pattern='[0-9]*'
                        inputMode='numeric'
                        className='w-full outline-none bg-transparent border border-gray-300 rounded-xl py-[15px] px-5 text-sm text-gray-950 caret-green-500 mt-3 focus:border-green-500 placeholder:text-gray-400'
                    />
                    <div className='w-full h-6'>
                        <span className='text-sm text-red-500'></span>
                    </div>
                </label>
                <label htmlFor='facility-slots'>
                    <span className='block text-base text-gray-950'>
                        Available Time Slots
                    </span>
                    <input
                        id='facility-slots'
                        type='text'
                        aria-label='input'
                        name='facility-slots'
                        placeholder='e.g. 6AM-1PM, 4PM-7PM'
                        autoComplete='off'
                        className='w-full outline-none bg-transparent border border-gray-300 rounded-xl py-[15px] px-5 text-sm text-gray-950 caret-green-500 mt-3 focus:border-green-500 placeholder:text-gray-400'
                    />
                    <div className='w-full h-6'>
                        <span className='text-sm text-red-500'></span>
                    </div>
                </label>
                <label htmlFor='facility-image' className='md:col-span-2'>
                    <span className='block text-base text-gray-950'>
                        Facility Image
                    </span>
                    <input
                        id='facility-image'
                        type='file'
                        aria-label='input'
                        name='facility-image'
                        ref={fileInputRef}
                        className='hidden'
                    />
                    <div className='w-full h-[200px] bg-transparent border border-gray-300 rounded-xl mt-3 flex items-center justify-center transition-colors duration-200 ease-linear hover:border-green-500'>
                        <div className='w-full text-center flex items-center justify-center flex-col gap-3'>
                            <button
                                type='button'
                                role='button'
                                aria-label='button'
                                onClick={handleChooseFile}
                                className='size-12 bg-green-100 rounded-full flex items-center justify-center cursor-pointer'
                            >
                                <FaUpload className='text-green-500' />
                            </button>
                            <span className='text-sm text-gray-400'>
                                Browse to upload facility image
                            </span>
                        </div>
                    </div>
                    <div className='w-full h-6'>
                        <span className='text-sm text-red-500'></span>
                    </div>
                </label>
                <label htmlFor='facility-description' className='md:col-span-2'>
                    <span className='block text-base text-gray-950'>
                        Description
                    </span>
                    <textarea
                        id='facility-description'
                        role='textbox'
                        aria-label='textarea'
                        name='facility-description'
                        placeholder='Describe your facility - amenities, rules, parking, etc.'
                        rows={5}
                        className='w-full bg-transparent border border-gray-300 rounded-xl resize-none py-[15px] px-5 mt-3 outline-none focus:border-green-500 text-sm text-gray-950 caret-green-500 placeholder:text-gray-400'
                    />
                    <div className='w-full h-6'>
                        <span className='text-sm text-red-500'></span>
                    </div>
                </label>
                <label htmlFor='owner-email'>
                    <span className='block text-base text-gray-950'>
                        Location
                    </span>
                    <input
                        id='owner-email'
                        type='text'
                        aria-label='input'
                        name='owner-email'
                        defaultValue={'rakibulrahman.dev@gmail.com'}
                        autoComplete='off'
                        readOnly
                        className='w-full outline-none bg-transparent border border-gray-300 rounded-xl py-[15px] px-5 text-sm text-gray-950 caret-green-500 mt-3 focus:border-green-500 placeholder:text-gray-400'
                    />
                    <div className='w-full h-6'>
                        <span className='text-sm text-red-500'></span>
                    </div>
                </label>
            </div>
            <div className='w-full flex items-center justify-start flex-col md:flex-row gap-3 md:gap-5'>
                <button
                    type='submit'
                    role='button'
                    aria-label='button'
                    className='w-full md:w-fit py-[15px] px-8 bg-green-500 rounded-xl text-base text-white cursor-pointer transition-colors duration-200 ease-linear hover:bg-green-400 mt-2'
                >
                    Publish Facility
                </button>
                <Link
                    href={'/manage-facilities'}
                    className='w-full flex items-center justify-center md:w-fit py-[15px] px-8 bg-red-500 rounded-xl text-base text-white cursor-pointer transition-colors duration-200 ease-linear hover:bg-red-400 mt-2'
                >
                    Cancel
                </Link>
            </div>
        </form>
    );
}

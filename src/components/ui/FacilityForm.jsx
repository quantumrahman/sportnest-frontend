'use client';

import Link from 'next/link';

import { ListBox, Select } from '@heroui/react';
import { FaUpload } from 'react-icons/fa6';
import { sportType } from '@/constants/sport.type';
import { useRef } from 'react';

export default function FacilityForm() {
    const fileInputRef = useRef(null);

    const handleChooseFile = () => {
        fileInputRef.current.click();
    };

    return (
        <form>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-x-6'>
                <label htmlFor='facility-name'>
                    <span className='block text-sm text-gray-950 md:text-base'>
                        Facility Name
                    </span>
                    <input
                        id='facility-name'
                        type='text'
                        aria-label='input'
                        name='facility-name'
                        placeholder='e.g. Green turf arena'
                        autoComplete='off'
                        className='w-full outline-none bg-transparent border border-gray-200 rounded-md py-4 px-5 text-sm text-gray-950 caret-green-500 mt-3 focus:border-green-500 placeholder:text-gray-400'
                    />
                    <div className='w-full h-6'>
                        <span className='text-sm text-red-500'></span>
                    </div>
                </label>
                <label htmlFor='facility-type'>
                    <span className='block text-sm text-gray-950 md:text-base'>
                        Facility type
                    </span>
                    <Select
                        id='facility-type'
                        fullWidth
                        placeholder='Select sport type'
                        className='placeholder:text-gray-400'
                    >
                        <Select.Trigger className='bg-transparent border border-gray-200 rounded-md py-4 px-5 shadow-none hover:border-green-500 focus:border-green-500 outline-none mt-[11.5px]'>
                            <Select.Value className='text-sm text-gray-950' />
                            {/* <Select.Indicator /> */}
                        </Select.Trigger>
                        <Select.Popover className='border border-gray-200 rounded-md bg-white shadow-none'>
                            <ListBox className='p-0'>
                                {sportType.map((sport) => (
                                    <ListBox.Item
                                        key={sport.id}
                                        id={sport.sport}
                                        textValue={sport.label}
                                        className='w-full hover:bg-gray-50 rounded-none py-3 px-4 transform translate-0'
                                    >
                                        {sport.label}
                                    </ListBox.Item>
                                ))}
                            </ListBox>
                        </Select.Popover>
                    </Select>
                    <div className='w-full h-6'>
                        <span className='text-sm text-red-500'></span>
                    </div>
                </label>
                <label htmlFor='facility-location'>
                    <span className='block text-sm text-gray-950 md:text-base'>
                        Location
                    </span>
                    <input
                        id='facility-location'
                        type='text'
                        aria-label='input'
                        name='facility-location'
                        placeholder='e.g. Gulshan, Dhaka'
                        autoComplete='off'
                        className='w-full outline-none bg-transparent border border-gray-200 rounded-md py-4 px-5 text-sm text-gray-950 caret-green-500 mt-3 focus:border-green-500 placeholder:text-gray-400'
                    />
                    <div className='w-full h-6'>
                        <span className='text-sm text-red-500'></span>
                    </div>
                </label>
                <label htmlFor='facility-price'>
                    <span className='block text-sm text-gray-950 md:text-base'>
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
                        className='w-full outline-none bg-transparent border border-gray-200 rounded-md py-4 px-5 text-sm text-gray-950 caret-green-500 mt-3 focus:border-green-500 placeholder:text-gray-400'
                    />
                    <div className='w-full h-6'>
                        <span className='text-sm text-red-500'></span>
                    </div>
                </label>
                <label htmlFor='facility-capacity'>
                    <span className='block text-sm text-gray-950 md:text-base'>
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
                        className='w-full outline-none bg-transparent border border-gray-200 rounded-md py-4 px-5 text-sm text-gray-950 caret-green-500 mt-3 focus:border-green-500 placeholder:text-gray-400'
                    />
                    <div className='w-full h-6'>
                        <span className='text-sm text-red-500'></span>
                    </div>
                </label>
                <label htmlFor='facility-slots'>
                    <span className='block text-sm text-gray-950 md:text-base'>
                        Available Time Slots
                    </span>
                    <input
                        id='facility-slots'
                        type='text'
                        aria-label='input'
                        name='facility-slots'
                        placeholder='e.g. 6AM-1PM, 4PM-7PM'
                        autoComplete='off'
                        className='w-full outline-none bg-transparent border border-gray-200 rounded-md py-4 px-5 text-sm text-gray-950 caret-green-500 mt-3 focus:border-green-500 placeholder:text-gray-400'
                    />
                    <div className='w-full h-6'>
                        <span className='text-sm text-red-500'></span>
                    </div>
                </label>
                <label htmlFor='facility-image' className='md:col-span-2'>
                    <span className='block text-sm text-gray-950 md:text-base'>
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
                    <div className='w-full h-[200px] bg-transparent border border-gray-200 rounded-md mt-3 flex items-center justify-center transition-colors duration-200 ease-linear hover:border-green-500'>
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
                    <span className='block text-sm text-gray-950 md:text-base'>
                        Description
                    </span>
                    <textarea
                        id='facility-description'
                        role='textbox'
                        aria-label='textarea'
                        name='facility-description'
                        placeholder='Describe your facility - amenities, rules, parking, etc.'
                        rows={5}
                        className='w-full bg-transparent border border-gray-200 rounded-md resize-none py-4 px-5 mt-3 outline-none focus:border-green-500 text-sm text-gray-950 caret-green-500 placeholder:text-gray-400'
                    />
                    <div className='w-full h-6'>
                        <span className='text-sm text-red-500'></span>
                    </div>
                </label>
                <label htmlFor='owner-email'>
                    <span className='block text-sm text-gray-950 md:text-base'>
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
                        className='w-full outline-none bg-gray-50 border border-gray-200 rounded-md py-4 px-5 text-sm text-gray-950 caret-green-500 mt-3 cursor-no-drop placeholder:text-gray-400'
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
                    className='w-full py-4 px-8 bg-green-500 rounded-md text-sm text-white cursor-pointer transition-colors duration-200 ease-linear hover:bg-green-400 mt-2 md:w-fit md:text-base'
                >
                    Publish Facility
                </button>
                <Link
                    href={'/manage-facilities'}
                    className='w-full flex items-center justify-center  py-4 px-8 bg-red-500 rounded-md text-sm text-white cursor-pointer transition-colors duration-200 ease-linear hover:bg-red-400 mt-2 md:w-fit md:text-base'
                >
                    Cancel
                </Link>
            </div>
        </form>
    );
}

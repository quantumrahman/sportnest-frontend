'use client';

import { DateField, Label, Description, FieldError } from '@heroui/react';

export default function BookingForm() {
    return (
        <form>
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
            <label htmlFor='booking-date'>
                <span className='block text-sm text-gray-950 mb-3 md:text-base'>
                    Booking Date
                </span>
                <DateField>
                    <DateField.Group
                        id='booking-date'
                        className='w-full h-[54px] border border-gray-200 rounded-md px-2 flex items-center outline-none ring-0 shadow-none focus:outline-none focus:ring-0 focus-within:border-green-500 focus-within:outline-none focus-within:ring-0 hover:bg-transparent hover:border-green-500'
                    >
                        <DateField.Input className='flex w-full items-center gap-1 outline-none text-sm text-gray-950 caret-green-500'>
                            {(segment) => (
                                <DateField.Segment
                                    segment={segment}
                                    className='rounded-sm outline-none data-[placeholder]:text-gray-400 data-[focused]:bg-green-100 data-[focused]:text-green-700'
                                />
                            )}
                        </DateField.Input>
                    </DateField.Group>
                </DateField>
                <div className='w-full h-6'>
                    <span className='text-sm text-red-500'></span>
                </div>
            </label>
            <label htmlFor='time-slot'>
                <span className='block text-sm text-gray-950 md:text-base'>
                    Time Slot
                </span>
                <input
                    id='time-slot'
                    type='text'
                    aria-label='input'
                    name='time-slot'
                    placeholder='e.g. 8AM-10AM'
                    autoComplete='off'
                    className='w-full outline-none bg-transparent border border-gray-200 rounded-md py-4 px-5 text-sm text-gray-950 caret-green-500 mt-3 focus:border-green-500 placeholder:text-gray-400'
                />
                <div className='w-full h-6'>
                    <span className='text-sm text-red-500'></span>
                </div>
            </label>
            <label htmlFor='hour'>
                <span className='block text-sm text-gray-950 md:text-base'>
                    Hours
                </span>
                <input
                    id='hour'
                    type='text'
                    aria-label='input'
                    name='hour'
                    placeholder='e.g. 1 Hours'
                    autoComplete='off'
                    className='w-full outline-none bg-transparent border border-gray-200 rounded-md py-4 px-5 text-sm text-gray-950 caret-green-500 mt-3 focus:border-green-500 placeholder:text-gray-400'
                />
                <div className='w-full h-6'>
                    <span className='text-sm text-red-500'></span>
                </div>
            </label>
            <button
                type='submit'
                role='button'
                aria-label='button'
                className='w-full py-4 px-8 bg-green-500 rounded-md text-sm text-white cursor-pointer transition-colors duration-200 ease-linear hover:bg-green-400 mt-2 md:text-base'
            >
                Book
            </button>
        </form>
    );
}

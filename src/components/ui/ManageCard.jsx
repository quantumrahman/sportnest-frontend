import Link from 'next/link';

import { FaRegEdit } from 'react-icons/fa';
import {
    FaCalendarDays,
    FaDollarSign,
    FaLocationCrosshairs,
    FaRegTrashCan,
    FaUser,
} from 'react-icons/fa6';

export default function ManageCard() {
    return (
        <article className='w-full bg-white border border-gray-300 rounded-xl overflow-hidden transition-transform duration-200 ease-linear flex flex-col md:flex-row hover:-translate-y-1'>
            <div className='aspect-video md:w-full md:max-w-[250px] bg-gray-100 relative'>
                <div className='w-fit flex items-center justify-center gap-2 absolute top-4 right-4 md:hidden'>
                    <Link
                        href={`/facility/update/${'update'}`}
                        className='text-sm text-green-500 bg-green-100 rounded-full py-1 px-2.5 flex items-center justify-center gap-2 cursor-pointer transition-colors duration-200 ease-linear hover:bg-green-200'
                    >
                        <FaRegEdit />
                        Edit
                    </Link>
                    <button className='text-sm text-red-500 bg-red-100 rounded-full py-1 px-2.5 flex items-center justify-center gap-2 cursor-pointer transition-colors duration-200 ease-linear hover:bg-red-200'>
                        <FaRegTrashCan />
                        Delete
                    </button>
                </div>
            </div>
            <div className='w-full p-4'>
                <div className='w-full flex justify-between gap-4'>
                    <div className='w-fit'>
                        <h1 className='text-lg text-gray-950 font-medium'>
                            Green Football Turf Arena
                        </h1>
                        <div className='flex items-center gap-2'>
                            <FaLocationCrosshairs className='text-sm text-gray-500' />
                            <span className='text-sm text-gray-500'>
                                Gulshan, Dhaka
                            </span>
                        </div>
                    </div>
                    <div className='w-fit hidden md:flex items-center gap-2'>
                        <button className='text-sm text-green-500 bg-green-100 rounded-full py-1 px-2.5 flex items-center justify-center gap-2 cursor-pointer transition-colors duration-200 ease-linear hover:bg-green-200'>
                            <FaRegEdit />
                            Edit
                        </button>
                        <button className='text-sm text-red-500 bg-red-100 rounded-full py-1 px-2.5 flex items-center justify-center gap-2 cursor-pointer transition-colors duration-200 ease-linear hover:bg-red-200'>
                            <FaRegTrashCan />
                            Delete
                        </button>
                    </div>
                </div>
                <div className='w-full mt-4 flex items-center gap-2 flex-wrap'>
                    <div className='flex items-center gap-2'>
                        <FaCalendarDays className='text-sm text-green-500 mb-0.5' />
                        <p className='text-sm text-gray-500'>
                            Date:{' '}
                            <span className='text-gray-950'>15 June, 2026</span>
                        </p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaUser className='text-sm text-green-500 mb-0.5' />
                        <p className='text-sm text-gray-500'>
                            Capacity:{' '}
                            <span className='text-gray-950'>22 players</span>
                        </p>
                    </div>
                </div>
                <div className='w-full h-px bg-gray-300 my-4'></div>
                <div className='w-full flex items-center justify-between'>
                    <h3 className='text-xl font-semibold text-green-500 flex items-center justify-center'>
                        <FaDollarSign className='mb-0.5' />
                        800
                    </h3>
                    <Link
                        href={`/facility/details/${'details'}`}
                        className='w-fit py-3 px-4 bg-green-500 text-sm text-white rounded-lg transition-colors duration-200 ease-linear hover:bg-green-400'
                    >
                        See Details
                    </Link>
                </div>
            </div>
        </article>
    );
}

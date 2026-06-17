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
        <article className='w-full bg-white border border-gray-200 rounded-md overflow-hidden transition-transform duration-200 ease-linear flex flex-col hover:-translate-y-1 md:flex-row'>
            <div className='aspect-video bg-gray-100 relative md:w-full md:max-w-[250px]'>
                <div className='w-fit flex items-center justify-center gap-2 absolute top-4 right-4 md:hidden'>
                    <button className='bg-orange-50 text-sm text-orange-500 rounded-full py-1 px-2.5 flex items-center justify-center gap-2 cursor-pointer transition-colors duration-200 ease-linear hover:bg-orange-100'>
                        <FaRegEdit />
                        Edit
                    </button>
                    <button className='bg-red-50 text-sm text-red-500 rounded-full py-1 px-2.5 flex items-center justify-center gap-2 cursor-pointer transition-colors duration-200 ease-linear hover:bg-red-100'>
                        <FaRegTrashCan />
                        Delete
                    </button>
                </div>
            </div>
            <div className='w-full p-4'>
                <div className='w-full flex justify-between gap-3'>
                    <div className='w-fit'>
                        <h1 className='text-lg text-gray-950 font-medium md:text-xl'>
                            Green Football Turf Arena
                        </h1>
                        <div className='flex items-center gap-2 mt-2'>
                            <FaLocationCrosshairs className='text-sm text-gray-500' />
                            <span className='text-sm text-gray-500'>
                                Gulshan, Dhaka
                            </span>
                        </div>
                    </div>
                    <div className='w-fit hidden gap-2 md:flex lg:items-center'>
                        <button className='w-fit h-fit bg-orange-50 text-sm text-orange-500 rounded-full py-1 px-2.5 flex items-center justify-center gap-2 cursor-pointer transition-colors duration-200 ease-linear hover:bg-orange-100'>
                            <FaRegEdit />
                            Edit
                        </button>
                        <button className='w-fit h-fit bg-red-50 text-sm text-red-500 rounded-full py-1 px-2.5 flex items-center justify-center gap-2 cursor-pointer transition-colors duration-200 ease-linear hover:bg-red-100'>
                            <FaRegTrashCan />
                            Delete
                        </button>
                    </div>
                </div>
                <div className='w-full mt-4 flex flex-wrap items-center gap-2'>
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
                <div className='w-full h-px bg-gray-200 my-4'></div>
                <div className='w-full flex items-center justify-between'>
                    <h3 className='text-xl font-semibold text-green-500 flex items-center justify-center'>
                        <FaDollarSign className='mb-0.5' />
                        800
                    </h3>
                    <Link
                        href={`/facility/details/${'details'}`}
                        className='w-fit p-3 bg-green-500 text-sm text-white rounded-md transition-colors duration-200 ease-linear hover:bg-green-400'
                    >
                        See Details
                    </Link>
                </div>
            </div>
        </article>
    );
}

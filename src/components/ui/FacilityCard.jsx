import Link from 'next/link';

import { FaLocationCrosshairs, FaDollarSign } from 'react-icons/fa6';

export default function FacilityCard() {
    return (
        <article className='w-full bg-white border border-gray-200 rounded-md overflow-hidden transition-transform duration-200 ease-linear hover:-translate-y-1'>
            <div className='aspect-video bg-gray-100 relative overflow-hidden'></div>
            <div className='w-full flex flex-col items-center justify-center p-4'>
                <div className='w-full'>
                    <span className='text-xs font-medium text-green-500 uppercase'>
                        Football
                    </span>
                    <h1 className='text-lg font-medium capitalize mt-2 md:text-xl'>
                        Green Football Turf Arena
                    </h1>
                </div>
                <div className='w-full flex items-center gap-2 mt-1.5'>
                    <FaLocationCrosshairs className='text-sm text-gray-500' />
                    <span className='text-sm text-gray-500'>
                        Gulshan, Dhaka
                    </span>
                </div>
                <div className='w-full h-px bg-gray-200 my-4'></div>
                <div className='w-full flex items-center justify-between gap-3'>
                    <div className='w-fit flex justify-center'>
                        <h3 className='text-xl font-semibold text-green-500 flex items-center justify-center'>
                            <FaDollarSign className='mb-0.5' />
                            800
                        </h3>
                    </div>
                    <Link
                        href={`/facility/details/${'details'}`}
                        className='w-fit p-3 bg-green-500 text-sm text-white rounded-md transition-colors duration-200 ease-linear hover:bg-green-400'
                    >
                        Book Now
                    </Link>
                </div>
            </div>
        </article>
    );
}

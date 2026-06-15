import Link from 'next/link';

import { FaLocationCrosshairs } from 'react-icons/fa6';
import { TbCurrencyTaka } from 'react-icons/tb';

export default function FacilityCard() {
    return (
        <article className='w-full bg-white border border-gray-300 rounded-xl overflow-hidden transition-transform duration-200 ease-linear hover:-translate-y-1'>
            <div className='aspect-video relative overflow-hidden bg-gray-100'></div>
            <div className='w-full flex flex-col items-center justify-center p-4'>
                <div className='w-full'>
                    <span className='text-xs font-medium text-green-500 uppercase'>
                        Football
                    </span>
                    <h1 className='text-lg font-medium capitalize'>
                        Green Football Turf Arena
                    </h1>
                </div>
                <div className='w-full flex items-center gap-2 mt-1'>
                    <FaLocationCrosshairs className='text-sm text-gray-500' />
                    <span className='block text-sm text-gray-500'>
                        Gulshan, Dhaka
                    </span>
                </div>
                <div className='w-full h-px bg-gray-300 my-4'></div>
                <div className='w-full flex items-center justify-between gap-3'>
                    <div className='w-fit flex justify-center'>
                        <TbCurrencyTaka className='text-lg text-green-500 mt-1' />
                        <p className='text-lg font-semibold text-green-500'>
                            800
                            <span className='text-[10px] text-gray-500'>
                                /hr
                            </span>
                        </p>
                    </div>
                    <Link
                        href={`/facility/details/${'hhh'}'`}
                        className='w-fit py-[15px] px-4 bg-green-500 text-sm text-white rounded-lg transition-colors duration-200 ease-linear hover:bg-green-400'
                    >
                        Book Now
                    </Link>
                </div>
            </div>
        </article>
    );
}

import { FaCheck, FaClock, FaLocationDot, FaUser } from 'react-icons/fa6';
import BookingForm from '../ui/BookingForm';

export default function DetailsSection() {
    return (
        <section className='w-full'>
            <div className='aspect-video bg-gray-100 relative overflow-hidden rounded-xl'></div>
            <div className='w-full h-px bg-gray-200 my-8'></div>
            <div className='w-full flex flex-col items-center justify-between gap-4 md:flex-row'>
                <div className='flex-2'>
                    <div className='w-full flex flex-col'>
                        <span className='text-sm md:text-base text-green-500'>
                            Football
                        </span>
                        <h1 className='text-xl md:text-2xl lg:text-3xl font-medium mt-2'>
                            Green Football Turf Arena
                        </h1>
                    </div>
                    <div className='w-full flex items-center flex-wrap gap-3 mt-4'>
                        <div className='flex items-center gap-2'>
                            <FaLocationDot className='text-sm md:text-base text-green-500 mb-0.5' />
                            <p className='text-sm md:text-base text-gray-500'>
                                Location:{' '}
                                <span className='text-gray-950'>
                                    Gulshan, Dhaka
                                </span>
                            </p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaUser className='text-sm md:text-base text-green-500 mb-0.5' />
                            <p className='text-sm md:text-base text-gray-500'>
                                Capacity:{' '}
                                <span className='text-gray-950'>
                                    22 players
                                </span>
                            </p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaClock className='text-sm md:text-base text-green-500 mb-0.5' />
                            <p className='text-sm md:text-base text-gray-500'>
                                Time:{' '}
                                <span className='text-gray-950 uppercase'>
                                    6am-6pm
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className='w-full mt-8'>
                        <h4 className='text-base md:text-lg text-gray-950 font-medium'>
                            Desrciption
                        </h4>
                        <div className='w-full max-w-[50px] h-0.5 bg-green-500 my-2'></div>
                        <p className='text-sm md:text-base text-gray-500 mt-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Rerum nobis ab voluptatibus quo labore
                            suscipit autem consequatur, maxime ipsum est aliquid
                            dolores cupiditate ullam officia reiciendis beatae
                            corrupti soluta. Animi ipsa voluptas voluptate,
                            temporibus assumenda maiores optio aperiam inventore
                            sed?
                        </p>
                    </div>
                    <div className='w-full mt-8'>
                        <h4 className='text-base md:text-lg text-gray-950 font-medium'>
                            Amenities
                        </h4>
                        <div className='w-full max-w-[50px] h-0.5 bg-green-500 my-2'></div>
                        <div className='w-full flex flex-col gap-1 mt-5'>
                            <div className='w-fit flex items-center gap-2'>
                                <FaCheck className='text-base text-green-500' />
                                <span className='text-sm md:text-base text-gray-500'>
                                    Parking Area
                                </span>
                            </div>
                            <div className='w-fit flex items-center gap-2'>
                                <FaCheck className='text-base text-green-500' />
                                <span className='text-sm md:text-base text-gray-500'>
                                    Changing Room
                                </span>
                            </div>
                            <div className='w-fit flex items-center gap-2'>
                                <FaCheck className='text-base text-green-500' />
                                <span className='text-sm md:text-base text-gray-500'>
                                    Field Light
                                </span>
                            </div>
                            <div className='w-fit flex items-center gap-2'>
                                <FaCheck className='text-base text-green-500' />
                                <span className='text-sm md:text-base text-gray-500'>
                                    Restaurants
                                </span>
                            </div>
                            <div className='w-fit flex items-center gap-2'>
                                <FaCheck className='text-base text-green-500' />
                                <span className='text-sm md:text-base text-gray-500'>
                                    First Aid
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full mt-8 md:mt-0 md:flex-1 bg-white border border-gray-200 rounded-xl p-4'>
                    <div className='w-full mb-4'>
                        <h3 className='text-xl text-gray-950 font-semibold'>
                            Book This Facility
                        </h3>
                    </div>
                    <BookingForm />
                </div>
            </div>
        </section>
    );
}

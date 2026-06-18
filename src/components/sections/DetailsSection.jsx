import { FaCheck, FaClock, FaLocationDot, FaUser } from 'react-icons/fa6';
import BookingForm from '../ui/BookingForm';

export default function DetailsSection() {
    return (
        <section className='w-full'>
            <div className='aspect-video bg-gray-100 relative overflow-hidden rounded-md'></div>
            <div className='w-full h-px bg-gray-200 my-8'></div>
            <div className='w-full flex flex-col items-center justify-between gap-10 lg:gap-5 lg:flex-row'>
                <div className='flex-2'>
                    <div className='w-full flex flex-col'>
                        <span className='text-sm md:text-base text-green-500'>
                            Football
                        </span>
                        <h1 className='text-xl font-medium mt-2 md:text-2xl lg:text-3xl'>
                            Green Football Turf Arena
                        </h1>
                    </div>
                    <div className='w-full flex items-center flex-wrap gap-3 mt-4'>
                        <div className='flex items-center gap-2'>
                            <FaLocationDot className='text-sm text-green-500 mb-0.5 md:text-base' />
                            <p className='text-sm text-gray-500 md:text-base'>
                                Location:{' '}
                                <span className='text-gray-950'>
                                    Gulshan, Dhaka
                                </span>
                            </p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaUser className='text-sm text-green-500 mb-0.5 md:text-base' />
                            <p className='text-sm text-gray-500 md:text-base'>
                                Capacity:{' '}
                                <span className='text-gray-950'>
                                    22 players
                                </span>
                            </p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaClock className='text-sm text-green-500 mb-0.5 md:text-base' />
                            <p className='text-sm text-gray-500 md:text-base'>
                                Time:{' '}
                                <span className='text-gray-950 uppercase'>
                                    6am-6pm
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className='w-full mt-8'>
                        <h4 className='text-base text-gray-950 font-medium md:text-lg'>
                            Desrciption
                        </h4>
                        <div className='w-full max-w-[50px] h-0.5 bg-green-500 my-2'></div>
                        <p className='text-sm text-gray-500 leading-relaxed mt-5 md:text-base'>
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
                        <h4 className='text-base text-gray-950 font-medium md:text-lg'>
                            Amenities
                        </h4>
                        <div className='w-full max-w-[50px] h-0.5 bg-green-500 my-2'></div>
                        <div className='w-full flex flex-col gap-1 mt-5'>
                            <div className='w-fit flex items-center gap-2'>
                                <FaCheck className='text-base text-green-500' />
                                <span className='text-sm text-gray-500 md:text-base'>
                                    Parking Area
                                </span>
                            </div>
                            <div className='w-fit flex items-center gap-2'>
                                <FaCheck className='text-base text-green-500' />
                                <span className='text-sm text-gray-500 md:text-base'>
                                    Changing Room
                                </span>
                            </div>
                            <div className='w-fit flex items-center gap-2'>
                                <FaCheck className='text-base text-green-500' />
                                <span className='text-sm text-gray-500 md:text-base'>
                                    Field Light
                                </span>
                            </div>
                            <div className='w-fit flex items-center gap-2'>
                                <FaCheck className='text-base text-green-500' />
                                <span className='text-sm text-gray-500 md:text-base'>
                                    Restaurants
                                </span>
                            </div>
                            <div className='w-fit flex items-center gap-2'>
                                <FaCheck className='text-base text-green-500' />
                                <span className='text-sm text-gray-500 md:text-base'>
                                    First Aid
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full mt-8 bg-white border border-gray-200 rounded-md p-4 md:mt-0 md:flex-1'>
                    <div className='w-full mb-4'>
                        <h3 className='text-xl text-gray-950 font-semibold'>
                            Book This Facility
                        </h3>
                    </div>
                    <BookingForm />
                    <span className='text-sm text-gray-400 block text-center mt-3'>
                        Free cancellation up to 2 hours before
                    </span>
                </div>
            </div>
        </section>
    );
}

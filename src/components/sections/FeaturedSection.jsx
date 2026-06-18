import FacilityCard from '../ui/FacilityCard';

export default function FeaturedSection() {
    return (
        <div className='w-full px-5 py-10 md:px-10 md:py-20'>
            <div className='w-full max-w-5xl mx-auto'>
                <div className='w-full flex flex-col justify-between gap-y-8 sm:flex-row sm:items-center sm:gap-x-5'>
                    <div className='flex flex-col justify-start'>
                        <h1 className='text-2xl text-gray-950 font-medium md:text-3xl'>
                            Featured Facility
                        </h1>
                        <div className='w-[70px] h-0.5 bg-green-500 my-4'></div>
                        <p className='text-sm text-gray-500 md:text-base'>
                            Handpicked venues across Dhaka — rated by athletes
                            like you
                        </p>
                    </div>
                    <button
                        type='submit'
                        role='button'
                        aria-label='button'
                        className='w-full p-3 bg-green-500 text-sm text-white rounded-md transition-colors duration-200 ease-linear hover:bg-green-400 cursor-pointer sm:w-fit'
                    >
                        View All
                    </button>
                </div>
                <div className='w-full grid grid-cols-1 gap-6 mt-15 md:grid-cols-2 lg:grid-cols-3'>
                    <FacilityCard />
                    <FacilityCard />
                    <FacilityCard />
                </div>
            </div>
        </div>
    );
}

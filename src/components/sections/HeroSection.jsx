import Link from 'next/link';

export default function HeroSection() {
    return (
        <div
            className={`w-full min-h-[800px] px-5 py-10 bg-[url('/images/hero-image.png')] bg-no-repeat bg-cover bg-center relative flex items-center md:px-10 md:py-20`}
        >
            <div className='absolute inset-0 bg-linear-to-r from-gray-950 to-transparent z-10'></div>
            <div className='w-full relative z-20'>
                <div className='w-full max-w-[1300px] mx-auto'>
                    <span className='w-fit h-fit bg-green-500/10 text-xs text-green-500 rounded-full py-2 px-2.5 flex items-center justify-center gap-2 md:text-sm'>
                        <div className='size-2 bg-green-500 rounded-full'></div>
                        {`Bangladesh's #1 Sport Booking Platform`}
                    </span>
                    <h1 className='w-full max-w-[600px] text-[40px] text-white font-semibold leading-tight mt-5 md:text-6xl md:mt-7 lg:text-7xl'>
                        Find & Book{' '}
                        <span className='text-green-500'>
                            Sports Facilities
                        </span>{' '}
                        In Minutes
                    </h1>
                    <p className='w-full max-w-[600px] text-sm text-gray-400 my-5 md:text-base lg:my-8'>
                        Discover and reserve football turfs, badminton courts,
                        swimming lanes, and tennis courts — instantly, anytime.
                    </p>
                    <div className='flex items-center gap-4'>
                        <Link
                            href={'/facilities'}
                            className='w-fit py-4 px-6 bg-green-500 rounded-md text-sm text-white cursor-pointer transition-colors duration-200 ease-linear hover:bg-green-400 md:px-8 md:text-base'
                        >
                            Browse Facilities
                        </Link>
                        <Link
                            href={'/auth/login'}
                            className='w-fit py-4 px-6 bg-transparent border border-gray-800 rounded-md text-sm text-white cursor-pointer transition-colors duration-200 ease-linear hover:border-gray-700 md:px-8 md:text-base'
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
                <div className='w-full max-w-5xl mx-auto p-4 rounded-md grid grid-cols-2 gap-10 mt-15 md:grid-cols-4 lg:mt-[125px]'>
                    <div className='flex items-center justify-center flex-col'>
                        <h3 className='text-2xl text-white font-semibold tracking-tight lg:text-3xl'>
                            500<span className='text-green-500'>K</span>
                        </h3>
                        <p className='text-base text-gray-400'>Facilities</p>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <h3 className='text-2xl text-white font-semibold tracking-tight lg:text-3xl'>
                            100<span className='text-green-500'>K</span>
                        </h3>
                        <p className='text-base text-gray-400'>Bookings</p>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <h3 className='text-2xl text-white font-semibold tracking-tight lg:text-3xl'>
                            50<span className='text-green-500'>K</span>
                        </h3>
                        <p className='text-base text-gray-400'>Players</p>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <h3 className='text-2xl text-white font-semibold tracking-tight lg:text-3xl'>
                            99<span className='text-green-500'>%</span>
                        </h3>
                        <p className='text-base text-gray-400'>Success Rate</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

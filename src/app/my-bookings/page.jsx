import BookingsSection from '@/components/sections/BookingsSection';

export const metadata = {
    title: 'My Bookings - SportNest play and enjoy',
    description: '',
};

export default function MyBookingPage() {
    return (
        <section
            className={`w-full min-h-[calc(100vh-333px)] md:min-h-[calc(100vh-289px)] lg:min-h-[calc(100vh-203px)] px-5 lg:px-10`}
        >
            <div
                className={`w-full min-h-[200px] border-b border-gray-200 flex items-center justify-center lg:min-h-[300px]`}
            >
                <div className='w-full max-w-7xl mx-auto text-center'>
                    <h1 className='text-2xl text-gray-950 lg:text-3xl'>
                        My Bookings
                    </h1>
                    <div className='w-[70px] mx-auto h-0.5 bg-green-500 mt-[30px]'></div>
                </div>
            </div>
            <div className='w-full py-20'>
                <div className='w-full max-w-5xl mx-auto'>
                    <BookingsSection />
                </div>
            </div>
        </section>
    );
}

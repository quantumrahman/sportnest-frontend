import BookingsSection from '@/components/sections/BookingsSection';
import PageHeading from '@/components/ui/PageHeading';

export const metadata = {
    title: 'Bookings - All bookings sports.',
    description: 'Online sport booking facility portal.',
};

export default function BookingPage() {
    return (
        <section className='w-full'>
            <PageHeading title={'Bookings Facilities'} />
            <div className='w-full px-5 py-10 md:py-20 md:px-10'>
                <div className='w-full max-w-5xl mx-auto'>
                    <BookingsSection />
                </div>
            </div>
        </section>
    );
}

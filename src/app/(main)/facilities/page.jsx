import FacilitiesSection from '@/components/sections/FacilitiesSection';
import PageHeading from '@/components/ui/PageHeading';

export const metadata = {
    title: 'Facilities - All sports facilities.',
    description: 'Online sport booking facility portal.',
};

export default function FacilitiesPage() {
    return (
        <section className='w-full'>
            <PageHeading title={'Browse Facilities'} />
            <div className='w-full px-5 py-10 md:px-10 md:py-20'>
                <div className='w-full max-w-5xl mx-auto'>
                    <FacilitiesSection />
                </div>
            </div>
        </section>
    );
}

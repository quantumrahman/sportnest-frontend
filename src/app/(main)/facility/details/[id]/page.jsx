import DetailsSection from '@/components/sections/DetailsSection';
import PageHeading from '@/components/ui/PageHeading';

export default function FacilityDetailsPage() {
    return (
        <section className='w-full'>
            <PageHeading title={'Facility Details'} />
            <div className='w-full px-5 py-10 md:py-20 md:px-10'>
                <div className='w-full max-w-5xl mx-auto'>
                    <DetailsSection />
                </div>
            </div>
        </section>
    );
}

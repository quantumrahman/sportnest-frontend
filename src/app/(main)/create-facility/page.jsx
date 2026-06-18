import FacilityForm from '@/components/ui/FacilityForm';
import PageHeading from '@/components/ui/PageHeading';

export const metadata = {
    title: 'Create Facility - Add new facility.',
    description: 'Online sport booking facility portal.',
};

export default function CreateFacilityPage() {
    return (
        <section className='w-full'>
            <PageHeading title={'Create Facility'} />
            <div className='w-full px-5 py-10 md:px-10 md:py-20'>
                <div className='w-full max-w-5xl mx-auto'>
                    <FacilityForm />
                </div>
            </div>
        </section>
    );
}

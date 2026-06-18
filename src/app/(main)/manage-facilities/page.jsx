import ManageSection from '@/components/sections/ManageSection';
import PageHeading from '@/components/ui/PageHeading';

export const metadata = {
    title: 'Manage Facilities - Manage your facilities.',
    description: 'Online sport booking facility portal.',
};

export default function ManageFacilities() {
    return (
        <section className='w-full'>
            <PageHeading title={'Manage Facilities'} />
            <div className='w-full px-5 py-10 md:px-10 md:py-20'>
                <div className='w-full max-w-5xl mx-auto'>
                    <ManageSection />
                </div>
            </div>
        </section>
    );
}

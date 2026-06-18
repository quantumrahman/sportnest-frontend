import FeaturedSection from '@/components/sections/FeaturedSection';
import WorkSection from '@/components/sections/WorkSection';

export default function HomePage() {
    return (
        <section className='w-full'>
            <FeaturedSection />
            <WorkSection />
        </section>
    );
}

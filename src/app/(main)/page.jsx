import HeroSection from '@/components/sections/HeroSection';
import FeaturedSection from '@/components/sections/FeaturedSection';
import WorkSection from '@/components/sections/WorkSection';
import CategorySection from '@/components/sections/CategorySection';

export default function HomePage() {
    return (
        <section className='w-full'>
            <HeroSection />
            <FeaturedSection />
            <WorkSection />
            <CategorySection />
        </section>
    );
}

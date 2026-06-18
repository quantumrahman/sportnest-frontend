import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

export default function MainLayout({ children }) {
    return (
        <div className='w-full'>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

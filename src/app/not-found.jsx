import Link from 'next/link';
import Header from './components/shared/Header';
import Footer from '@/app/components/shared/Footer';

import { FaArrowRightLong } from 'react-icons/fa6';

export default function NotFoundPage() {
    return (
        <section className={`w-full h-screen flex justify-between flex-col`}>
            <Header />
            <div className='w-full px-5 lg:px-10'>
                <div className='w-full max-w-[1300px] mx-auto flex items-center flex-col'>
                    <h2 className='text-[50px] text-gray-300 lg:text-6xl'>
                        404
                    </h2>
                    <h1 className='text-[35px] text-gray-950 lg:text-[50px] mt-5 max-w-2xl text-center'>
                        The page you were looking for does not exist.{' '}
                    </h1>
                    <Link
                        href={'/'}
                        className='w-fit py-[15px] lg:py-[18px] px-8 bg-transparent border border-gray-950 rounded-xl text-base text-gray-950 flex items-center justify-center gap-3 mt-[50px] group'
                    >
                        Back to home
                        <FaArrowRightLong className='transition-transform duration-200 ease-linear group-hover:translate-x-0.5' />
                    </Link>
                </div>
            </div>
            <Footer />
        </section>
    );
}

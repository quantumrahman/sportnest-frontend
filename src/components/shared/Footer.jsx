import Link from 'next/link';

import { FaXTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className='w-full px-5 lg:px-10'>
            <div className='w-full max-w-[1300px] mx-auto border-t border-gray-200 py-10 flex flex-col items-center justify-center gap-[30px] lg:flex-row lg:justify-between lg:py-5'>
                <div className='w-fit'>
                    <div className='w-full text-center lg:w-fit'>
                        <h1 className='text-2xl text-gray-950 font-semibold'>
                            Sport
                            <span className='text-green-500'>Nest</span>
                        </h1>
                    </div>
                    <div className='flex items-center justify-center flex-wrap gap-5 lg:gap-[30px] mt-5 lg:mt-[30px]'>
                        <span className='text-base text-gray-950 lg:text-lg'>
                            &copy; SportNest {new Date().getFullYear()}
                        </span>
                        <Link
                            href={'/'}
                            className='text-base text-gray-950 lg:text-lg'
                        >
                            Privacy policy
                        </Link>
                        <Link
                            href={'/'}
                            className='text-base text-gray-950 lg:text-lg'
                        >
                            Cookies policy
                        </Link>
                        <Link
                            href={'/'}
                            className='text-base text-gray-950 lg:text-lg'
                        >
                            Terms of use
                        </Link>
                    </div>
                </div>
                <div className='w-fit flex items-center justify-center gap-3'>
                    <Link
                        href={'https://x.com/rrahmandev'}
                        className='size-[30px] bg-transparent border border-gray-950 flex items-center justify-center rounded-lg transition-transform duration-200 ease-linear hover:-translate-y-1'
                    >
                        <FaXTwitter className='text-base text-gray-950' />
                    </Link>
                    <Link
                        href={'https://www.linkedin.com/in/rakibulrahman/'}
                        className='size-[30px] bg-transparent border border-gray-950 flex items-center justify-center rounded-lg transition-transform duration-200 ease-linear hover:-translate-y-1'
                    >
                        <FaLinkedinIn className='text-base text-gray-950' />
                    </Link>
                    <Link
                        href={'/'}
                        className='size-[30px] bg-transparent border border-gray-950 flex items-center justify-center rounded-lg transition-transform duration-200 ease-linear hover:-translate-y-1'
                    >
                        <FaInstagram className='text-base text-gray-950' />
                    </Link>
                </div>
            </div>
        </footer>
    );
}

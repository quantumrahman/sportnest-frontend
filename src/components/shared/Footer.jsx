import Link from 'next/link';

import { FaXTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className='w-full bg-gray-950 px-5 md:px-10'>
            <div className='w-full max-w-[1300px] mx-auto py-10 flex flex-col items-center justify-center gap-[30px] lg:flex-row lg:justify-between'>
                <div className='space-y-5 md:space-y-[30px]'>
                    <div className='w-full text-center lg:text-left'>
                        <h1 className='text-2xl text-white font-semibold'>
                            Sport
                            <span className='text-green-500'>Nest</span>
                        </h1>
                    </div>
                    <div className='flex items-center justify-center flex-wrap gap-5 md:gap-[30px]'>
                        <span className='text-sm text-gray-500'>
                            &copy; SportNest {new Date().getFullYear()}
                        </span>
                        <Link
                            href={'/'}
                            className='text-sm text-gray-500 transition-colors duration-200 ease-linear hover:text-green-500'
                        >
                            Privacy policy
                        </Link>
                        <Link
                            href={'/'}
                            className='text-sm text-gray-500 transition-colors duration-200 ease-linear hover:text-green-500'
                        >
                            Cookies policy
                        </Link>
                        <Link
                            href={'/'}
                            className='text-sm text-gray-500 transition-colors duration-200 ease-linear hover:text-green-500'
                        >
                            Terms of use
                        </Link>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-3'>
                    <Link
                        href={'https://x.com/rrahmandev'}
                        className='size-[32px] bg-gray-900 flex items-center justify-center rounded-md transition-colors duration-200 ease-linear hover:bg-green-500'
                    >
                        <FaXTwitter className='text-sm text-white md:text-base' />
                    </Link>
                    <Link
                        href={'https://www.linkedin.com/in/rakibulrahman/'}
                        className='size-[32px] bg-gray-900 flex items-center justify-center rounded-md transition-colors duration-200 ease-linear hover:bg-green-500'
                    >
                        <FaLinkedinIn className='text-sm text-white md:text-base' />
                    </Link>
                    <Link
                        href={'/'}
                        className='size-[32px] bg-gray-900 flex items-center justify-center rounded-md transition-colors duration-200 ease-linear hover:bg-green-500'
                    >
                        <FaInstagram className='text-sm text-white md:text-base' />
                    </Link>
                </div>
            </div>
        </footer>
    );
}

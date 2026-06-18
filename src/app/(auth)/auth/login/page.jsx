import Link from 'next/link';
import SocialButton from '@/components/ui/SocialButton';
import LoginForm from '@/components/ui/LoginForm';

export const metadata = {
    title: 'Login - Welcome back to SportNest.',
    description: 'Online sport booking facility portal.',
};

export default function LoginPage() {
    return (
        <section className='w-full min-h-screen flex items-center justify-center'>
            <div
                className={`flex-1 min-h-screen bg-[url('/images/auth-image.png')] bg-no-repeat bg-center bg-cover rounded-tr-2xl rounded-br-2xl relative overflow-hidden hidden lg:block`}
            >
                {' '}
                <div className='absolute inset-0 bg-gray-950/20 p-10 z-10'>
                    <Link href={'/'} className='w-fit inline-block'>
                        <h1 className='text-2xl text-white font-semibold'>
                            Sport
                            <span className='text-green-500'>Nest</span>
                        </h1>
                    </Link>
                </div>
            </div>
            <div className='flex-1 flex items-center justify-center'>
                <div className='w-full max-w-[550px] mx-auto px-5 md:px-10'>
                    <div className='w-full flex flex-col text-center gap-8'>
                        <div className='w-full space-y-3 text-center'>
                            <h1 className='text-2xl text-gray-950 font-semibold'>
                                Sport
                                <span className='text-green-500'>Nest</span>
                            </h1>
                            <span className='inline-block text-sm text-gray-500'>
                                No an Account ?{' '}
                                <Link
                                    href={'/auth/register'}
                                    className='text-green-500'
                                >
                                    Register
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-center gap-4 my-5'>
                        <SocialButton />
                    </div>
                    <div className='w-full flex items-center justify-center gap-2'>
                        <div className='w-full h-px bg-gray-200'></div>
                        <span className='text-base text-gray-400'>or</span>
                        <div className='w-full h-px bg-gray-200'></div>
                    </div>
                    <div className='w-full mt-5'>
                        <LoginForm />
                    </div>
                    <span className='text-sm text-gray-500 block text-center mt-10'>
                        &copy; {new Date().getFullYear()} SportNest All rights
                        reserved.
                    </span>
                </div>
            </div>
        </section>
    );
}

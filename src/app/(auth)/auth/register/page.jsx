import Link from 'next/link';
import SocialButton from '@/components/ui/SocialButton';
import RegisterForm from '@/components/ui/RegisterForm';

export const metadata = {
    title: 'Register - Create account on SportNest.',
    description: 'Online sport booking facility portal.',
};

export default function RegisterPage() {
    return (
        <section className='w-full min-h-screen flex items-center justify-center'>
            <div
                className={`w-full min-h-screen bg-[url('/images/auth-image.png')] bg-no-repeat bg-center bg-cover flex-1 rounded-tr-2xl rounded-br-2xl relative overflow-hidden hidden lg:block`}
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
                    <div className='w-full space-y-3 text-center'>
                        <h1 className='text-2xl text-gray-950 font-semibold'>
                            Sport
                            <span className='text-green-500'>Nest</span>
                        </h1>
                        <span className='inline-block text-sm text-gray-500'>
                            Have an Account ?{' '}
                            <Link
                                href={'/auth/login'}
                                className='text-green-500'
                            >
                                Login
                            </Link>
                        </span>
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
                        <RegisterForm />
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

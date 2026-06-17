import Link from 'next/link';
import SocialButton from '@/components/ui/SocialButton';
import LoginForm from '@/components/ui/LoginForm';

export default function LoginPage() {
    return (
        <section className='w-full'>
            <div className='w-full max-w-[550px] mx-auto px-5 lg:px-10'>
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
            </div>
        </section>
    );
}

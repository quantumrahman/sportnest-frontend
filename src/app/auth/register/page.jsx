import Link from 'next/link';
import SocialButton from '@/components/ui/SocialButton';
import RegisterForm from '@/components/ui/RegisterForm';

export default function RegisterPage() {
    return (
        <section className='w-full'>
            <div className='w-full max-w-[550px] mx-auto px-5 md:px-10'>
                <div className='w-full space-y-3 text-center'>
                    <h1 className='text-2xl text-gray-950 font-semibold'>
                        Sport
                        <span className='text-green-500'>Nest</span>
                    </h1>
                    <span className='inline-block text-sm text-gray-500'>
                        Have an Account ?{' '}
                        <Link href={'/auth/login'} className='text-green-500'>
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
            </div>
        </section>
    );
}

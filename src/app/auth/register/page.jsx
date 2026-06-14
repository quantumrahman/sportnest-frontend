import Link from 'next/link';
import SocialButton from '@/components/ui/SocialButton';
import RegisterForm from '@/components/ui/RegisterForm';

export default function RegisterPage() {
    return (
        <section
            className={`w-full min-h-[calc(100vh-333px)] md:min-h-[calc(100vh-289px)] lg:min-h-[calc(100vh-223px)] px-5 lg:px-10 flex items-center justify-center`}
        >
            <div className='w-full max-w-[550px] mx-auto p-[27px]'>
                <div className='w-full flex flex-col text-center gap-8'>
                    <h1 className='text-[35px] text-gray-950 font-medium leading-tight'>
                        Register
                    </h1>
                    <div className='w-full space-y-1'>
                        <h4 className='text-base text-gray-950 lg:text-xl'>
                            Welcome to{' '}
                            <span className='font-semibold'>
                                Sport
                                <span className='text-green-500'>Nest</span>
                            </span>
                        </h4>
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
                </div>
                <div className='w-full flex items-center justify-center gap-4 mt-5'>
                    <SocialButton />
                </div>
                <div className='w-full flex items-center justify-center gap-2 my-4'>
                    <div className='w-full h-px bg-gray-200'></div>
                    <span className='text-base text-gray-400'>or</span>
                    <div className='w-full h-px bg-gray-200'></div>
                </div>
                <div className='w-full'>
                    <RegisterForm />
                </div>
            </div>
        </section>
    );
}

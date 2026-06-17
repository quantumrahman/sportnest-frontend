import { FcGoogle } from 'react-icons/fc';

export default function SocialButton() {
    return (
        <button className='w-full flex items-center justify-center gap-3 p-4 text-sm text-green-500 bg-green-50 rounded-md cursor-pointer transition-colors duration-200 ease-linear hover:bg-green-100 md:gap-5 md:text-base'>
            <FcGoogle className='text-xl md:text-2xl' />
            Sign in with Google
        </button>
    );
}

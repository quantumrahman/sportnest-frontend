import { FcGoogle } from 'react-icons/fc';

export default function SocialButton() {
    return (
        <button className='w-full flex items-center justify-center gap-3 md:gap-5 text-xs text-green-500 md:text-base bg-green-100 rounded-xl cursor-pointer py-[15px] px-8'>
            <FcGoogle className='text-xl md:text-2xl' />
            Sign in with Google
        </button>
    );
}

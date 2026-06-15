import Navbar from '../ui/Navbar';

export default function Header() {
    return (
        <header className='w-full py-5 px-5 md:px-10 sticky top-0 left-0 bg-white z-30'>
            <div className='w-full max-w-[1300px] mx-auto flex items-center justify-between'>
                <div className='w-fit'>
                    <h1 className='text-2xl text-gray-950 font-semibold'>
                        Sport<span className='text-green-500'>Nest</span>
                    </h1>
                </div>
                <Navbar />
            </div>
        </header>
    );
}

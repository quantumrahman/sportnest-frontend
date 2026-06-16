import Navbar from '../ui/Navbar';

export default function Header() {
    return (
        <header className='w-full bg-gray-950 py-4 px-5 md:px-10 sticky top-0 left-0 z-30'>
            <div className='w-full max-w-[1300px] mx-auto flex items-center justify-between'>
                <div className='w-fit'>
                    <h1 className='text-2xl text-white font-semibold'>
                        Sport<span className='text-green-500'>Nest</span>
                    </h1>
                </div>
                <Navbar />
            </div>
        </header>
    );
}

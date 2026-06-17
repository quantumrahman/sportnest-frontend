export default function PageHeading({ title }) {
    return (
        <div
            className={`w-full min-h-[200px] flex items-center justify-center bg-[url('/images/page-image.png')] bg-no-repeat bg-cover bg-center relative md:min-h-[300px]`}
        >
            <div className='absolute inset-0 bg-gray-950/50 z-10'></div>
            <div className='w-full max-w-7xl mx-auto text-center relative z-20'>
                <h1 className='text-2xl text-white md:text-3xl'>{title}</h1>
                <div className='w-[70px] mx-auto h-0.5 bg-green-500 mt-[30px]'></div>
            </div>
        </div>
    );
}

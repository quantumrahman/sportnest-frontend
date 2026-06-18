export default function WorkCard({ work }) {
    return (
        <article className='group relative overflow-hidden rounded-md bg-white p-4 transition-transform duration-200 ease-linear hover:-translate-y-1'>
            <span className='absolute right-6 top-4 text-6xl font-bold text-green-100'>
                0{work.id}
            </span>
            <div className='relative z-10 flex h-12 w-12 items-center justify-center rounded-md bg-green-500'>
                {work.icon}
            </div>
            <div className='relative z-10 mt-8'>
                <h3 className='text-xl  text-gray-950 font-medium'>
                    {work.title}
                </h3>
                <p className='mt-2 text-sm text-gray-400 md:text-base'>
                    {work.label}
                </p>
            </div>
        </article>
    );
}

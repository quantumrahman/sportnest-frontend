import WorkCard from '../ui/WorkCard';

import { workData } from '@/constants/work.data';

export default function WorkSection() {
    return (
        <div className='w-full bg-gray-50 px-5 py-10 md:px-10 md:py-20'>
            <div className='w-full max-w-5xl mx-auto'>
                <div className='w-full flex flex-col justify-between gap-y-8 sm:flex-row sm:items-center sm:gap-x-5'>
                    <div className='flex flex-col justify-start'>
                        <h1 className='text-2xl text-gray-950 font-medium md:text-3xl'>
                            How SportNest Works
                        </h1>
                        <div className='w-[70px] h-0.5 bg-green-500 mt-4'></div>
                    </div>
                </div>
                <div className='w-full grid grid-cols-1 gap-6 mt-15 md:grid-cols-2'>
                    {workData.map((work) => (
                        <WorkCard key={work.id} work={work} />
                    ))}
                </div>
            </div>
        </div>
    );
}

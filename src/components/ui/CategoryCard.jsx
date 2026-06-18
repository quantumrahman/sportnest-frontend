export default function CategoryCard({ cate }) {
    return (
        <div className='w-full overflow-hidden rounded-md bg-transparent border border-gray-200 p-4'>
            <div className='flex flex-col items-center text-center'>
                <div className='mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-transparent border border-gray-200'>
                    {cate.icon}
                </div>
                <h3 className='text-xl font-medium text-gray-950'>
                    {cate.title}
                </h3>
                <p className='mt-1 text-sm text-gray-400'>{cate.label}</p>
            </div>
        </div>
    );
}

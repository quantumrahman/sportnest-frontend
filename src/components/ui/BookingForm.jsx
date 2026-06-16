export default function BookingForm() {
    return (
        <form>
            <label htmlFor='facility-name'>
                <span className='block text-base text-gray-950'>
                    Facility Name
                </span>
                <input
                    id='facility-name'
                    type='text'
                    aria-label='input'
                    name='facility-name'
                    placeholder='e.g. Green turf arena'
                    defaultValue={'Green Football Turf Arena'}
                    autoComplete='off'
                    className='w-full outline-none bg-transparent border border-gray-300 rounded-xl py-3 px-3 text-sm text-gray-950 caret-green-500 mt-3 focus:border-green-500 placeholder:text-gray-400'
                />
                <div className='w-full h-5'>
                    <span className='text-sm text-red-500'></span>
                </div>
            </label>
            <label htmlFor='booking-date'>
                <span className='block text-base text-gray-950'>
                    Booking Date
                </span>
                <input
                    id='booking-date'
                    type='text'
                    aria-label='input'
                    name='booking-date'
                    placeholder='e.g. Green turf arena'
                    autoComplete='off'
                    className='w-full outline-none bg-transparent border border-gray-300 rounded-xl py-3 px-3 text-sm text-gray-950 caret-green-500 mt-3 focus:border-green-500 placeholder:text-gray-400'
                />
                <div className='w-full h-5'>
                    <span className='text-sm text-red-500'></span>
                </div>
            </label>
            <label htmlFor='time-slot'>
                <span className='block text-base text-gray-950'>Time Slot</span>
                <input
                    id='time-slot'
                    type='text'
                    aria-label='input'
                    name='time-slot'
                    placeholder='e.g. Green turf arena'
                    autoComplete='off'
                    className='w-full outline-none bg-transparent border border-gray-300 rounded-xl py-3 px-3 text-sm text-gray-950 caret-green-500 mt-3 focus:border-green-500 placeholder:text-gray-400'
                />
                <div className='w-full h-5'>
                    <span className='text-sm text-red-500'></span>
                </div>
            </label>
            <label htmlFor='facility-hours'>
                <span className='block text-base text-gray-950'>Hours</span>
                <input
                    id='facility-hours'
                    type='text'
                    aria-label='input'
                    name='facility-hours'
                    placeholder='e.g. Green turf arena'
                    autoComplete='off'
                    className='w-full outline-none bg-transparent border border-gray-300 rounded-xl py-3 px-3 text-sm text-gray-950 caret-green-500 mt-3 focus:border-green-500 placeholder:text-gray-400'
                />
                <div className='w-full h-5'>
                    <span className='text-sm text-red-500'></span>
                </div>
            </label>
            <button
                type='submit'
                role='button'
                aria-label='button'
                className='w-full py-3 px-3 bg-green-500 rounded-xl text-sm text-white cursor-pointer transition-colors duration-200 ease-linear hover:bg-green-400 mt-2'
            >
                Publish Facility
            </button>
        </form>
    );
}

export default function RegisterForm() {
    return (
        <form>
            <div className='w-full flex items-center justify-center gap-4'>
                <label htmlFor='username' className='w-full'>
                    <span className='block text-sm text-gray-950 md:text-base'>
                        Username
                    </span>
                    <input
                        id='username'
                        type='text'
                        aria-label='input'
                        name='username'
                        placeholder='Username'
                        autoComplete='off'
                        className='w-full outline-none bg-transparent border border-gray-200 rounded-md py-4 px-5 text-sm text-gray-950 caret-green-500 mt-3 focus:border-green-500 placeholder:text-gray-400'
                    />
                    <div className='w-full h-6'>
                        <span className='text-sm text-red-500'></span>
                    </div>
                </label>
                <label htmlFor='photo' className='w-full'>
                    <span className='block text-sm text-gray-950 md:text-base'>
                        Photo
                    </span>
                    <input
                        id='photo'
                        type='text'
                        aria-label='input'
                        name='photo'
                        placeholder='Photo url'
                        autoComplete='off'
                        className='w-full outline-none bg-transparent border border-gray-200 rounded-md py-4 px-5 text-sm text-gray-950 caret-green-500 mt-3 focus:border-green-500 placeholder:text-gray-400'
                    />
                    <div className='w-full h-6'>
                        <span className='text-sm text-red-500'></span>
                    </div>
                </label>
            </div>
            <label htmlFor='email' className='w-full'>
                <span className='block text-sm text-gray-950 md:text-base'>
                    Enter your email
                </span>
                <input
                    id='email'
                    type='text'
                    aria-label='input'
                    name='email'
                    placeholder='Email address'
                    autoComplete='off'
                    className='w-full outline-none bg-transparent border border-gray-200 rounded-md py-4 px-5 text-sm text-gray-950 caret-green-500 mt-3 focus:border-green-500 placeholder:text-gray-400'
                />
                <div className='w-full h-6'>
                    <span className='text-sm text-red-500'></span>
                </div>
            </label>
            <label htmlFor='password' className='w-full'>
                <span className='block text-sm text-gray-950 md:text-base'>
                    Enter your password
                </span>
                <input
                    id='password'
                    type='text'
                    aria-label='input'
                    name='password'
                    placeholder='Password'
                    autoComplete='off'
                    className='w-full outline-none bg-transparent border border-gray-200 rounded-md py-4 px-5 text-sm text-gray-950 caret-green-500 mt-3 focus:border-green-500 placeholder:text-gray-400'
                />
                <div className='w-full h-6'>
                    <span className='text-sm text-red-500'></span>
                </div>
            </label>
            <button
                type='submit'
                role='button'
                aria-label='button'
                className='w-full py-4 px-8 bg-green-500 rounded-md text-sm text-white cursor-pointer transition-colors duration-200 ease-linear hover:bg-green-400 mt-2 md:text-base'
            >
                Register
            </button>
        </form>
    );
}

export default function LoginForm() {
    return (
        <form>
            <div className='w-full flex flex-col justify-center gap-[13px]'>
                <label
                    htmlFor='email'
                    className='text-sm text-gray-950 lg:text-base'
                >
                    Enter your email
                </label>
                <div className='w-full'>
                    <input
                        type='text'
                        name='email'
                        autoComplete='off'
                        placeholder='Email address'
                        className='w-full py-[15px] px-5 border border-gray-300 rounded-xl outline-none focus:border-green-500 caret-green-500 text-gray-950 placeholder:text-gray-400'
                    />
                    <div className='w-full h-[24px] mt-0.5 text-right'>
                        {/* <span className='text-sm text-red-500'>Error</span> */}
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col justify-center gap-[13px]'>
                <label
                    htmlFor='password'
                    className='text-sm text-gray-950 lg:text-base'
                >
                    Enter your password
                </label>
                <div className='w-full'>
                    <input
                        type='text'
                        name='password'
                        autoComplete='off'
                        placeholder='Password'
                        className='w-full py-[15px] px-5 border border-gray-300 rounded-xl outline-none focus:border-green-500 caret-green-500 text-gray-950 placeholder:text-gray-400'
                    />
                    <div className='w-full h-[24px] mt-0.5 text-right'>
                        {/* <span className='text-sm text-red-500'>Error</span> */}
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <button
                    type='submit'
                    role='button'
                    aria-label='button'
                    className='w-full py-[15px] px-8 bg-green-500 rounded-xl text-base text-white cursor-pointer transition-colors duration-200 ease-linear hover:bg-green-400 mt-2'
                >
                    Login
                </button>
            </div>
        </form>
    );
}

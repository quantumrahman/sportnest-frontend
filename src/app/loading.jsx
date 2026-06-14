import Image from 'next/image';

export default function LoadingPage() {
    return (
        <section className='w-full h-screen flex items-center justify-center'>
            <Image
                src={'/global-loading-animation.svg'}
                alt='loading...'
                width={80}
                height={800}
                quality={1}
                priority={true}
            />
        </section>
    );
}

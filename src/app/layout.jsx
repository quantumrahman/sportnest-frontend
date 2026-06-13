import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-poppins-sans',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
    title: 'SportNest - Sport facility booking portal.',
    description: 'Online sport booking facility portal.',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' className={`${poppins.variable} h-full antialiased`}>
            <body className='w-full'>{children}</body>
        </html>
    );
}

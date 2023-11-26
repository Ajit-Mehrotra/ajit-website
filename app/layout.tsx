import type { AppProps } from 'next/app';
import '../styles/global.css';     // Import your global styles
import 'tailwindcss/tailwind.css';
import { Inter } from 'next/font/google';  // Import the Inter font
import { Metadata } from 'next'
const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
    title: 'Ajit Mehrotra',
    description: 'Welcome to Next.js',
    icons: {
        icon: '/favicon.png',
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="">
                    {children}
                </main>
            </body>
        </html>
    )
}


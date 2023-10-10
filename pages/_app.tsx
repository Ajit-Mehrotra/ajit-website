import type { AppProps } from 'next/app';
import '../styles/global.css';     // Import your global styles
import 'tailwindcss/tailwind.css';
import { Inter } from 'next/font/google';  // Import the Inter font
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

function App({ Component, pageProps }: AppProps) {
    return (
        <div className={inter.className}>
            <Head>
                <title>Ajit Mehrotra</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Component  {...pageProps} />
        </div>

    );
}

export default App;

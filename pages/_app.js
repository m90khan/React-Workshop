import { Inter } from '@next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });
// import { ChakraProvider } from '@chakra-ui/react';
function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;

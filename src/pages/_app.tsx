import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import ChatBotIcon from '@/components/ChatBotIcon';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ChatBotIcon />
    </>
  );
}

export default MyApp;
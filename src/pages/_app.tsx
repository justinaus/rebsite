import '@/styles/globals.css';

import type { AppProps } from 'next/app';

import AppLayout from '@/components/AppLayout';
import { suitRegular } from '@/fonts/suitRegular';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <main className={suitRegular.className}>
        <Component {...pageProps} />
      </main>
    </AppLayout>
  );
}

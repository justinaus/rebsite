import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

import AppLayout from '@/components/AppLayout';
import { suitRegular } from '@/fonts/suitRegular';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <RecoilRoot>
        <AppLayout>
          <main className={suitRegular.className}>
            <Component {...pageProps} />
          </main>
        </AppLayout>
      </RecoilRoot>
    </>
  );
}

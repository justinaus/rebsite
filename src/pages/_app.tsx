import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';

import AppLayout from '@/components/AppLayout';
import { suitRegular } from '@/fonts/suitRegular';
import { queryClient } from '@/helpers/query';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <AppLayout>
            <main className={suitRegular.className}>
              <Component {...pageProps} />
            </main>
          </AppLayout>
        </RecoilRoot>
        {/* The rest of your application */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Suspense } from 'react';
const List = dynamic(() => import('@/components/users/List'), {
  ssr: false,
});

import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

export default function Users() {
  return (
    <>
      <Head>
        <title>Users</title>
        <meta name="description" content="Users" />
      </Head>
      <h1>Users</h1>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            fallbackRender={({ error, resetErrorBoundary }) => (
              <div>
                There was an error!{' '}
                <button
                  onClick={() => resetErrorBoundary()}
                  css={{
                    border: '1px solid #000',
                    padding: 8,
                  }}
                >
                  Try again
                </button>
                <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
              </div>
            )}
            onReset={reset}
          >
            <Suspense
              fallback={
                <div
                  css={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'red',
                  }}
                >
                  Loading..
                </div>
              }
            >
              <List />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </>
  );
}

import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Suspense } from 'react';
const List = dynamic(() => import('@/components/users/List'), {
  ssr: false,
});

export default function Users() {
  return (
    <>
      <Head>
        <title>Users</title>
        <meta name="description" content="Users" />
      </Head>
      <h1>Users</h1>
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
    </>
  );
}

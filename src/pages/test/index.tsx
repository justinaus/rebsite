import Head from 'next/head';

import SectionFullWidth from '@/components/home/section/SectionFullWidth';

export default function Test() {
  return (
    <>
      <Head>
        <title>Test</title>
        <meta name="description" content="Users" />
      </Head>
      <SectionFullWidth
        css={{
          backgroundColor: 'red',
        }}
      >
        111
      </SectionFullWidth>
    </>
  );
}

import Head from 'next/head';

import SectionFullWidth from '@/components/home/section/SectionFullWidth';

// https://emotion.sh/docs/best-practices#use-the-style-prop-for-dynamic-styles
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
        <div
          style={{ ['--background-style' as any]: 'blue' }}
          css={{
            color: 'var(--background-style)',
          }}
        >
          test1
        </div>
        <div
          style={{ ['--background-style' as any]: 'green' }}
          css={{
            color: 'var(--background-style)',
          }}
        >
          test2
        </div>
      </SectionFullWidth>
    </>
  );
}

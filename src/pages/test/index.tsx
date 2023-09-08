import { css } from '@emotion/react';
import Head from 'next/head';

import SectionFullWidth from '@/components/home/section/SectionFullWidth';
import { colors } from '@/constants/color';

// https://emotion.sh/docs/best-practices#consider-defining-styles-outside-your-components
const cardCss = {
  self: css({
    backgroundColor: 'white',
    border: '1px solid #eee',
    borderRadius: '0.5rem',
    padding: '1rem',
  }),

  title: css({
    fontSize: '1.25rem',
  }),
};

export const errorCss = css({
  color: 'red',
  fontWeight: 'bold',
});

// Use arrays to compose styles
export const largeErrorCss = css([errorCss, { fontSize: '1.5rem' }]);

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
        <div css={cardCss.self}>
          <h5 css={cardCss.title}>4444</h5>
          333
        </div>
        <div
          css={{
            color: colors.success,
          }}
        >
          123
        </div>
      </SectionFullWidth>
    </>
  );
}

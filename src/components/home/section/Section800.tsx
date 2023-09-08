import { CSSObject } from '@emotion/react';
import React, { forwardRef } from 'react';

import SectionBase from './SectionBase';

type Props = {
  className?: string;
  innerProps?: CSSObject;
};

export default forwardRef(function Section800(
  { className, innerProps, children }: React.PropsWithChildren<Props>,
  ref: React.Ref<HTMLElement>,
) {
  return (
    <SectionBase ref={ref} className={className}>
      <div
        css={{
          maxWidth: 800,
          margin: '0 auto',
          padding: 24,
          ...innerProps,
        }}
      >
        {children}
      </div>
    </SectionBase>
  );
});

import { CSSObject } from '@emotion/react';

import SectionBase from './SectionBase';

type Props = {
  cssProps?: CSSObject;
  innerProps?: CSSObject;
};

export default function Section800({
  cssProps,
  innerProps,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <SectionBase cssProps={cssProps}>
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
}

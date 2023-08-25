import { CSSObject } from '@emotion/react';

import SectionBase from './SectionBase';

type Props = {
  cssProps?: CSSObject;
};

export default function SectionFullWidth({
  cssProps,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <SectionBase
      cssProps={{
        padding: 24,
        ...cssProps,
      }}
    >
      {children}
    </SectionBase>
  );
}

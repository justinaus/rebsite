import { CSSObject } from '@emotion/react';
import { forwardRef } from 'react';

type Props = {
  cssProps?: CSSObject;
};

export default forwardRef(function SectionBase(
  { cssProps, children }: React.PropsWithChildren<Props>,
  ref: React.Ref<HTMLElement>,
) {
  return (
    <section
      ref={ref}
      css={{
        ...cssProps,
      }}
    >
      {children}
    </section>
  );
});

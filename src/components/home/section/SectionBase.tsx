import { CSSObject } from '@emotion/react';

type Props = {
  cssProps?: CSSObject;
};

export default function SectionBase({
  cssProps,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <section
      css={{
        ...cssProps,
      }}
    >
      {children}
    </section>
  );
}

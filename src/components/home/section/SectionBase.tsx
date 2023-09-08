import { forwardRef } from 'react';

type Props = {
  className?: string;
};

export default forwardRef(function SectionBase(
  { className, children }: React.PropsWithChildren<Props>,
  ref: React.Ref<HTMLElement>,
) {
  return (
    <section ref={ref} className={className}>
      {children}
    </section>
  );
});

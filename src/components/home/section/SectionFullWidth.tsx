import SectionBase from './SectionBase';

type Props = {
  className?: string;
};

export default function SectionFullWidth({
  className,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <SectionBase
      css={{
        padding: 24,
      }}
      className={className}
    >
      {children}
    </SectionBase>
  );
}

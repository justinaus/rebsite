import { useEffect } from 'react';

export default function AppLayout({ children }: React.PropsWithChildren) {
  useEffect(() => {
    function setScreenSize() {
      const vh = window.innerHeight * 0.01;

      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    setScreenSize();

    window.addEventListener('resize', setScreenSize);

    return () => {
      window.removeEventListener('resize', setScreenSize);
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'var(--100vh)',
      }}
    >
      {children}
    </div>
  );
}

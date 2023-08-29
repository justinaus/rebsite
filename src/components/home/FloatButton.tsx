import { useRecoilValue } from 'recoil';

import { floatButtonState } from './floatButtonState';

export default function FloatButton() {
  const isShowFloatButton = useRecoilValue(floatButtonState);

  return (
    <div
      css={{
        position: 'fixed',
        width: '100%',
        backgroundColor: '#F4C430',
        bottom: isShowFloatButton ? 0 : '-100%',
        transition: 'bottom 0.3s ease',
      }}
    >
      <div
        css={{
          maxWidth: 800,
          margin: '0 auto',
          padding: 24,
        }}
      >
        <button
          css={{
            border: '1px solid #000',
            padding: 8,
            width: '100%',
          }}
        >
          Click
        </button>
      </div>
    </div>
  );
}

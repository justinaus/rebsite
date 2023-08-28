export default function FloatButton() {
  return (
    <div
      css={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#F4C430',
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

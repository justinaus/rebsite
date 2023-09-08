import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import useIntersection from '@/hooks/useIntersection';

import { floatButtonState } from './floatButtonState';
import Section800 from './section/Section800';

export default function Part2() {
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });

  const showFloatButton = useSetRecoilState(floatButtonState);

  useEffect(() => {
    if (!intersection) return;

    showFloatButton(
      intersection.boundingClientRect.top <= 0 &&
        intersection.boundingClientRect.top >=
          -intersection.boundingClientRect.height,
    );
  }, [intersection, showFloatButton]);

  return (
    <Section800
      ref={intersectionRef}
      css={{
        height: 3000,
        backgroundColor: 'red',
      }}
    >
      Part 2
    </Section800>
  );
}

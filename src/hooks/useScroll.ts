import { useState, useEffect } from 'react';

export interface ScrollState {
  scrollY: number;
  scrollDirection: 'up' | 'down' | null;
  isScrolled: boolean;
  isAtTop: boolean;
}

export function useScroll(threshold = 20): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    scrollDirection: null,
    isScrolled: false,
    isAtTop: true,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollState = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';

      setScrollState({
        scrollY: currentScrollY,
        scrollDirection: currentScrollY === lastScrollY ? null : direction,
        isScrolled: currentScrollY > threshold,
        isAtTop: currentScrollY <= 5,
      });

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();

    return () => {
      window.removeEventListener('scroll', updateScrollState);
    };
  }, [threshold]);

  return scrollState;
}

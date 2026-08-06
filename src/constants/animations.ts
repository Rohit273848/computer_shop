export const TRANSITIONS = {
  smooth: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  spring: { type: 'spring', stiffness: 300, damping: 30 },
  bounce: { type: 'spring', stiffness: 400, damping: 20 },
  slow: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
};

export const DURATIONS = {
  fast: 0.15,
  normal: 0.25,
  slow: 0.4,
};

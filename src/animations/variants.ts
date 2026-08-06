import { Variants } from 'framer-motion';

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const hoverLift = {
  rest: { y: 0, boxShadow: 'var(--shadow-md)' },
  hover: {
    y: -4,
    boxShadow: 'var(--shadow-lg)',
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
};

export const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.03, transition: { duration: 0.15 } },
  tap: { scale: 0.97 },
};

export const cardHover = {
  rest: { scale: 1, borderColor: 'var(--color-border)' },
  hover: {
    scale: 1.015,
    borderColor: 'var(--color-accent)',
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
};

export const drawerVariants: Variants = {
  closed: {
    x: '100%',
    transition: { duration: 0.3, ease: [0.32, 0, 0.67, 0] },
  },
  open: {
    x: '0%',
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export const backdropVariants: Variants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

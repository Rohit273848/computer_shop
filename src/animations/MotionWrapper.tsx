import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer } from './variants';

interface MotionWrapperProps extends HTMLMotionProps<'div'> {
  variant?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale' | 'stagger';
  delay?: number;
  viewportOnce?: boolean;
}

export const MotionWrapper: React.FC<MotionWrapperProps> = ({
  children,
  variant = 'fadeUp',
  delay = 0,
  viewportOnce = true,
  className = '',
  ...props
}) => {
  const getVariants = () => {
    switch (variant) {
      case 'fadeLeft':
        return fadeLeft;
      case 'fadeRight':
        return fadeRight;
      case 'scale':
        return scaleIn;
      case 'stagger':
        return staggerContainer;
      case 'fadeUp':
      default:
        return fadeUp;
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: viewportOnce, margin: '-50px' }}
      variants={getVariants()}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

'use client';

import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface AnimatedWrapperProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

const AnimatedWrapper = React.forwardRef<HTMLDivElement, AnimatedWrapperProps>(
  ({ children, delay = 0, duration = 0.3, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      {...props}
    >
      {children}
    </motion.div>
  )
);

AnimatedWrapper.displayName = 'AnimatedWrapper';

export { AnimatedWrapper };

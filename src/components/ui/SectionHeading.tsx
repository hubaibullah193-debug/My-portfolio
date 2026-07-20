'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = React.forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ className, title, subtitle, centered = true, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('space-y-2', centered && 'text-center', className)}
      {...props}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white">{title}</h2>
      {subtitle && <p className="text-lg text-neutral-400 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
);

SectionHeading.displayName = 'SectionHeading';

export { SectionHeading };

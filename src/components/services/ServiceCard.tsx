'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  LayoutDashboard,
  Globe,
  Briefcase,
  BarChart3,
  Plug,
  Database,
  TrendingUp,
  Search,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import type { Service } from '@/data/services';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  LayoutDashboard,
  Globe,
  Briefcase,
  BarChart3,
  Plug,
  Database,
  TrendingUp,
  Search,
  Wrench,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: 'easeOut' as const },
  },
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <motion.div
      variants={itemVariants}
      custom={index}
      className="h-full"
    >
      <Card
        hover
        className="group h-full flex flex-col border-neutral-800 hover:border-blue-500/30"
        aria-label={service.title}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="flex-shrink-0 p-2.5 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors duration-200">
            {Icon && <Icon size={22} />}
          </div>
          <h3 className="text-lg font-semibold text-white">
            {service.title}
          </h3>
        </div>

        <p className="text-sm text-neutral-400 leading-relaxed">
          {service.description}
        </p>
      </Card>
    </motion.div>
  );
}

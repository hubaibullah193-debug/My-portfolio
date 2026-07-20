'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Target,
  Smartphone,
  Gauge,
  MessageCircle,
  BookOpen,
  Eye,
  Handshake,
  type LucideIcon,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import type { Advantage } from '@/data/why-work-with-me';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Target,
  Smartphone,
  Gauge,
  MessageCircle,
  BookOpen,
  Eye,
  Handshake,
};

interface AdvantageCardProps {
  advantage: Advantage;
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

export function AdvantageCard({ advantage, index }: AdvantageCardProps) {
  const Icon = iconMap[advantage.icon];

  return (
    <motion.div
      variants={itemVariants}
      custom={index}
      className="h-full"
    >
      <Card
        hover
        className="group h-full flex flex-col border-neutral-800 hover:border-blue-500/30"
        aria-label={advantage.title}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="flex-shrink-0 p-2.5 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors duration-200">
            {Icon && <Icon size={22} />}
          </div>
          <h3 className="text-lg font-semibold text-white">
            {advantage.title}
          </h3>
        </div>

        <p className="text-sm text-neutral-400 leading-relaxed">
          {advantage.description}
        </p>
      </Card>
    </motion.div>
  );
}

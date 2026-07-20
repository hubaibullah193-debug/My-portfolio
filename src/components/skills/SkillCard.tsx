'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Layout,
  Server,
  Database,
  Wrench,
  Megaphone,
  Brain,
  type LucideIcon,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import type { SkillCategory } from '@/data/skills';

const iconMap: Record<string, LucideIcon> = {
  Layout,
  Server,
  Database,
  Wrench,
  Megaphone,
  Brain,
};

interface SkillCardProps {
  category: SkillCategory;
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

export function SkillCard({ category, index }: SkillCardProps) {
  const Icon = iconMap[category.icon];

  return (
    <motion.div
      variants={itemVariants}
      custom={index}
      className="h-full"
    >
      <Card
        hover
        className="group h-full flex flex-col border-neutral-800 hover:border-blue-500/30"
        aria-label={`${category.name} skills`}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="flex-shrink-0 p-2.5 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors duration-200">
            {Icon && <Icon size={22} />}
          </div>
          <h3 className="text-lg font-semibold text-white">
            {category.name}
          </h3>
        </div>

        <p className="text-sm text-neutral-400 mb-5 leading-relaxed">
          {category.description}
        </p>

        <ul className="flex flex-wrap gap-2 mt-auto">
          {category.skills.map((skill) => (
            <li
              key={skill}
              className="px-3 py-1.5 text-sm text-neutral-300 bg-neutral-800/50 border border-neutral-700/30 rounded-full hover:border-blue-500/30 hover:text-blue-300 transition-colors duration-200"
            >
              {skill}
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}

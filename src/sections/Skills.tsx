'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedWrapper } from '@/components/ui/AnimatedWrapper';
import { SkillCard } from '@/components/skills/SkillCard';
import { skillCategories } from '@/data/skills';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

export function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900/50 to-neutral-950" />

      <Container size="xl" className="relative z-10">
        <AnimatedWrapper>
          <SectionHeading
            title="Skills & Technologies"
            subtitle="Technologies and tools I work with"
            className="mb-12"
          />
        </AnimatedWrapper>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-3 gap-5"
        >
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

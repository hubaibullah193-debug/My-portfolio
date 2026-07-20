'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedWrapper } from '@/components/ui/AnimatedWrapper';
import { AdvantageCard } from '@/components/why-work-with-me/AdvantageCard';
import { advantages } from '@/data/why-work-with-me';

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

export function WhyWorkWithMe() {
  return (
    <section id="why-work-with-me" className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900/50 to-neutral-950" />

      <Container size="xl" className="relative z-10">
        <AnimatedWrapper>
          <SectionHeading
            title="Why Work With Me"
            subtitle="What sets my approach apart"
            className="mb-12"
          />
        </AnimatedWrapper>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={advantage.id}
              advantage={advantage}
              index={index}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

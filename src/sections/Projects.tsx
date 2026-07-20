'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedWrapper } from '@/components/ui/AnimatedWrapper';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';

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

export function Projects() {
  return (
    <section id="projects" className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900/50 to-neutral-950" />

      <Container size="xl" className="relative z-10">
        <AnimatedWrapper>
          <SectionHeading
            title="Featured Projects"
            subtitle="A selection of recent work across development and digital marketing"
            className="mb-12"
          />
        </AnimatedWrapper>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

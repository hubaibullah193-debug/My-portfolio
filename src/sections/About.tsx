'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Code2, Users, Target, BookOpen } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedWrapper } from '@/components/ui/AnimatedWrapper';
import { about } from '@/data/about';
import { personal } from '@/data/personal';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Users,
  Target,
  BookOpen,
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, ease: 'easeOut' as const },
  },
};

const statsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

export function About() {
  return (
    <section id="about" className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900/50 to-neutral-950" />

      <Container size="xl" className="relative z-10">
        <AnimatedWrapper>
          <SectionHeading
            title={about.heading}
            subtitle={about.subheading}
            className="mb-12"
          />
        </AnimatedWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left: Image + Stats */}
          <div className="flex flex-col gap-8">
            <AnimatedWrapper delay={0.1}>
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-neutral-700/50">
                  <Image
                    src={personal.profileImage}
                    alt={`${personal.name} — professional headshot`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    className="object-cover object-[center_18%] scale-[1.05]"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
              </div>
            </AnimatedWrapper>

            <motion.div
              variants={statsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid grid-cols-2 gap-4"
            >
              {about.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={statVariants}
                  className="flex flex-col items-center justify-center text-center p-4 min-h-[90px] rounded-xl bg-neutral-800/30 border border-neutral-700/30"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Bio + Values */}
          <div className="flex flex-col gap-8">
            <AnimatedWrapper delay={0.2}>
              <div className="space-y-4">
                {about.bio.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-neutral-300 leading-relaxed text-base md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper delay={0.3}>
              <h3 className="text-xl font-semibold text-white mb-4">
                What I Stand For
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {about.values.map((value) => {
                  const Icon = iconMap[value.icon];
                  return (
                    <div
                      key={value.title}
                      className="flex flex-col p-4 rounded-xl bg-neutral-800/20 border border-neutral-700/30 hover:border-blue-500/30 transition-colors duration-200"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        {Icon && (
                          <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                            <Icon size={18} />
                          </div>
                        )}
                        <h4 className="font-medium text-white">{value.title}</h4>
                      </div>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </Container>
    </section>
  );
}

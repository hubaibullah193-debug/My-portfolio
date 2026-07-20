'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { GitHubIcon } from '@/components/icons/GitHubIcon';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
import { FacebookIcon } from '@/components/icons/FacebookIcon';
import { personal } from '@/data/personal';
import { socialLinks } from '@/data/social-links';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Facebook: FacebookIcon,
  Mail,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-neutral-950 to-neutral-950" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <Container size="xl" className="relative z-10 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
        >
          <div className="flex-1 text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-1.5 text-sm font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full">
                Available for work
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Hi, I&apos;m{' '}
              <span className="text-gradient">{personal.name.split(' ')[0]}</span>
            </motion.h1>

            <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-neutral-300 mb-4 font-medium">
              {personal.title}
            </motion.h2>

            <motion.p variants={itemVariants} className="text-base md:text-lg text-neutral-400 mb-8 max-w-xl mx-auto lg:mx-0">
              {personal.tagline}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#projects" className="inline-flex items-center justify-center h-12 px-6 text-base font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-all duration-200 group">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Button variant="outline" size="lg" className="group">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10 flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target={link.id !== 'email' ? '_blank' : undefined}
                    rel={link.id !== 'email' ? 'noopener noreferrer' : undefined}
                    className="p-3 text-neutral-400 hover:text-white bg-neutral-800/50 hover:bg-neutral-800 rounded-lg border border-neutral-700/50 hover:border-neutral-600 transition-all duration-200"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                  >
                    {Icon && <Icon size={20} />}
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-neutral-700/50"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={personal.profileImage}
                alt={`${personal.name} — profile photo`}
                fill
                sizes="(max-width: 768px) 256px, 320px"
                priority
                className="object-cover"
              />
            </motion.div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-neutral-600 flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

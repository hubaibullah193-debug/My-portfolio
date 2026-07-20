'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Heart, Mail } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/data/site';
import { navigation } from '@/data/navigation';
import { socialLinks } from '@/data/social-links';
import { GitHubIcon } from '@/components/icons/GitHubIcon';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
import { FacebookIcon } from '@/components/icons/FacebookIcon';

const socialIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Facebook: FacebookIcon,
  Mail,
};

const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' as const } },
};

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-neutral-800 bg-neutral-950">
      <Container size="xl">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="py-12 md:py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <a href="#home" className="inline-block mb-3">
                <span className="text-xl font-bold text-white tracking-tight">
                  {siteConfig.name.split(' ')[0]}
                  <span className="text-blue-500">.</span>
                </span>
              </a>
              <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
                Full stack developer & digital marketer crafting scalable web applications and growth strategies.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Navigation
              </h3>
              <ul className="space-y-2.5">
                {navigation.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Connect
              </h3>
              <ul className="space-y-2.5">
                {socialLinks.map((link) => {
                  const Icon = socialIconMap[link.icon];
                  return (
                    <li key={link.id}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                        aria-label={link.label}
                      >
                        {Icon && <Icon size={16} />}
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Get in Touch
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={siteConfig.links.email}
                    className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    {siteConfig.links.email.replace('mailto:', '')}
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.google.com/?q=Peshawar,Pakistan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    Peshawar, Pakistan
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="mt-10 pt-8 border-t border-neutral-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <motion.p variants={itemVariants} className="text-xs text-neutral-500 text-center sm:text-left">
                &copy; {currentYear} {siteConfig.name}. All rights reserved.
              </motion.p>

              <motion.p variants={itemVariants} className="text-xs text-neutral-500 text-center sm:text-right flex items-center gap-1">
                Built with
                <Heart size={12} className="text-red-500 fill-red-500" />
                using Next.js, TypeScript &amp; Tailwind CSS
              </motion.p>
            </div>
          </div>
        </motion.div>
      </Container>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

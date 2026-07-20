'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ExternalLink,
  CheckCircle,
  Clock,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { GitHubIcon } from '@/components/icons/GitHubIcon';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
import { FacebookIcon } from '@/components/icons/FacebookIcon';
import {
  contactInfo,
  whatsapp,
  availability,
  type ContactInfoItem,
} from '@/data/contact';
import { socialLinks } from '@/data/social-links';

const contactIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Mail,
  Phone,
  MapPin,
};

const socialIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Facebook: FacebookIcon,
  Mail,
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: 'easeOut' as const },
  },
};

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Availability Status */}
      <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Card className="border-neutral-800">
          <div className="flex items-center gap-3">
            <div
              className={`flex-shrink-0 p-2.5 rounded-lg ${
                availability.available
                  ? 'bg-green-500/10 text-green-400'
                  : 'bg-yellow-500/10 text-yellow-400'
              }`}
            >
              {availability.available ? <CheckCircle size={20} /> : <Clock size={20} />}
            </div>
            <div>
              <p className="text-sm font-medium text-white">{availability.message}</p>
              <p className="text-xs text-neutral-500">{availability.detail}</p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Contact Details */}
      <div className="space-y-3">
        {contactInfo.map((item: ContactInfoItem) => {
          const Icon = contactIconMap[item.icon];
          return (
            <motion.a
              key={item.id}
              href={item.href}
              target={item.id === 'location' ? '_blank' : undefined}
              rel={item.id === 'location' ? 'noopener noreferrer' : undefined}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group flex items-center gap-3 p-3 rounded-lg border border-neutral-800 bg-neutral-900/50 hover:border-blue-500/30 hover:bg-neutral-900/80 transition-all duration-200"
              aria-label={`${item.label}: ${item.value}`}
            >
              <div className="flex-shrink-0 p-2.5 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors duration-200">
                {Icon && <Icon size={20} />}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-neutral-500">{item.label}</p>
                <p className="text-sm font-medium text-white truncate">{item.value}</p>
              </div>
              <ExternalLink
                size={14}
                className="flex-shrink-0 text-neutral-600 group-hover:text-neutral-400 transition-colors"
              />
            </motion.a>
          );
        })}
      </div>

      {/* WhatsApp CTA */}
      <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <a
          href={whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className={cn(
            buttonVariants({ variant: 'outline', size: 'lg' }),
            'w-full border-green-500/30 text-green-400 hover:bg-green-500/10 hover:border-green-500/50'
          )}
        >
          <MessageCircle size={20} className="mr-2" />
          Chat on WhatsApp
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <p className="text-xs text-neutral-500 mb-3 uppercase tracking-wider">Connect</p>
        <div className="flex gap-3">
          {socialLinks.map((link) => {
            const Icon = socialIconMap[link.icon];
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:border-blue-500/30 hover:text-white hover:bg-neutral-900/80 transition-all duration-200"
                aria-label={link.label}
              >
                {Icon && <Icon size={18} />}
              </a>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Clock } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { GitHubIcon } from '@/components/icons/GitHubIcon';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
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

function isLinkValid(url?: string): boolean {
  return !!url && url !== '#' && url !== '';
}

const buttonBase =
  'inline-flex items-center justify-center h-8 px-3 text-sm font-medium rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-600';

const buttonEnabled = `${buttonBase} border border-neutral-700 text-white hover:bg-neutral-900`;
const buttonDisabled = `${buttonBase} border border-neutral-800 text-neutral-600 cursor-not-allowed`;

export function ProjectCard({ project, index }: ProjectCardProps) {
  const featured = project.featured;
  const githubValid = isLinkValid(project.github);
  const liveValid = isLinkValid(project.live);

  return (
    <motion.div
      variants={itemVariants}
      custom={index}
      className="h-full"
    >
      <Card
        hover
        className={`group h-full flex flex-col overflow-hidden ${
          featured
            ? 'border-blue-500/30 ring-1 ring-blue-500/10'
            : 'border-neutral-800 hover:border-blue-500/30'
        }`}
        aria-label={project.title}
      >
        <div className="relative aspect-video rounded-md overflow-hidden bg-neutral-800 mb-5">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />

          {featured && (
            <span className="absolute top-3 left-3 px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full backdrop-blur-sm">
              Featured
            </span>
          )}

          {project.status && (
            <span className="absolute top-3 right-3 px-3 py-1 text-xs font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full backdrop-blur-sm">
              {project.status}
            </span>
          )}
        </div>

        <div className="flex flex-col flex-1">
          <h3 className="text-lg font-semibold text-white mb-1">
            {project.title}
          </h3>

          <p className="text-sm text-blue-400 mb-3">
            {project.role}
          </p>

          <p className="text-sm text-neutral-400 leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="mb-4">
            <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm text-neutral-300 bg-neutral-800/50 border border-neutral-700/30 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-5">
            <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
              Key Features
            </h4>
            <ul className="space-y-1">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-neutral-400"
                >
                  <ArrowRight
                    size={14}
                    className="flex-shrink-0 mt-1 text-blue-400"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-3 mt-auto pt-4 border-t border-neutral-800">
            {githubValid ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className={buttonEnabled}
              >
                <GitHubIcon size={16} className="mr-2" />
                GitHub
              </a>
            ) : (
              <span className={buttonDisabled} aria-disabled="true">
                <GitHubIcon size={16} className="mr-2" />
                Coming Soon
              </span>
            )}

            {liveValid ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live demo`}
                className={buttonEnabled}
              >
                <ExternalLink size={16} className="mr-2" />
                Live Demo
              </a>
            ) : (
              <span className={buttonDisabled} aria-disabled="true">
                <Clock size={16} className="mr-2" />
                Coming Soon
              </span>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

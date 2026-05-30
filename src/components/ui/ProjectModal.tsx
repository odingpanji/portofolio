'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ExternalLink, GitBranch, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '@/data/projects';

const formatSingleDate = (str: string): string => {
  const trimmed = str.trim();
  if (trimmed.toLowerCase() === 'present' || trimmed.toLowerCase() === 'sekarang') {
    return 'Sekarang';
  }
  const date = new Date(trimmed + "-01");
  if (isNaN(date.getTime())) {
    return trimmed;
  }
  return date.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });
};

const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  if (dateStr.includes(' - ')) {
    return dateStr.split(' - ').map(formatSingleDate).join(' - ');
  }
  return formatSingleDate(dateStr);
};

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentImageIndex(0); // Reset image index on open
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const nextImage = () => {
    if (project) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 py-6 md:py-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy-dark/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-full bg-navy-light border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 bg-navy-dark/50 hover:bg-primary-cyan/20 text-gray-300 hover:text-white rounded-full backdrop-blur-sm transition-all"
            >
              <X size={24} />
            </button>

            {/* Scrollable Container */}
            <div className="overflow-y-auto flex-1 custom-scrollbar">

              {/* Image Gallery */}
              <div className="relative w-full bg-navy-dark flex items-center justify-center overflow-hidden border-b border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-auto max-h-[65vh] object-contain block mx-auto"
                />

                {/* Navigation Arrows */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-navy-dark/50 hover:bg-primary-cyan/40 text-white rounded-full backdrop-blur-sm transition-all z-10 shadow-lg"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-navy-dark/50 hover:bg-primary-cyan/40 text-white rounded-full backdrop-blur-sm transition-all z-10 shadow-lg"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                {/* Image Navigation Dots */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                    {project.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-primary-cyan w-6' : 'bg-white/50 w-2 hover:bg-white/80'
                          }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Content Body */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-medium text-primary-cyan bg-primary-cyan/10 border border-primary-cyan/20 rounded-full">
                        {project.category}
                      </span>
                      <span className="text-sm font-mono text-gray-400">
                        {formatDate(project.date)}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold text-white font-mono">
                      {project.title}
                    </h2>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-white transition-colors">
                        <GitBranch size={16} /> Code
                      </a>
                    )}
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-primary-cyan/10 hover:bg-primary-cyan/20 border border-primary-cyan/30 rounded-lg text-sm text-primary-cyan transition-colors">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-primary-blue rounded-full"></span>
                    Project Overview
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Job Responsibilities */}
                {project.responsibilities && project.responsibilities.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-primary-cyan rounded-full"></span>
                      Job Responsibilities
                    </h3>
                    <ul className="space-y-3">
                      {project.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-primary-cyan shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-gray-500 rounded-full"></span>
                    Technology Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-navy-dark border border-white/10 rounded-md text-sm text-gray-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

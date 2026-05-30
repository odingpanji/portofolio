'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { projects, Project } from '@/data/projects';
import { ExternalLink, GitBranch } from 'lucide-react';
import { ProjectModal } from '@/components/ui/ProjectModal';
function ImageCarousel({ images, title }: { images: string[], title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!images || images.length <= 1 || !isHovered) {
      if (!isHovered && currentIndex !== 0) {
        setCurrentIndex(0); // Reset to first image when not hovering
      }
      return;
    }
    
    // Cycle images every 1.5 seconds when hovered
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [images, isHovered, currentIndex]);

  if (!images || images.length === 0) return null;

  return (
    <div 
      className="w-full h-full relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image 
        src={images[currentIndex]} 
        alt={`${title} - image ${currentIndex + 1}`} 
        fill 
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-opacity duration-500" 
      />
      {images.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-20">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.preventDefault();
                setCurrentIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-primary-cyan w-4' : 'bg-white/40 w-1.5'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getSortTime = (dateStr: string): number => {
    if (!dateStr) return 0;
    const startPart = dateStr.split(' - ')[0].trim();
    const date = new Date(startPart + "-01");
    return isNaN(date.getTime()) ? 0 : date.getTime();
  };

  const sortedProjects = [...projects].sort((a, b) => getSortTime(b.date) - getSortTime(a.date));

  const categories = ['All', ...Array.from(new Set(sortedProjects.map(p => p.category)))];

  const filteredProjects = filter === 'All'
    ? sortedProjects
    : sortedProjects.filter(p => p.category === filter);

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

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4 text-white">
            <span className="text-primary-cyan">03.</span> Portfolio Projects
          </h2>
          <div className="w-24 h-1 bg-primary-cyan mx-auto rounded-full neon-border-cyan mb-8"></div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                  ? 'bg-primary-cyan text-navy-dark shadow-[0_0_10px_rgba(88,182,238,0.5)]'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div onClick={() => setSelectedProject(project)} className="h-full cursor-pointer">
                  <Card className="h-full flex flex-col group" hoverEffect={true}>
                  <div className="h-48 rounded-lg overflow-hidden mb-6 bg-navy-dark relative border border-white/10 flex items-center justify-center">
                    <div className="absolute inset-0">
                      <ImageCarousel images={project.images} title={project.title} />
                    </div>
                    <div className="absolute inset-0 bg-primary-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 pointer-events-none">
                      {project.githubUrl && (
                        <a href={project.githubUrl} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer" className="p-3 bg-navy-dark rounded-full text-white hover:text-primary-cyan transition-colors pointer-events-auto">
                          <GitBranch size={24} />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a href={project.demoUrl} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer" className="p-3 bg-navy-dark rounded-full text-white hover:text-primary-cyan transition-colors pointer-events-auto">
                          <ExternalLink size={24} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-primary-cyan mb-3">{formatDate(project.date)}</p>

                  <p className="text-gray-400 text-sm mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-xs font-mono text-primary-blue bg-primary-blue/10 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}

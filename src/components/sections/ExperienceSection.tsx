'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { experiences } from '@/data/experience';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4 text-white">
            <span className="text-primary-cyan">05.</span> Professional Experience
          </h2>
          <div className="w-24 h-1 bg-primary-cyan mx-auto rounded-full neon-border-cyan mb-16"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-white/10 ml-4 md:ml-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-12 relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute w-4 h-4 bg-primary-cyan rounded-full -left-[8.5px] top-6 shadow-[0_0_10px_rgba(88,182,238,0.8)]"></div>
                
                <Card className="hover:border-primary-cyan/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <p className="text-primary-cyan font-mono">{exp.company}</p>
                    </div>
                    <span className="text-gray-500 font-mono text-sm mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  
                  <ul className="list-disc list-inside text-gray-400 space-y-2 mb-6 ml-2">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="text-xs font-mono text-gray-300 bg-white/5 border border-white/10 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

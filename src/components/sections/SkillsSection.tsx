'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { skillCategories } from '@/data/skills';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-navy-light/30 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4 text-white">
            <span className="text-primary-cyan">02.</span> Technical Skills
          </h2>
          <div className="w-24 h-1 bg-primary-cyan mx-auto rounded-full neon-border-cyan"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full" hoverEffect={true}>
                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                  {category.name}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                        <span className="text-sm font-mono text-primary-cyan">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-navy-dark rounded-full h-2">
                        <motion.div
                          className="bg-primary-cyan h-2 rounded-full neon-border-cyan"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

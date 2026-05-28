'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Cpu, Database, Network, Activity } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { label: 'Years Experience', value: '5+', icon: Activity },
    { label: 'Completed Projects', value: '20+', icon: Database },
    { label: 'PLC Systems', value: '15+', icon: Cpu },
    { label: 'SCADA Deployments', value: '10+', icon: Network },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4 text-white">
            <span className="text-primary-cyan">01.</span> About Me
          </h2>
          <div className="w-24 h-1 bg-primary-cyan mx-auto rounded-full neon-border-cyan"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              Engineering the Future of Industry
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Automation Engineer with expertise in PLC programming, SCADA systems, and industrial automation. 
              Skilled in leading technical projects, optimizing processes, and integrating automation solutions. 
              Certified in Industrial Automation System Design, with a passion for innovation and efficiency in control systems.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Seeking opportunities that foster continuous learning, innovation, and professional growth. 
              I am dedicated to bridging the gap between operational technology (OT) and information technology (IT) 
              to achieve higher efficiency and seamless data flow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <Card key={index} hoverEffect={true} className="text-center">
                <stat.icon className="w-10 h-10 text-primary-cyan mx-auto mb-4" />
                <h4 className="text-3xl font-bold text-white mb-2">{stat.value}</h4>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

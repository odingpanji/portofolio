'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Cpu, Server, MonitorSmartphone, Database, ArrowRight, Building2 } from 'lucide-react';

export default function ArchitectureSection() {
  const nodes = [
    { icon: Cpu, label: 'Field Devices & PLC', desc: 'Modbus / OPC' },
    { icon: Server, label: 'SCADA / Edge Server', desc: 'Data Aggregation' },
    { icon: Database, label: 'Database', desc: 'SQL / InfluxDB' },
    { icon: MonitorSmartphone, label: 'Web Dashboard', desc: 'React / Vue' },
    { icon: Building2, label: 'ERP System', desc: 'SAP / REST API' },
  ];

  return (
    <section className="py-24 bg-navy-light/30 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4 text-white">
            <span className="text-primary-cyan">04.</span> System Architecture
          </h2>
          <div className="w-24 h-1 bg-primary-cyan mx-auto rounded-full neon-border-cyan mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Visualizing the data flow from physical field devices to high-level enterprise dashboards.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center flex-wrap gap-4 md:gap-6 max-w-7xl mx-auto">
          {nodes.map((node, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center w-full md:w-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="w-full"
              >
                <Card className="text-center w-full md:w-48 md:h-56 py-8 flex flex-col items-center justify-center border-primary-cyan/20">
                  <node.icon className="w-12 h-12 text-primary-cyan mb-4" />
                  <h4 className="font-bold text-white mb-2">{node.label}</h4>
                  <span className="text-xs font-mono text-gray-500">{node.desc}</span>
                </Card>
              </motion.div>

              {index < nodes.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                  className="hidden md:flex text-primary-blue mx-2"
                >
                  <ArrowRight size={32} className="animate-pulse" />
                </motion.div>
              )}
              {index < nodes.length - 1 && (
                <div className="md:hidden h-8 w-px bg-primary-blue my-2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

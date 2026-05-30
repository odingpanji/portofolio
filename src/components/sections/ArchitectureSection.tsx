'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Cpu, Server, MonitorSmartphone, Database, ArrowRight, Building2, X } from 'lucide-react';

export default function ArchitectureSection() {
  const nodes = [
    { icon: Cpu, label: 'Field Devices & PLC', desc: 'Modbus / OPC', techList: ['Siemens S7', 'Allen-Bradley', 'Schneider M580', 'Schneider M221', 'Omron', 'Modbus TCP/RTU', 'OPC UA/DA', 'Hydronix Sensors'] },
    { icon: Server, label: 'SCADA / Edge Server', desc: 'Data Aggregation', techList: ['EcoStruxure Machine SCADA Expert', 'AVEVA InTouch', 'Node-RED', 'Ignition'] },
    { icon: Database, label: 'Database', desc: 'SQL / InfluxDB', techList: ['MS SQL Server', 'PostgreSQL', 'MySQL', 'InfluxDB'] },
    { icon: MonitorSmartphone, label: 'Web Dashboard', desc: 'React / Vue', techList: ['Grafana', 'React.js', 'Next.js', 'Tailwind CSS'] },
    { icon: Building2, label: 'ERP System', desc: 'SAP / REST API', techList: ['SAP ERP', 'REST API', 'Python Integration', 'VB.NET'] },
  ];

  const [activeNode, setActiveNode] = useState<typeof nodes[0] | null>(null);

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
                <div onClick={() => setActiveNode(node)} className="cursor-pointer">
                  <Card className="text-center w-full md:w-48 md:h-56 py-8 flex flex-col items-center justify-center border-primary-cyan/20 hover:border-primary-cyan transition-colors" hoverEffect={true}>
                    <node.icon className="w-12 h-12 text-primary-cyan mb-4" />
                    <h4 className="font-bold text-white mb-2">{node.label}</h4>
                    <span className="text-xs font-mono text-gray-500">{node.desc}</span>
                  </Card>
                </div>
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

      {/* Tech List Modal */}
      <AnimatePresence>
        {activeNode && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveNode(null)}
              className="absolute inset-0 bg-navy-dark/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-navy-light border border-white/10 rounded-2xl shadow-2xl p-6 z-10"
            >
              <button
                onClick={() => setActiveNode(null)}
                className="absolute top-4 right-4 p-2 bg-navy-dark/50 hover:bg-primary-cyan/20 text-gray-300 hover:text-white rounded-full transition-all"
              >
                <X size={20} />
              </button>
              
              <div className="flex items-center gap-4 mb-6 pr-8">
                <div className="p-3 bg-navy-dark rounded-xl border border-primary-cyan/20">
                  <activeNode.icon className="w-8 h-8 text-primary-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight mb-1">{activeNode.label}</h3>
                  <p className="text-sm font-mono text-primary-cyan">{activeNode.desc}</p>
                </div>
              </div>
              
              <h4 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">Technologies Used</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeNode.techList.map((tech, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-gray-300 bg-navy-dark/50 p-2 rounded border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-blue mt-1.5 shrink-0" />
                    <span className="text-sm leading-tight">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

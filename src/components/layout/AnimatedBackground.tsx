'use client';

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-background" />
      
      {/* Orb 1 */}
      <motion.div
        className="absolute w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full blur-[120px] opacity-40 bg-primary-blue/30"
        animate={{
          x: ['0%', '20%', '-20%', '0%'],
          y: ['0%', '20%', '-10%', '0%'],
        }}
        transition={{
          duration: 15,
          ease: 'linear',
          repeat: Infinity,
        }}
        style={{ top: '10%', left: '10%' }}
      />
      
      {/* Orb 2 */}
      <motion.div
        className="absolute w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full blur-[100px] opacity-30 bg-primary-cyan/20"
        animate={{
          x: ['0%', '-30%', '10%', '0%'],
          y: ['0%', '10%', '30%', '0%'],
        }}
        transition={{
          duration: 18,
          ease: 'linear',
          repeat: Infinity,
        }}
        style={{ top: '40%', right: '10%' }}
      />

      {/* Orb 3 */}
      <motion.div
        className="absolute w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full blur-[150px] opacity-20 bg-primary-blue/20"
        animate={{
          x: ['0%', '10%', '-20%', '0%'],
          y: ['0%', '-20%', '10%', '0%'],
        }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
        }}
        style={{ bottom: '-10%', left: '30%' }}
      />

      {/* IT Theme Dot Matrix Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#58B6EE_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      
      {/* Optional Binary / Tech Accents could go here, but dots keep it clean */}
    </div>
  );
}

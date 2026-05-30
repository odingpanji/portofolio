'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { FileText, Briefcase, Mail } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden border-2 border-primary-cyan/50 shadow-[0_0_20px_rgba(194,235,239,0.2)]"
        >
          <Image 
            src="/images/Foto_Profil.jpg" 
            alt="Oding Panji Syahdana" 
            fill 
            sizes="(max-width: 768px) 128px, 160px"
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-1.5 rounded-full border border-primary-cyan/30 bg-primary-cyan/10 text-primary-cyan text-sm font-medium tracking-wide">
            AVAILABLE FOR NEW PROJECTS
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold font-mono tracking-tighter mb-6 text-white"
        >
          <span className="block text-2xl md:text-3xl text-gray-400 mb-2 font-sans tracking-normal">Hi, I'm Oding Panji Syahdana</span>
          Automation Engineer
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-cyan to-primary-blue">
            & Industrial Software Dev
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          Bridging the gap between operational technology (OT) and information technology (IT) with cutting-edge PLC, SCADA, and IIoT solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button onClick={() => document.getElementById('projects')?.scrollIntoView()}>
            <Briefcase className="mr-2 h-5 w-5" />
            View Projects
          </Button>
          <a href="/Oding_Panji_Syahdana_CV.pdf" download="Oding_Panji_Syahdana_CV.pdf">
            <Button variant="outline">
              <FileText className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </a>
          <Button variant="ghost" onClick={() => window.location.href = 'mailto:odingps77@gmail.com'}>
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center"
      >
        <span className="text-gray-500 text-sm mb-2 font-mono">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary-cyan to-transparent"></div>
      </motion.div>
    </section>
  );
}

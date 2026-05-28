'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-navy-light/30 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4 text-white">
            <span className="text-primary-cyan">06.</span> Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary-cyan mx-auto rounded-full neon-border-cyan mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Currently open for new opportunities and interesting projects. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-cyan/10 rounded-full flex items-center justify-center text-primary-cyan border border-primary-cyan/30">
                    <Mail />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-mono">Email</p>
                    <a href="mailto:odingps77@gmail.com" className="text-white hover:text-primary-cyan transition-colors">
                      odingps77@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-cyan/10 rounded-full flex items-center justify-center text-primary-cyan border border-primary-cyan/30">
                    <Phone />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-mono">WhatsApp</p>
                    <a href="https://wa.me/6281233726065" className="text-white hover:text-primary-cyan transition-colors">
                      +62 812 3372 6065
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-cyan/10 rounded-full flex items-center justify-center text-primary-cyan border border-primary-cyan/30">
                    <MapPin />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-mono">Location</p>
                    <p className="text-white">Surabaya, Jawa Timur, Indonesia</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-mono text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-navy-dark border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary-cyan transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-mono text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-navy-dark border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary-cyan transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-mono text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-navy-dark border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary-cyan transition-colors"
                    placeholder="Hello there..."
                  ></textarea>
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

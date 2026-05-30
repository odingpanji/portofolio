import { GitBranch } from 'lucide-react';
import { FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-dark py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <div className="text-xl font-bold font-mono tracking-tighter mb-2">
            <span className="text-primary-cyan">&lt;</span>
            <span className="text-white">Oding</span>
            <span className="text-primary-blue">PS</span>
            <span className="text-primary-cyan">/&gt;</span>
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Oding Panji Syahdana. All rights reserved.
          </p>
        </div>

        <div className="flex items-center space-x-6">
          <a href="https://www.linkedin.com/in/oding-panji-syahdana-251422181/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-cyan transition-colors" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:odingps77@gmail.com" className="text-gray-400 hover:text-primary-cyan transition-colors" aria-label="Email">
            <FaEnvelope size={24} />
          </a>
          <a href="https://wa.me/6281233726065" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-cyan transition-colors" aria-label="WhatsApp">
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

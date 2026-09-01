import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

interface LinkItem {
  name: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

// Custom lightweight SVGs matching the Lucide style for brand icons
const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
   xmlns="http://www.w3.org/2000/svg"
   width="24" height="24"
   viewBox="0 0 24 24"
   fill="none"
   stroke="currentColor"
   strokeWidth="2"
   strokeLinecap="round"
   strokeLinejoin="round"
   {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const LINKS: LinkItem[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/vvs0x/',
    icon: Github,
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/valent%C3%ADn-schwarz-581a82431/',
    icon: Linkedin,
  },
  {
    name: 'E-Mail',
    url: 'mailto:vschwarz@ik.me',
    icon: Mail,
  },
];

// Motion animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function App() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-[#121212] text-[#d1d1d1] flex flex-col justify-between px-6 py-16 sm:py-24 selection:bg-neutral-800 selection:text-white">
      <motion.div 
        className="w-full max-w-xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <header className="mb-14">
          <motion.h1 
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-normal tracking-tight text-white"
          >
            Valentín Schwarz
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="mt-2 text-neutral-400 font-light text-base"
          >
            Making sense of numbers.
          </motion.p>
        </header>

        <div className="border-t border-neutral-800">
          {LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="group flex items-center justify-between py-5 border-b border-neutral-800 text-neutral-300 hover:text-white transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <Icon className="w-5 h-5 stroke-[1.75] text-neutral-400 group-hover:text-white transition-colors duration-200" />
                  <span className="text-base font-normal tracking-wide">
                    {link.name}
                  </span>
                </div>
                
                <ArrowRight className="w-4 h-4 text-neutral-500 transition-all duration-200 group-hover:text-white group-hover:translate-x-1" />
              </motion.a>
            );
          })}
        </div>
      </motion.div>

      <footer className="w-full max-w-xl mx-auto mt-16 text-neutral-500 text-sm font-light">
        <p>
          &copy; {currentYear}{' '}{'Valentín Schwarz.'}            
        </p>
      </footer>
    </main>
  );
}


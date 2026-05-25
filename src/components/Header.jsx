import { useState, useEffect } from 'react';
import { Download, GraduationCap, Linkedin, Mail, Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/profile';

const navItems = [
  ['Research', '#research'],
  ['Education', '#education'],
  ['Experience', '#experience'],
  ['Publications', '#publications'],
  ['Skills', '#skills'],
  ['Contact', '#contact'],
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  // Track active section and header background based on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 120; // offset for header height
      
      // Check sections
      const sections = ['home', 'research', 'education', 'experience', 'publications', 'skills', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 border-b ${
          scrolled 
            ? 'bg-charcoal/80 backdrop-blur-xl border-line/80 py-3 shadow-glass-glow' 
            : 'bg-charcoal/40 backdrop-blur-md border-line/30 py-4'
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-3 group" 
            aria-label="Ahmed T. Ali home"
            onClick={() => setIsOpen(false)}
          >
            <span className="flex h-10 w-10 items-center justify-center border border-line bg-panel font-mono text-xs font-bold text-offwhite transition duration-300 group-hover:border-accent group-hover:bg-accent/10 relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-tealAccent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 group-hover:text-accent transition-colors">ATA</span>
            </span>
            <span className="hidden font-mono text-xs font-semibold uppercase tracking-[0.16em] text-offwhite lg:inline group-hover:text-accent transition-colors duration-300">
              {profile.name}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map(([label, href]) => (
              <a 
                key={href} 
                href={href} 
                className={`relative font-mono text-xs font-medium uppercase tracking-[0.14em] py-2 transition duration-300 ${
                  activeSection === href ? 'text-accent' : 'text-ash hover:text-offwhite'
                }`}
              >
                {label}
                {activeSection === href && (
                  <motion.span 
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-accent to-tealAccent" 
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Contact / CTA Desktop */}
          <div className="hidden items-center gap-2.5 sm:flex">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hidden h-10 w-10 items-center justify-center border border-line bg-panel text-offwhite transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-accent-glow xl:inline-flex"
              aria-label={`${profile.name} on LinkedIn`}
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={profile.googleScholar}
              target="_blank"
              rel="noreferrer"
              className="hidden h-10 w-10 items-center justify-center border border-line bg-panel text-offwhite transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-accent-glow xl:inline-flex"
              aria-label={`${profile.name} on Google Scholar`}
            >
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-10 w-10 items-center justify-center border border-line bg-panel text-offwhite transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              aria-label={`Email ${profile.name}`}
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={`tel:${profile.phoneHref}`}
              className="inline-flex h-10 w-10 items-center justify-center border border-line bg-panel text-offwhite transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              aria-label={`Call ${profile.name}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={profile.cvPath}
              download
              className="inline-flex h-10 items-center gap-2 border border-accent bg-accent/90 px-4 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-offwhite transition duration-300 hover:-translate-y-0.5 hover:bg-transparent hover:text-accent hover:shadow-accent-glow"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span className="hidden md:inline">Download CV</span>
              <span className="md:hidden">CV</span>
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-3 sm:hidden lg:hidden">
            <a
              href={profile.cvPath}
              download
              className="inline-flex h-10 items-center gap-2 border border-accent bg-accent/90 px-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-offwhite transition hover:bg-transparent hover:text-accent"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>CV</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center border border-line bg-panel text-offwhite hover:border-accent hover:text-accent transition duration-300"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Tablet Nav Toggle (when socials are shown but nav links are hidden) */}
          <div className="hidden max-sm:hidden max-lg:flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center border border-line bg-panel text-offwhite hover:border-accent hover:text-accent transition duration-300"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile & Tablet Full Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-x-0 top-[65px] bottom-0 z-30 bg-charcoal/95 backdrop-blur-2xl border-t border-line/60 flex flex-col justify-between p-6 lg:hidden"
          >
            <div className="flex flex-col gap-5 mt-6">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-accent">Navigation</p>
              {navItems.map(([label, href], index) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`font-serif text-3xl font-bold transition duration-300 py-1 ${
                    activeSection === href 
                      ? 'text-accent pl-3 border-l-2 border-accent' 
                      : 'text-offwhite hover:text-accent'
                  }`}
                >
                  {label}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-6 mb-8 border-t border-line/60 pt-6">
              <div>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-accent mb-3">Get in Touch</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 items-center gap-3 border border-line bg-panel px-4 font-mono text-xs uppercase tracking-[0.1em] text-offwhite hover:border-accent hover:text-accent transition duration-300"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={profile.googleScholar}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 items-center gap-3 border border-line bg-panel px-4 font-mono text-xs uppercase tracking-[0.1em] text-offwhite hover:border-accent hover:text-accent transition duration-300"
                  >
                    <GraduationCap className="h-4 w-4" />
                    <span>Scholar</span>
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex h-11 items-center gap-3 border border-line bg-panel px-4 font-mono text-xs uppercase tracking-[0.1em] text-offwhite hover:border-accent hover:text-accent transition duration-300"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                  </a>
                  <a
                    href={`tel:${profile.phoneHref}`}
                    className="flex h-11 items-center gap-3 border border-line bg-panel px-4 font-mono text-xs uppercase tracking-[0.1em] text-offwhite hover:border-accent hover:text-accent transition duration-300"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call</span>
                  </a>
                </div>
              </div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-ash">
                {profile.affiliation} &bull; {profile.location}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

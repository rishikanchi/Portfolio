import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Github, FileText } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Projects', path: '/projects' },
    { name: 'Research', path: '/research' },
    { name: 'Inspiration', path: '/inspiration' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-8 md:px-12 lg:px-16 py-6">
        <nav className="flex items-start justify-between">
          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link to="/" className="group">
              <h1 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-foreground">
                Rishi Kanchi
              </h1>
              <p className="text-sm text-muted-foreground mt-1 tracking-wide">
                me [at] rishikanchi [dot] com
              </p>
            </Link>
          </motion.div>

          {/* Center Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-6"
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} strokeWidth={1.5} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={22} strokeWidth={1.5} />
            </a>
            <a
              href="/resume.pdf"
              className="text-foreground hover:text-accent transition-colors duration-300"
              aria-label="Resume"
            >
              <FileText size={22} strokeWidth={1.5} />
            </a>
          </motion.div>

          {/* Menu Button */}
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => setIsMenuOpen(true)}
            className="p-2 -mr-2 text-foreground hover:text-accent transition-colors duration-300"
            aria-label="Open menu"
          >
            <Menu size={28} strokeWidth={1.5} />
          </motion.button>
        </nav>
      </header>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-0 right-0 bottom-0 w-full md:w-[400px] bg-background z-50 shadow-2xl"
            >
              <div className="flex flex-col h-full px-8 md:px-12 py-8">
                {/* Close Button */}
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 -mr-2 text-foreground hover:text-accent transition-colors duration-300"
                    aria-label="Close menu"
                  >
                    <X size={28} strokeWidth={1.5} />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 flex flex-col justify-center">
                  <ul className="space-y-8">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.path}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                      >
                        <Link
                          to={link.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`font-serif text-4xl md:text-5xl font-medium transition-colors duration-300 ${
                            location.pathname === link.path
                              ? 'text-accent'
                              : 'text-foreground hover:text-accent'
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Social Links in Menu */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-6 pt-8 border-t border-border"
                >
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} strokeWidth={1.5} />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <Github size={20} strokeWidth={1.5} />
                  </a>
                  <a
                    href="/resume.pdf"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                    aria-label="Resume"
                  >
                    <FileText size={20} strokeWidth={1.5} />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

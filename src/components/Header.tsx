import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Linkedin, Github, FileText, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "Projects", path: "/projects" },
    { name: "Research", path: "/research" },
    { name: "Inspiration", path: "/inspiration" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-8 md:px-12 lg:px-16 pt-8 pb-6">
        {location.pathname === "/" ? (
          <nav className="grid grid-cols-3 items-start max-w-7xl mx-auto">
            {/* Logo / Name */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link to="/" className="group">
                <h1 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-foreground">
                  Rishi Kanchi
                </h1>
              </Link>
              <p className="text-base text-muted-foreground mt-3 tracking-wide">
                me [at] rishikanchi [dot] com
              </p>
            </motion.div>

            {/* Center Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="justify-self-center hidden md:flex items-start gap-6"
            >
              <a
                href="https://linkedin.com/in/rishi-kanchi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} strokeWidth={1.5} />
              </a>
              <a
                href="https://github.com/rishikanchi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={22} strokeWidth={1.5} />
              </a>
              <a
                href="https://drive.google.com/file/d/1wRv8Hin_p_c6IrELlZjC0BEENvHNowZu/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors duration-300"
                aria-label="Resume"
              >
                <FileText size={22} strokeWidth={1.5} />
              </a>
            </motion.div>

            {/* Theme Toggle & Menu Button */}
            <div className="justify-self-end flex items-center gap-4">
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center justify-center w-7 h-7 text-foreground hover:text-accent transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun size={22} strokeWidth={1.5} />
                ) : (
                  <Moon size={22} strokeWidth={1.5} />
                )}
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                onClick={() => setIsMenuOpen(true)}
                className="flex items-center justify-center w-7 h-7 text-foreground hover:text-accent transition-colors duration-300"
                aria-label="Open menu"
              >
                <Menu size={28} strokeWidth={1.5} />
              </motion.button>
            </div>
          </nav>
        ) : (
          <nav className="flex justify-end max-w-7xl mx-auto">
            {/* Theme Toggle & Menu Button */}
            <div className="flex items-center gap-4">
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center justify-center w-7 h-7 text-foreground hover:text-accent transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun size={22} strokeWidth={1.5} />
                ) : (
                  <Moon size={22} strokeWidth={1.5} />
                )}
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onClick={() => setIsMenuOpen(true)}
                className="flex items-center justify-center w-7 h-7 text-foreground hover:text-accent transition-colors duration-300"
                aria-label="Open menu"
              >
                <Menu size={28} strokeWidth={1.5} />
              </motion.button>
            </div>
          </nav>
        )}
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
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
              }}
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
                          className={`font-serif text-2xl md:text-3xl font-medium transition-colors duration-300 ${
                            location.pathname === link.path
                              ? "text-accent"
                              : "text-foreground hover:text-accent"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

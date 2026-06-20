import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Junior Council', path: '/junior-council' },
  { name: 'Senior Council', path: '/senior-council' },
  { name: 'Events', path: '/events' },
  { name: 'Motions', path: '/motions' },
  { name: 'Rule Book', path: '/rulebook' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
<motion.nav
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled
      ? 'bg-navy-900/80 backdrop-blur-2xl border-b border-gold-500/10 shadow-lg shadow-black/20'
      : 'bg-transparent'
  }`}
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
<NavLink to="/" className="flex items-center gap-4">
  <motion.div whileHover={{ scale: 1.05 }}>
    <img
      src="/logo.jpeg"
      alt="Cognitive Minds Logo"
      className="h-12 w-12 md:h-14 md:w-14 object-contain rounded-lg shadow-lg ring-1 ring-gold-500/20"
    />
  </motion.div>

  <div className="hidden sm:flex flex-col">
    <h1 className="font-display font-bold text-white text-xl leading-none">
      Cognitive Minds
    </h1>

    <span className="text-gold-500 text-[10px] uppercase tracking-[0.25em] mt-1">
      Debating Society
    </span>
  </div>
</NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.slice(0, 7).map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-gold-500 bg-white/5'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <motion.span whileHover={{ y: -2 }} className="block">
                  {link.name}
                </motion.span>
              </NavLink>
            ))}
          </div>

          {/* Join Us Button */}
          <div className="hidden lg:block">
            <NavLink to="/contact">
              <motion.button
                className="px-6 py-2.5 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-semibold rounded-full hover:shadow-lg hover:shadow-gold-500/25 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Us
              </motion.button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy-900/98 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'text-gold-500 bg-white/5'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4">
                <NavLink to="/contact" className="block">
                  <button className="w-full text-center px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-semibold rounded-full">
                    Join Us
                  </button>
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

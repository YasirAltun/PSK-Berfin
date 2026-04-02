import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import siteConfig from '../../config/siteConfig';

const navLinks = [
  { label: 'Hakkımda',        href: '#hakkimda' },
  { label: 'Çalışma Alanları', href: '#calisma-alanlari' },
  { label: 'Eğitimler',       href: '#egitimler' },
  { label: 'Randevu',         href: '#randevu' },
  { label: 'SSS',             href: '#sss' },
  { label: 'İletişim',        href: '#iletisim' },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [activeLink,   setActiveLink]   = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass border-b border-white/40 shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-md flex items-center justify-between px-6">
          {/* Logo / İsim */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col leading-tight text-left"
          >
            <span className="font-serif text-xl font-light tracking-wide text-mint-dark">
              {siteConfig.name}
            </span>
            <span className="text-[0.65rem] tracking-widest uppercase text-brown font-sans font-medium">
              Psikolog
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`font-sans text-sm font-medium tracking-wide transition-colors duration-200 relative group ${
                  activeLink === link.href
                    ? 'text-mint-dark'
                    : 'text-[#3a3a3a] hover:text-mint-dark'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-mint-dark transition-all duration-300 ${
                  activeLink === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#randevu')}
              className="btn-primary text-sm py-2 px-5 ml-2"
            >
              Randevu Al
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menüyü aç"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-mint-dark origin-center transition-all"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-mint-dark"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-mint-dark origin-center transition-all"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[64px] left-0 right-0 z-40 glass border-b border-white/40 md:hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left font-sans text-sm font-medium text-[#3a3a3a] hover:text-mint-dark py-3 border-b border-beige/60 last:border-0 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#randevu')}
                className="btn-primary text-sm mt-3 justify-center"
              >
                Randevu Al
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

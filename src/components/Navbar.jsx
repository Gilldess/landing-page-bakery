import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'

const navLinks = ['Menu', 'Story', 'Specials', 'Location', 'Contact']

export default function Navbar({ isDark, setIsDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled 
          ? 'bg-cream/95 dark:bg-charcoal/95 backdrop-blur-md border-b border-charcoal/5 dark:border-white/5 py-3' 
          : 'bg-transparent py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="font-display text-3xl tracking-widest text-charcoal dark:text-cream"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            BAVE<span className="text-ember">TTA</span>
          </motion.a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link}>
                <motion.button
                  onClick={() => scrollTo(link)}
                  className="relative font-body text-sm tracking-widest uppercase text-charcoal dark:text-cream/70 dark:hover:text-cream transition-colors duration-300 group"
                  whileHover={{ y: -2 }}
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-ember group-hover:w-full transition-all duration-300" />
                </motion.button>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-4">
            {/* Dark mode toggle */}
            <motion.button
              onClick={() => setIsDark(!isDark)}
              className="w-9 h-9 rounded-full border border-charcoal/20 dark:border-cream/20 flex items-center justify-center dark:text-cream/70 dark:hover:text-cream hover:border-ember transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDark ? 'moon' : 'sun'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <Moon size={16} /> : <Sun size={16} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Reserve CTA */}
            <motion.button
              className="hidden md:block px-5 py-2 bg-ember text-charcoal dark:text-cream text-xs tracking-widest uppercase font-body rounded-full hover:bg-ember-light transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reserve
            </motion.button>

            {/* Mobile menu */}
            <motion.button
              className="md:hidden text-charcoal dark:text-cream"
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-cream dark:bg-charcoal flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => scrollTo(link)}
                className="font-display text-5xl text-charcoal dark:text-cream hover:text-ember transition-colors"
              >
                {link}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 px-8 py-3 bg-ember text-cream text-xs tracking-widest uppercase rounded-full"
            >
              Reserve a Table
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

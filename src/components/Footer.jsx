import { motion } from 'framer-motion'

const footerLinks = {
  Explore: ['Menu', 'Story', 'Specials', 'Press Kit'],
  Visit: ['Brussels', 'Antwerp', 'Ghent', 'Reservations'],
  Legal: ['Privacy Policy', 'Terms of Use', 'Allergens', 'Sitemap'],
}

export default function Footer() {
  return (
    <footer className="dark:bg-charcoal bg-ember/10 border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <motion.p
              className="font-display text-4xl tracking-widest text-charcoal dark:text-cream mb-4"
              whileHover={{ letterSpacing: '0.2em' }}
              transition={{ duration: 0.4 }}
            >
              BAVE<span className="text-ember">TTA</span>
            </motion.p>
            <p className="font-body text-charcoal/40 dark:text-cream/40 text-sm leading-relaxed max-w-[200px]">
              Belgian spaghetti bars with an Italian soul. Open every day, because pasta shouldn't wait.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-display text-sm tracking-[0.3em] uppercase text-ember mb-5">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="font-body text-sm text-charcoal/40 dark:text-cream/40 hover:text-charcoal dark:hover:text-cream/80 transition-colors duration-200"
                      whileHover={{ x: 4 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-charcoal/30 dark:bg-white/5 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-charcoal/30 dark:text-cream/30 text-xs font-body tracking-widest">
          <p>© {new Date().getFullYear()} BAVETTA BV. All rights reserved.</p>

          <div className="flex items-center gap-2">
            <span className="text-ember">🍝</span>
            <span>Made with passion in Belgium</span>
          </div>

          <p>VAT BE 0123.456.789</p>
        </div>
      </div>
    </footer>
  )
}

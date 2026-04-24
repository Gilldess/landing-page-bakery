import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { menuItems, categories } from '../data/menu'
import MenuCard from './MenuCard'

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const headingRef = useRef(null)
  const inView = useInView(headingRef, { once: true, margin: '-60px' })

  const filtered =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter((i) => i.category === activeCategory)

  return (
    <section id="menu" className="py-32 px-6 bg-ember/5 dark:bg-charcoal-light">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headingRef} className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-ember text-xs tracking-[0.4em] uppercase font-body mb-4"
            >
              What We Serve
            </motion.p>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 80 }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.9, type: 'spring', stiffness: 80 }}
                className="font-display text-[clamp(3rem,8vw,7rem)] leading-none tracking-wider text-charcoal dark:text-cream"
              >
                THE MENU
              </motion.h2>
            </div>
          </div>

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2 rounded-full text-xs tracking-widest uppercase font-body transition-colors duration-300 ${
                  activeCategory === cat
                    ? 'text-cream'
                    : 'text-charcoal/50 dark:text-cream/50 hover:text-charcoal/80 dark:hover:text-cream/80'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {activeCategory === cat && (
                  <motion.span
                    layoutId="activeCat"
                    className="absolute inset-0 bg-ember rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
                {activeCategory !== cat && (
                  <span className="absolute inset-0 border border-ember/10 dark:border-white/10 rounded-full" />
                )}
                <span className="relative">{cat}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

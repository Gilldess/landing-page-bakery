import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const socials = [
  {
    name: 'Instagram',
    handle: '@bavetta.official',
    url: 'https://instagram.com',
    emoji: '📸',
    color: '#E1306C',
    followers: '48.2K',
  },
  {
    name: 'TikTok',
    handle: '@bavetta',
    url: 'https://tiktok.com',
    emoji: '🎵',
    color: '#69C9D0',
    followers: '112K',
  },
  {
    name: 'Facebook',
    handle: 'Bavetta Restaurant',
    url: 'https://facebook.com',
    emoji: '👥',
    color: '#1877F2',
    followers: '24.8K',
  },
  {
    name: 'Pinterest',
    handle: 'bavetta.food',
    url: 'https://pinterest.com',
    emoji: '📌',
    color: '#E60023',
    followers: '9.1K',
  },
]

export default function SocialMedia() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-32 px-6 bg-cream dark:bg-charcoal">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div ref={ref} className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-ember text-xs tracking-[0.4em] uppercase font-body mb-4"
          >
            Stay Connected
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 80 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.9, type: 'spring', stiffness: 80 }}
              className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-none tracking-wider text-charcoal dark:text-cream"
            >
              FOLLOW THE{' '}
              <span className="font-serif italic text-ember font-normal text-[0.85em]">
                Journey
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-6 font-body text-charcoal/50 dark:text-cream/50 max-w-md mx-auto"
          >
            Behind every dish, there's a story. Follow us for daily kitchen moments, seasonal menus, and table culture.
          </motion.p>
        </div>

        {/* Social cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socials.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                stiffness: 180,
                damping: 16,
                delay: i * 0.1,
              }}
              whileHover={{ y: -8, scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group relative p-6 rounded-2xl border border-white/5 bg-ember/10 dark:bg-charcoal-light hover:border-white/15 transition-all duration-300 flex flex-col items-center text-center gap-3"
            >
              {/* Color accent glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ backgroundColor: s.color }}
              />

              {/* Animated emoji */}
              <motion.div
                className="text-4xl"
                whileHover={{
                  rotate: [0, -15, 15, -10, 0],
                  scale: [1, 1.2, 1.1, 1.15, 1],
                }}
                transition={{ duration: 0.5 }}
              >
                {s.emoji}
              </motion.div>

              <div>
                <p className="font-display text-lg tracking-wider text-charcoal dark:text-cream">{s.name}</p>
                <p className="font-body text-xs text-charcoal/40 dark:text-cream/40 mt-0.5">{s.handle}</p>
              </div>

              <div
                className="text-sm font-body font-medium"
                style={{ color: s.color }}
              >
                {s.followers} followers
              </div>

              {/* Arrow */}
              <motion.span
                className="absolute top-4 right-4 text-charcoal/20 dark:text-cream/20 text-xs"
                animate={{ x: 0, opacity: 0.3 }}
                whileHover={{ x: 2, opacity: 0.8 }}
              >
                ↗
              </motion.span>
            </motion.a>
          ))}
        </div>

        {/* Newsletter bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 80 }}
          className="mt-16 p-8 rounded-2xl border border-white/5 bg-ember/10 dark:bg-charcoal-light flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-display text-2xl tracking-wider text-charcoal dark:text-cream mb-1">
              Get the Weekly Special
            </h3>
            <p className="font-body text-charcoal/50 dark:text-cream/50 text-sm">
              Seasonal menus, chef's notes, exclusive invitations.
            </p>
          </div>

          <div className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 md:w-64 px-5 py-3 rounded-full bg-cream dark:bg-charcoal border border-white/10 text-charcoal dark:text-cream text-sm font-body placeholder-charcoal/30 dark:placeholder-cream/30 focus:outline-none focus:border-ember/50 transition-colors"
            />
            <motion.button
              className="px-6 py-3 bg-ember text-cream text-xs tracking-widest uppercase rounded-full hover:bg-ember-light transition-colors whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

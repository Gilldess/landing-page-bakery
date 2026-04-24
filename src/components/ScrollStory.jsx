import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const storyItems = [
  {
    emoji: '🌾',
    title: 'Sourced with Intent',
    body: 'We partner with small Italian farms. Every ingredient travels with a story, from volcanic soil to your plate.',
    accent: '#C8441B',
  },
  {
    emoji: '🔥',
    title: 'Crafted with Fire',
    body: 'Our wood-fired ovens reach 485°C. The crust blisters in 90 seconds. Nothing is rushed, everything is timed.',
    accent: '#D4A843',
  },
  {
    emoji: '🍝',
    title: 'Plated with Soul',
    body: 'A plate of spaghetti is an act of care. Each twirl, each ladle of sauce is a gesture of welcome.',
    accent: '#E8623D',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 60, rotate: -6 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: 'spring', stiffness: 100, damping: 18 },
  },
}

function StoryCard({ emoji, title, body, accent, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="group relative"
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div className="relative p-8 rounded-2xl border border-ember/50 dark:border-white/5 bg-cream dark:bg-charcoal-light overflow-hidden hover:border-white/10 transition-colors duration-500">
        {/* Accent glow */}
        <div
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"
          style={{ backgroundColor: accent }}
        />

        {/* Number */}
        <span className="absolute top-6 right-8 font-display text-6xl text-ember/5 dark:text-white/5 select-none">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Emoji */}
        <motion.div
          className="text-5xl mb-5 w-fit"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          {emoji}
        </motion.div>

        <h3
          className="font-display text-2xl tracking-wider text-charcoal dark:text-cream mb-3"
          style={{ color: accent }}
        >
          {title}
        </h3>
        <p className="font-body text-charcoal dark:text-cream/60 leading-relaxed text-sm">{body}</p>
      </div>
    </motion.div>
  )
}

export default function ScrollStory() {
  const headingRef = useRef(null)
  const inView = useInView(headingRef, { once: true, margin: '-60px' })

  return (
    <section id="story" className="py-32 px-6 bg-cream dark:bg-charcoal">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-ember text-xs tracking-[0.4em] uppercase font-body mb-4"
          >
            Our Philosophy
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 80 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.9, type: 'spring', stiffness: 80 }}
              className="font-display text-[clamp(3rem,8vw,7rem)] leading-none tracking-wider text-charcoal dark:text-cream"
            >
              THE{' '}
              <span className="font-serif italic text-ember font-normal text-[0.85em]">
                Art
              </span>{' '}
              OF PASTA
            </motion.h2>
          </div>
        </div>

        {/* Story cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {storyItems.map((item, i) => (
            <StoryCard key={item.title} {...item} index={i} />
          ))}
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.4 }}
          className="mt-24 h-px bg-gradient-to-r from-transparent via-ember/40 to-transparent origin-left"
        />
      </div>
    </section>
  )
}

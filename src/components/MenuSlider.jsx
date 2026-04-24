import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { sliderItems } from '../data/menu'

export default function MenuSlider() {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const headingRef = useRef(null)
  const inView = useInView(headingRef, { once: true, margin: '-60px' })

  const CARD_WIDTH = 220
  const GAP = 20

  const scrollTo = (index) => {
    if (!trackRef.current) return
    const clamped = Math.max(0, Math.min(sliderItems.length - 1, index))
    setActiveIndex(clamped)
    trackRef.current.scrollTo({
      left: clamped * (CARD_WIDTH + GAP),
      behavior: 'smooth',
    })
  }

  const handleScroll = () => {
    if (!trackRef.current) return
    const idx = Math.round(trackRef.current.scrollLeft / (CARD_WIDTH + GAP))
    setActiveIndex(idx)
  }

  return (
    <section id="specials" className="py-32 bg-cream dark:bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div ref={headingRef} className="flex items-end justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-ember text-xs tracking-[0.4em] uppercase font-body mb-4"
            >
              Browse & Explore
            </motion.p>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 80 }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.9, type: 'spring', stiffness: 80 }}
                className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-wider text-charcoal dark:text-cream"
              >
                TODAY'S PICKS
              </motion.h2>
            </div>
          </div>

          {/* Arrows */}
          <div className="hidden md:flex gap-3">
            <motion.button
              onClick={() => scrollTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="w-12 h-12 rounded-full border border-ember/30 dark:border-white/10 flex items-center justify-center text-charcoal/60 dark:text-cream/60 hover:text-charcoal dark:hover:text-cream hover:border-ember dark:hover:border-white/30 disabled:opacity-30 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={18} />
            </motion.button>
            <motion.button
              onClick={() => scrollTo(activeIndex + 1)}
              disabled={activeIndex === sliderItems.length - 1}
              className="w-12 h-12 rounded-full border border-ember/30 dark:border-white/10 flex items-center justify-center text-charcoal/60 dark:text-cream/60 hover:text-charcoal dark:hover:text-cream hover:border-ember dark:hover:border-white/30 disabled:opacity-30 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Draggable Track */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex gap-5 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing pl-6 md:pl-[calc((100vw-80rem)/2+1.5rem)] pr-6 snap-x snap-mandatory"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {sliderItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, rotate: -8 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              type: 'spring',
              stiffness: 120,
              damping: 16,
              delay: i * 0.05,
            }}
            whileHover={{ y: -10, scale: 1.03 }}
            className="flex-shrink-0 snap-start"
            style={{ width: CARD_WIDTH, scrollSnapAlign: 'start' }}
          >
            <div className="h-[300px] rounded-2xl bg-ember/10 dark:bg-charcoal-light border border-charcoal/10 dark:border-white/5 hover:border-charcoal/30 dark:hover:border-white/15 transition-colors duration-500 flex flex-col items-center justify-center gap-4 p-6 relative overflow-hidden group">
              {/* Glow */}
              <div className="absolute inset-0 bg-ember/0 group-hover:bg-charcoal/10 dark:group-hover:bg-ember/5 transition-colors duration-500 rounded-2xl" />

              <motion.div
                className="text-6xl"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                {item.emoji}
              </motion.div>
              <div className="text-center">
                <p className="font-display text-xl tracking-wider text-charcoal dark:text-cream">{item.label}</p>
                <p className="font-serif italic text-charcoal/50 dark:text-cream/50 text-sm">{item.sub}</p>
              </div>

              {/* Index badge */}
              <span className="absolute top-4 right-4 w-6 h-6 rounded-full bg-charcoal/20 text-charcoal dark:bg-ember/20 dark:text-ember text-xs flex items-center justify-center font-body">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
          </motion.div>
        ))}
        {/* End padding */}
        <div className="flex-shrink-0 w-6" />
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-10 px-6">
        {sliderItems.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => scrollTo(i)}
            className="h-1.5 rounded-full transition-all duration-300"
            animate={{
              width: i === activeIndex ? 24 : 6,
              backgroundColor: i === activeIndex ? '#FF653F' : 'rgb(255, 200, 92)',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          />
        ))}
      </div>
    </section>
  )
}

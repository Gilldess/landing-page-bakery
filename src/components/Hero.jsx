import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Pizza from "../asset/Pizza.png"
import Drink from "../asset/drink.png"
import Glass from "../asset/glasdrink.png"
import Burger from "../asset/burger.png"
import EsCream from "../asset/escream.png"
import Bread from "../asset/bread.png"

const floatingImg = [
  { img: Pizza, x: '15%', y: '20%', size: 'w-44', delay: 0, rot: -15 },
  { img: Drink, x: '75%', y: '15%', size: 'w-44', delay: 0.3, rot: 12 },
  { img: Glass, x: '80%', y: '65%', size: 'w-44', delay: 0.6, rot: -8 },
  { img: Burger, x: '10%', y: '70%', size: 'w-32', delay: 0.9, rot: 20 },
  { img: EsCream, x: '50%', y: '8%', size: 'w-32', delay: 1.2, rot: 5 },
  { img: Bread, x: '30%', y: '85%', size: 'w-32', delay: 0.4, rot: -10 },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream dark:bg-charcoal grain"
    >
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-ember/50 dark:bg-ember/10 blur-[120px]" />
      </div>

      {floatingImg.map(({ img, x, y: ey, size, delay, rot }, index) => (
        <motion.div
          key={index}
          className={`absolute ${size} aspect-square select-none pointer-events-none`}
          style={{ left: x, top: ey }}
          initial={{ opacity: 0, scale: 0, rotate: rot * 2 }}
          animate={{
            opacity: [0, 1, 0.8, 1],
            scale: 1,
            rotate: rot,
            y: [0, -18, 0],
          }}
          transition={{
            opacity: { delay, duration: 0.8 },
            scale: { delay, duration: 0.8, type: 'spring', stiffness: 200 },
            rotate: { delay, duration: 0.8 },
            y: { delay: delay + 0.8, duration: 4, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
        <img 
          src={img} 
          alt="decoration" 
          className="w-full h-full object-contain drop-shadow-2xl" 
        />
        </motion.div>
      ))}

      {/* Big spinning plate decoration */}
      <motion.div
        className="absolute text-[220px] select-none pointer-events-none opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        🍽️
      </motion.div>

      {/* Hero content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-ember text-xs tracking-[0.4em] uppercase font-body mb-6"
        >
          Brussels · Antwerp · Ghent
        </motion.p>

        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, type: 'spring', stiffness: 80 }}
            className="font-display text-[clamp(5rem,16vw,14rem)] leading-none tracking-wider text-charcoal dark:text-cream"
          >
            BAVE
            <span className="text-ember">TTA</span>
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-10">
          <motion.p
            initial={{ y: 60 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, type: 'spring', stiffness: 80 }}
            className="font-serif italic text-xl md:text-2xl text-charcoal/60 dark:text-cream/60"
          >
            Where every plate tells a story
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: 'spring', stiffness: 200, damping: 15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={scrollToMenu}
            className="group px-10 py-4 bg-ember text-cream text-sm tracking-widest uppercase rounded-full flex items-center gap-3 hover:bg-ember-light transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore Menu
            <motion.span
              className="group-hover:translate-x-1 transition-transform"
            >
              →
            </motion.span>
          </motion.button>

          <motion.button
            className="px-10 py-4 border border-ember/30 dark:border-cream/20 text-charcoal dark:text-cream text-sm tracking-widest uppercase rounded-full hover:border-cream/50 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Reserve Table
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}

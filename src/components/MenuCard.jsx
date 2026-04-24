import { motion } from 'framer-motion'

export default function MenuCard({ item, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.85, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: -20 }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 20,
        delay: index * 0.04,
      }}
      className="group relative rounded-2xl overflow-hidden border border-ember/50 dark:border-white/5 bg-cream-light dark:bg-charcoal-light hover:border-white/15 transition-all duration-500 cursor-pointer"
      whileHover={{ y: -6 }}
    >
      {/* Color accent top bar */}
      <div
        className="h-1 w-full"
        style={{ backgroundColor: item.color }}
      />

      <div className="p-6">
        {/* Tag */}
        {item.tag && (
          <span
            className="inline-block px-3 py-1 rounded-full text-xs tracking-widest uppercase mb-4 font-body"
            style={{
              backgroundColor: item.color + '25',
              color: item.color === '#2A2520' ? '#F5ECD7' : item.color,
            }}
          >
            {item.tag}
          </span>
        )}

        {/* Emoji */}
        <motion.div
          className="text-5xl mb-4 w-fit"
          whileHover={{ scale: 1.15, rotate: 8 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          {item.emoji}
        </motion.div>

        {/* Info */}
        <h3 className="font-display text-xl tracking-wider text-charcoal dark:text-cream mb-2">
          {item.name}
        </h3>
        <p className="font-body text-charcoal/50 dark:text-cream/50 text-sm leading-relaxed mb-5">
          {item.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="font-display text-2xl tracking-wider" style={{ color: item.color === '#2A2520' ? '#D4A843' : item.color }}>
            {item.price}
          </span>
          <motion.button
            className="w-9 h-9 rounded-full border border-ember/30 dark:border-white/10 flex items-center justify-center text-charcoal/60 dark:text-cream/50 hover:text-charcoal dark:hover:text-cream hover:border-ember/50 dark:hover:border-white/30 transition-all"
            whileHover={{ scale: 1.15, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            +
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

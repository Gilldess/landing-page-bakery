import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react'

const locations = [
  {
    city: 'Brussels',
    address: 'Rue de Namur 16, 1000 Bruxelles',
    hours: 'Mon–Sun: 12:00–23:00',
    phone: '+32 2 512 34 56',
    mapUrl: 'https://maps.google.com/?q=Rue+de+Namur+16+Brussels',
  },
  {
    city: 'Antwerp',
    address: 'Meir 42, 2000 Antwerpen',
    hours: 'Mon–Sun: 12:00–23:30',
    phone: '+32 3 234 56 78',
    mapUrl: 'https://maps.google.com/?q=Meir+42+Antwerpen',
  },
  {
    city: 'Ghent',
    address: 'Korenmarkt 8, 9000 Gent',
    hours: 'Mon–Sun: 11:30–23:00',
    phone: '+32 9 345 67 89',
    mapUrl: 'https://maps.google.com/?q=Korenmarkt+8+Gent',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 18, delay: i * 0.1 },
  }),
}

export default function Location() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="location" className="py-32 px-6 bg-ember/10 dark:bg-charcoal-light">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref} className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-ember text-xs tracking-[0.4em] uppercase font-body mb-4"
          >
            Find Us
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 80 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.9, type: 'spring', stiffness: 80 }}
              className="font-display text-[clamp(3rem,8vw,7rem)] leading-none tracking-wider text-charcoal dark:text-cream"
            >
              OUR LOCATIONS
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 18 }}
            className="rounded-2xl overflow-hidden border border-white/5 h-80 lg:h-auto min-h-[320px] relative"
          >
            <iframe
              title="Bavetta Brussels Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.997097878734!2d4.353490315743!3d50.84617897952825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c4840f2b1f2b%3A0x40099ab2f4d5470!2sRue%20de%20Namur%2C%20Brussels!5e0!3m2!1sen!2sbe!4v1234567890"
              className="w-full h-full grayscale contrast-125 opacity-80"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
            />

            {/* Overlay pin */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl drop-shadow-2xl"
              >
                📍
              </motion.div>
            </div>
          </motion.div>

          {/* Location cards */}
          <div className="flex flex-col gap-4">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.city}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ x: 6 }}
                className="group p-6 rounded-2xl border border-white/5 bg-cream dark:bg-charcoal hover:border-white/15 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-2xl tracking-wider text-ember">
                    {loc.city}
                  </h3>
                  <motion.a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-charcoal/40 dark:text-cream/40 hover:text-charcoal dark:hover:text-cream hover:border-white/30 transition-all"
                    whileHover={{ scale: 1.15, rotate: -10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={14} />
                  </motion.a>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-sm text-charcoal/60 dark:text-cream/60">
                    <MapPin size={14} className="text-ember flex-shrink-0" />
                    <span className="font-body">{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-charcoal/60 dark:text-cream/60">
                    <Clock size={14} className="text-ember flex-shrink-0" />
                    <span className="font-body">{loc.hours}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-charcoal/60 dark:text-cream/60">
                    <Phone size={14} className="text-ember flex-shrink-0" />
                    <span className="font-body">{loc.phone}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

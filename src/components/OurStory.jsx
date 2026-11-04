import { motion } from 'framer-motion'
import { ArrowDownRight, Heart, Sparkles } from 'lucide-react'

const highlights = [
  { value: '2024', label: 'Established' },
  { value: '100+', label: 'Cakes weekly' },
  { value: '5.0', label: 'Guest rating' },
]

export default function OurStory() {
  return (
    <section id="story" className="story-section bg-secondary section-pad relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="story-layout">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="story-visual"
          >
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85"
              alt="Warm, welcoming bakery interior"
              loading="lazy"
            />
            <div className="story-image-shade" />
            <span className="story-image-label"><Sparkles size={14} /> Made by hand, every day</span>
            <div className="story-image-note">
              <span className="story-note-icon"><Heart size={16} fill="currentColor" /></span>
              <p>Small-batch baking.<br /><strong>Big-hearted celebrations.</strong></p>
            </div>
            <span className="story-image-index">01 — 03</span>
          </motion.div>

          <div className="story-copy">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
            >
              <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.24em] text-accent">A little sweetness goes a long way</span>
              <h2 className="font-serif text-4xl font-semibold italic leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Made with care.<br /><span className="text-accent">Remembered with love.</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-body md:text-lg">
                What began in a small kitchen grew from a simple belief: the best celebrations deserve something made just for them.
              </p>
            </motion.div>

            <div className="story-principles">
              <motion.article
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="story-principle"
              >
                <span className="story-principle-number">01</span>
                <div>
                  <h3>Ingredients worth tasting</h3>
                  <p>Real butter, free-range eggs, Belgian chocolate and seasonal fruit. No shortcuts, just good ingredients treated with care.</p>
                </div>
                <ArrowDownRight size={17} aria-hidden="true" />
              </motion.article>
              <motion.article
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="story-principle"
              >
                <span className="story-principle-number">02</span>
                <div>
                  <h3>Always made by hand</h3>
                  <p>Every sponge is mixed, baked and finished in our kitchen, one thoughtful detail at a time.</p>
                </div>
                <ArrowDownRight size={17} aria-hidden="true" />
              </motion.article>
            </div>

            <div className="story-highlights">
              {highlights.map((item) => (
                <div className="story-highlight" key={item.label}>
                  <span>{item.value}{item.value === '5.0' && <span className="story-star">★</span>}</span>
                  <small>{item.label}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

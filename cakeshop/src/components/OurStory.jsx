import { motion } from 'framer-motion'

export default function OurStory() {
  return (
    <section id="story" className="bg-secondary section-pad relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl relative">
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80" alt="Bakery interior" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute bottom-6 left-6 right-6 bg-gradient-to-t from-ground/90 to-transparent p-8 rounded-xl text-ink">
                <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">Our Story</span>
                <h3 className="text-2xl font-serif font-bold mb-2">A Little Sweetness Goes A Long Way.</h3>
                <p className="text-ink/90 text-sm leading-relaxed">Founded in a small kitchen with a big dream.</p>
              </div>
            </div>
          </motion.div>
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink tracking-tight italic">Passion for Baking</h2>
              <p className="text-body leading-relaxed text-lg">Every cake we make begins with real butter, free-range eggs and flour milled from local grain. No shortcuts, no mixes — just honest ingredients treated with care.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4" style={{ transitionDelay: '0.2s' }}>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink tracking-tight italic">Fresh Ingredients</h2>
              <p className="text-body leading-relaxed text-lg">Seasonal fruit, Belgian chocolate, Madagascan vanilla and organic cream. We source what tastes best and let the ingredients speak.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4" style={{ transitionDelay: '0.4s' }}>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink tracking-tight italic">Handcrafted Process</h2>
              <p className="text-body leading-relaxed text-lg">Each cake is mixed, baked and decorated by hand in our open kitchen. You can watch, smell and taste the difference.</p>
            </motion.div>
            <div className="pt-8 border-t border-body/20 flex flex-wrap gap-6 items-center">
              <div className="text-center"><span className="block text-2xl font-serif font-bold text-ink">2024</span><span className="text-xs uppercase tracking-widest text-body/60">Established</span></div>
              <div className="h-px w-16 bg-body mx-2" />
              <div className="text-center"><span className="block text-2xl font-serif font-bold text-ink">100+</span><span className="text-xs uppercase tracking-widest text-body/60">Cakes Weekly</span></div>
              <div className="h-px w-16 bg-body mx-2" />
              <div className="text-center"><span className="block text-2xl font-serif font-bold text-ink">5★</span><span className="text-xs uppercase tracking-widest text-body/60">Customer Rating</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

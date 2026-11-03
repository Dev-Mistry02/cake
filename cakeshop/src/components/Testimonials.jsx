import { useState } from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  { id: 1, name: 'Elena Rossi', role: 'Bride', stars: 5, text: 'The wedding cake was breathtaking — everyone asked where we got it.', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80' },
  { id: 2, name: 'Marcus Chen', role: 'Food Critic', stars: 5, text: 'Best chocolate cake I’ve had in years. Rich, balanced, not too sweet.', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
  { id: 3, name: 'Sarah Jenkins', role: 'Event Planner', stars: 5, text: 'We order all our client celebration cakes from here. Always on time.', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80' },
  { id: 4, name: 'David Park', role: 'Father', stars: 5, text: 'My daughter’s birthday cake was the centrepiece of the party.', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80' },
  { id: 5, name: 'Lena Kowalski', role: 'Chef', stars: 5, text: 'You can taste the quality in every bite. Real butter, real cream.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80' },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const testimonial = testimonials[activeIndex]

  return (
    <section id="testimonials" className="bg-ground section-pad relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30 blur-[100px]" />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-3">Customer Love</span>
          <h2 className="section-title">What They<span className="block text-accent italic"> Say</span></h2>
        </div>
        <div className="relative overflow-hidden">
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex min-h-[360px] flex-col items-center p-8 text-center md:min-h-[400px] md:p-12"
          >
            <div className="mb-6 h-16 w-16 overflow-hidden rounded-full border-4 border-accent/30 shadow-lg">
              <img src={testimonial.img} alt={testimonial.name} className="h-full w-full object-cover" />
            </div>
            <div className="mx-auto mb-6 h-0.5 w-12 bg-accent" />
            <p className="mx-auto mb-6 max-w-md text-lg font-serif italic leading-relaxed text-body md:text-xl">“{testimonial.text}”</p>
            <div className="flex gap-1 text-yellow-500" aria-label={`${testimonial.stars} out of 5 stars`}>★★★★★</div>
            <div className="mt-4">
              <span className="block text-lg font-serif font-bold text-ink">{testimonial.name}</span>
              <span className="text-sm uppercase tracking-widest text-body/60">{testimonial.role}</span>
            </div>
          </motion.div>
          <div className="mt-12 flex justify-center gap-3">
            {testimonials.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show review by ${item.name}`}
                aria-pressed={activeIndex === index}
                className={`h-2 rounded-full transition-all ${activeIndex === index ? 'w-6 bg-ink' : 'w-2 bg-body/40 hover:bg-body'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

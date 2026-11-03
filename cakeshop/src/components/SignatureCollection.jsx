import { useState } from 'react'

const signatureCakes = [
  {
    id: 1,
    name: 'Midnight Chocolate',
    headline: '70% single-origin cacao.',
    text: 'A deep, intense chocolate cake layered with salted caramel and finished with cocoa shards.',
    color: '#2A1A15',
    img: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    name: 'Vanilla Bean',
    headline: 'Madagascar vanilla, whipped cream.',
    text: 'Light, airy sponge with vanilla bean paste, fresh cream and seasonal berries.',
    color: '#F7EFE5',
    img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    name: 'Strawberry Rose',
    headline: 'Fresh strawberries, rosewater cream.',
    text: 'Delicate layers of almond sponge, strawberry confit and rose-scented buttercream.',
    color: '#FDECEA',
    img: 'https://images.unsplash.com/photo-1557308536-ee471ef2c390?auto=format&fit=crop&w=1200&q=80',
  },
]

export default function SignatureCollection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const cake = signatureCakes[activeIndex]

  return (
    <section id="signature" className="relative w-full bg-ground">
      <div className="mx-auto flex min-h-[780px] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center md:min-h-[900px] md:px-12">
        <div className="relative h-[38vh] min-h-[260px] w-full max-w-4xl md:h-[48vh]">
          <img
            src={cake.img}
            alt={cake.name}
            className="h-full w-full rounded-3xl border-4 border-border object-cover shadow-2xl"
            loading="lazy"
          />
          <div
            className="absolute inset-0 rounded-3xl"
            style={{ background: `linear-gradient(to top, ${cake.color}, transparent 70%)` }}
          />
        </div>
        <div className="mt-8 max-w-lg">
          <span className="mb-3 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
            Signature Collection
          </span>
          <h2 className="mb-4 text-4xl font-serif font-bold italic leading-tight text-ink md:text-6xl">
            {cake.name}
          </h2>
          <p className="mx-auto mb-6 max-w-md text-lg leading-relaxed text-body md:text-xl">{cake.text}</p>
          <a href="#contact" className="inline-flex rounded-full bg-btn px-8 py-3.5 font-sans text-sm font-semibold tracking-wide text-ground transition-transform hover:scale-105">
            Order This Cake
          </a>
        </div>
        <div className="mt-8 flex justify-center gap-3" aria-label="Choose a signature cake">
          {signatureCakes.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${item.name}`}
              aria-pressed={activeIndex === index}
              className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === index ? 'w-6 bg-ink' : 'w-2.5 bg-body/40 hover:bg-body'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

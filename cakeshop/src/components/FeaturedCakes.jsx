import { useState } from 'react'
import { UtensilsCrossed, Utensils, Award, Wheat, Gift, Tag } from 'lucide-react'

const cakes = [
  {
    id: 1,
    name: 'Velvet Celebration',
    category: 'Birthday Cakes',
    price: '48',
    desc: 'Layers of red velvet with cream cheese frosting, fresh berries and edible gold.',
    icon: UtensilsCrossed,
    img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Ivory Union',
    category: 'Wedding Cakes',
    price: '120',
    desc: 'Tiered white chocolate cake with sugar flowers and champagne cream filling.',
    icon: Award,
    img: 'https://images.unsplash.com/photo-1557308536-ee471ef2c390?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Dark Obsession',
    category: 'Chocolate Cakes',
    price: '42',
    desc: '70% dark chocolate ganache, salted caramel drizzle and cocoa nibs.',
    icon: Utensils,
    img: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Pastel Dream',
    category: 'Designer Cakes',
    price: '58',
    desc: 'Vanilla bean with pastel buttercream, hand-piped flowers and gold leaf.',
    icon: Wheat,
    img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'Anniversary Rose',
    category: 'Anniversary Cakes',
    price: '64',
    desc: 'Rosewater almond cake with raspberry compote and candied violets.',
    icon: Gift,
    img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    name: 'Bespoke Creation',
    category: 'Custom Cakes',
    price: 'From 75',
    desc: 'Fully custom-designed to your theme, flavour and occasion.',
    icon: Tag,
    img: 'https://images.unsplash.com/photo-1557308536-ee471ef2c390?auto=format&fit=crop&w=800&q=80',
  },
]

export default function FeaturedCakes() {
  const [activeCategory, setActiveCategory] = useState('All')
  const categories = ['All', 'Birthday', 'Wedding', 'Chocolate', 'Designer', 'Anniversary', 'Custom']
  const visibleCakes = activeCategory === 'All'
    ? cakes
    : cakes.filter((cake) => cake.category.startsWith(activeCategory))

  return (
    <section id="cakes" className="bg-ground section-pad relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-40 blur-[80px]" />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="section-title">Featured<span className="block text-accent italic"> Cakes</span></h2>
            <p className="text-body/90 max-w-lg md:max-w-xl">
              Each cake is baked to order with seasonal ingredients and finished by hand.
            </p>
          </div>
          <div className="flex flex-wrap gap-3" aria-label="Filter cakes by category">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest transition-all border ${activeCategory === cat ? 'bg-btn text-ground border-btn' : 'border-body/20 text-body hover:bg-btn hover:text-ground hover:border-btn'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleCakes.map((cake) => (
            <div
              key={cake.id}
              className="cake-card group relative bg-card rounded-2xl overflow-hidden border border-border shadow-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={cake.img}
                  alt={cake.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/95 backdrop-blur-md border border-border">
                  <cake.icon size={14} className="text-body" />
                  <span className="text-xs font-semibold text-ink tracking-wide uppercase">{cake.category}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-ink tracking-tight mb-2">{cake.name}</h3>
                <p className="text-body mb-6 leading-relaxed line-clamp-2">{cake.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-sans font-bold text-ink">${cake.price}</span>
                  <a href="#builder" className="px-5 py-2.5 rounded-full bg-btn text-ground text-xs font-semibold uppercase tracking-widest hover:scale-105 transition-transform">
                    Customize
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

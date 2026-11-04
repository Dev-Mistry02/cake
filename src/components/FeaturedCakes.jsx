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
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16 gap-6">
          <div>
            <h2 className="section-title">Featured<span className="block text-accent italic"> Cakes</span></h2>
            <p className="text-body/90 max-w-lg md:max-w-xl text-sm md:text-base">
              Each cake is baked to order with seasonal ingredients and finished by hand.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`px-3 py-1.5 md:px-5 md:py-2 rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-widest transition-all border flex-shrink-0 ${
                  activeCategory === cat
                    ? 'border-btn bg-btn text-white'
                    : 'border-body/20 text-body hover:bg-btn hover:text-white hover:border-btn'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {visibleCakes.map((cake) => (
            <div
              key={cake.id}
              className="cake-card group relative bg-card rounded-2xl overflow-hidden border border-border shadow-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl"
            >
              <div className="relative h-32 sm:h-40 md:h-48 lg:h-64 overflow-hidden">
                <img
                  src={cake.img}
                  alt={cake.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-1.5 left-1.5 md:top-3 md:left-3 lg:top-4 lg:left-4 z-10 flex items-center gap-1 md:gap-1.5 lg:gap-2 px-1.5 py-0.5 md:px-2 md:py-1 lg:px-3 lg:py-1.5 rounded-full bg-secondary/95 backdrop-blur-md border border-border">
                  <cake.icon size={10} className="text-body md:w-3 md:h-3 lg:w-3.5 lg:h-3.5" />
                  <span className="text-[6px] sm:text-[7px] md:text-[9px] lg:text-xs font-semibold text-ink tracking-wide uppercase">{cake.category}</span>
                </div>
              </div>
              <div className="p-2 sm:p-3 md:p-4 lg:p-6">
                <h3 className="text-xs sm:text-sm md:text-base lg:text-xl font-serif font-bold text-ink tracking-tight mb-1 md:mb-2 line-clamp-2">{cake.name}</h3>
                <p className="text-body mb-2 md:mb-4 lg:mb-6 leading-relaxed line-clamp-2 text-[10px] sm:text-xs md:text-sm hidden sm:block">{cake.desc}</p>
                <div className="flex items-center justify-between flex-col sm:flex-row gap-1.5 sm:gap-2">
                  <span className="text-sm sm:text-base md:text-lg font-sans font-bold text-ink">${cake.price}</span>
                  <button className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 rounded-full bg-btn text-white text-[8px] sm:text-[10px] md:text-xs font-semibold uppercase tracking-widest hover:scale-105 transition-transform w-full sm:w-auto">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

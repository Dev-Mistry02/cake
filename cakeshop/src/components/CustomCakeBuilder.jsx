import { useState } from 'react'

const flavours = [
  { id: 'vanilla', label: 'Madagascar Vanilla', price: 0 },
  { id: 'chocolate', label: 'Belgian Chocolate', price: 5 },
  { id: 'red-velvet', label: 'Red Velvet', price: 8 },
  { id: 'lemon', label: 'Lemon Drizzle', price: 5 },
  { id: 'strawberry', label: 'Strawberry', price: 6 },
]
const sizes = [
  { id: 'small', label: 'Small (6 inch)', serves: '4-6 people', price: 0 },
  { id: 'medium', label: 'Medium (8 inch)', serves: '8-12 people', price: 15 },
  { id: 'large', label: 'Large (10 inch)', serves: '16-20 people', price: 30 },
]
const frostings = [
  { id: 'cream-cheese', label: 'Cream Cheese', price: 0 },
  { id: 'buttercream', label: 'Swiss Buttercream', price: 5 },
  { id: 'ganache', label: 'Chocolate Ganache', price: 10 },
  { id: 'whipped', label: 'Whipped Cream', price: 0 },
]
const themes = [
  { id: 'classic', label: 'Classic Elegant', price: 0 },
  { id: 'floral', label: 'Floral Garden', price: 15 },
  { id: 'modern', label: 'Modern Minimal', price: 10 },
  { id: 'rustic', label: 'Rustic Naked', price: 5 },
]

export default function CustomCakeBuilder() {
  const [flavour, setFlavour] = useState(flavours[0])
  const [size, setSize] = useState(sizes[1])
  const [frosting, setFrosting] = useState(frostings[0])
  const [theme, setTheme] = useState(themes[0])
  const [message, setMessage] = useState('Happy Birthday')
  const [delivery, setDelivery] = useState('')
  const total = flavour.price + size.price + frosting.price + theme.price

  return (
    <section id="builder" className="bg-secondary section-pad relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-3">Custom Builder</span>
          <h2 className="section-title">Build Your<span className="block text-accent italic"> Own Cake</span></h2>
          <p className="text-body mt-4 max-w-xl mx-auto">Choose your flavour, size, frosting and design. We’ll bake it fresh just for you.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            {[
              { title: 'Cake Flavour', items: flavours, value: flavour, onChange: setFlavour },
              { title: 'Cake Size', items: sizes, value: size, onChange: setSize },
              { title: 'Frosting Type', items: frostings, value: frosting, onChange: setFrosting },
              { title: 'Design Theme', items: themes, value: theme, onChange: setTheme },
            ].map((section) => (
              <div key={section.title} className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-serif font-bold text-ink mb-4">{section.title}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {section.items.map((item) => (
                    <button key={item.id} onClick={() => section.onChange(item)} className={`py-3 px-4 rounded-xl text-sm font-semibold transition-all border-2 text-center ${section.value.id === item.id ? 'bg-btn text-ground border-btn shadow-lg' : 'bg-secondary text-body border-border hover:border-accent'}`}>
                      {item.label}{item.price > 0 && ` +$${item.price}`}
                      {(item.id === 'small' || item.id === 'medium' || item.id === 'large') && <span className="block text-xs text-body/60 mt-1">{item.serves}</span>}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="text-lg font-serif font-bold text-ink mb-4">Message on Cake</h3>
              <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="e.g. Happy Birthday" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-body focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20" />
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="text-lg font-serif font-bold text-ink mb-4">Delivery Date</h3>
              <input type="date" value={delivery} onChange={(e) => setDelivery(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-body focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20" />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-card rounded-3xl p-8 shadow-2xl border border-border sticky top-24">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif font-bold text-ink mb-2">Your Preview</h3>
                <p className="text-body/70 text-sm">A visual summary of your selection</p>
              </div>
              <div className="space-y-6 mb-8">
                <div className="flex items-center justify-between p-4 bg-secondary rounded-xl"><span className="text-body">Flavour</span><span className="font-serif font-bold text-ink">{flavour.label}</span></div>
                <div className="flex items-center justify-between p-4 bg-secondary rounded-xl"><span className="text-body">Size</span><span className="font-serif font-bold text-ink">{size.label}</span></div>
                <div className="flex items-center justify-between p-4 bg-secondary rounded-xl"><span className="text-body">Frosting</span><span className="font-serif font-bold text-ink">{frosting.label}</span></div>
                <div className="flex items-center justify-between p-4 bg-secondary rounded-xl"><span className="text-body">Theme</span><span className="font-serif font-bold text-ink">{theme.label}</span></div>
                <div className="flex items-center justify-between p-4 bg-secondary rounded-xl"><span className="text-body">Message</span><span className="font-serif font-bold text-ink">{message || '—'}</span></div>
                <div className="flex items-center justify-between p-4 bg-secondary rounded-xl"><span className="text-body">Delivery</span><span className="font-serif font-bold text-ink">{delivery || 'Not set'}</span></div>
              </div>
              <div className="pt-6 border-t border-body/20">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-lg font-serif font-bold text-ink">Estimated Total</span>
                  <span className="text-2xl font-serif font-bold text-ink">${total}</span>
                </div>
                <button className="w-full btn-primary text-lg py-5">Add to Order</button>
                <p className="mt-4 text-xs text-body/60 text-center">Prices in local currency. Delivery calculated at checkout.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

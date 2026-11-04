import { lazy, Suspense, useState } from 'react'
import CakePreviewFallback from './CakePreviewFallback'

const CakePreview3D = lazy(() =>
  import('./CakePreview3D').catch((error) => {
    console.error('3D cake preview failed to load; showing the static preview instead.', error)
    return import('./CakePreviewFallback')
  })
)

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
    <section id="builder" className="bg-ground section-pad relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl md:mb-14">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.24em] text-accent">Made for your moment</span>
          <h2 className="section-title">Create your <span className="text-accent">cake</span></h2>
          <p className="max-w-xl text-sm leading-relaxed text-body md:text-base">
            Choose a few details and we’ll make it fresh, just for you.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)] lg:gap-14">
          <div className="space-y-8 md:space-y-10">
            {[
              { title: 'Flavour', items: flavours, value: flavour, onChange: setFlavour },
              { title: 'Size', items: sizes, value: size, onChange: setSize },
              { title: 'Frosting', items: frostings, value: frosting, onChange: setFrosting },
              { title: 'Design', items: themes, value: theme, onChange: setTheme },
            ].map((group, index) => (
              <fieldset key={group.title} className="border-b border-border/70 pb-7 last:border-0">
                <legend className="mb-4 flex items-center gap-3 text-sm font-semibold text-ink">
                  <span className="font-sans text-xs tracking-widest text-accent">0{index + 1}</span>
                  {group.title}
                </legend>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {group.items.map((item) => {
                    const selected = group.value.id === item.id
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => group.onChange(item)}
                        aria-pressed={selected}
                        className={`min-h-[58px] rounded-xl border px-3 py-3 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                          selected
                            ? 'border-accent bg-accent/10 text-ink'
                            : 'border-border/70 bg-transparent text-body hover:border-accent/60 hover:text-ink'
                        }`}
                      >
                        <span className="flex items-start justify-between gap-2">
                          <span className="text-xs font-medium leading-snug sm:text-sm">{item.label}</span>
                          {selected && <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />}
                        </span>
                        {item.serves && <span className="mt-1 block text-[11px] text-body/60">{item.serves}</span>}
                        {item.price > 0 && <span className="mt-1 block text-[11px] text-accent">+${item.price}</span>}
                      </button>
                    )
                  })}
                </div>
              </fieldset>
            ))}

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-body">
                Message on the cake
                <input
                  type="text"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="e.g. Happy Birthday"
                  className="mt-2 w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm font-normal normal-case tracking-normal text-ink placeholder:text-body/60 focus:border-accent focus:outline-none"
                />
              </label>
              <label className="block text-xs font-semibold uppercase tracking-wider text-body">
                Delivery date
                <input
                  type="date"
                  value={delivery}
                  onChange={(event) => setDelivery(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm font-normal normal-case tracking-normal text-ink focus:border-accent focus:outline-none"
                />
              </label>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-4 sm:p-6">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-ink">Your cake</h3>
                  <p className="mt-1 text-xs text-body/70">A live look at your creation</p>
                </div>
                <span className="rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-widest text-body">Preview</span>
              </div>

              <div className="mb-5">
                <Suspense fallback={<CakePreviewFallback flavour={flavour} size={size} frosting={frosting} theme={theme} message={message} />}>
                  <CakePreview3D flavour={flavour} size={size} frosting={frosting} theme={theme} message={message} />
                </Suspense>
              </div>

              <dl className="divide-y divide-border/70">
                {[
                  ['Flavour', flavour.label],
                  ['Size', size.label],
                  ['Frosting', frosting.label],
                  ['Design', theme.label],
                  ['Message', message || 'None'],
                  ['Delivery', delivery || 'Choose a date'],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-start justify-between gap-4 py-2.5 text-xs">
                    <dt className="text-body/70">{label}</dt>
                    <dd className="text-right font-medium text-ink">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-4 border-t border-border pt-4">
                <div className="mb-4 flex items-end justify-between">
                  <span className="text-sm text-body">Estimated total</span>
                  <span className="font-serif text-2xl font-semibold text-ink">${total}</span>
                </div>
                <button type="button" className="btn-primary w-full">
                  Add to Order
                </button>
                <p className="mt-3 text-center text-[11px] text-body/60">Delivery is calculated at checkout.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

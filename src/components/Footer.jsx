import { motion } from 'framer-motion'
import { Instagram, Facebook, Mail, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t-2 border-accent bg-ground text-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-14 pb-12">
        <div className="mb-12 flex flex-col gap-6 border-b border-border pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-accent">A little sweetness goes a long way</span>
            <h2 className="max-w-xl font-serif text-3xl font-bold italic leading-tight text-ink md:text-4xl">
              Make your next moment sweeter.
            </h2>
          </div>
          <a href="#cakes" className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/60 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent hover:text-ground">
            Explore our cakes <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-btn flex items-center justify-center text-ground text-xs font-bold">CK</div>
              <span className="font-serif font-bold text-xl text-ink tracking-tighter">cakeshop</span>
            </div>
            <p className="text-body/80 text-sm leading-relaxed mb-6">
              Handcrafted cakes and desserts baked fresh for life's sweetest moments.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Mail].map((Icon) => (
                <a
                  key={Icon === Instagram ? 'instagram' : Icon === Facebook ? 'facebook' : 'mail'}
                  href="#"
                  className="w-10 h-10 rounded-full bg-ground flex items-center justify-center text-ink hover:bg-accent hover:text-ground transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg text-ink mb-6">Bakery</h4>
            <ul className="space-y-3 text-body/80 text-sm">
              <li><a href="#story" className="hover:text-ink transition-colors">Our Story</a></li>
              <li><a href="#cakes" className="hover:text-ink transition-colors">Cakes</a></li>
              <li><a href="#builder" className="hover:text-ink transition-colors">Custom Builder</a></li>
              <li><a href="#contact" className="hover:text-ink transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg text-ink mb-6">Support</h4>
            <ul className="space-y-3 text-body/80 text-sm">
              <li><a href="#contact" className="hover:text-ink transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-ink transition-colors">Delivery</a></li>
              <li><span>Wholesale</span></li>
              <li><span>Careers</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg text-ink mb-6">Newsletter</h4>
            <p className="text-body/80 text-sm mb-4">Sign up for new flavours and seasonal offers.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 px-4 py-3 rounded-full bg-ground border border-border text-ink placeholder-body/60 focus:outline-none focus:border-accent"
              />
              <button className="px-6 py-3 rounded-full bg-btn text-ground font-semibold text-sm hover:bg-ink hover:text-ground transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-body/60">
          <span>cakeshop 2024. All rights reserved.</span>
          <div className="flex gap-6">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

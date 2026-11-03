import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Menu, X, ShoppingBag, Instagram, Phone } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '#cakes', label: 'Cakes' },
  { to: '#signature', label: 'Signature' },
  { to: '#story', label: 'Story' },
  { to: '#builder', label: 'Custom Builder' },
  { to: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (to) => to === '/'
    ? location.pathname === '/' && !location.hash
    : location.hash === to

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className={`relative ${scrolled ? 'shadow-sm' : ''}`}>
        <div className="absolute inset-0 border-b border-border bg-secondary/90 backdrop-blur-md transition-colors duration-300" />
        <div className="relative max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2" aria-label="cakeshop home">
            <div className="w-8 h-8 rounded-full bg-btn flex items-center justify-center text-ground text-xs font-bold">CK</div>
            <span className="font-serif font-bold text-xl text-ink tracking-tighter">cakeshop</span>
          </a>
          <div className="hidden xl:flex items-center gap-8 text-sm font-medium text-body uppercase tracking-widest">
            {links.map((l) => (
              <a key={l.to} href={l.to} className={`transition-colors hover:text-ink ${isActive(l.to) ? 'text-ink font-semibold' : 'text-body'}`}>{l.label}</a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="#builder" className="hidden xl:flex items-center gap-2 px-5 py-2.5 rounded-full bg-btn text-ground text-xs font-semibold tracking-widest hover:scale-105 transition-transform">
              <ShoppingBag size={16} /> Order Now
            </a>
            <button
              className="xl:hidden text-ink"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-secondary z-[60] flex flex-col items-center justify-center gap-8 p-8 md:p-12">
          <div className="absolute top-6 right-6">
            <button onClick={() => setOpen(false)} className="text-body hover:text-ink" aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          {links.map((l) => (
            <a key={l.to} href={l.to} onClick={() => setOpen(false)} className="text-3xl md:text-5xl font-serif font-bold text-ink tracking-tighter block py-4 transition-colors hover:text-accent">
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-6 text-sm uppercase tracking-widest text-body">
            <a href="https://instagram.com" className="hover:text-ink" target="_blank" rel="noreferrer">
              <Instagram size={18} className="mr-1" /> @cakeshop
            </a>
            <a href="tel:+1234567890" className="hover:text-ink">
              <Phone size={18} className="mr-1" /> +1 234 567 890
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

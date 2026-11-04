import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TabBar } from 'glisse'
import { BookOpen, Cake, Home, Mail, ShoppingBag, Sparkles, Wand2 } from 'lucide-react'

const links = [
  { to: '# ', label: 'Home', icon: <Home size={18} /> },
  { to: '#cakes', label: 'Cakes', icon: <Cake size={18} /> },
  { to: '#signature', label: 'Signature', icon: <Sparkles size={18} /> },
  { to: '#story', label: 'Story', icon: <BookOpen size={18} /> },
  { to: '#builder', label: 'Custom', icon: <Wand2 size={18} /> },
  { to: '#contact', label: 'Contact', icon: <Mail size={18} /> },
]

export default function Navbar() {
  const location = useLocation()
  const [activeLink, setActiveLink] = useState(location.hash || '/')

  useEffect(() => {
    setActiveLink(location.hash || '/')
  }, [location.hash, location.pathname])

  return (
    <>
      <div className="fixed inset-x-0 top-4 z-50 flex items-center justify-between px-4 sm:px-8 lg:top-5 lg:px-10">
        <a
          href="/"
          className="font-serif text-xl font-bold tracking-tight text-ink drop-shadow-md sm:text-2xl"
          aria-label="cakeshop home"
        >
          cakeshop
        </a>
        <a
          href="#builder"
          className="inline-flex items-center gap-2 rounded-full bg-btn px-4 py-2.5 text-[10px] font-semibold tracking-widest text-ground shadow-lg transition-transform hover:scale-105 sm:px-5 sm:py-3 sm:text-xs"
        >
          <ShoppingBag size={15} /> Order Now
        </a>
      </div>

      <motion.nav
        className="mobile-nav-position fixed inset-x-0 bottom-3 z-40 flex justify-center px-2 sm:px-6 lg:bottom-auto lg:top-4"
        initial={{ opacity: 0, y: -18, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        data-theme="dark"
      >
        <div className="floating-dock flex h-auto w-auto max-w-full items-center justify-center p-0">
          <TabBar
            className="inline-flex"
            items={links.map(({ to, label, icon }) => ({ value: to, label, icon, href: to }))}
            value={activeLink}
            onValueChange={setActiveLink}
            aria-label="Main navigation"
          />
        </div>
      </motion.nav>
    </>
  )
}

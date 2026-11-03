import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Play, UtensilsCrossed, Cake } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const POSTER_SRC = 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1920&q=85'

export default function Hero() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const contentRef = useRef(null)
  const [videoReady, setVideoReady] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return undefined

    const context = gsap.context(() => {
      gsap.to(videoRef.current, {
        scale: 1.12,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to(contentRef.current, {
        autoAlpha: 0,
        y: -48,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => context.revert()
  }, [prefersReducedMotion])

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-ground">
      <div className="absolute inset-0 z-0">
        <img
          src={POSTER_SRC}
          alt=""
          fetchpriority="high"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${videoReady && !videoFailed && !prefersReducedMotion ? 'opacity-0' : 'opacity-100'}`}
        />
        {!prefersReducedMotion && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={POSTER_SRC}
            aria-hidden="true"
            onCanPlay={() => setVideoReady(true)}
            onError={() => setVideoFailed(true)}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${videoReady && !videoFailed ? 'opacity-100' : 'opacity-0'}`}
          >
            <source src="/videos/bakery-hero.mp4" type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30 z-10" />
        <div className="absolute inset-0 bg-[rgba(23,16,14,0.12)] z-20" />
      </div>

      <div ref={contentRef} className="relative z-40 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex items-center justify-center gap-2 mb-8 opacity-60"
        >
          <div className="h-px w-20 bg-body" />
          <span className="text-body text-xs uppercase tracking-[0.3em]">Established 2024 · Boutique Bakery</span>
          <div className="h-px w-20 bg-body" />
        </motion.div>

        <motion.h1
          initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-5xl md:text-8xl font-serif font-bold text-ink leading-[1.05] tracking-tighter italic drop-shadow-[0_2px_18px_rgba(23,16,14,0.45)]"
        >
          Every Celebration Deserves<span className="block md:inline"> A Sweeter Story.</span>
        </motion.h1>

        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-6 md:mt-8 text-lg md:text-xl text-ink max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_8px_rgba(23,16,14,0.75)]"
        >
          Handcrafted cakes, unforgettable flavours, and little moments of happiness baked fresh for you.
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mt-10 md:mt-12 flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <a className="btn-primary" href="#cakes">
            Explore Our Cakes <Cake size={18} />
          </a>
          <a
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-ink/60 bg-ground/40 text-ink font-sans font-semibold text-sm tracking-wide hover:bg-btn hover:text-ground transition-all"
            href="#contact"
          >
            Order Your Cake <UtensilsCrossed size={18} />
          </a>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="mt-12 md:mt-16 text-xs md:text-sm uppercase tracking-[0.4em] text-ink/90 drop-shadow-[0_1px_8px_rgba(23,16,14,0.75)]"
        >
          Scroll to explore <span className="animate-bounce inline-block">↓</span>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40">
        <a href="#cakes" aria-label="Explore our cakes" className="w-10 h-10 rounded-full bg-secondary/90 flex items-center justify-center text-ink shadow-lg hover:scale-110 transition-transform">
          <Play size={20} className="ml-0.5" />
        </a>
      </div>
    </section>
  )
}

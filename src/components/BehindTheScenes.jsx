import { useRef, useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { id: 1, title: 'Fresh Ingredients', text: 'Flour, butter, eggs and seasonal fruit arrive each morning.' },
  { id: 2, title: 'Mixing The Batter', text: 'Small batches mixed by hand for the perfect texture.' },
  { id: 3, title: 'Baking With Care', text: 'Slow bake in stone ovens for an even, golden rise.' },
  { id: 4, title: 'Decorating Every Detail', text: 'Hand-piped buttercream, sugar flowers and gold leaf.' },
  { id: 5, title: 'Ready To Celebrate', text: 'Boxed with ribbon and ready for your special moment.' },
]

export default function BehindTheScenes() {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)
  const stepsRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return undefined

    const context = gsap.context(() => {
      gsap.fromTo(
        '.process-heading',
        { autoAlpha: 0, y: 36 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.process-heading',
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      gsap.to(lineRef.current, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: stepsRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      })

      gsap.utils.toArray('.process-step').forEach((step, i) => {
        gsap.fromTo(
          step,
          { autoAlpha: 0, y: 48, x: i % 2 === 0 ? -20 : 20 },
          {
            autoAlpha: 1,
            y: 0,
            x: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 82%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      })
    }, sectionRef)

    return () => context.revert()
  }, [prefersReducedMotion])

  return (
    <section ref={sectionRef} id="process" className="bg-ground section-pad relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="process-heading text-center mb-20">
          <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-3">Behind The Scenes</span>
          <h2 className="section-title">The Baking<span className="block text-accent italic"> Process</span></h2>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/20 -translate-x-1/2" />
          <div ref={lineRef} className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent -translate-x-1/2 origin-top scale-y-0" />
          <div ref={stepsRef} className="relative z-10">
            {steps.map((step, i) => (
              <div key={step.id} className={`process-step flex items-start gap-6 mb-24 relative group ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-lg shadow-lg border-4 flex-shrink-0 transition-all duration-500 group-hover:scale-110 ${i % 2 === 0 ? 'bg-btn text-ground border-btn' : 'bg-card text-ink border-border'}`}>
                  {i + 1}
                </div>
                <div className={`flex-1 bg-card p-8 rounded-2xl border border-border shadow-xl relative ${i % 2 === 0 ? '' : 'md:mr-4'}`}>
                  <h3 className="text-xl font-serif font-bold text-ink mb-2 tracking-tight">{step.title}</h3>
                  <p className="text-body leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

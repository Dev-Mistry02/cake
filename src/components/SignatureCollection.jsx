import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react'

const signatureCakes = [
  {
    id: 1,
    name: 'Midnight Chocolate',
    headline: '70% single-origin cacao.',
    text: 'A deep, intense chocolate cake layered with salted caramel and finished with cocoa shards.',
    img: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    name: 'Vanilla Bean',
    headline: 'Madagascar vanilla, whipped cream.',
    text: 'Light, airy sponge with vanilla bean paste, fresh cream and seasonal berries.',
    img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    name: 'Strawberry Rose',
    headline: 'Fresh strawberries, rosewater cream.',
    text: 'Delicate layers of almond sponge, strawberry confit and rose-scented buttercream.',
    img: 'https://images.unsplash.com/photo-1557308536-ee471ef2c390?auto=format&fit=crop&w=1200&q=80',
  },
]

const wrap = (index) => (index + signatureCakes.length) % signatureCakes.length

export default function SignatureCollection() {
  const stageRef = useRef(null)
  const gestureRef = useRef(null)
  const suppressClickRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [stageWidth, setStageWidth] = useState(900)
  const [drag, setDrag] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const cardWidth = Math.min(380, stageWidth * 0.68)
  const step = cardWidth * 0.86
  const activeCake = signatureCakes[wrap(activeIndex)]
  const duration = prefersReducedMotion ? 0 : 650

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return undefined

    const observer = new ResizeObserver(([entry]) => {
      setStageWidth(entry.contentRect.width)
    })
    observer.observe(stage)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!playing || prefersReducedMotion || dragging || hovered || focused) return undefined
    const timer = window.setTimeout(() => setActiveIndex((index) => index + 1), 5000)
    return () => window.clearTimeout(timer)
  }, [activeIndex, dragging, focused, hovered, playing, prefersReducedMotion])

  const select = (index) => {
    setActiveIndex(index)
    setDrag(0)
  }

  const handlePointerDown = (event) => {
    if (!event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0)) return
    gestureRef.current = { x: event.clientX, y: event.clientY, horizontal: false }
  }

  const handlePointerMove = (event) => {
    const gesture = gestureRef.current
    if (!gesture) return

    const dx = event.clientX - gesture.x
    const dy = event.clientY - gesture.y
    if (!gesture.horizontal && Math.abs(dy) > 12 && Math.abs(dy) > Math.abs(dx)) {
      gestureRef.current = null
      return
    }

    if (!gesture.horizontal && Math.abs(dx) > 8) {
      gesture.horizontal = true
      event.currentTarget.setPointerCapture(event.pointerId)
      setDragging(true)
    }
    if (gesture.horizontal) setDrag(Math.max(-1, Math.min(1, dx / step)))
  }

  const handlePointerUp = (event, cancelled = false) => {
    const gesture = gestureRef.current
    gestureRef.current = null

    if (gesture?.horizontal) {
      const dx = event.clientX - gesture.x
      if (!cancelled && Math.abs(dx) > Math.min(55, cardWidth * 0.18)) {
        select(activeIndex + (dx < 0 ? 1 : -1))
      }
      suppressClickRef.current = performance.now() + 300
      setDrag(0)
      setDragging(false)
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId)
      }
    }
  }

  return (
    <section id="signature" className="signature-section bg-ground section-pad overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center md:mb-10">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.24em] text-accent">A little something special</span>
          <h2 className="section-title">Signature <span className="text-accent">collection</span></h2>
        </div>

        <div
          ref={stageRef}
          className="signature-carousel-stage"
          role="region"
          aria-roledescription="carousel"
          aria-label="Signature cakes"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'ArrowRight') {
              event.preventDefault()
              select(activeIndex + 1)
            } else if (event.key === 'ArrowLeft') {
              event.preventDefault()
              select(activeIndex - 1)
            }
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={(event) => handlePointerUp(event, true)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false)
          }}
        >
          <div className="signature-carousel-floor" aria-hidden="true" />
          {[-1, 0, 1].map((offset) => {
            const slot = activeIndex + offset
            const cakeIndex = wrap(slot)
            const cake = signatureCakes[cakeIndex]
            const position = offset + drag
            const distance = Math.abs(position)
            const active = offset === 0 && Math.abs(drag) < 0.5

            return (
              <button
                key={slot}
                type="button"
                className="signature-carousel-card"
                data-active={active || undefined}
                aria-label={active ? `${cake.name}, current slide` : `Show ${cake.name}`}
                aria-current={active ? 'true' : undefined}
                onClick={() => {
                  if (performance.now() < suppressClickRef.current) return
                  if (offset !== 0) select(activeIndex + offset)
                }}
                style={{
                  width: `${cardWidth}px`,
                  marginLeft: `${-cardWidth / 2}px`,
                  transform: `translate3d(${position * step}px, 0, ${-distance * 110}px) rotateY(${-position * 18}deg) scale(${1 - distance * 0.12})`,
                  opacity: distance > 1.15 ? 0 : 1,
                  zIndex: 10 - Math.round(distance),
                  transitionDuration: dragging ? '0ms' : `${duration}ms`,
                  pointerEvents: distance > 1.15 ? 'none' : undefined,
                }}
              >
                <span className="signature-carousel-image">
                  <img src={cake.img} alt="" draggable="false" loading={cakeIndex === 0 ? 'eager' : 'lazy'} />
                  <span className="signature-carousel-image-shade" />
                  <span className="signature-carousel-card-name">{cake.name}</span>
                </span>
              </button>
            )
          })}
        </div>

        <div className="signature-carousel-details">
          <div>
            <p className="mb-2 text-sm font-medium text-accent">{activeCake.headline}</p>
            <h3 className="font-serif text-3xl font-semibold italic text-ink md:text-4xl">{activeCake.name}</h3>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-body md:text-base">{activeCake.text}</p>
          </div>

          <div className="signature-carousel-actions">
            <div className="signature-carousel-controls" role="group" aria-label="Carousel controls">
              <span className="signature-carousel-count">
                {String(wrap(activeIndex) + 1).padStart(2, '0')} / {String(signatureCakes.length).padStart(2, '0')}
              </span>
              <button type="button" onClick={() => select(activeIndex - 1)} aria-label="Previous cake">
                <ArrowLeft size={17} />
              </button>
              <button
                type="button"
                onClick={() => setPlaying((isPlaying) => !isPlaying)}
                aria-label={playing ? 'Pause carousel' : 'Play carousel'}
                aria-pressed={playing}
                disabled={prefersReducedMotion}
              >
                {playing ? <Pause size={15} /> : <Play size={15} />}
              </button>
              <button type="button" onClick={() => select(activeIndex + 1)} aria-label="Next cake">
                <ArrowRight size={17} />
              </button>
            </div>
            <a href="#contact" className="btn-primary">
              Order this cake
            </a>
          </div>

          <div className="signature-carousel-dots" aria-label="Choose a signature cake">
            {signatureCakes.map((cake, index) => (
              <button
                key={cake.id}
                type="button"
                onClick={() => select(index)}
                aria-label={`Show ${cake.name}`}
                aria-pressed={wrap(activeIndex) === index}
                className={wrap(activeIndex) === index ? 'is-active' : ''}
              />
            ))}
          </div>
          <span className="sr-only" aria-live="polite">
            {activeCake.name}, {wrap(activeIndex) + 1} of {signatureCakes.length}
          </span>
        </div>
      </div>
    </section>
  )
}

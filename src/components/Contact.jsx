import { motion } from 'framer-motion'
import { ArrowUpRight, Clock3, Instagram, MapPin, MessageCircle, Phone } from 'lucide-react'

const hours = [
  ['Monday – Friday', '7:00 AM – 7:00 PM'],
  ['Saturday', '8:00 AM – 6:00 PM'],
  ['Sunday', '9:00 AM – 4:00 PM'],
]

const contactLinks = [
  { icon: Phone, label: 'Call the bakery', value: '+1 234 567 890', href: 'tel:+1234567890' },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Send us a message', href: 'https://wa.me/1234567890' },
  { icon: Instagram, label: 'Instagram', value: '@cakeshop', href: 'https://instagram.com/cakeshop', external: true },
]

export default function Contact() {
  return (
    <section id="contact" className="contact-section bg-secondary section-pad relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="contact-heading"
        >
          <div>
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.24em] text-accent">Come say hello</span>
            <h2 className="font-serif text-4xl font-semibold italic leading-tight text-ink sm:text-5xl md:text-6xl">
              Your neighborhood<br className="hidden sm:block" /> <span className="text-accent">sweet spot.</span>
            </h2>
          </div>
          <p>Need a cake for a special day? Stop by, call us, or send a quick message. We’d love to help.</p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="contact-location-card"
          >
            <div className="contact-map-art" aria-hidden="true">
              <span className="map-street map-street-one" />
              <span className="map-street map-street-two" />
              <span className="map-street map-street-three" />
              <span className="map-block map-block-one" />
              <span className="map-block map-block-two" />
              <span className="map-block map-block-three" />
              <span className="map-block map-block-four" />
              <span className="contact-map-pin"><MapPin size={22} fill="currentColor" /></span>
              <span className="contact-map-caption">Pastry District</span>
            </div>
            <div className="contact-address">
              <span className="contact-address-icon"><MapPin size={17} /></span>
              <div>
                <span className="contact-eyebrow">Find the bakery</span>
                <h3>12 Sweet Street</h3>
                <p>Pastry District, Cityville</p>
              </div>
              <a
                href="https://maps.google.com/?q=12+Sweet+Street+Pastry+District+Cityville"
                target="_blank"
                rel="noreferrer"
                aria-label="Open bakery address in Google Maps"
                className="contact-map-link"
              >
                <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="contact-details"
          >
            <div className="contact-hours-card">
              <div className="contact-card-heading">
                <span className="contact-detail-icon"><Clock3 size={18} /></span>
                <div>
                  <span className="contact-eyebrow">Plan your visit</span>
                  <h3>Opening hours</h3>
                </div>
                <span className="contact-open-badge"><i /> Open daily</span>
              </div>
              <dl className="contact-hours-list">
                {hours.map(([day, time]) => (
                  <div key={day}>
                    <dt>{day}</dt>
                    <dd>{time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="contact-reach-card">
              <span className="contact-eyebrow">We’re happy to help</span>
              <h3>Let’s make something sweet.</h3>
              <div className="contact-links">
                {contactLinks.map(({ icon: Icon, label, value, href, external }) => (
                  <a key={label} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
                    <span className="contact-detail-icon"><Icon size={17} /></span>
                    <span><small>{label}</small><strong>{value}</strong></span>
                    <ArrowUpRight size={15} className="contact-link-arrow" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

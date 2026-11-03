import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="bg-secondary section-pad relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-3">Visit Us</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink tracking-tight italic">Contact &amp; Location</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-ground/50 flex items-center justify-center shrink-0 text-accent">📍</div>
                <div>
                  <h3 className="font-serif font-bold text-ink mb-1">Bakery Address</h3>
                  <p className="text-body">12 Sweet Street, Pastry District, Cityville</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-ground/50 flex items-center justify-center shrink-0 text-accent">☎️</div>
                <div>
                  <h3 className="font-serif font-bold text-ink mb-1">Phone</h3>
                  <a href="tel:+1234567890" className="text-body hover:text-accent transition-colors">+1 234 567 890</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-ground/50 flex items-center justify-center shrink-0 text-accent">💬</div>
                <div>
                  <h3 className="font-serif font-bold text-ink mb-1">WhatsApp Enquiry</h3>
                  <a href="https://wa.me/1234567890" className="text-body hover:text-accent transition-colors">Message us on WhatsApp</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-ground/50 flex items-center justify-center shrink-0 text-accent">📸</div>
                <div>
                  <h3 className="font-serif font-bold text-ink mb-1">Instagram</h3>
                  <a href="https://instagram.com/cakeshop" className="text-body hover:text-accent transition-colors" target="_blank" rel="noreferrer">@cakeshop</a>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-body/20 space-y-3">
              <h3 className="font-serif font-bold text-ink mb-2">Opening Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-body"><span>Monday – Friday</span><span>7:00 AM – 7:00 PM</span></div>
                <div className="flex justify-between text-body"><span>Saturday</span><span>8:00 AM – 6:00 PM</span></div>
                <div className="flex justify-between text-body"><span>Sunday</span><span>9:00 AM – 4:00 PM</span></div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-ground/70 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-card flex items-center justify-center mx-auto mb-4 shadow-lg">📍</div>
                <h3 className="text-2xl font-serif font-bold text-ink">Find Us Here</h3>
                <p className="text-body mt-2">Google Maps integration placeholder</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

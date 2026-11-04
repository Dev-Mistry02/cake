const testimonials = [
  { id: 1, name: 'Elena Rossi', stars: 5, text: 'The wedding cake was breathtaking — everyone asked where we got it.' },
  { id: 2, name: 'Marcus Chen', stars: 5, text: 'Best chocolate cake I’ve had in years. Rich, balanced, not too sweet.' },
  { id: 3, name: 'Sarah Jenkins', stars: 5, text: 'We order all our client celebration cakes from here. Always on time.' },
  { id: 4, name: 'David Park', stars: 5, text: 'My daughter’s birthday cake was the centrepiece of the party.' },
  { id: 5, name: 'Lena Kowalski', stars: 5, text: 'You can taste the quality in every bite. Real butter, real cream.' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-ground section-pad relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.24em] text-accent">Customer love</span>
            <h2 className="section-title mb-0">Kind words, <span className="text-accent">sweet moments.</span></h2>
          </div>
          <p className="text-sm text-body">A few notes from our happy customers</p>
        </div>

        <div
          className="review-scroll"
          role="region"
          aria-label="Customer reviews. Scroll horizontally to see more."
          tabIndex={0}
        >
          {testimonials.map((testimonial) => (
            <article className="review-card" key={testimonial.id}>
              <div className="review-card-top">
                <span className="review-quote-mark" aria-hidden="true">“</span>
                <span className="review-stars" aria-label={`${testimonial.stars} out of 5 stars`}>
                  {'★'.repeat(testimonial.stars)}
                </span>
              </div>
              <p>“{testimonial.text}”</p>
              <div className="review-author">
                <span>{testimonial.name}</span>
              </div>
            </article>
          ))}
        </div>
        <p className="review-scroll-hint" aria-hidden="true">Swipe to read more <span>→</span></p>
      </div>
    </section>
  )
}

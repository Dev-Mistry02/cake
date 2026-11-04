const messages = [
  'Baked fresh, made with love',
  'Handcrafted for your celebrations',
  'A little sweetness in every moment',
  'Made to make moments sweeter',
]

export default function SectionMarquee() {
  return (
    <div className="section-marquee" aria-hidden="true">
      <svg className="section-marquee__curve" viewBox="0 0 1440 96" preserveAspectRatio="none">
        <path d="M0 48 C180 8 300 88 480 48 S780 8 960 48 1260 88 1440 48" />
      </svg>
      <div className="section-marquee__viewport">
        <div className="section-marquee__track">
          {[0, 1].map((copy) => (
            <span className="section-marquee__group" key={copy}>
              {messages.map((message) => (
                <span className="section-marquee__message" key={message}>
                  {message}<span className="section-marquee__star">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

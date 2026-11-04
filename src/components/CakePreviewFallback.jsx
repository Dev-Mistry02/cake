const flavourColors = {
  vanilla: '#f5e6d3',
  chocolate: '#6b3e26',
  'red-velvet': '#8b2635',
  lemon: '#fff3b0',
  strawberry: '#f4a6c2',
}

const frostingColors = {
  'cream-cheese': '#faf7f2',
  buttercream: '#fef7ed',
  ganache: '#3e2723',
  whipped: '#ffffff',
}

export default function CakePreviewFallback({ flavour, size, frosting, theme, message }) {
  const cakeColor = flavourColors[flavour.id] || flavourColors.vanilla
  const icingColor = frostingColors[frosting.id] || frostingColors['cream-cheese']
  const scale = size.id === 'small' ? 0.92 : size.id === 'large' ? 1.06 : 1
  const candleColor = theme.id === 'modern' ? '#b88a5a' : '#f6bfd0'

  return (
    <div className="cake-preview-stage relative flex h-64 w-full flex-col items-center justify-center overflow-hidden rounded-xl px-4 sm:h-80 md:h-96">
      <span className="cake-preview-stamp" aria-hidden="true">Baked to order</span>
      <span className="cake-preview-hint" aria-hidden="true">Design preview</span>
      <svg
        viewBox="0 0 420 340"
        role="img"
        aria-label={`${size.label} ${flavour.label} cake with ${frosting.label} frosting`}
        className="w-full max-w-[390px] h-auto drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="cake-side" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor={cakeColor} stopOpacity="0.72" />
            <stop offset="0.48" stopColor={cakeColor} />
            <stop offset="1" stopColor={cakeColor} stopOpacity="0.76" />
          </linearGradient>
          <linearGradient id="icing-top" x1="0" x2="0.8" y1="0" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.65" />
            <stop offset="1" stopColor={icingColor} />
          </linearGradient>
          <filter id="cake-shadow" x="-30%" y="-30%" width="160%" height="180%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>
        <g transform={`translate(210 210) scale(${scale}) translate(-210 -210)`}>
          <ellipse cx="210" cy="305" rx="160" ry="18" fill="#3c2a1d" opacity="0.22" filter="url(#cake-shadow)" />
          <path d="M53 278 C53 268 123 260 210 260 C297 260 367 268 367 278 L367 287 C367 297 297 305 210 305 C123 305 53 297 53 287 Z" fill="#f4eee4" stroke="#fffaf2" strokeWidth="3" />
          <path d="M56 284 C102 299 318 299 364 284" fill="none" stroke="#b88a5a" strokeOpacity="0.7" strokeWidth="3" />

          <path
            d="M66 199 C66 184 131 172 210 172 C289 172 354 184 354 199 L354 263 C354 281 289 292 210 292 C131 292 66 281 66 263 Z"
            fill="url(#cake-side)"
          />
          <path
            d="M67 232 C105 250 314 250 353 232 L353 247 C314 265 105 265 67 247 Z"
            fill={icingColor}
            opacity="0.96"
          />
          <path d="M67 263 C67 281 131 292 210 292 C289 292 353 281 353 263" fill="none" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="3" />

          <path
            d="M174 165 L174 101 Q174 94 181 94 L185 94 Q192 94 192 101 L192 169 Z
               M204 160 L204 80 Q204 73 211 73 L215 73 Q222 73 222 80 L222 162 Z
               M232 165 L232 101 Q232 94 239 94 L243 94 Q250 94 250 101 L250 169 Z"
            fill={candleColor}
            stroke="#fff4e8"
            strokeWidth="2"
          />
          <path d="M181 111 L190 111 M211 90 L220 90 M239 111 L248 111" stroke="#fff4e8" strokeWidth="4" opacity="0.9" />
          <path d="M183 88 C169 77 181 62 185 57 C198 71 196 80 183 88 Z" fill="#f3a64a" />
          <path d="M214 67 C200 56 212 41 216 36 C229 50 227 59 214 67 Z" fill="#f3a64a" />
          <path d="M242 88 C228 77 240 62 244 57 C257 71 255 80 242 88 Z" fill="#f3a64a" />
          <path d="M185 83 C180 77 185 70 187 68 C193 76 191 80 185 83 Z M216 62 C211 56 216 49 218 47 C224 55 222 59 216 62 Z M244 83 C239 77 244 70 246 68 C252 76 250 80 244 83 Z" fill="#fff1a8" />

          <path
            d="M66 197 C66 177 130 163 210 163 C290 163 354 177 354 197
               L354 212 C344 224 332 221 326 207 C318 229 300 230 293 210
               C280 228 263 227 257 209 C241 229 222 229 210 211
               C196 231 177 229 169 209 C154 229 137 226 131 208
               C118 227 101 224 96 205 C87 220 75 220 66 212 Z"
            fill="url(#icing-top)"
            stroke="#fffaf4"
            strokeWidth="3"
          />
          <path d="M90 190 C125 173 177 169 210 170 C243 169 295 173 330 190" fill="none" stroke="#ffffff" strokeOpacity="0.45" strokeWidth="3" strokeLinecap="round" />

          <g fill="#c85f62" stroke="#fff3e9" strokeWidth="2">
            <circle cx="142" cy="177" r="10" />
            <circle cx="278" cy="177" r="10" />
            <circle cx="210" cy="174" r="9" />
          </g>
          <g fill="#66865a">
            <path d="M136 168 Q141 158 146 168 Q152 159 151 170 Z" />
            <path d="M272 168 Q277 158 282 168 Q288 159 287 170 Z" />
          </g>

          <text
            x="210"
            y="201"
            textAnchor="middle"
            dominantBaseline="middle"
            fill={flavour.id === 'chocolate' || flavour.id === 'red-velvet' ? '#fff7ed' : '#8b5e45'}
            fontFamily="Georgia, serif"
            fontSize="13"
            fontStyle="italic"
            textLength="148"
            lengthAdjust="spacingAndGlyphs"
          >
            {message || 'Made with love'}
          </text>
        </g>
      </svg>
      <span className="relative -mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#765b42]">{theme.label} design</span>
    </div>
  )
}

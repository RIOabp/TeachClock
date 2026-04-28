export function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background shapes */}
      <ellipse cx="300" cy="420" rx="250" ry="40" fill="#FDF2F0" />
      
      {/* Desk */}
      <rect x="120" y="300" width="360" height="20" rx="4" fill="#F5E6D3" />
      <rect x="140" y="320" width="15" height="100" fill="#E8D4C4" />
      <rect x="445" y="320" width="15" height="100" fill="#E8D4C4" />
      
      {/* Chair back */}
      <rect x="220" y="260" width="100" height="80" rx="8" fill="#FECDD3" />
      <rect x="230" y="340" width="80" height="10" rx="2" fill="#FDA4AF" />
      
      {/* Chair seat */}
      <ellipse cx="270" cy="380" rx="55" ry="15" fill="#FECDD3" />
      
      {/* Teacher figure */}
      <circle cx="270" cy="200" r="40" fill="#FFDDD2" />
      {/* Hair */}
      <path d="M230 180 Q230 140 270 140 Q310 140 310 180 Q310 170 300 165 Q270 160 240 170 Q230 175 230 180" fill="#8B5A2B" />
      <path d="M225 190 Q220 210 230 220" stroke="#8B5A2B" strokeWidth="8" strokeLinecap="round" />
      <path d="M315 190 Q320 210 310 220" stroke="#8B5A2B" strokeWidth="8" strokeLinecap="round" />
      
      {/* Face */}
      <circle cx="255" cy="195" r="4" fill="#5D4037" />
      <circle cx="285" cy="195" r="4" fill="#5D4037" />
      <path d="M260 215 Q270 225 280 215" stroke="#E57373" strokeWidth="2" strokeLinecap="round" fill="none" />
      
      {/* Body */}
      <path d="M240 240 Q220 280 230 300 L310 300 Q320 280 300 240 Z" fill="#FECDD3" />
      
      {/* Arms */}
      <path d="M235 260 Q200 290 180 280" stroke="#FFDDD2" strokeWidth="16" strokeLinecap="round" />
      <path d="M305 260 Q340 290 380 270" stroke="#FFDDD2" strokeWidth="16" strokeLinecap="round" />
      
      {/* Laptop on desk */}
      <rect x="250" y="260" width="100" height="6" rx="2" fill="#E8E8E8" />
      <rect x="255" y="205" width="90" height="55" rx="4" fill="#4A5568" transform="rotate(-5 300 230)" />
      <rect x="260" y="210" width="80" height="45" rx="2" fill="#A0D2DB" transform="rotate(-5 300 230)" />
      
      {/* Books stack */}
      <rect x="400" y="270" width="60" height="12" rx="2" fill="#FECDD3" />
      <rect x="405" y="258" width="55" height="12" rx="2" fill="#C4B5FD" />
      <rect x="402" y="246" width="58" height="12" rx="2" fill="#FDE68A" />
      
      {/* Apple */}
      <circle cx="480" cy="285" r="15" fill="#F87171" />
      <path d="M480 270 Q485 265 483 260" stroke="#65A30D" strokeWidth="2" />
      <ellipse cx="482" cy="259" rx="4" ry="3" fill="#65A30D" />
      
      {/* Floating elements - notebooks */}
      <g transform="translate(80, 100)">
        <rect width="50" height="65" rx="4" fill="#FDE68A" />
        <line x1="10" y1="15" x2="40" y2="15" stroke="#E5C100" strokeWidth="2" />
        <line x1="10" y1="25" x2="35" y2="25" stroke="#E5C100" strokeWidth="2" />
        <line x1="10" y1="35" x2="38" y2="35" stroke="#E5C100" strokeWidth="2" />
        <line x1="10" y1="45" x2="30" y2="45" stroke="#E5C100" strokeWidth="2" />
      </g>
      
      {/* Floating calendar */}
      <g transform="translate(480, 80)">
        <rect width="60" height="70" rx="6" fill="white" stroke="#FECDD3" strokeWidth="2" />
        <rect y="0" width="60" height="18" rx="6" fill="#FECDD3" />
        <text x="30" y="14" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">ABR</text>
        <text x="30" y="50" textAnchor="middle" fontSize="22" fill="#5D4037" fontWeight="bold">15</text>
      </g>
      
      {/* Floating graduation cap */}
      <g transform="translate(100, 50)">
        <rect x="5" y="20" width="40" height="5" fill="#4A5568" />
        <polygon points="25,5 50,20 25,25 0,20" fill="#5D4037" />
        <line x1="45" y1="20" x2="50" y2="35" stroke="#FDE68A" strokeWidth="2" />
        <circle cx="50" cy="38" r="4" fill="#FDE68A" />
      </g>
      
      {/* Stars/sparkles */}
      <g fill="#FECDD3">
        <circle cx="520" cy="200" r="4" />
        <circle cx="100" cy="250" r="3" />
        <circle cx="500" cy="160" r="5" />
        <circle cx="150" cy="180" r="4" />
      </g>
      
      {/* Heart */}
      <path d="M550 130 C550 120, 540 115, 535 125 C530 115, 520 120, 520 130 C520 145, 535 155, 535 155 C535 155, 550 145, 550 130Z" fill="#FDA4AF" />
      
      {/* Pencil */}
      <g transform="translate(50, 300) rotate(-30)">
        <rect width="80" height="10" rx="1" fill="#FDE68A" />
        <polygon points="80,0 95,5 80,10" fill="#FFDDD2" />
        <polygon points="90,2 95,5 90,8" fill="#5D4037" />
        <rect x="0" y="0" width="8" height="10" fill="#F87171" />
      </g>
    </svg>
  )
}

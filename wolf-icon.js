// ============================================
//  🐺 Wolf Icon — SVG با کیفیت
// ============================================
const WOLF_SVG = `
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="furGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#c4a5ff"/>
      <stop offset="50%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#5b21b6"/>
    </linearGradient>
    <linearGradient id="furDark" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#4c1d95"/>
      <stop offset="100%" stop-color="#2e1065"/>
    </linearGradient>
    <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="40%" stop-color="#fde68a"/>
      <stop offset="100%" stop-color="#f59e0b"/>
    </radialGradient>
    <radialGradient id="aura" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.35"/>
      <stop offset="70%" stop-color="#7c3aed" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#7c3aed" stop-opacity="0"/>
    </radialGradient>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <circle cx="100" cy="105" r="85" fill="url(#aura)"/>

  <!-- گوش چپ -->
  <path d="M42 75 L22 15 L68 52 Z" fill="url(#furGrad)" stroke="#2e1065" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M48 70 L35 30 L62 55 Z" fill="url(#furDark)"/>
  <path d="M50 68 L42 40 L58 57 Z" fill="#a78bfa" opacity="0.4"/>

  <!-- گوش راست -->
  <path d="M158 75 L178 15 L132 52 Z" fill="url(#furGrad)" stroke="#2e1065" stroke-width="1.5" stroke-linejoin="round"/>
  <path d="M152 70 L165 30 L138 55 Z" fill="url(#furDark)"/>
  <path d="M150 68 L158 40 L142 57 Z" fill="#a78bfa" opacity="0.4"/>

  <!-- سر -->
  <path d="M38 72 L30 90 Q28 115 42 135 Q60 158 100 162 Q140 158 158 135 Q172 115 170 90 L162 72 L138 58 Q120 50 100 50 Q80 50 62 58 Z"
        fill="url(#furGrad)" stroke="#2e1065" stroke-width="2" stroke-linejoin="round" filter="url(#softShadow)"/>

  <!-- لکه‌های روشن روی سر -->
  <path d="M100 55 Q115 60 122 75 Q110 70 100 72 Z" fill="#c4a5ff" opacity="0.35"/>
  <path d="M100 55 Q85 60 78 75 Q90 70 100 72 Z" fill="#c4a5ff" opacity="0.35"/>

  <!-- خطوط پیشانی -->
  <path d="M100 52 L100 78" stroke="#2e1065" stroke-width="1.8" opacity="0.5" stroke-linecap="round"/>
  <path d="M92 57 L95 74" stroke="#2e1065" stroke-width="1.2" opacity="0.3" stroke-linecap="round"/>
  <path d="M108 57 L105 74" stroke="#2e1065" stroke-width="1.2" opacity="0.3" stroke-linecap="round"/>

  <!-- ابروها -->
  <path d="M58 82 Q68 76 82 80" stroke="#2e1065" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M142 82 Q132 76 118 80" stroke="#2e1065" stroke-width="2.5" fill="none" stroke-linecap="round"/>

  <!-- چشم چپ -->
  <ellipse cx="72" cy="95" rx="9" ry="7" fill="#0a0a0f"/>
  <ellipse cx="72" cy="95" rx="6" ry="5" fill="url(#eyeGlow)" filter="url(#glow)"/>
  <ellipse cx="72" cy="95" rx="2.2" ry="4" fill="#0a0a0f"/>
  <circle cx="74" cy="92" r="1.5" fill="#ffffff"/>

  <!-- چشم راست -->
  <ellipse cx="128" cy="95" rx="9" ry="7" fill="#0a0a0f"/>
  <ellipse cx="128" cy="95" rx="6" ry="5" fill="url(#eyeGlow)" filter="url(#glow)"/>
  <ellipse cx="128" cy="95" rx="2.2" ry="4" fill="#0a0a0f"/>
  <circle cx="130" cy="92" r="1.5" fill="#ffffff"/>

  <!-- پوزه -->
  <path d="M100 118 L90 132 Q100 138 110 132 Z" fill="#0a0a0f" stroke="#2e1065" stroke-width="1"/>
  <ellipse cx="97" cy="126" rx="2" ry="1.2" fill="#ffffff" opacity="0.5"/>

  <!-- دهان -->
  <path d="M100 138 L100 145" stroke="#0a0a0f" stroke-width="2" stroke-linecap="round"/>
  <path d="M86 142 Q100 150 114 142" stroke="#0a0a0f" stroke-width="2" fill="none" stroke-linecap="round"/>

  <!-- خط پوزه -->
  <path d="M92 130 Q80 128 75 122" stroke="#2e1065" stroke-width="1.2" fill="none" opacity="0.5"/>
  <path d="M108 130 Q120 128 125 122" stroke="#2e1065" stroke-width="1.2" fill="none" opacity="0.5"/>

  <!-- خز کنارها -->
  <path d="M42 100 L36 108 L42 112 L34 122" stroke="#5b21b6" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.6"/>
  <path d="M158 100 L164 108 L158 112 L166 122" stroke="#5b21b6" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.6"/>
</svg>
`;

// پر کردن همه جاهایی که کلاس wolf-slot دارن
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.wolf-slot').forEach(el => {
    el.innerHTML = WOLF_SVG;
  });
});

import React from 'react';

// Cute Reclining Cat (Michi Recostado de fondo / decorativo)
export function SleepingMichi({ size = 120, className = "" }) {
  return (
    <svg width={size} height={size * 0.55} viewBox="0 0 160 88" fill="none" className={className}>
      {/* Cuerpo recostado y relajado */}
      <ellipse cx="80" cy="55" rx="55" ry="25" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2.5" />
      {/* Cabeza apoyada */}
      <circle cx="125" cy="45" r="22" fill="currentColor" fillOpacity="0.16" stroke="currentColor" strokeWidth="2.5" />
      {/* Orejas relajadas */}
      <path d="M112 28L120 12L130 25" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M132 25L142 14L144 32" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Ojos cerrados durmiendo plácidamente */}
      <path d="M118 45C121 48 125 48 128 45" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M134 44C137 47 141 47 144 44" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      {/* Naricita y boca sonriente */}
      <path d="M130 50L131.5 52L133 50" fill="currentColor" />
      <path d="M129 53C130.5 55 132.5 55 134 53" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      {/* Bigotitos */}
      <path d="M140 50L154 48M140 53L153 55M114 50L100 48M114 53L101 55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Patita delantera recogida */}
      <ellipse cx="105" cy="68" rx="14" ry="8" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
      {/* Colita enroscada */}
      <path d="M28 55C22 50 16 58 18 68C20 74 28 75 35 70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Zzz burbujas de sueño */}
      <text x="145" y="20" fill="currentColor" fontSize="12" fontWeight="bold" fontFamily="sans-serif">z</text>
      <text x="152" y="12" fill="currentColor" fontSize="9" fontWeight="bold" fontFamily="sans-serif">z</text>
    </svg>
  );
}

// Cute Chibi Kawaii Cat Avatar (Para el botón Acaríciame)
export function CuteCatAvatar({ size = 32, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" className={className}>
      {/* Cabeza redonda adorable */}
      <circle cx="18" cy="19" r="14" fill="#FFFFFF" stroke="currentColor" strokeWidth="2" />
      {/* Orejitas rosadas */}
      <path d="M7 11L12 4L16 9" fill="#FFB6C1" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M20 9L24 4L29 11" fill="#FFB6C1" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      {/* Ojos grandes kawaii con brillos */}
      <ellipse cx="13" cy="18" rx="2.4" ry="3.2" fill="#1A1A24" />
      <circle cx="12.2" cy="17" r="1" fill="#FFFFFF" />
      <ellipse cx="23" cy="18" rx="2.4" ry="3.2" fill="#1A1A24" />
      <circle cx="22.2" cy="17" r="1" fill="#FFFFFF" />
      {/* Mejillas rosaditas */}
      <ellipse cx="9" cy="22" rx="2" ry="1.2" fill="#FF8DA1" fillOpacity="0.6" />
      <ellipse cx="27" cy="22" rx="2" ry="1.2" fill="#FF8DA1" fillOpacity="0.6" />
      {/* Naricita y boquita :3 */}
      <path d="M17 21L18 22L19 21" fill="#FF8DA1" />
      <path d="M16 23C17 24.5 18 23.5 18 23C18 23.5 19 24.5 20 23" stroke="#1A1A24" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// 404 Cat & Cable Illustration
export function BrokenCableCat({ size = 120, className = "" }) {
  return (
    <svg width={size} height={size * 0.8} viewBox="0 0 140 100" fill="none" className={className}>
      {/* Gatito sentado mirando con curiosidad */}
      <circle cx="70" cy="40" r="24" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2.5" />
      {/* Orejas */}
      <path d="M52 26L58 10L68 20" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M72 20L82 10L88 26" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      {/* Ojos curiosos */}
      <circle cx="62" cy="38" r="3" fill="currentColor" />
      <circle cx="78" cy="38" r="3" fill="currentColor" />
      <path d="M68 45C69.5 47 70.5 47 72 45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Cuerpo */}
      <path d="M54 58C54 50 62 48 70 48C78 48 86 50 86 58C86 78 80 84 70 84C60 84 54 78 54 58Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" />
      {/* Patitas */}
      <ellipse cx="64" cy="84" rx="5" ry="3" fill="currentColor" />
      <ellipse cx="76" cy="84" rx="5" ry="3" fill="currentColor" />
      {/* Cable desconectado con chispas */}
      <path d="M15 75C25 75 35 60 48 70" stroke="#FF5533" strokeWidth="3" strokeLinecap="round" />
      <rect x="46" y="66" width="10" height="8" rx="2" fill="#FF5533" />
      {/* Chispitas */}
      <path d="M58 64L62 60M58 74L63 78M62 68L67 68" stroke="#FCC624" strokeWidth="2" strokeLinecap="round" />
      <path d="M92 70C105 60 115 75 125 75" stroke="#FF5533" strokeWidth="3" strokeLinecap="round" />
      <rect x="84" y="66" width="10" height="8" rx="2" fill="#FF5533" />
    </svg>
  );
}

// ----------------- TECNOLOGÍAS (Iconos Libres de alta fidelidad) -----------------

export function ReactIcon({ size = 42, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="2.2" fill="#00D8FE" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.6" stroke="#00D8FE" strokeWidth="1.6" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.6" transform="rotate(60 12 12)" stroke="#00D8FE" strokeWidth="1.6" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.6" transform="rotate(120 12 12)" stroke="#00D8FE" strokeWidth="1.6" />
    </svg>
  );
}

export function NextjsIcon({ size = 42, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" fill="#000000" stroke="#485167" strokeWidth="1.2" />
      <path d="M8.5 7.5V16.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      <path d="M8.5 8.2L16.2 17" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M15.5 7.5V12.2" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function TypeScriptIcon({ size = 42, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="5" fill="#3178C6" />
      <path d="M4.5 10H12.5M8.5 10V18" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="square" />
      <path
        d="M19 11.5C18 10.5 16.5 10.5 15.5 11C14.5 11.5 14 12.5 14.5 13.5C15 14.5 16 15 17 15.5C18.5 16 19.5 16.5 19 18C18.5 19.5 16.5 19.5 14 18.5"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function JavaScriptIcon({ size = 42, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="5" fill="#F7DF1E" />
      <path d="M6.5 14.5C7 16.2 8.2 17.5 10.5 17.5C12.2 17.5 13 16.5 13 14.2V9.5" stroke="#111216" strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M19.5 11C18 9.5 16 9.8 15 10.8C14 11.8 14.2 13 15.2 13.8C16.5 14.8 18.8 15.2 18.5 17C18.2 18.5 15.8 18.5 14.5 17"
        stroke="#111216"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PythonIcon({ size = 42, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M11.8 2C8.6 2 6.8 3.4 6.8 5.6V7.6H12V8.4H5.2C3 8.4 1.5 10 1.5 12.2C1.5 14.4 3 16 5.2 16H6.6V14.2C6.6 12.2 8.2 10.6 10.2 10.6H13.6C15 10.6 16.1 9.5 16.1 8.1V5.6C16.1 3.4 14.5 2 11.8 2ZM9.5 3.8C10.1 3.8 10.6 4.3 10.6 4.9C10.6 5.5 10.1 6 9.5 6C8.9 6 8.4 5.5 8.4 4.9C8.4 4.3 8.9 3.8 9.5 3.8Z"
        fill="#3776AB"
      />
      <path
        d="M12.2 22C15.4 22 17.2 20.6 17.2 18.4V16.4H12V15.6H18.8C21 15.6 22.5 14 22.5 11.8C22.5 9.6 21 8 18.8 8H17.4V9.8C17.4 11.8 15.8 13.4 13.8 13.4H10.4C9 13.4 7.9 14.5 7.9 15.9V18.4C7.9 20.6 9.5 22 12.2 22ZM14.5 20.2C13.9 20.2 13.4 19.7 13.4 19.1C13.4 18.5 13.9 18 14.5 18C15.1 18 15.6 18.5 15.6 19.1C15.6 19.7 15.1 20.2 14.5 20.2Z"
        fill="#FFD43B"
      />
    </svg>
  );
}

export function LinuxIcon({ size = 42, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      {/* Pies anaranjados de Tux */}
      <ellipse cx="10" cy="28.5" rx="4.8" ry="2.2" fill="#FFA000" />
      <ellipse cx="22" cy="28.5" rx="4.8" ry="2.2" fill="#FFA000" />
      <circle cx="7" cy="28" r="1.5" fill="#FF8F00" />
      <circle cx="25" cy="28" r="1.5" fill="#FF8F00" />

      {/* Cuerpo principal Negro de Tux */}
      <path
        d="M16 2.5C11.8 2.5 9.2 5.5 9.2 10.2C9.2 11.8 9.7 13.4 10.4 14.8C7.5 16.5 5.5 19.8 5.5 24C5.5 27.2 9.5 28.5 16 28.5C22.5 28.5 26.5 27.2 26.5 24C26.5 19.8 24.5 16.5 21.6 14.8C22.3 13.4 22.8 11.8 22.8 10.2C22.8 5.5 20.2 2.5 16 2.5Z"
        fill="#111216"
      />

      {/* Aletas / Brazos negros a los lados */}
      <path
        d="M7.5 18C5.8 19.5 4.8 22 5.2 24.5C5.8 23 8 20.5 9.5 19L7.5 18Z"
        fill="#1E2028"
      />
      <path
        d="M24.5 18C26.2 19.5 27.2 22 26.8 24.5C26.2 23 24 20.5 22.5 19L24.5 18Z"
        fill="#1E2028"
      />

      {/* Pecho y panza blanca redondeada */}
      <ellipse cx="16" cy="21.5" rx="6.5" ry="5.8" fill="#FFFFFF" />

      {/* Ojos de Tux */}
      <ellipse cx="13.2" cy="8.8" rx="2.2" ry="2.8" fill="#FFFFFF" />
      <ellipse cx="18.8" cy="8.8" rx="2.2" ry="2.8" fill="#FFFFFF" />
      <circle cx="14" cy="9.2" r="1.1" fill="#111216" />
      <circle cx="18" cy="9.2" r="1.1" fill="#111216" />

      {/* Pico anaranjado característico de Tux */}
      <path
        d="M13.2 11.5C13.2 11.5 14.2 14.5 16 14.5C17.8 14.5 18.8 11.5 18.8 11.5C18.8 11.5 17.5 11 16 11C14.5 11 13.2 11.5 13.2 11.5Z"
        fill="#FFB300"
      />
      <path
        d="M14.5 12.8C15 13.5 17 13.5 17.5 12.8"
        stroke="#E65100"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PostgresIcon({ size = 42, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3C8 3 5 5.5 5 9C5 11.2 6.2 13.2 8.2 14.2C8 15.2 7.2 16.5 6 17.5C7.8 17.5 9.6 16.5 10.6 15.2C11 15.3 11.5 15.3 12 15.3C16 15.3 19 12.8 19 9C19 5.5 16 3 12 3Z"
        fill="#336791"
      />
      <circle cx="9.5" cy="7.5" r="1.2" fill="#FFFFFF" />
      <path d="M14 9C15 9.8 16.2 11.5 16.5 14C17.5 14 18.5 13 18.8 11.5" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M9 12C10 13.5 12 14 13.5 13.5" stroke="#90C3EA" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function NodeIcon({ size = 42, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" fill="#FFFFFF" stroke="#333333" strokeWidth="1.2" />
      <path
        d="M12 4.5L18.5 8.2V15.8L12 19.5L5.5 15.8V8.2L12 4.5Z"
        fill="#333333"
      />
      <path
        d="M12 7.5L16 9.8V14.2L12 16.5L8 14.2V9.8L12 7.5Z"
        fill="#5FA04E"
      />
      <circle cx="12" cy="12" r="2" fill="#FFFFFF" />
    </svg>
  );
}

export function DotNetIcon({ size = 42, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10.5" fill="#512BD4" />
      <circle cx="6.5" cy="14" r="1.4" fill="#FFFFFF" />
      <path
        d="M8.5 15V9H10.5L13 12.8V9H14.5V15H12.5L10 11.2V15H8.5Z"
        fill="#FFFFFF"
      />
      <path
        d="M16 15V9H19.5V10.2H17.5V11.4H19V12.6H17.5V13.8H19.5V15H16Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function DockerIcon({ size = 42, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M22 13C21.5 12 20 11.5 18.5 12C18 10.5 16.8 9.5 15.5 9.5H14.8V8H13.2V9.5H11.2V8H9.6V9.5H7.6V8H6V9.5C3.5 9.8 1.5 11.8 1.5 14.5C1.5 18 4.5 20.5 9.5 20.5C15.5 20.5 20.5 17 22 13Z"
        fill="#2496ED"
      />
      <rect x="7" y="10.5" width="2" height="1.8" rx="0.4" fill="#FFFFFF" />
      <rect x="9.5" y="10.5" width="2" height="1.8" rx="0.4" fill="#FFFFFF" />
      <rect x="12" y="10.5" width="2" height="1.8" rx="0.4" fill="#FFFFFF" />
      <rect x="9.5" y="8.2" width="2" height="1.8" rx="0.4" fill="#FFFFFF" />
      <circle cx="19.5" cy="14" r="0.8" fill="#FFFFFF" />
    </svg>
  );
}

export function GitIcon({ size = 42, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M21.5 10.5L13.5 2.5C12.8 1.8 11.2 1.8 10.5 2.5L2.5 10.5C1.8 11.2 1.8 12.8 2.5 13.5L10.5 21.5C11.2 22.2 12.8 22.2 13.5 21.5L21.5 13.5C22.2 12.8 22.2 11.2 21.5 10.5Z"
        fill="#F05032"
      />
      <circle cx="12" cy="8" r="1.8" fill="#FFFFFF" />
      <circle cx="12" cy="16" r="1.8" fill="#FFFFFF" />
      <circle cx="16" cy="12" r="1.8" fill="#FFFFFF" />
      <path d="M12 9.8V14.2" stroke="#FFFFFF" strokeWidth="1.5" />
      <path d="M12 11.5L14.5 12" stroke="#FFFFFF" strokeWidth="1.5" />
    </svg>
  );
}

export function ApiRestIcon({ size = 42, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="5" fill="#14B8A6" />
      <path d="M6 12L10 8M10 16L6 12M18 12L14 8M14 16L18 12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
    </svg>
  );
}

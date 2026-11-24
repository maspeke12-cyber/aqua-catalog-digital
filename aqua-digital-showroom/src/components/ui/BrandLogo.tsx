'use client';

import React, { useState } from 'react';

interface BrandLogoProps {
  logoUrl?: string;
  variant?: 'light' | 'dark';
}

export function BrandLogo({ logoUrl, variant = 'light' }: BrandLogoProps) {
  const [imgError, setImgError] = useState(false);
  const isDark = variant === 'dark';

  if (logoUrl && !imgError) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={logoUrl}
        alt={isDark ? 'Logo AQUA Elektronik' : 'Logo AQUA'}
        onError={() => setImgError(true)}
        className="h-7 w-auto object-contain sm:h-8"
      />
    );
  }

  return (
    <div className="inline-flex shrink-0 items-center gap-2">
      <span
        className={`text-lg font-extrabold tracking-[-0.03em] sm:text-xl ${
          isDark ? 'text-white' : 'text-[#111111]'
        }`}
      >
        {isDark ? 'AQUA ELEKTRONIK' : 'AQUA'}
      </span>
      <span
        className={`hidden rounded-[3px] border px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider sm:inline-block ${
          isDark
            ? 'border-white/20 bg-white/10 text-white/80'
            : 'border-[#E5E5E5] bg-[#F7F7F7] text-[#6B6B6B]'
        }`}
      >
        Logo Slot
      </span>
    </div>
  );
}

'use client';
import React, { useState } from 'react';

interface BrandLogoProps {
  logoUrl?: string;
  variant?: 'light' | 'dark';
}

export function BrandLogo({ logoUrl, variant = 'light' }: BrandLogoProps) {
  const [hasError, setHasError] = useState(false);
  const resolvedSrc = logoUrl || (variant === 'dark' ? '/images/logos/aqua-white.png' : '/images/logos/aqua-black.png');

  if (!hasError) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={resolvedSrc}
        alt={variant === 'dark' ? 'AQUA Elektronik' : 'AQUA'}
        onError={() => setHasError(true)}
        className="h-6 w-auto shrink-0 object-contain sm:h-7"
      />
    );
  }

  return (
    <span className={`text-base font-black tracking-tight sm:text-lg ${variant === 'dark' ? 'text-white' : 'text-[#111111]'}`}>
      {variant === 'dark' ? 'AQUA ELEKTRONIK' : 'AQUA'}
    </span>
  );
}

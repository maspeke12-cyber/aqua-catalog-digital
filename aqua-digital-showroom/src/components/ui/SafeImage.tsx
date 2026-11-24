'use client';

import React, { useState } from 'react';

export type MediaSlotType = 'hero-banner' | 'category' | 'product' | 'promo-poster';

interface SafeImageProps {
  src?: string;
  alt: string;
  slotType?: MediaSlotType;
  eyebrow?: string;
  label?: string;
  ratioHint?: string;
  className?: string;
}

export function SafeImage({
  src,
  alt,
  slotType = 'product',
  eyebrow = 'AQUA ELEKTRONIK',
  label = 'Area Visual Resmi',
  ratioHint,
  className = '',
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (src && !hasError) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setHasError(true)}
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  if (slotType === 'category') {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-b from-[#FAFAFA] to-[#F0F2F5] p-3 ${className}`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-2.5 rounded-[4px] border border-black/[0.06]"
        />
        <span className="absolute right-3.5 top-3.5 rounded-[3px] border border-[#E5E5E5] bg-white/90 px-1.5 py-0.5 text-[9px] font-medium text-[#6B6B6B]">
          16:10
        </span>
        <div className="relative z-10 flex flex-col items-center gap-1.5 text-center">
          <span className="h-1 w-6 rounded-full bg-[#0066B3]/40" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6B6B6B]">
            Foto Kategori
          </span>
        </div>
      </div>
    );
  }

  const isHero = slotType === 'hero-banner';
  const isPromo = slotType === 'promo-poster';

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex h-full w-full flex-col justify-between overflow-hidden p-4 sm:p-6 ${
        isHero
          ? 'bg-gradient-to-br from-[#111111] via-[#1B2430] to-[#004A82] text-white'
          : isPromo
          ? 'bg-gradient-to-br from-[#F4F6F9] via-[#EAEFF5] to-[#E1E8F0] text-[#111111]'
          : 'bg-gradient-to-b from-[#FAFAFA] to-[#F0F1F3] text-[#111111]'
      } ${className}`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-3 rounded-[4px] border ${
          isHero ? 'border-white/15' : 'border-black/[0.06]'
        }`}
      />

      <div className="relative z-10 flex items-center justify-between gap-2">
        <span
          className={`truncate text-[10px] font-bold uppercase tracking-[0.12em] ${
            isHero ? 'text-white' : 'text-[#0066B3]'
          }`}
        >
          {eyebrow}
        </span>
        {ratioHint && (
          <span
            className={`shrink-0 rounded-[3px] px-2 py-0.5 text-[10px] font-medium ${
              isHero
                ? 'bg-white/10 text-white/85'
                : 'border border-[#E5E5E5] bg-white/80 text-[#6B6B6B]'
            }`}
          >
            {ratioHint}
          </span>
        )}
      </div>

      <div className="relative z-10 my-auto py-2">
        <p
          className={`line-clamp-2 font-bold tracking-[-0.02em] ${
            isHero
              ? 'text-lg text-white sm:text-2xl'
              : isPromo
              ? 'text-base text-[#111111] sm:text-lg'
              : 'text-sm text-[#111111] sm:text-base'
          }`}
        >
          {label}
        </p>
        <p
          className={`mt-1 line-clamp-2 text-xs ${
            isHero ? 'text-white/75' : 'text-[#6B6B6B]'
          }`}
        >
          {isHero
            ? 'Slot Banner Campaign Utama — Siap diisi materi visual AQUA Elektronik'
            : isPromo
            ? 'Slot Poster Kampanye Promo — Siap diisi materi resmi'
            : 'Slot Foto Studio Produk — Siap diisi melalui CMS'}
        </p>
      </div>

      <div className="relative z-10 flex items-center justify-between text-[10px]">
        <span className={isHero ? 'font-medium text-white/85' : 'text-[#6B6B6B]'}>
          CLEO ELECTRONICS by TIARA
        </span>
        <span
          className={`h-1.5 w-8 rounded-full ${
            isHero ? 'bg-white/60' : 'bg-[#0066B3]/30'
          }`}
        />
      </div>
    </div>
  );
}

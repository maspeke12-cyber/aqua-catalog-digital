'use client';
import React, { useState } from 'react';

interface SafeImageProps {
  src?: string;
  alt: string;
  slotType?: string;
  eyebrow?: string;
  label?: string;
  ratioHint?: string;
  className?: string;
}

export function SafeImage({ src, alt, eyebrow, label, ratioHint, className = '' }: SafeImageProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const hasError = Boolean(src && failedSrc === src);

  if (src && !hasError) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} onError={() => setFailedSrc(src)} className={`h-full w-full object-cover ${className}`} />
    );
  }

  return (
    <div className={`flex h-full w-full flex-col items-center justify-center bg-[#F7F7F7] p-4 text-center ${className}`}>
      {eyebrow && <span className="text-[10px] font-bold uppercase tracking-widest text-[#0066B3]">{eyebrow}</span>}
      <span className="mt-1 text-xs font-semibold text-[#111111] sm:text-sm">{label || alt}</span>
      {ratioHint && <span className="mt-1 text-[10px] text-[#6B6B6B]">Slot Visual &bull; Rasio {ratioHint}</span>}
    </div>
  );
}

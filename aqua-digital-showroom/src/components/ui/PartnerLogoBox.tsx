'use client';
import React, { useState } from 'react';

export function PartnerLogoBox({ name, logoUrl }: { name: string; logoUrl?: string }) {
  const [hasError, setHasError] = useState(false);
  return (
    <div className="flex h-16 items-center justify-between rounded-[6px] border border-[#E5E5E5] bg-[#FAFAFA] px-4">
      {logoUrl && !hasError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logoUrl} alt={name} onError={() => setHasError(true)} className="max-h-9 w-auto object-contain" />
      ) : (
        <span className="text-lg font-extrabold text-[#111111]">{name}</span>
      )}
      <span className="rounded-[3px] border border-[#E5E5E5] bg-white px-2 py-0.5 text-[10px] text-[#6B6B6B]">Mitra Resmi</span>
    </div>
  );
}

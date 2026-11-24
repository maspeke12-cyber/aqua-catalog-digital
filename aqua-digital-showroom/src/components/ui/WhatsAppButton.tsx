import React from 'react';
import { buildWhatsAppHref } from '@/lib/showroomConfig';

interface Props {
  phone?: string;
  message?: string;
  label?: string;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export function WhatsAppButton({
  phone,
  message = 'Halo Kak Ridwan (Sales AQUA - CLEO ELECTRONICS by TIARA), saya melihat katalog digital dan ingin berkonsultasi mengenai produk AQUA Elektronik.',
  label = 'Konsultasi via WhatsApp',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
}: Props) {
  const href = buildWhatsAppHref(phone, message);
  const sizeCls = size === 'lg' ? 'min-h-[48px] px-6 text-sm' : size === 'sm' ? 'min-h-[38px] px-3.5 text-xs' : 'min-h-[44px] px-5 text-sm';
  const colorCls = variant === 'outline'
    ? 'border border-[#111111] bg-white text-[#111111] hover:bg-[#111111] hover:text-white'
    : 'bg-[#1F7A4C] text-white hover:bg-[#18623D]';

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center gap-2 rounded-[4px] font-semibold transition-colors ${sizeCls} ${colorCls} ${fullWidth ? 'w-full' : ''}`}>
      <span>{label}</span>
    </a>
  );
}

'use client';
import React from 'react';
import Link from 'next/link';
import { NavItem, STORE_SETTINGS } from '@/data/homepageData';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

interface Props { isOpen: boolean; items: NavItem[]; onClose: () => void; }

export function MobileNavigation({ isOpen, items, onClose }: Props) {
  if (!isOpen) return null;
  return (
    <div className="border-t border-[#E5E5E5] bg-white lg:hidden">
      <nav aria-label="Navigasi mobile" className="px-4 py-4">
        <ul className="flex flex-col divide-y divide-[#E5E5E5]">
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={onClose} className="flex min-h-[44px] items-center justify-between py-2.5 text-sm font-semibold text-[#111111] hover:text-[#0066B3]">
                <span>{item.label}</span>
                <span className="text-[#6B6B6B]">&rarr;</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4 border-t border-[#E5E5E5] pt-4">
          <p className="mb-2.5 text-xs font-medium text-[#6B6B6B]">{STORE_SETTINGS.storeTagline} &bull; {STORE_SETTINGS.address}</p>
          <WhatsAppButton phone={STORE_SETTINGS.whatsappNumber} fullWidth label="Konsultasi via WhatsApp" />
        </div>
      </nav>
    </div>
  );
}

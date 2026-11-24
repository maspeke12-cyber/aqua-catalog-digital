'use client';

import React from 'react';
import { STORE_SETTINGS } from '@/data/homepageData';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-4 right-4 z-30 sm:bottom-6 sm:right-6">
      <div className="rounded-[6px] bg-white p-1 shadow-md ring-1 ring-black/10">
        <WhatsAppButton
          phone={STORE_SETTINGS.whatsappNumber}
          size="md"
          label="Konsultasi via WhatsApp"
        />
      </div>
    </div>
  );
}

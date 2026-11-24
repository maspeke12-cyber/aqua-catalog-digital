'use client';

import React, { useEffect } from 'react';
import { ProductItem, PromoItem } from '@/types/showroom';
import { STORE_SETTINGS } from '@/data/homepageData';
import { Badge } from '@/components/ui/Badge';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export type ModalSelection =
  | { type: 'product'; data: ProductItem }
  | { type: 'promo'; data: PromoItem }
  | null;

interface ShowroomDetailModalProps {
  selection: ModalSelection;
  onClose: () => void;
}

export function ShowroomDetailModal({
  selection,
  onClose,
}: ShowroomDetailModalProps) {
  useEffect(() => {
    if (!selection) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selection, onClose]);

  if (!selection) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Informasi Detail"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-[8px] border border-[#E5E5E5] bg-white p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <Badge variant="aqua">
            {selection.type === 'product' ? 'Detail Produk' : 'Informasi Promo'}
          </Badge>
          <button
            type="button"
            onClick={onClose}
            className="min-h-[34px] rounded-[4px] border border-[#E5E5E5] px-3 text-xs font-semibold text-[#111111] hover:bg-[#F7F7F7]"
          >
            Tutup
          </button>
        </div>

        {selection.type === 'product' ? (
          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B]">
              {selection.data.categoryName} &bull; {selection.data.model}
            </p>
            <h3 className="mt-1 text-xl font-bold text-[#111111]">
              {selection.data.name}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-[#6B6B6B]">
              {selection.data.description}
            </p>
            <ul className="mt-4 space-y-1.5 border-t border-[#E5E5E5] pt-4 text-xs text-[#111111]">
              {selection.data.highlights.map((point) => (
                <li key={point}>&bull; {point}</li>
              ))}
            </ul>
            <div className="mt-6">
              <WhatsAppButton
                phone={STORE_SETTINGS.whatsappNumber}
                fullWidth
                message={`Halo Kak Ridwan (Sales AQUA - ${STORE_SETTINGS.storeName}), saya ingin menanyakan detail produk ${selection.data.name} (${selection.data.model}).`}
                label="Konsultasi via WhatsApp"
              />
            </div>
          </div>
        ) : (
          <div className="mt-4">
            <p className="text-xs font-semibold text-[#0066B3]">
              {selection.data.period}
            </p>
            <h3 className="mt-1 text-xl font-bold text-[#111111]">
              {selection.data.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-[#6B6B6B]">
              {selection.data.description}
            </p>
            <div className="mt-6">
              <WhatsAppButton
                phone={STORE_SETTINGS.whatsappNumber}
                fullWidth
                message={`Halo Kak Ridwan (Sales AQUA - ${STORE_SETTINGS.storeName}), saya ingin menanyakan informasi terkait ${selection.data.title}.`}
                label="Konsultasi via WhatsApp"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

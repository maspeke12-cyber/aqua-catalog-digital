import React from 'react';
import { PromoItem } from '@/types/showroom';
import { Badge } from '@/components/ui/Badge';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { SafeImage } from '@/components/ui/SafeImage';

interface PromoCardProps {
  promo: PromoItem;
  onSelectPromo?: (promo: PromoItem) => void;
}

export function PromoCard({ promo, onSelectPromo }: PromoCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[8px] border border-[#E5E5E5] bg-white">
      <div className="aspect-[16/9] w-full overflow-hidden border-b border-[#E5E5E5] bg-[#F7F7F7]">
        <SafeImage
          src={promo.posterUrl}
          alt={promo.title}
          slotType="promo-poster"
          eyebrow={promo.label}
          label={promo.title}
          ratioHint="16:9"
          className="h-full w-full"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Badge variant="dark">{promo.label}</Badge>
            <span className="text-xs font-medium text-[#0066B3]">
              {promo.period}
            </span>
          </div>

          <h3 className="mt-3 text-lg font-bold leading-snug text-[#111111] sm:text-xl">
            {promo.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
            {promo.description}
          </p>
        </div>

        <div className="mt-6">
          <PrimaryButton size="md" onClick={() => onSelectPromo?.(promo)}>
            Lihat Informasi Promo
          </PrimaryButton>
        </div>
      </div>
    </article>
  );
}

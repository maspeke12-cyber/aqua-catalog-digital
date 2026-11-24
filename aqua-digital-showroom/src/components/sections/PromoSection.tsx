import React from 'react';
import { PromoItem } from '@/types/showroom';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PromoCard } from '@/components/cards/PromoCard';

interface PromoSectionProps {
  promos: PromoItem[];
  onSelectPromo: (promo: PromoItem) => void;
}

export function PromoSection({ promos, onSelectPromo }: PromoSectionProps) {
  return (
    <section id="promo" className="py-12 md:py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Promo & Program Showroom"
          title="Informasi Penawaran Berjalan"
          description="Informasi program promo resmi akan ditampilkan beserta periode berlaku dan ketentuan lengkap."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {promos.map((promo) => (
            <PromoCard
              key={promo.id}
              promo={promo}
              onSelectPromo={onSelectPromo}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

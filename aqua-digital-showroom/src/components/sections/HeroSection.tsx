import React from 'react';
import { HERO_DATA, STORE_SETTINGS } from '@/data/homepageData';
import { Container } from '@/components/ui/Container';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Badge } from '@/components/ui/Badge';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { SafeImage } from '@/components/ui/SafeImage';

export function HeroSection() {
  return (
    <section className="border-b border-[#E5E5E5] bg-[#F7F7F7]">
      <Container className="py-10 sm:py-14 lg:py-20">
        <Breadcrumb
          items={[
            { label: 'Beranda', href: '#' },
            { label: 'Showroom Digital AQUA Elektronik' },
          ]}
          className="mb-6"
        />

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Badge variant="aqua">{HERO_DATA.eyebrow}</Badge>
            <h1 className="mt-4 text-3xl font-bold leading-[1.15] tracking-[-0.025em] text-[#111111] sm:text-4xl lg:text-[42px]">
              {HERO_DATA.headline}
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
              {HERO_DATA.subheadline}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <PrimaryButton href="#produk" size="lg">
                Jelajahi Katalog Produk
              </PrimaryButton>
              <WhatsAppButton
                phone={STORE_SETTINGS.whatsappNumber}
                size="lg"
                variant="outline"
                label="Konsultasi via WhatsApp"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-[8px] border border-[#E5E5E5] bg-white">
              <div className="aspect-[16/10] w-full">
                <SafeImage
                  src={HERO_DATA.bannerImageUrl}
                  alt={HERO_DATA.bannerTitle}
                  slotType="hero-banner"
                  eyebrow="AQUA ELEKTRONIK • SHOWROOM CAMPAIGN"
                  label={HERO_DATA.bannerTitle}
                  ratioHint="16:10"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#E5E5E5] bg-white px-4 py-3 text-xs text-[#6B6B6B]">
                <span className="font-medium text-[#111111]">
                  {HERO_DATA.bannerCaption}
                </span>
                <span className="font-semibold text-[#0066B3]">
                  {STORE_SETTINGS.storeTagline}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

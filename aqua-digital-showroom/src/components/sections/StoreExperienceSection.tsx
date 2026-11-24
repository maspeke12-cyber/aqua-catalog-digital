import React from 'react';
import { STORE_PILLARS, STORE_SETTINGS } from '@/data/homepageData';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { SecondaryButton } from '@/components/ui/SecondaryButton';

export function StoreExperienceSection() {
  return (
    <section id="tentang" className="py-12 md:py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Tentang Showroom"
          title="Pengalaman Berbelanja Elektronik di CLEO ELECTRONICS by TIARA"
          description="Kami menghubungkan kemudahan penelusuran katalog digital dengan layanan konsultasi langsung di gerai fisik Kota Palu."
        />

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
          {STORE_PILLARS.map((pillar) => (
            <article
              key={pillar.id}
              className="rounded-[8px] border border-[#E5E5E5] bg-white p-5 sm:p-6"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-[4px] bg-[#111111] text-xs font-bold text-white">
                {pillar.number}
              </span>
              <h3 className="mt-4 text-base font-bold text-[#111111] sm:text-lg">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[8px] border border-[#E5E5E5] bg-[#F7F7F7] p-6 sm:p-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Badge variant="aqua">Kunjungan Gerai &amp; Konsultasi</Badge>
              <h3 className="mt-3 text-2xl font-bold tracking-[-0.02em] text-[#111111] sm:text-3xl">
                Siap Membantu Memilih Perangkat yang Tepat untuk Rumah Anda
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
                Kunjungi {STORE_SETTINGS.storeName} di {STORE_SETTINGS.address}{' '}
                ({STORE_SETTINGS.operationalHours}), atau mulai percakapan
                terlebih dahulu dengan tim kami.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
              <WhatsAppButton
                phone={STORE_SETTINGS.whatsappNumber}
                size="lg"
                fullWidth
                label="Konsultasi via WhatsApp"
              />
              <SecondaryButton href="#kontak" size="md" fullWidth>
                Lihat Lokasi &amp; Jam Buka
              </SecondaryButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

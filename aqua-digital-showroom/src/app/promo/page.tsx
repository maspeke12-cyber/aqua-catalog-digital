import React from 'react';
import type { Metadata } from 'next';
import { getShowroomData } from '@/lib/showroomService';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Badge } from '@/components/ui/Badge';
import { SafeImage } from '@/components/ui/SafeImage';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Program Promo AQUA Elektronik | CLEO ELECTRONICS by TIARA',
  description: 'Informasi program promo resmi perangkat elektronik AQUA di CLEO ELECTRONICS by TIARA, Jl. Dewi Sartika No.66-72, Kota Palu.',
};

export default async function PromoPage() {
  const { promos, settings } = await getShowroomData();
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#111111]">
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <section className="border-b border-[#E5E5E5] bg-[#F7F7F7] py-8 sm:py-12">
          <Container>
            <Breadcrumb items={[{ label: 'Beranda', href: '/' }, { label: 'Program Promo' }]} className="mb-4" />
            <Badge variant="aqua">{settings.storeTagline}</Badge>
            <h1 className="mt-3 text-2xl font-bold tracking-[-0.02em] text-[#111111] sm:text-4xl">Program Promo &amp; Penawaran Resmi</h1>
            <p className="mt-2 max-w-2xl text-sm text-[#6B6B6B] sm:text-base">Informasi jadwal program berjalan di {settings.address}.</p>
          </Container>
        </section>
        <section className="py-10 sm:py-14">
          <Container>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {promos.map((promo) => (
                <article key={promo.id} className="flex flex-col overflow-hidden rounded-[8px] border border-[#E5E5E5] bg-white">
                  <div className="aspect-[16/9] w-full border-b border-[#E5E5E5] bg-[#F7F7F7]">
                    <SafeImage src={promo.posterUrl} alt={promo.title} slotType="promo-poster" eyebrow={promo.label} label={promo.title} ratioHint="16:9" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <Badge variant="dark">{promo.label}</Badge>
                        <span className="text-xs font-medium text-[#0066B3]">{promo.period}</span>
                      </div>
                      <h2 className="mt-3 text-lg font-bold text-[#111111] sm:text-xl">{promo.title}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">{promo.description}</p>
                    </div>
                    <div className="mt-6">
                      <WhatsAppButton phone={settings.whatsappNumber} size="md" fullWidth message={`Halo Kak Ridwan (Sales AQUA - ${settings.storeName}), saya ingin menanyakan detail program: ${promo.title}.`} label="Tanyakan Program ke Sales AQUA" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

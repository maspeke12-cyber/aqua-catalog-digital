import React from 'react';
import type { Metadata } from 'next';
import { FINANCING_PARTNERS, STORE_SETTINGS } from '@/data/homepageData';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { PartnerLogoBox } from "@/components/ui/PartnerLogoBox";
import { Badge } from '@/components/ui/Badge';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Mitra Pembiayaan | CLEO ELECTRONICS by TIARA',
  description: 'Informasi mitra pembiayaan Home Credit, Kredivo, dan Kredit Plus di CLEO ELECTRONICS by TIARA, Jl. Dewi Sartika No.66-72, Kota Palu.',
};

export default function FinancingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#111111]">
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <section className="border-b border-[#E5E5E5] bg-[#F7F7F7] py-8 sm:py-12">
          <Container>
            <Breadcrumb items={[{ label: 'Beranda', href: '/' }, { label: 'Pembiayaan' }]} className="mb-4" />
            <Badge variant="aqua">{STORE_SETTINGS.storeTagline}</Badge>
            <h1 className="mt-3 text-2xl font-bold tracking-[-0.02em] text-[#111111] sm:text-4xl">Mitra Pembiayaan &amp; Pembelian Tunai</h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
              Pilihan metode pembayaran di {STORE_SETTINGS.address} ({STORE_SETTINGS.operationalHours}).
            </p>
          </Container>
        </section>
        <section className="py-10 sm:py-14">
          <Container>
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
              {FINANCING_PARTNERS.map((p) => (
                <article key={p.id} className="flex flex-col justify-between rounded-[8px] border border-[#E5E5E5] bg-white p-5 sm:p-6">
                  <div>
                    <PartnerLogoBox name={p.name} logoUrl={p.logoUrl} />
                    <div className="mt-4"><Badge variant="neutral">{p.categoryLabel}</Badge></div>
                    <p className="mt-3 text-sm leading-relaxed text-[#6B6B6B]">{p.description}</p>
                  </div>
                  <p className="mt-5 border-t border-[#E5E5E5] pt-3.5 text-xs leading-relaxed text-[#6B6B6B]">{p.verifiedNote}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 rounded-[8px] border border-[#E5E5E5] bg-[#F7F7F7] p-6 sm:p-8">
              <h2 className="text-lg font-bold text-[#111111] sm:text-xl">Langkah Pengajuan di Gerai</h2>
              <ol className="mt-4 grid grid-cols-1 gap-4 text-sm text-[#6B6B6B] md:grid-cols-3">
                <li className="rounded-[6px] border border-[#E5E5E5] bg-white p-4">
                  <strong className="block text-[#111111]">1. Pilih Unit &amp; Cek Stok</strong>
                  <span className="mt-1 block text-xs leading-relaxed">Tentukan model AQUA Elektronik dan pastikan ketersediaan unit bersama tim kami.</span>
                </li>
                <li className="rounded-[6px] border border-[#E5E5E5] bg-white p-4">
                  <strong className="block text-[#111111]">2. Siapkan Persyaratan Mitra</strong>
                  <span className="mt-1 block text-xs leading-relaxed">Ikuti ketentuan dokumen atau akun aktif sesuai mitra pembiayaan pilihan Anda.</span>
                </li>
                <li className="rounded-[6px] border border-[#E5E5E5] bg-white p-4">
                  <strong className="block text-[#111111]">3. Proses &amp; Serah Terima</strong>
                  <span className="mt-1 block text-xs leading-relaxed">Datang ke {STORE_SETTINGS.address} atau hubungi sales sebelum berkunjung.</span>
                </li>
              </ol>
              <div className="mt-6">
                <WhatsAppButton
                  phone={STORE_SETTINGS.whatsappNumber}
                  size="md"
                  message={`Halo Kak Ridwan (Sales AQUA - ${STORE_SETTINGS.storeName}), saya ingin menanyakan informasi pembayaran/pembiayaan unit AQUA Elektronik.`}
                  label="Konsultasi Pembiayaan via WhatsApp"
                />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

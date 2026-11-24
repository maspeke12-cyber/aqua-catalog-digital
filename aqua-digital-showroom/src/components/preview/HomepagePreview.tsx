"use client";
import { FINANCING_PARTNERS, HERO_DATA as _HERO_DATA, SHOWROOM_CATEGORIES, SHOWROOM_PRODUCTS as _SHOWROOM_PRODUCTS, SHOWROOM_PROMOS as _SHOWROOM_PROMOS, STORE_SETTINGS as _STORE_SETTINGS } from "@/data/homepageData";
import type { ShowroomPayload } from "@/lib/showroomService";

import React, { useMemo, useState } from 'react';
import {
  PREVIEW_CATEGORIES,
  PREVIEW_PRODUCTS,
  PREVIEW_PROMOS,
  PreviewCategory,
  PreviewProduct,
  PreviewPromo,
  STORE_INFO,
} from '@/data/previewData';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { FinancingSection } from '@/components/sections/FinancingSection';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { SecondaryButton } from '@/components/ui/SecondaryButton';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Badge } from '@/components/ui/Badge';
import { CategoryCard } from '@/components/cards/CategoryCard';
import { ProductCard } from '@/components/cards/ProductCard';
import { PromoCard } from '@/components/cards/PromoCard';

type PreviewModalItem =
  | { type: 'product'; data: PreviewProduct }
  | { type: 'category'; data: PreviewCategory }
  | { type: 'promo'; data: PreviewPromo }
  | null;

export function HomepagePreview({ cmsData }: { cmsData?: Partial<ShowroomPayload> }) {
  const HERO_DATA = cmsData?.hero || _HERO_DATA;
  const SHOWROOM_PRODUCTS = cmsData?.products ?? [];
  const SHOWROOM_PROMOS = cmsData?.promos ?? [];
  const STORE_SETTINGS = { ..._STORE_SETTINGS, ...(cmsData?.settings || {}) };
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [modalItem, setModalItem] = useState<PreviewModalItem>(null);

  const filteredProducts = useMemo(() => {
    return PREVIEW_PRODUCTS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'ALL' || item.categoryName === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.model.toLowerCase().includes(q) ||
        item.categoryName.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#111111]">
      <AnnouncementBar />
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Kategori Produk (3 Kolom Desktop, 3 Kolom Tablet, 2 Kolom Mobile) */}
        <section id="kategori" className="py-12 md:py-16 lg:py-20">
          <Container>
            <SectionHeading
              eyebrow="Kategori Produk"
              title="Jelajahi Lini Produk AQUA Elektronik"
              description="Pilih kategori perangkat rumah tangga untuk menelusuri unit yang tersedia di showroom kami."
              action={
                selectedCategory !== 'ALL' ? (
                  <SecondaryButton
                    size="sm"
                    onClick={() => setSelectedCategory('ALL')}
                  >
                    Tampilkan Semua Kategori
                  </SecondaryButton>
                ) : undefined
              }
            />

            <div className="grid grid-cols-2 gap-3.5 sm:gap-5 md:grid-cols-3 lg:gap-6">
              {PREVIEW_CATEGORIES.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  onSelect={(cat) => {
                    setSelectedCategory(cat.name);
                    setModalItem({ type: 'category', data: cat });
                  }}
                />
              ))}
            </div>
          </Container>
        </section>

        {/* 3. Katalog Pilihan (Product Cards) */}
        <section
          id="produk"
          className="border-y border-[#E5E5E5] bg-[#F7F7F7] py-12 md:py-16 lg:py-20"
        >
          <Container>
            <SectionHeading
              eyebrow="Katalog Pilihan"
              title="Katalog Produk Showroom"
              description="Pilihan unit elektronik resmi AQUA yang tersedia di CLEO ELECTRONICS by TIARA."
              action={
                <div className="flex flex-wrap gap-2">
                  {['ALL', 'TV', 'Refrigerator', 'Washing Machine', 'Air Conditioner'].map(
                    (cat) => {
                      const active = selectedCategory === cat;
                      return (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setSelectedCategory(cat)}
                          className={`min-h-[38px] rounded-[4px] border px-3.5 text-xs font-semibold transition-colors ${
                            active
                              ? 'border-[#111111] bg-[#111111] text-white'
                              : 'border-[#E5E5E5] bg-white text-[#111111] hover:border-[#111111]'
                          }`}
                        >
                          {cat === 'ALL' ? 'Semua' : cat}
                        </button>
                      );
                    }
                  )}
                </div>
              }
            />

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewDetail={(item) =>
                      setModalItem({ type: 'product', data: item })
                    }
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-[8px] border border-[#E5E5E5] bg-white p-8 text-center">
                <p className="text-base font-semibold text-[#111111]">
                  Produk tidak ditemukan pada pratinjau ini
                </p>
                <p className="mt-1 text-sm text-[#6B6B6B]">
                  Coba ubah filter kategori atau hapus kata kunci pencarian.
                </p>
                <div className="mt-4">
                  <SecondaryButton
                    size="sm"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('ALL');
                    }}
                  >
                    Reset Filter
                  </SecondaryButton>
                </div>
              </div>
            )}
          </Container>
        </section>

        {/* 4. Promo Section */}
        <section id="promo" className="py-12 md:py-16 lg:py-20">
          <Container>
            <SectionHeading
              eyebrow="Promo & Program Showroom"
              title="Informasi Penawaran Berjalan"
              description="Informasi program promo resmi akan ditampilkan beserta periode berlaku dan ketentuan lengkap."
            />

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {PREVIEW_PROMOS.map((promo) => (
                <PromoCard
                  key={promo.id}
                  promo={promo}
                  onSelectPromo={(item) =>
                    setModalItem({ type: 'promo', data: item })
                  }
                />
              ))}
            </div>
          </Container>
        </section>

        {/* 5. Financing Section */}
        <FinancingSection />

        {/* 6. Tentang & Konsultasi Showroom */}
        <section id="tentang" className="py-12 md:py-16 lg:py-20">
          <Container>
            <div className="rounded-[8px] border border-[#E5E5E5] bg-white p-6 sm:p-10">
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <Badge variant="aqua">Showroom Fisik &amp; Layanan Konsultasi</Badge>
                  <h2 className="mt-3 text-2xl font-bold tracking-[-0.02em] text-[#111111] sm:text-3xl">
                    Konsultasikan Kebutuhan Elektronik Anda Sebelum Berkunjung
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
                    Tim {STORE_INFO.storeName} di Jl. Dewi Sartika No.66-72, Kota Palu siap
                    membantu Anda memeriksa ketersediaan stok, spesifikasi daya
                    listrik, serta pilihan pembiayaan yang sesuai.
                  </p>
                </div>

                <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
                  <WhatsAppButton
                    phone={STORE_INFO.whatsappNumber}
                    size="lg"
                    fullWidth
                    label="Konsultasi via WhatsApp"
                  />
                  <SecondaryButton href="#kontak" size="md" fullWidth>
                    Lihat Alamat Showroom
                  </SecondaryButton>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />

      {/* Modal Detail */}
      {modalItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Informasi Detail"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setModalItem(null)}
        >
          <div
            className="w-full max-w-lg rounded-[8px] border border-[#E5E5E5] bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <Badge variant="aqua">
                {modalItem.type === 'product'
                  ? 'Detail Produk'
                  : modalItem.type === 'category'
                  ? 'Kategori Produk'
                  : 'Informasi Promo'}
              </Badge>
              <button
                type="button"
                onClick={() => setModalItem(null)}
                className="min-h-[34px] rounded-[4px] border border-[#E5E5E5] px-3 text-xs font-semibold text-[#111111] hover:bg-[#F7F7F7]"
              >
                Tutup
              </button>
            </div>

            {modalItem.type === 'product' && (
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B]">
                  {modalItem.data.categoryName} &bull; {modalItem.data.model}
                </p>
                <h3 className="mt-1 text-xl font-bold text-[#111111]">
                  {modalItem.data.name}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#6B6B6B]">
                  {modalItem.data.description}
                </p>
                <ul className="mt-4 space-y-1.5 border-t border-[#E5E5E5] pt-4 text-xs text-[#111111]">
                  {modalItem.data.highlights.map((point) => (
                    <li key={point}>&bull; {point}</li>
                  ))}
                </ul>
                <div className="mt-6">
                  <WhatsAppButton
                    phone={STORE_INFO.whatsappNumber}
                    fullWidth
                    message={`Halo CLEO ELECTRONICS by TIARA, saya ingin menanyakan detail produk ${modalItem.data.name} (${modalItem.data.model}).`}
                    label="Konsultasi via WhatsApp"
                  />
                </div>
              </div>
            )}

            {modalItem.type === 'category' && (
              <div className="mt-4">
                <h3 className="text-xl font-bold text-[#111111]">
                  Kategori {modalItem.data.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">
                  {modalItem.data.description}
                </p>
                <div className="mt-5">
                  <PrimaryButton
                    fullWidth
                    href="#produk"
                    onClick={() => setModalItem(null)}
                  >
                    Tampilkan Produk {modalItem.data.name}
                  </PrimaryButton>
                </div>
              </div>
            )}

            {modalItem.type === 'promo' && (
              <div className="mt-4">
                <p className="text-xs font-semibold text-[#0066B3]">
                  {modalItem.data.period}
                </p>
                <h3 className="mt-1 text-xl font-bold text-[#111111]">
                  {modalItem.data.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#6B6B6B]">
                  {modalItem.data.description}
                </p>
                <div className="mt-6">
                  <WhatsAppButton
                    phone={STORE_INFO.whatsappNumber}
                    fullWidth
                    message={`Halo CLEO ELECTRONICS by TIARA, saya ingin menanyakan informasi terkait ${modalItem.data.title}.`}
                    label="Konsultasi via WhatsApp"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

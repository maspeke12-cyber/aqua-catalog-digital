'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ProductItem } from '@/types/showroom';
import { STORE_SETTINGS } from '@/data/homepageData';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Badge } from '@/components/ui/Badge';
import { SafeImage } from '@/components/ui/SafeImage';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp';
import { ProductCard } from '@/components/cards/ProductCard';

interface Props { product: ProductItem; relatedProducts: ProductItem[]; }

function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(amount);
}

export function ProductDetailClient({ product, relatedProducts }: Props) {
  const images = product.galleryImages?.length ? product.galleryImages : product.imageUrl ? [product.imageUrl] : [];
  const [activeIdx, setActiveIdx] = useState(0);
  const hasPrice = typeof product.price === 'number';
  const specs = product.specifications ?? [];

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#111111]">
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <section className="border-b border-[#E5E5E5] py-8 sm:py-12">
          <Container>
            <Breadcrumb
              items={[
                { label: 'Beranda', href: '/' },
                { label: 'Katalog Produk', href: '/produk' },
                { label: product.categoryName, href: `/produk?kategori=${encodeURIComponent(product.categoryName)}` },
                { label: product.name },
              ]}
              className="mb-6"
            />
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-6">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-[8px] border border-[#E5E5E5] bg-[#F7F7F7]">
                  <SafeImage src={images[activeIdx]} alt={product.name} slotType="product" eyebrow={product.categoryName} label={product.model} ratioHint="4:3" />
                </div>
                <div className="mt-3 grid grid-cols-4 gap-2.5">
                  {[0, 1, 2, 3].map((idx) => (
                    <button key={idx} type="button" onClick={() => setActiveIdx(idx)} className={`aspect-[4/3] overflow-hidden rounded-[6px] border bg-[#FAFAFA] ${activeIdx === idx ? 'border-[#0066B3] ring-1 ring-[#0066B3]' : 'border-[#E5E5E5]'}`}>
                      {images[idx] ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={images[idx]} alt={`${product.name} ${idx + 1}`} className="h-full w-full object-contain" />
                      ) : (
                        <span className="flex h-full items-center justify-center text-[10px] font-medium text-[#6B6B6B]">Foto {idx + 1}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="flex flex-wrap items-center gap-2">
                  {product.badge && <Badge variant="aqua">{product.badge}</Badge>}
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B]">{product.categoryName} &bull; {product.model}</span>
                </div>
                <h1 className="mt-3 text-2xl font-bold leading-tight text-[#111111] sm:text-3xl lg:text-4xl">{product.name}</h1>
                <p className="mt-3 text-sm leading-relaxed text-[#6B6B6B] sm:text-base">{product.description}</p>
                <div className="mt-6 rounded-[8px] border border-[#E5E5E5] bg-[#F7F7F7] p-4 sm:p-5">
                  {hasPrice ? (
                    <span className="text-2xl font-bold text-[#111111]">{formatRupiah(product.price as number)}</span>
                  ) : (
                    <p className="text-sm font-medium text-[#111111]">
                      Hubungi tim {STORE_SETTINGS.storeName} untuk informasi ketersediaan unit dan penawaran berlaku.
                    </p>
                  )}
                </div>

                <ul className="mt-6 space-y-2 text-sm text-[#6B6B6B]">
                  {product.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066B3]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <WhatsAppButton
                    phone={STORE_SETTINGS.whatsappNumber}
                    size="lg"
                    fullWidth
                    message={`Halo Kak Ridwan (Sales AQUA - ${STORE_SETTINGS.storeName}), saya ingin berkonsultasi mengenai ${product.name} (${product.model}).`}
                    label="Konsultasi via WhatsApp"
                  />
                  <Link href="/#pembiayaan" className="inline-flex min-h-[48px] w-full items-center justify-center rounded-[4px] border border-[#111111] bg-white px-6 text-sm font-semibold text-[#111111] hover:bg-[#111111] hover:text-white">
                    Info Pembiayaan
                  </Link>
                </div>

                <div className="mt-6 border-t border-[#E5E5E5] pt-4 text-xs text-[#6B6B6B]">
                  <p className="font-semibold text-[#111111]">{STORE_SETTINGS.storeName} &bull; {STORE_SETTINGS.address}</p>
                  <p className="mt-0.5">{STORE_SETTINGS.operationalHours}</p>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section className="border-b border-[#E5E5E5] bg-[#F7F7F7] py-10 sm:py-14">
          <Container>
            <h2 className="text-xl font-bold text-[#111111] sm:text-2xl">Spesifikasi Produk</h2>
            <div className="mt-5 max-w-3xl overflow-hidden rounded-[8px] border border-[#E5E5E5] bg-white">
              <dl className="divide-y divide-[#E5E5E5] text-sm">
                <div className="grid grid-cols-1 gap-1 px-4 py-3.5 sm:grid-cols-3 sm:px-6">
                  <dt className="font-medium text-[#6B6B6B]">Merek</dt>
                  <dd className="font-semibold text-[#111111] sm:col-span-2">AQUA Elektronik</dd>
                </div>
                <div className="grid grid-cols-1 gap-1 px-4 py-3.5 sm:grid-cols-3 sm:px-6">
                  <dt className="font-medium text-[#6B6B6B]">Kategori &amp; Model</dt>
                  <dd className="font-semibold text-[#111111] sm:col-span-2">{product.categoryName} &bull; {product.model}</dd>
                </div>
                {specs.length > 0 ? specs.map((s) => (
                  <div key={s.label} className="grid grid-cols-1 gap-1 px-4 py-3.5 sm:grid-cols-3 sm:px-6">
                    <dt className="font-medium text-[#6B6B6B]">{s.label}</dt>
                    <dd className="font-semibold text-[#111111] sm:col-span-2">{s.value}</dd>
                  </div>
                )) : (
                  <div className="grid grid-cols-1 gap-1 px-4 py-3.5 sm:grid-cols-3 sm:px-6">
                    <dt className="font-medium text-[#6B6B6B]">Spesifikasi Detail</dt>
                    <dd className="text-[#6B6B6B] sm:col-span-2">Data spesifikasi teknis lengkap dikelola melalui admin showroom.</dd>
                  </div>
                )}
              </dl>
            </div>
          </Container>
        </section>

        {relatedProducts.length > 0 && (
          <section className="py-10 sm:py-14">
            <Container>
              <h2 className="mb-6 text-xl font-bold text-[#111111] sm:text-2xl">Produk Lain di Showroom</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {relatedProducts.map((item) => <ProductCard key={item.id} product={item} />)}
              </div>
            </Container>
          </section>
        )}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

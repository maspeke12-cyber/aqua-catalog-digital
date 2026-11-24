"use client";

import React from 'react';
import Link from 'next/link';
import {
  HERO_DATA as _BASE_HERO_DATA,
  SHOWROOM_CATEGORIES,
  SHOWROOM_PRODUCTS as _BASE_SHOWROOM_PRODUCTS,
  SHOWROOM_PROMOS as _BASE_SHOWROOM_PROMOS,
  STORE_SETTINGS as _BASE_STORE_SETTINGS,
} from '@/data/homepageData';
import defaultCmsData from '@/data/showroom-cms.json';

export function HomepagePreview({ cmsData }: { cmsData?: Record<string, any> } = {}) {
  const _cms = (cmsData || defaultCmsData) as Record<string, any>;
  const HERO_DATA = { ..._BASE_HERO_DATA, ...(_cms.hero || {}) };
  const STORE_SETTINGS = { ..._BASE_STORE_SETTINGS, ...(_cms.settings || {}) };
  const SHOWROOM_PROMOS = Array.isArray(_cms.promos) ? _cms.promos : _BASE_SHOWROOM_PROMOS;
  const SHOWROOM_PRODUCTS = Array.isArray(_cms.products) ? _cms.products : _BASE_SHOWROOM_PRODUCTS;
  const whatsappDigits = (STORE_SETTINGS.whatsappNumber || '6285823358480').replace(/[^0-9]/g, '');

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Hero Utama */}
      <section className="mx-auto max-w-6xl px-4 pt-8 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="space-y-5 lg:col-span-6">
            <p className="inline-block rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold tracking-wide text-sky-700">
              {STORE_SETTINGS.storeName || 'CLEO ELECTRONICS by TIARA'} • {STORE_SETTINGS.city || 'Palu'}
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
              {HERO_DATA.headline}
            </h1>
            <p className="text-base leading-relaxed text-neutral-600">
              {HERO_DATA.subheadline}
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Link
                href="/produk"
                className="inline-flex items-center justify-center rounded-xl bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Jelajahi Katalog Produk
              </Link>
              <a
                href={`https://wa.me/${whatsappDigits}?text=${encodeURIComponent('Halo Kak, saya ingin konsultasi unit AQUA Elektronik di CLEO ELECTRONICS by TIARA.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-6 py-3.5 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100"
              >
                Konsultasi via WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
              <img
                src={HERO_DATA.bannerImageUrl || '/images/banners/hero-showroom.jpg'}
                alt={HERO_DATA.headline || 'AQUA Digital Showroom'}
                className="block h-auto w-full object-contain"
              />
              <div className="flex items-center justify-between border-t border-neutral-100 px-4 py-3 text-xs">
                <span className="font-medium text-neutral-700">CLEO ELECTRONICS by TIARA • Palu</span>
                <span className="font-semibold text-sky-700">AQUA Elektronik</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kategori Produk */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-xs font-bold tracking-wider text-sky-700 uppercase">KATEGORI PRODUK</p>
        <h2 className="mt-1 text-2xl font-bold text-neutral-950">Telusuri Berdasarkan Kategori</h2>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {SHOWROOM_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/produk?kategori=${encodeURIComponent(cat.name)}`}
              className="rounded-2xl border border-neutral-200 bg-white p-4 transition hover:border-sky-300 hover:shadow-sm"
            >
              <p className="text-sm font-bold text-neutral-900">{cat.name}</p>
              <p className="mt-1 text-xs text-neutral-500">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Katalog Produk */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-bold tracking-wider text-sky-700 uppercase">KATALOG PILIHAN</p>
            <h2 className="mt-1 text-2xl font-bold text-neutral-950">Katalog Produk Showroom</h2>
          </div>
          <Link href="/produk" className="text-sm font-semibold text-sky-700 hover:underline">
            Lihat Semua
          </Link>
        </div>

        {SHOWROOM_PRODUCTS.length === 0 ? (
          <div className="mt-5 rounded-2xl border border-dashed border-neutral-300 bg-white p-8 text-center">
            <p className="text-sm font-medium text-neutral-700">
              Daftar unit showroom sedang diperbarui. Hubungi tim kami via WhatsApp untuk ketersediaan stok hari ini.
            </p>
          </div>
        ) : (
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SHOWROOM_PRODUCTS.slice(0, 6).map((item: any) => (
              <div key={item.id || item.slug} className="flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                <div>
                  {item.imageUrl && (
                    <div className="bg-neutral-50 p-4">
                      <img src={item.imageUrl} alt={item.name} className="mx-auto block h-48 w-full object-contain" />
                    </div>
                  )}
                  <div className="p-5">
                    <span className="inline-block rounded-md bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-700">
                      {item.badge || item.category}
                    </span>
                    <h3 className="mt-2 text-base font-bold text-neutral-950">{item.name}</h3>
                    <p className="text-xs font-medium text-neutral-500">{item.category} • {item.model}</p>
                    {item.shortSummary && <p className="mt-2 text-sm text-neutral-600">{item.shortSummary}</p>}
                  </div>
                </div>
                <div className="border-t border-neutral-100 px-5 py-3">
                  <Link
                    href={`/produk/${item.slug || item.id}`}
                    className="block w-full rounded-xl bg-neutral-950 py-2.5 text-center text-xs font-semibold text-white hover:bg-neutral-800"
                  >
                    Lihat Detail Unit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Promo & Program Showroom */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-xs font-bold tracking-wider text-sky-700 uppercase">PROMO &amp; PROGRAM SHOWROOM</p>
        <h2 className="mt-1 text-2xl font-bold text-neutral-950">Informasi Penawaran Berjalan</h2>
        <p className="mt-1 text-sm text-neutral-600">
          Informasi program promo resmi ditampilkan beserta periode berlaku dan ketentuan lengkap.
        </p>

        <div className="mt-5 grid gap-6 md:grid-cols-2">
          {SHOWROOM_PROMOS.map((promo: any, idx: number) => (
            <div key={promo.id || idx} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
              {promo.posterUrl ? (
                <img
                  src={promo.posterUrl}
                  alt={promo.title}
                  className="block h-auto w-full object-contain"
                />
              ) : null}
              <div className="p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-md bg-neutral-950 px-2.5 py-1 text-xs font-semibold text-white">
                    {promo.tag || 'Program Showroom'}
                  </span>
                  <span className="text-xs font-medium text-sky-700">{promo.period}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-neutral-950">{promo.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{promo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner Konsultasi */}
      <section className="mx-auto max-w-6xl px-4 pt-4 pb-14 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
          {STORE_SETTINGS.consultationBannerUrl ? (
            <img
              src={STORE_SETTINGS.consultationBannerUrl}
              alt="Konsultasi Kebutuhan Perangkat Elektronik Rumah Tangga"
              className="block h-auto w-full object-contain"
            />
          ) : null}
          <div className="flex flex-col justify-between gap-4 p-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-bold tracking-wider text-sky-700 uppercase">LAYANAN KONSULTASI SHOWROOM</p>
              <h2 className="mt-1 text-xl font-bold text-neutral-950">
                Butuh Rekomendasi Tipe &amp; Ukuran Unit AQUA?
              </h2>
              <p className="mt-1 text-sm text-neutral-600">
                Kunjungi gerai {STORE_SETTINGS.storeName || 'CLEO ELECTRONICS by TIARA'} di {STORE_SETTINGS.address || 'Jl. Dewi Sartika No.66–72, Kota Palu'} atau chat langsung.
              </p>
            </div>
            <a
              href={`https://wa.me/${whatsappDigits}?text=${encodeURIComponent('Halo Kak Ridwan, saya ingin tanya promo dan stok unit AQUA Elektronik.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Chat WhatsApp Sales
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomepagePreview;

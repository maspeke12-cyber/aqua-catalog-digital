import React from 'react';
import Link from 'next/link';
import { STORE_SETTINGS } from '@/data/homepageData';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#111111]">
      <AnnouncementBar />
      <Header />
      <main className="flex flex-1 items-center py-16">
        <Container className="text-center">
          <Badge variant="aqua">{STORE_SETTINGS.storeTagline}</Badge>
          <h1 className="mt-4 text-2xl font-bold text-[#111111] sm:text-4xl">
            Halaman atau Unit Tidak Ditemukan
          </h1>
          <p className="mx-auto mt-2 max-w-md text-sm text-[#6B6B6B]">
            Tautan yang Anda buka mungkin sudah diperbarui. Silakan kembali ke beranda atau jelajahi katalog produk AQUA Elektronik.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/" className="inline-flex min-h-[44px] items-center rounded-[4px] bg-[#111111] px-5 text-sm font-semibold text-white">
              Ke Beranda
            </Link>
            <Link href="/produk" className="inline-flex min-h-[44px] items-center rounded-[4px] border border-[#111111] px-5 text-sm font-semibold text-[#111111]">
              Lihat Katalog Produk
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

'use client';
import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { SHOWROOM_CATEGORIES, SHOWROOM_PRODUCTS, STORE_SETTINGS } from '@/data/homepageData';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Badge } from '@/components/ui/Badge';
import { SearchInput } from '@/components/ui/SearchInput';
import { SecondaryButton } from '@/components/ui/SecondaryButton';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp';
import { ProductCard } from '@/components/cards/ProductCard';

type SortMode = 'default' | 'name-asc' | 'name-desc';

export function CatalogClient() {
  const searchParams = useSearchParams();
  const initialParam = searchParams.get('kategori');
  const initialCategory = useMemo(() => {
    if (!initialParam) return 'ALL';
    const found = SHOWROOM_CATEGORIES.find(
      (c) => c.name.toLowerCase() === initialParam.toLowerCase() || c.slug.toLowerCase() === initialParam.toLowerCase()
    );
    return found ? found.name : 'ALL';
  }, [initialParam]);

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortMode, setSortMode] = useState<SortMode>('default');

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const list = SHOWROOM_PRODUCTS.filter((item) => {
      const matchCat = selectedCategory === 'ALL' || item.categoryName === selectedCategory;
      const matchQ = !q || item.name.toLowerCase().includes(q) || item.model.toLowerCase().includes(q) || item.categoryName.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
    if (sortMode === 'name-asc') return [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sortMode === 'name-desc') return [...list].sort((a, b) => b.name.localeCompare(a.name));
    return list;
  }, [selectedCategory, searchQuery, sortMode]);

  const categoryFilterList = ['ALL', ...SHOWROOM_CATEGORIES.map((c) => c.name)];
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#111111]">
      <AnnouncementBar />
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main className="flex-1">
        <section className="border-b border-[#E5E5E5] bg-[#F7F7F7] py-8 sm:py-12">
          <Container>
            <Breadcrumb items={[{ label: 'Beranda', href: '/' }, { label: 'Katalog Produk' }]} className="mb-4" />
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <Badge variant="aqua">{STORE_SETTINGS.storeTagline}</Badge>
                <h1 className="mt-3 text-2xl font-bold tracking-[-0.02em] text-[#111111] sm:text-4xl">Katalog Lengkap AQUA Elektronik</h1>
                <p className="mt-2 max-w-2xl text-sm text-[#6B6B6B] sm:text-base">Telusuri jajaran perangkat elektronik AQUA di {STORE_SETTINGS.address}.</p>
              </div>
              <div className="w-full lg:w-80"><SearchInput value={searchQuery} onChange={setSearchQuery} placeholder="Cari produk atau kode model..." /></div>
            </div>
          </Container>
        </section>
        <section className="border-b border-[#E5E5E5] bg-white py-4">
          <Container>
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <div className="flex flex-wrap gap-2">
                {categoryFilterList.map((cat) => (
                  <button key={cat} type="button" onClick={() => setSelectedCategory(cat)} className={`min-h-[38px] rounded-[4px] border px-3.5 text-xs font-semibold ${selectedCategory === cat ? 'border-[#111111] bg-[#111111] text-white' : 'border-[#E5E5E5] bg-white text-[#111111]'}`}>
                    {cat === 'ALL' ? 'Semua Kategori' : cat}
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs text-[#6B6B6B]">Menampilkan <strong className="text-[#111111]">{filteredProducts.length}</strong> unit</span>
                <select aria-label="Urutkan" value={sortMode} onChange={(e) => setSortMode(e.target.value as SortMode)} className="min-h-[38px] rounded-[4px] border border-[#E5E5E5] bg-white px-3 text-xs font-semibold text-[#111111]">
                  <option value="default">Urutan Showroom</option>
                  <option value="name-asc">Nama (A – Z)</option>
                  <option value="name-desc">Nama (Z – A)</option>
                </select>
              </div>
            </div>
          </Container>
        </section>
        <section className="py-10 sm:py-14">
          <Container>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                {filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
              </div>
            ) : (
              <div className="rounded-[8px] border border-[#E5E5E5] bg-[#F7F7F7] p-8 text-center">
                <p className="text-base font-bold text-[#111111]">Produk belum ditemukan pada filter ini</p>
                <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
                  <SecondaryButton size="md" onClick={() => { setSelectedCategory('ALL'); setSearchQuery(''); setSortMode('default'); }}>Reset Filter</SecondaryButton>
                  <WhatsAppButton phone={STORE_SETTINGS.whatsappNumber} size="md" label="Konsultasi via WhatsApp" />
                </div>
              </div>
            )}
          </Container>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

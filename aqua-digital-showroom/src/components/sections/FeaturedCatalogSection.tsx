import React from 'react';
import Link from 'next/link';
import { CategoryItem, ProductItem } from '@/types/showroom';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SecondaryButton } from '@/components/ui/SecondaryButton';
import { ProductCard } from '@/components/cards/ProductCard';

interface Props {
  products: ProductItem[];
  categories: CategoryItem[];
  selectedCategory: string;
  searchQuery: string;
  onSelectCategory: (c: string) => void;
  onResetFilters: () => void;
  onViewProduct?: (p: ProductItem) => void;
}

export function FeaturedCatalogSection({ products, categories, selectedCategory, searchQuery, onSelectCategory, onResetFilters, onViewProduct }: Props) {
  const filters = ['ALL', ...categories.map((c) => c.name)];
  return (
    <section id="produk" className="border-y border-[#E5E5E5] bg-[#F7F7F7] py-12 md:py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Katalog Pilihan"
          title="Jajaran Produk AQUA Elektronik"
          description="Tampilan katalog terstruktur dengan foto studio seragam, kode model jelas, serta tombol detail untuk informasi lengkap."
          action={
            <div className="flex flex-wrap gap-2">
              {filters.map((cat) => (
                <button key={cat} type="button" onClick={() => onSelectCategory(cat)} className={`min-h-[38px] rounded-[4px] border px-3.5 text-xs font-semibold ${selectedCategory === cat ? 'border-[#111111] bg-[#111111] text-white' : 'border-[#E5E5E5] bg-white text-[#111111] hover:border-[#111111]'}`}>
                  {cat === 'ALL' ? 'Semua' : cat}
                </button>
              ))}
            </div>
          }
        />
        {searchQuery.trim().length > 0 && (
          <div className="mb-6 flex items-center justify-between rounded-[6px] border border-[#E5E5E5] bg-white px-4 py-3 text-xs">
            <span className="text-[#6B6B6B]">Hasil: <strong className="text-[#111111]">&ldquo;{searchQuery}&rdquo;</strong></span>
            <button type="button" onClick={onResetFilters} className="font-semibold text-[#0066B3] hover:underline">Hapus Pencarian</button>
          </div>
        )}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {products.map((p) => <ProductCard key={p.id} product={p} onViewDetail={onViewProduct} />)}
          </div>
        ) : (
          <div className="rounded-[8px] border border-[#E5E5E5] bg-white p-8 text-center">
            <p className="text-base font-semibold text-[#111111]">Tidak ada produk yang cocok</p>
            <div className="mt-4"><SecondaryButton size="sm" onClick={onResetFilters}>Tampilkan Semua Produk</SecondaryButton></div>
          </div>
        )}
        <div className="mt-8 flex justify-center sm:mt-10">
          <Link href={selectedCategory !== 'ALL' ? `/produk?kategori=${encodeURIComponent(selectedCategory)}` : '/produk'} className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-[4px] bg-[#111111] px-6 text-sm font-semibold text-white hover:bg-black/85">
            <span>Lihat Semua Katalog Produk</span><span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

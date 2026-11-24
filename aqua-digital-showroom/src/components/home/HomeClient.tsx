'use client';

import React, { useMemo, useState } from 'react';
import {
  SHOWROOM_CATEGORIES,
  SHOWROOM_PRODUCTS,
  SHOWROOM_PROMOS,
} from '@/data/homepageData';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { CategorySection } from '@/components/sections/CategorySection';
import { FeaturedCatalogSection } from '@/components/sections/FeaturedCatalogSection';
import { PromoSection } from '@/components/sections/PromoSection';
import { FinancingSection } from '@/components/sections/FinancingSection';
import { StoreExperienceSection } from '@/components/sections/StoreExperienceSection';
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp';
import {
  ModalSelection,
  ShowroomDetailModal,
} from '@/components/home/ShowroomDetailModal';

export function HomeClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [modalSelection, setModalSelection] = useState<ModalSelection>(null);

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return SHOWROOM_PRODUCTS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'ALL' || item.categoryName === selectedCategory;
      const matchesQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.model.toLowerCase().includes(q) ||
        item.categoryName.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  const handleSelectCategoryFromGrid = (categoryName: string) => {
    setSelectedCategory(categoryName);
    const catalogElement = document.getElementById('produk');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('ALL');
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#111111]">
      <AnnouncementBar />
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="flex-1">
        <HeroSection />

        <CategorySection
          categories={SHOWROOM_CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategoryFromGrid}
          onResetCategory={() => setSelectedCategory('ALL')}
        />

        <FeaturedCatalogSection
          products={filteredProducts}
          categories={SHOWROOM_CATEGORIES}
          selectedCategory={selectedCategory}
          searchQuery={searchQuery}
          onSelectCategory={setSelectedCategory}
          onResetFilters={handleResetFilters}
          onViewProduct={(product) =>
            setModalSelection({ type: 'product', data: product })
          }
        />

        <PromoSection
          promos={SHOWROOM_PROMOS}
          onSelectPromo={(promo) =>
            setModalSelection({ type: 'promo', data: promo })
          }
        />

        <FinancingSection />

        <StoreExperienceSection />
      </main>

      <Footer />
      <FloatingWhatsApp />

      <ShowroomDetailModal
        selection={modalSelection}
        onClose={() => setModalSelection(null)}
      />
    </div>
  );
}

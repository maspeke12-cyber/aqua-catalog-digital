import React from 'react';
import { CategoryItem } from '@/types/showroom';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SecondaryButton } from '@/components/ui/SecondaryButton';
import { CategoryCard } from '@/components/cards/CategoryCard';

interface CategorySectionProps {
  categories: CategoryItem[];
  selectedCategory: string;
  onSelectCategory: (categoryName: string) => void;
  onResetCategory: () => void;
}

export function CategorySection({
  categories,
  selectedCategory,
  onSelectCategory,
  onResetCategory,
}: CategorySectionProps) {
  return (
    <section id="kategori" className="py-12 md:py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="Kategori Produk"
          title="Jelajahi Lini Produk AQUA Elektronik"
          description="Pilih kategori perangkat rumah tangga untuk menelusuri jajaran unit yang tersedia di CLEO ELECTRONICS by TIARA."
          action={
            selectedCategory !== 'ALL' ? (
              <SecondaryButton size="sm" onClick={onResetCategory}>
                Tampilkan Semua Kategori
              </SecondaryButton>
            ) : undefined
          }
        />

        <div className="grid grid-cols-2 gap-3.5 sm:gap-5 md:grid-cols-3 lg:gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              isSelected={selectedCategory === category.name}
              onSelect={(cat) => onSelectCategory(cat.name)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

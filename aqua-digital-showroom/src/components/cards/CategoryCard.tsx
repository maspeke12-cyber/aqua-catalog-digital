import React from 'react';
import { CategoryItem } from '@/types/showroom';
import { SafeImage } from '@/components/ui/SafeImage';

interface CategoryCardProps {
  category: CategoryItem;
  isSelected?: boolean;
  onSelect?: (category: CategoryItem) => void;
}

export function CategoryCard({
  category,
  isSelected = false,
  onSelect,
}: CategoryCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(category)}
      aria-pressed={isSelected}
      className={`group flex flex-col overflow-hidden rounded-[8px] border bg-white text-left transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066B3] ${
        isSelected
          ? 'border-[#0066B3] ring-1 ring-[#0066B3]'
          : 'border-[#E5E5E5] hover:border-[#111111]'
      }`}
    >
      <div className="aspect-[16/10] w-full overflow-hidden border-b border-[#E5E5E5] bg-[#F7F7F7]">
        <SafeImage
          src={category.imageUrl}
          alt={`Kategori ${category.name}`}
          slotType="category"
          className="h-full w-full transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
        <div>
          <h3 className="text-base font-bold leading-snug text-[#111111] transition-colors group-hover:text-[#0066B3] sm:text-lg">
            {category.name}
          </h3>
          <p className="mt-1.5 text-xs leading-relaxed text-[#6B6B6B] sm:text-sm">
            {category.description}
          </p>
        </div>

        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] group-hover:text-[#0066B3]">
          Lihat Produk Kategori
          <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </button>
  );
}

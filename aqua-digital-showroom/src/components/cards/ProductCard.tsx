import React from 'react';
import Link from 'next/link';
import { ProductItem } from '@/types/showroom';
import { Badge } from '@/components/ui/Badge';
import { SafeImage } from '@/components/ui/SafeImage';

interface ProductCardProps {
  product: ProductItem;
  onViewDetail?: (product: ProductItem) => void;
}

function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function ProductCard({ product, onViewDetail }: ProductCardProps) {
  const hasPrice = typeof product.price === 'number';
  const hasPromoPrice =
    hasPrice &&
    typeof product.originalPrice === 'number' &&
    product.originalPrice > (product.price as number);

  return (
    <article className="group flex flex-col overflow-hidden rounded-[8px] border border-[#E5E5E5] bg-white transition-colors duration-150 hover:border-[#111111]">
      <Link
        href={`/produk/${product.slug}`}
        className="relative block aspect-[4/3] w-full overflow-hidden border-b border-[#E5E5E5] bg-[#F7F7F7]"
      >
        {product.badge && (
          <div className="absolute left-3 top-3 z-20">
            <Badge variant="aqua">{product.badge}</Badge>
          </div>
        )}
        <SafeImage
          src={product.imageUrl}
          alt={product.name}
          slotType="product"
          eyebrow={product.categoryName}
          label={product.model}
          ratioHint="4:3"
          className="h-full w-full transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </Link>

      <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6B6B6B]">
            {product.categoryName} &bull; {product.model}
          </p>
          <h3 className="mt-1.5 text-base font-bold leading-snug text-[#111111] sm:text-[17px]">
            <Link href={`/produk/${product.slug}`} className="transition-colors hover:text-[#0066B3]">
              {product.name}
            </Link>
          </h3>
          <p className="mt-1.5 text-xs leading-relaxed text-[#6B6B6B] sm:text-sm">
            {product.shortInfo}
          </p>
          <div className="mt-3 border-t border-[#E5E5E5] pt-3">
            {hasPrice ? (
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-base font-bold text-[#111111]">
                  {formatRupiah(product.price as number)}
                </span>
                {hasPromoPrice && (
                  <span className="text-xs text-[#6B6B6B] line-through">
                    {formatRupiah(product.originalPrice as number)}
                  </span>
                )}
              </div>
            ) : (
              <p className="text-xs font-medium text-[#6B6B6B]">
                Informasi harga tersedia saat konsultasi showroom
              </p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <Link
            href={`/produk/${product.slug}`}
            onClick={() => onViewDetail?.(product)}
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[4px] border border-[#111111] bg-white px-5 text-sm font-semibold text-[#111111] transition-colors duration-150 hover:bg-[#111111] hover:text-white"
          >
            Lihat Detail
          </Link>
        </div>
      </div>
    </article>
  );
}

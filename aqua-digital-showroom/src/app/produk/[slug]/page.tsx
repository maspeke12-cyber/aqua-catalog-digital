import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SHOWROOM_PRODUCTS, STORE_SETTINGS } from '@/data/homepageData';
import { ProductDetailClient } from '@/components/catalog/ProductDetailClient';

interface Props { params: Promise<{ slug: string }>; }

export function generateStaticParams() {
  return SHOWROOM_PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = SHOWROOM_PRODUCTS.find((i) => i.slug === slug);
  if (!p) return { title: `Produk Tidak Ditemukan | ${STORE_SETTINGS.storeName}` };
  return { title: `${p.name} (${p.model}) | ${STORE_SETTINGS.storeName}`, description: p.shortInfo };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = SHOWROOM_PRODUCTS.find((i) => i.slug === slug);
  if (!product) notFound();
  const related = SHOWROOM_PRODUCTS.filter((i) => i.id !== product.id).slice(0, 3);
  return <ProductDetailClient product={product} relatedProducts={related} />;
}

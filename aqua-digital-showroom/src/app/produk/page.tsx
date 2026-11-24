import cmsData from "@/data/showroom-cms.json";
import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { getShowroomData } from '@/lib/showroomService';
import { CatalogClient } from '@/components/catalog/CatalogClient';

export const metadata: Metadata = {
  title: 'Katalog Produk AQUA Elektronik | CLEO ELECTRONICS by TIARA',
  description: 'Katalog lengkap TV, Refrigerator, Washing Machine, Air Conditioner, Audio, dan Small Appliances AQUA Elektronik di CLEO ELECTRONICS by TIARA, Kota Palu.',
};

export default async function CatalogPage() {
  const { products } = await getShowroomData();
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-white text-sm text-[#6B6B6B]">Memuat katalog...</div>}>
      <CatalogClient initialProducts={products} />
    </Suspense>
  );
}

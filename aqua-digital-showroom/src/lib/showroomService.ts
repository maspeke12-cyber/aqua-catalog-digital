import {
  FINANCING_PARTNERS,
  HERO_DATA,
  SHOWROOM_CATEGORIES,
  SHOWROOM_PRODUCTS,
  SHOWROOM_PROMOS,
  STORE_SETTINGS,
} from '@/data/homepageData';
import { ProductItem, PromoItem, StoreSettings } from '@/types/showroom';

export interface ShowroomPayload {
  settings: StoreSettings;
  products: ProductItem[];
  promos: PromoItem[];
}

export async function getShowroomData(): Promise<ShowroomPayload> {
  const apiUrl = process.env.NEXT_PUBLIC_CMS_API_URL?.trim();

  if (apiUrl) {
    try {
      const res = await fetch(apiUrl, { next: { revalidate: 60 } });
      if (res.ok) {
        const remote = (await res.json()) as Partial<ShowroomPayload>;
        return {
          settings: { ...STORE_SETTINGS, ...(remote.settings ?? {}) },
          products: Array.isArray(remote.products) && remote.products.length > 0 ? remote.products : SHOWROOM_PRODUCTS,
          promos: Array.isArray(remote.promos) && remote.promos.length > 0 ? remote.promos : SHOWROOM_PROMOS,
        };
      }
    } catch {
      // Gunakan data lokal showroom jika endpoint CMS belum aktif
    }
  }

  return {
    settings: STORE_SETTINGS,
    products: SHOWROOM_PRODUCTS,
    promos: SHOWROOM_PROMOS,
  };
}

export { HERO_DATA, SHOWROOM_CATEGORIES, FINANCING_PARTNERS };

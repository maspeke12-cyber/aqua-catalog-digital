import cmsData from '@/data/showroom-cms.json';
import { FINANCING_PARTNERS, HERO_DATA, SHOWROOM_CATEGORIES, SHOWROOM_PRODUCTS, SHOWROOM_PROMOS, STORE_SETTINGS } from '@/data/homepageData';
import { ProductItem, PromoItem, StoreSettings } from '@/types/showroom';

export type HeroData = Omit<typeof HERO_DATA, "bannerImageUrl"> & { bannerImageUrl?: string };

export interface ShowroomPayload {
  settings: StoreSettings;
  hero: HeroData;
  products: ProductItem[];
  promos: PromoItem[];
}

export async function getShowroomData(): Promise<ShowroomPayload> {
  const local = cmsData as Partial<ShowroomPayload>;
  return {
    settings: { ...STORE_SETTINGS, ...(local.settings ?? {}) },
    hero: { ...HERO_DATA, ...(local.hero ?? {}) },
    products: Array.isArray(local.products) && local.products.length > 0 ? local.products : SHOWROOM_PRODUCTS,
    promos: Array.isArray(local.promos) && local.promos.length > 0 ? local.promos : SHOWROOM_PROMOS,
  };
}

export { HERO_DATA, SHOWROOM_CATEGORIES, FINANCING_PARTNERS };

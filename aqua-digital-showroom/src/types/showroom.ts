export interface NavItem {
  label: string;
  href: string;
}

export interface StoreSettings {
  brandName: string;
  brandLogoUrl?: string;
  storeName: string;
  storeTagline: string;
  address: string;
  whatsappNumber: string;
  consultationBannerUrl?: string;
  whatsappDisplay: string;
  operationalHours: string;
  socials: { name: string; label: string }[];
}

export interface HeroBannerData {
  eyebrow: string;
  headline: string;
  subheadline: string;
  bannerImageUrl?: string;
  bannerTitle: string;
  bannerCaption: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl?: string;
  images?: string[];
}

export interface ProductSpecItem {
  label: string;
  value: string;
}

export interface ProductItem {
  id: string;
  name: string;
  model: string;
  slug: string;
  categoryName: string;
  shortInfo: string;
  description: string;
  price?: number;
  originalPrice?: number;
  badge?: string;
  imageUrl?: string;
  galleryImages?: string[];
  highlights: string[];
  specifications?: ProductSpecItem[];
}

export interface PromoItem {
  id: string;
  title: string;
  label: string;
  period: string;
  description: string;
  posterUrl?: string;
}

export interface FinancingPartnerItem {
  id: string;
  name: string;
  logoUrl?: string;
  categoryLabel: string;
  description: string;
  verifiedNote: string;
}

export interface StorePillarItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export type PreviewCategory = CategoryItem;
export type PreviewProduct = ProductItem;
export type PreviewPromo = PromoItem;
export type PreviewFinancingPartner = FinancingPartnerItem;

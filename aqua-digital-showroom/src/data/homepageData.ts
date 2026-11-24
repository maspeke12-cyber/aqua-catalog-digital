import {
  CategoryItem,
  FinancingPartnerItem,
  HeroBannerData,
  NavItem,
  ProductItem,
  PromoItem,
  StorePillarItem,
  StoreSettings,
} from '@/types/showroom';

export const STORE_SETTINGS: StoreSettings = {
  brandName: 'AQUA Elektronik',
  brandLogoUrl: undefined,
  storeName: 'CLEO ELECTRONICS by TIARA',
  storeTagline: 'CLEO ELECTRONICS by TIARA',
  address: 'Jl. Dewi Sartika No.66-72, Kota Palu',
  whatsappNumber: '6285823358480',
  whatsappDisplay: '0858-2335-8480',
  operationalHours:
    'Senin - Sabtu 08.30 - 22.00 WITA dan Minggu 09.00 - 22.00 WITA',
  socials: [
    { name: 'Instagram', label: 'cleoelectronics' },
    { name: 'Facebook', label: 'Cleo Superstore' },
  ],
};

export const HERO_DATA: HeroBannerData = {
  eyebrow: 'CLEO ELECTRONICS by TIARA • JL. DEWI SARTIKA NO.66-72, KOTA PALU',
  headline: 'Katalog Digital Perangkat Elektronik AQUA untuk Hunian Modern.',
  subheadline:
    'Jelajahi jajaran televisi, lemari es, mesin cuci, pendingin ruangan, perangkat audio, hingga perlengkapan rumah tangga AQUA Elektronik. Periksa detail produk dan konsultasikan ketersediaan unit langsung dengan tim kami.',
  bannerImageUrl: "/images/banners/hero-banner.png",
  bannerTitle: 'Campaign Banner AQUA Elektronik',
  bannerCaption: 'CLEO ELECTRONICS by TIARA • Palu',
};

export const MAIN_NAVIGATION: NavItem[] = [
  { label: "Katalog Produk", href: "/produk" },
  { label: "Promo", href: "/promo" },
  { label: "Pembiayaan", href: "/pembiayaan" },
  { label: "Tentang", href: "/#tentang" },
  { label: "Kontak", href: "/#kontak" },
];

export const SHOWROOM_CATEGORIES: CategoryItem[] = [
  {
    id: 'cat-tv',
    name: 'TV',
    slug: 'tv',
    description: 'Televisi layar jernih berbagai ukuran untuk ruang keluarga.',
  },
  {
    id: 'cat-ref',
    name: 'Refrigerator',
    slug: 'refrigerator',
    description: 'Lemari es satu pintu, dua pintu, hingga multi door.',
  },
  {
    id: 'cat-wm',
    name: 'Washing Machine',
    slug: 'washing-machine',
    description: 'Mesin cuci front loading dan top loading harian.',
  },
  {
    id: 'cat-ac',
    name: 'Air Conditioner',
    slug: 'air-conditioner',
    description: 'Pendingin ruangan standar dan inverter hemat daya.',
  },
  {
    id: 'cat-audio',
    name: 'Audio',
    slug: 'audio',
    description: 'Perangkat tata suara untuk hiburan di dalam rumah.',
  },
  {
    id: 'cat-small',
    name: 'Small Appliances',
    slug: 'small-appliances',
    description: 'Peralatan elektronik ringkas penunjang aktivitas rumah.',
  },
];

export const SHOWROOM_PRODUCTS: ProductItem[] = [];

export const SHOWROOM_PROMOS: PromoItem[] = [
  {
    id: 'promo-1', posterUrl: '/images/promos/promo-1.jpg',
    title: 'Informasi Penawaran Produk Pilihan AQUA Elektronik',
    label: 'Program Showroom',
    period: 'Periode: Mengikuti jadwal program resmi toko',
    description:
      'Dapatkan informasi ketersediaan unit, hadiah langsung, maupun program cashback resmi yang sedang berlangsung di gerai CLEO ELECTRONICS by TIARA, Jl. Dewi Sartika No.66-72, Kota Palu.',
  },
  {
    id: 'promo-2', posterUrl: '/images/promos/promo-2.jpg',
    title: 'Konsultasi Kebutuhan Perangkat Elektronik Rumah Tangga',
    label: 'Layanan Pelanggan',
    period: 'Tersedia setiap hari di Jl. Dewi Sartika No.66-72, Kota Palu',
    description:
      'Diskusikan pilihan ukuran layar TV, kapasitas lemari es, hingga kebutuhan PK AC yang sesuai dengan ruangan rumah Anda.',
  },
];

export const FINANCING_PARTNERS: FinancingPartnerItem[] = [
  {
    id: 'fin-home-credit',
    name: 'Home Credit',
    logoUrl: '/images/financing/home-credit.png',
    categoryLabel: 'Mitra Pembiayaan Ritel',
    description:
      'Layanan pembiayaan cicilan untuk pembelian perangkat elektronik pilihan langsung di gerai CLEO ELECTRONICS by TIARA.',
    verifiedNote:
      'Persyaratan dokumen, tenor, dan keputusan persetujuan sepenuhnya mengikuti ketentuan resmi Home Credit.',
  },
  {
    id: 'fin-kredivo',
    name: 'Kredivo',
    logoUrl: '/images/financing/kredivo.png',
    categoryLabel: 'Pembiayaan Digital',
    description:
      'Metode pembayaran bertahap bagi pelanggan yang telah memiliki akun dan limit aktif pada aplikasi Kredivo.',
    verifiedNote:
      'Ketersediaan tenor dan proses verifikasi mengikuti kebijakan serta limit akun masing-masing pengguna.',
  },
  {
    id: 'fin-kredit-plus',
    name: 'Kredit Plus',
    logoUrl: '/images/financing/kredit-plus.png',
    categoryLabel: 'Mitra Multifinance',
    description:
      'Pilihan pembiayaan multifinance untuk memudahkan kepemilikan produk elektronik rumah tangga dengan proses terarah.',
    verifiedNote:
      'Kelengkapan administrasi dan persetujuan pengajuan sepenuhnya menjadi wewenang pihak Kredit Plus.',
  },
];

export const STORE_PILLARS: StorePillarItem[] = [
  {
    id: 'pillar-1',
    number: '01',
    title: 'Lihat Unit Display Secara Langsung',
    description:
      'Kunjungi gerai fisik kami di Jl. Dewi Sartika No.66-72, Kota Palu untuk memeriksa dimensi, material, dan tampilan unit AQUA Elektronik secara langsung.',
  },
  {
    id: 'pillar-2',
    number: '02',
    title: 'Konsultasi Spesifikasi & Daya Listrik',
    description:
      'Dapatkan rekomendasi kapasitas lemari es, ukuran layar TV, atau PK pendingin ruangan yang sesuai dengan kondisi hunian Anda.',
  },
  {
    id: 'pillar-3',
    number: '03',
    title: 'Transaksi Tunai maupun Pembiayaan Resmi',
    description:
      'Pilih pembelian tunai di toko atau ajukan pembiayaan melalui mitra resmi Home Credit, Kredivo, dan Kredit Plus dengan pendampingan tim gerai.',
  },
];

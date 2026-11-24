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
  bannerImageUrl: "/images/banners/hero-banner.jpg",
  bannerTitle: 'Campaign Banner AQUA Elektronik',
  bannerCaption: 'Area Visual Utama Showroom • Rasio Landscape 16:10',
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

export const SHOWROOM_PRODUCTS: ProductItem[] = [
  {
    id: 'prod-1',
    name: 'AQUA Google TV 4K UHD Series',
    model: 'MODEL-PREVIEW-TV01',
    slug: 'aqua-google-tv-4k-uhd', imageUrl: '/images/products/tv-1.jpg',
    categoryName: 'TV',
    shortInfo: 'Smart TV beresolusi 4K UHD dengan bingkai tipis minimalis.',
    description:
      'Televisi pintar beresolusi tinggi dengan tampilan layar luas dan akses aplikasi hiburan modern untuk ruang keluarga.',
    badge: 'Unit Showroom',
    highlights: [
      'Tampilan layar 4K UHD dengan warna tajam dan jernih',
      'Antarmuka sistem pintar yang mudah dinavigasi',
      'Desain bezel tipis selaras dengan interior modern',
    ],
    specifications: [],
  },
  {
    id: 'prod-2',
    name: 'AQUA Multi Door Refrigerator',
    model: 'MODEL-PREVIEW-REF01',
    slug: 'aqua-multi-door-refrigerator', imageUrl: '/images/products/ref-1.jpg',
    categoryName: 'Refrigerator',
    shortInfo: 'Lemari es multi pintu dengan kompartemen penyimpanan luas.',
    description:
      'Lemari es berkapasitas lega dengan pembagian ruang pendingin dan pembeku terpisah untuk menjaga kesegaran bahan makanan.',
    badge: 'Katalog Showroom',
    highlights: [
      'Tata letak rak luas dan mudah diatur sesuai kebutuhan',
      'Distribusi udara dingin merata di setiap kompartemen',
      'Permukaan pintu elegan yang mudah dibersihkan',
    ],
    specifications: [],
  },
  {
    id: 'prod-3',
    name: 'AQUA Front Loading Washing Machine',
    model: 'MODEL-PREVIEW-WM01',
    slug: 'aqua-front-loading-washing-machine', imageUrl: '/images/products/wm-1.jpg',
    categoryName: 'Washing Machine',
    shortInfo: 'Mesin cuci bukaan depan dengan panel kontrol digital.',
    description:
      'Mesin cuci bukaan depan yang dirancang untuk perawatan pakaian harian dengan beragam pilihan mode pencucian.',
    badge: 'Unit Showroom',
    highlights: [
      'Program pencucian beragam sesuai jenis serat kain',
      'Putaran tabung stabil dengan pengoperasian praktis',
      'Tampilan panel digital informatif dan mudah dibaca',
    ],
    specifications: [],
  },
  {
    id: 'prod-4',
    name: 'AQUA Inverter Split Air Conditioner',
    model: 'MODEL-PREVIEW-AC01',
    slug: 'aqua-inverter-split-ac', imageUrl: '/images/products/ac-1.jpg',
    categoryName: 'Air Conditioner',
    shortInfo: 'Pendingin ruangan split dengan kendali suhu stabil.',
    description:
      'Pendingin ruangan dengan desain unit indoor putih bersih untuk menjaga kenyamanan suhu ruangan sepanjang hari.',
    badge: 'Katalog Showroom',
    highlights: [
      'Pendinginan ruangan cepat dan merata',
      'Desain unit ringkas dengan warna putih bersih',
      'Filter udara mudah dilepas untuk perawatan rutin',
    ],
    specifications: [],
  },
];

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

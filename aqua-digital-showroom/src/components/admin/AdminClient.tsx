'use client';
import React, { useState } from 'react';
import { SHOWROOM_CATEGORIES, SHOWROOM_PRODUCTS, STORE_SETTINGS } from '@/data/homepageData';
import { ProductItem } from '@/types/showroom';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';

export function AdminClient() {
  const [waNumber, setWaNumber] = useState(STORE_SETTINGS.whatsappNumber);
  const [products, setProducts] = useState<ProductItem[]>(SHOWROOM_PRODUCTS);
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [category, setCategory] = useState(SHOWROOM_CATEGORIES[0]?.name || 'TV');
  const [shortInfo, setShortInfo] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !model.trim()) return;
    const slug = `${name}-${model}`.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const newItem: ProductItem = {
      id: `prod-${Date.now()}`,
      name: name.trim(),
      model: model.trim().toUpperCase(),
      slug,
      categoryName: category,
      shortInfo: shortInfo.trim() || `Unit resmi ${name.trim()} di ${STORE_SETTINGS.storeName}.`,
      description: shortInfo.trim() || `Perangkat elektronik AQUA model ${model.trim().toUpperCase()} tersedia untuk konsultasi di ${STORE_SETTINGS.storeName}.`,
      badge: 'Unit Showroom',
      imageUrl: imageUrl.trim() || undefined,
      highlights: ['Unit resmi AQUA Elektronik', `Tersedia di ${STORE_SETTINGS.storeName}`],
      specifications: [],
    };
    setProducts((prev) => [newItem, ...prev]);
    setName(''); setModel(''); setShortInfo(''); setImageUrl('');
  };
  const exportPayload = JSON.stringify(
    {
      settings: { ...STORE_SETTINGS, whatsappNumber: waNumber.trim() },
      products,
    },
    null,
    2
  );

  const handleCopyJson = async () => {
    await navigator.clipboard.writeText(exportPayload);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#111111]">
      <AnnouncementBar />
      <Header />
      <main className="flex-1 py-8 sm:py-12">
        <Container>
          <Badge variant="aqua">Admin Showroom &bull; {STORE_SETTINGS.storeTagline}</Badge>
          <h1 className="mt-3 text-2xl font-bold tracking-[-0.02em] text-[#111111] sm:text-3xl">
            Pengelola Katalog &amp; Kontak Showroom
          </h1>
          <p className="mt-1.5 max-w-2xl text-sm text-[#6B6B6B]">
            Atur nomor WhatsApp Sales AQUA, tambah tipe unit baru, lalu salin data JSON untuk disambungkan ke Google Sheets / Apps Script.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-5">
              <div className="rounded-[8px] border border-[#E5E5E5] bg-[#F7F7F7] p-5">
                <h2 className="text-base font-bold text-[#111111]">1. Nomor WhatsApp Sales AQUA</h2>
                <p className="mt-1 text-xs text-[#6B6B6B]">Gunakan format internasional tanpa tanda + (contoh: 62858xxxxxxx).</p>
                <input
                  type="text"
                  value={waNumber}
                  onChange={(e) => setWaNumber(e.target.value)}
                  placeholder="6285823358480"
                  className="mt-3 min-h-[42px] w-full rounded-[4px] border border-[#E5E5E5] bg-white px-3 text-sm text-[#111111]"
                />
              </div>
              <form onSubmit={handleAddProduct} className="rounded-[8px] border border-[#E5E5E5] bg-white p-5">
                <h2 className="text-base font-bold text-[#111111]">2. Tambah Unit Produk Baru</h2>
                <div className="mt-3 space-y-3">
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama Produk (misal: AQUA Side by Side 618L)" className="min-h-[42px] w-full rounded-[4px] border border-[#E5E5E5] px-3 text-sm" />
                  <input type="text" required value={model} onChange={(e) => setModel(e.target.value)} placeholder="Kode Model (misal: AQR-CSE696RSV-SL-U1)" className="min-h-[42px] w-full rounded-[4px] border border-[#E5E5E5] px-3 text-sm" />
                  <select value={category} onChange={(e) => setCategory(e.target.value)} className="min-h-[42px] w-full rounded-[4px] border border-[#E5E5E5] bg-white px-3 text-sm">
                    {SHOWROOM_CATEGORIES.map((c) => <option key={c.id} value={c.name}>{c.name}</option>)}
                  </select>
                  <input type="text" value={shortInfo} onChange={(e) => setShortInfo(e.target.value)} placeholder="Ringkasan singkat fitur utama" className="min-h-[42px] w-full rounded-[4px] border border-[#E5E5E5] px-3 text-sm" />
                  <input type="url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="URL Foto Produk (opsional)" className="min-h-[42px] w-full rounded-[4px] border border-[#E5E5E5] px-3 text-sm" />
                  <button type="submit" className="min-h-[44px] w-full rounded-[4px] bg-[#111111] px-4 text-sm font-semibold text-white hover:bg-black/85">
                    + Tambahkan ke Daftar Katalog
                  </button>
                </div>
              </form>
            </div>

            <div className="space-y-6 lg:col-span-7">
              <div className="rounded-[8px] border border-[#E5E5E5] bg-white p-5">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-base font-bold text-[#111111]">3. Daftar Unit Aktif ({products.length})</h2>
                  <button type="button" onClick={handleCopyJson} className="min-h-[38px] rounded-[4px] bg-[#0066B3] px-3.5 text-xs font-semibold text-white">
                    {copied ? 'JSON Tersalin!' : 'Salin JSON CMS'}
                  </button>
                </div>
                <ul className="mt-4 divide-y divide-[#E5E5E5] text-sm">
                  {products.map((p) => (
                    <li key={p.id} className="flex items-center justify-between gap-3 py-2.5">
                      <div>
                        <p className="font-semibold text-[#111111]">{p.name}</p>
                        <p className="text-xs text-[#6B6B6B]">{p.categoryName} &bull; {p.model}</p>
                      </div>
                      <button type="button" onClick={() => setProducts((prev) => prev.filter((i) => i.id !== p.id))} className="text-xs font-semibold text-red-600 hover:underline">
                        Hapus
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

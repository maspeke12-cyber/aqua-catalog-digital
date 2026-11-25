'use client';
import React, { useState } from 'react';
import cmsData from '@/data/showroom-cms.json';
import { HERO_DATA, SHOWROOM_CATEGORIES } from '@/data/homepageData';
import { ProductItem, PromoItem, StoreSettings } from '@/types/showroom';
type HeroData = Omit<typeof HERO_DATA, "bannerImageUrl"> & { bannerImageUrl?: string };
import { compressImageFile, PreparedUpload } from '@/lib/imageCompressor';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';

export function AdminClient() {
  const [tab, setTab] = useState<'products' | 'banners'>('products');
  const [extraImages, setExtraImages] = useState<string[]>(["", "", ""]);
  const [uploadingSlot, setUploadingSlot] = useState<number | null>(null);
  const [pin, setPin] = useState('2026');
  const [settings, setSettings] = useState<StoreSettings>(cmsData.settings as StoreSettings);
  const [hero, setHero] = useState<HeroData>(cmsData.hero as HeroData);
  const [products, setProducts] = useState<ProductItem[]>(cmsData.products as ProductItem[]);
  const [promos, setPromos] = useState<PromoItem[]>(cmsData.promos as PromoItem[]);
  const [uploads, setUploads] = useState<PreparedUpload[]>([]);
  const [previews, setPreviews] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const [editId, setEditId] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [category, setCategory] = useState(SHOWROOM_CATEGORIES[0]?.name || 'TV');
  const [badge, setBadge] = useState('Unit Showroom');
  const [shortInfo, setShortInfo] = useState('');
  const [highlightsText, setHighlightsText] = useState('');
  const [specsText, setSpecsText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const queueUpload = async (file: File | undefined, folder: 'banners' | 'products' | 'promos', onDone: (url: string) => void) => {
    if (!file) return;
    try {
      const prepared = await compressImageFile(file, folder);
      setUploads((prev) => [...prev, prepared]);
      setPreviews((prev) => ({ ...prev, [prepared.publicUrl]: prepared.previewUrl }));
      onDone(prepared.publicUrl);
    } catch (err) {
      setStatusMsg({ ok: false, text: err instanceof Error ? err.message : 'Gagal memproses foto.' });
    }
  };

  const resetForm = () => {
    setEditId(null);
    setExtraImages(["", "", ""]); setName(''); setModel(''); setBadge('Unit Showroom');
    setShortInfo(''); setHighlightsText(''); setSpecsText(''); setImageUrl('');
  };

  const startEdit = (p: ProductItem) => {
    setEditId(p.id);
    const _imgs = (p as { images?: string[] }).images || [];
    setExtraImages([_imgs[1] || "", _imgs[2] || "", _imgs[3] || ""]); setName(p.name); setModel(p.model); setCategory(p.categoryName);
    setBadge(p.badge || 'Unit Showroom'); setShortInfo(p.shortInfo);
    setHighlightsText((p.highlights || []).join(', '));
    setSpecsText((p.specifications || []).map((s) => `${s.label}: ${s.value}`).join('\n'));
    setImageUrl(p.imageUrl || '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !model.trim()) return;
    const slug = `${name}-${model}`.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const highlights = highlightsText.split(',').map((s) => s.trim()).filter(Boolean);
    const specifications = specsText.split('\n').map((line) => {
      const [k, ...v] = line.split(':');
      return k && v.length ? { label: k.trim(), value: v.join(':').trim() } : null;
    }).filter((x): x is { label: string; value: string } => Boolean(x));

    const item: ProductItem = {
      id: editId || `prod-${Date.now()}`, name: name.trim(), model: model.trim().toUpperCase(), slug, categoryName: category,
      shortInfo: shortInfo.trim() || `Unit resmi ${name.trim()} di ${settings.storeName}.`,
      description: shortInfo.trim() || `Perangkat elektronik AQUA model ${model.trim().toUpperCase()} tersedia di ${settings.storeName}.`,
      badge: badge.trim() || 'Unit Showroom', imageUrl: imageUrl.trim() || undefined,
      highlights: highlights.length ? highlights : ['Unit resmi AQUA Elektronik', `Tersedia di ${settings.storeName}`], specifications,
    };
    setProducts((prev) => (editId ? prev.map((p) => (p.id === editId ? item : p)) : [item, ...prev]));
    resetForm();
  };
  const handlePublish = async () => {
    setSaving(true); setStatusMsg(null);
    try {
      const res = await fetch('/api/admin/publish', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin, payload: { settings, hero, products, promos }, uploads }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Gagal menyimpan.');
      setUploads([]);
      setStatusMsg({ ok: true, text: 'Berhasil disimpan! Website publik otomatis ter-update dalam ±30 detik.' });
    } catch (err) {
      setStatusMsg({ ok: false, text: err instanceof Error ? err.message : 'Terjadi kesalahan.' });
    } finally { setSaving(false); }
  };

  
  const handleExtraPhotoUpload = async (slotIndex: number, file?: File) => {
    if (!file) return;
    setUploadingSlot(slotIndex);
    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("folder", "products");
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const data = await res.json();
      const url = data.url || data.path || data.fileUrl || "";
      if (url) {
        setExtraImages((prev) => {
          const next = [...prev];
          next[slotIndex] = url;
          return next;
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUploadingSlot(null);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#111111]">
      <AnnouncementBar /><Header />
      <main className="flex-1 py-8">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E5E5] pb-5">
            <div>
              <Badge variant="aqua">Web Admin &bull; {settings.storeTagline}</Badge>
              <h1 className="mt-2 text-2xl font-bold text-[#111111]">Kelola Katalog &amp; Banner</h1>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <input type="password" value={pin} onChange={(e) => setPin(e.target.value)} placeholder="PIN" className="min-h-[42px] w-24 rounded-[4px] border border-[#E5E5E5] px-3 text-center text-sm" />
              <button type="button" onClick={handlePublish} disabled={saving} className="min-h-[42px] rounded-[4px] bg-[#1F7A4C] px-4 text-sm font-semibold text-white disabled:opacity-50">
                {saving ? 'Menyimpan...' : 'Simpan & Tayangkan Online'}
              </button>
            </div>
          </div>

          {statusMsg && (
            <div className={`mt-4 rounded-[6px] border p-3.5 text-sm ${statusMsg.ok ? 'border-green-300 bg-green-50 text-green-800' : 'border-red-300 bg-red-50 text-red-700'}`}>
              {statusMsg.text}
            </div>
          )}

          <div className="mt-6 flex gap-2">
            <button type="button" onClick={() => setTab('products')} className={`min-h-[40px] rounded-[4px] px-4 text-sm font-semibold ${tab === 'products' ? 'bg-[#111111] text-white' : 'border border-[#E5E5E5] text-[#111111]'}`}>
              Produk ({products.length})
            </button>
            <button type="button" onClick={() => setTab('banners')} className={`min-h-[40px] rounded-[4px] px-4 text-sm font-semibold ${tab === 'banners' ? 'bg-[#111111] text-white' : 'border border-[#E5E5E5] text-[#111111]'}`}>
              Banner &amp; Promo ({promos.length})
            </button>
          </div>
          {tab === 'products' ? (
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
              <form onSubmit={handleSaveProduct} className="space-y-3 rounded-[8px] border border-[#E5E5E5] bg-[#FAFAFA] p-5 lg:col-span-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-bold">{editId ? 'Edit Unit Produk' : 'Tambah Unit Baru'}</h2>
                  {editId && <button type="button" onClick={resetForm} className="text-xs font-semibold text-[#6B6B6B] underline">Batal Edit</button>}
                </div>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama Produk (misal: AQUA Kulkas 2 Pintu 220L)" className="min-h-[40px] w-full rounded-[4px] border border-[#E5E5E5] bg-white px-3 text-sm" />
                <input type="text" required value={model} onChange={(e) => setModel(e.target.value)} placeholder="Kode Model (misal: AQR-D275R)" className="min-h-[40px] w-full rounded-[4px] border border-[#E5E5E5] bg-white px-3 text-sm" />
                <div className="grid grid-cols-2 gap-2">
                  <select value={category} onChange={(e) => setCategory(e.target.value)} className="min-h-[40px] rounded-[4px] border border-[#E5E5E5] bg-white px-3 text-sm">
                    {SHOWROOM_CATEGORIES.map((c) => <option key={c.id} value={c.name}>{c.name}</option>)}
                  </select>
                  <input type="text" value={badge} onChange={(e) => setBadge(e.target.value)} placeholder="Label (Best Seller)" className="min-h-[40px] rounded-[4px] border border-[#E5E5E5] bg-white px-3 text-sm" />
                </div>
                <input type="text" value={shortInfo} onChange={(e) => setShortInfo(e.target.value)} placeholder="Ringkasan fitur singkat" className="min-h-[40px] w-full rounded-[4px] border border-[#E5E5E5] bg-white px-3 text-sm" />
                <input type="text" value={highlightsText} onChange={(e) => setHighlightsText(e.target.value)} placeholder="Keunggulan (pisahkan dengan koma)" className="min-h-[40px] w-full rounded-[4px] border border-[#E5E5E5] bg-white px-3 text-sm" />
                <textarea rows={2} value={specsText} onChange={(e) => setSpecsText(e.target.value)} placeholder="Spesifikasi (contoh: Kapasitas: 220L)" className="w-full rounded-[4px] border border-[#E5E5E5] bg-white p-3 text-sm" />
                <div className="rounded-[4px] border border-dashed border-[#CCCCCC] bg-white p-3">
                  <label className="block text-xs font-semibold text-[#111111]">Upload Foto Produk dari Tablet</label>
                  <input type="file" accept="image/*" onChange={(e) => queueUpload(e.target.files?.[0], 'products', setImageUrl)} className="mt-1.5 w-full text-xs" />
                  {imageUrl && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={previews[imageUrl] || imageUrl} alt="Preview" className="mt-2 h-24 w-24 rounded border object-cover" />
                  )}
                </div>
                <button type="submit" className="min-h-[44px] w-full rounded-[4px] bg-[#111111] text-sm font-semibold text-white">
                  {editId ? 'Simpan Perubahan Unit' : '+ Tambahkan ke Daftar'}
                </button>
              </form>

              <div className="rounded-[8px] border border-[#E5E5E5] bg-white p-5 lg:col-span-7">
                <h2 className="text-base font-bold">Daftar Produk Katalog ({products.length})</h2>
                <ul className="mt-3 divide-y divide-[#E5E5E5]">
                  {products.map((p) => (
                    <li key={p.id} className="flex items-center justify-between gap-3 py-3">
                      <div className="flex items-center gap-3">
                        {p.imageUrl && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={previews[p.imageUrl] || p.imageUrl} alt={p.name} className="h-12 w-12 rounded border object-cover" />
                        )}
                        <div>
                          <p className="text-sm font-semibold text-[#111111]">{p.name}</p>
                          <p className="text-xs text-[#6B6B6B]">{p.categoryName} &bull; {p.model}</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button type="button" onClick={() => startEdit(p)} className="text-xs font-semibold text-[#0066B3] hover:underline">Edit</button>
                        <button type="button" onClick={() => setProducts((prev) => prev.filter((i) => i.id !== p.id))} className="text-xs font-semibold text-red-600 hover:underline">Hapus</button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="space-y-4 rounded-[8px] border border-[#E5E5E5] p-5">
                <h2 className="text-base font-bold">Banner Utama &amp; Konsultasi</h2>
                <div>
                  <label className="text-xs font-semibold">Judul Utama Beranda</label>
                  <input type="text" value={hero.headline} onChange={(e) => setHero({ ...hero, headline: e.target.value })} className="mt-1 min-h-[40px] w-full rounded-[4px] border border-[#E5E5E5] px-3 text-sm" />
                </div>
                <div>
                  <label className="text-xs font-semibold">Ganti Foto Banner Utama (Hero 16:10)</label>
                  <input type="file" accept="image/*" onChange={(e) => queueUpload(e.target.files?.[0], 'banners', (url) => setHero({ ...hero, bannerImageUrl: url }))} className="mt-1 w-full text-xs" />
                  {hero.bannerImageUrl && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={previews[hero.bannerImageUrl] || hero.bannerImageUrl} alt="Hero" className="mt-2 h-28 w-full rounded border object-cover" />
                  )}
                </div>
                <div>
                  <label className="text-xs font-semibold">Ganti Foto Banner Konsultasi</label>
                  <input type="file" accept="image/*" onChange={(e) => queueUpload(e.target.files?.[0], 'banners', (url) => setSettings({ ...settings, consultationBannerUrl: url }))} className="mt-1 w-full text-xs" />
                  {settings.consultationBannerUrl && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={previews[settings.consultationBannerUrl] || settings.consultationBannerUrl} alt="Konsultasi" className="mt-2 h-28 w-full rounded border object-cover" />
                  )}
                </div>
                <div>
                  <label className="text-xs font-semibold">Nomor WhatsApp Sales AQUA (Ridwan)</label>
                  <input type="text" value={settings.whatsappNumber} onChange={(e) => setSettings({ ...settings, whatsappNumber: e.target.value })} className="mt-1 min-h-[40px] w-full rounded-[4px] border border-[#E5E5E5] px-3 text-sm" />
                </div>
              </div>

              <div className="space-y-4 rounded-[8px] border border-[#E5E5E5] p-5">
                <h2 className="text-base font-bold">Banner Program Promo</h2>
                {promos.map((pr, idx) => (
                  <div key={pr.id} className="space-y-2 rounded-[6px] border border-[#E5E5E5] bg-[#FAFAFA] p-3.5">
                    <input type="text" value={pr.title} onChange={(e) => setPromos((prev) => prev.map((x, i) => (i === idx ? { ...x, title: e.target.value } : x)))} className="min-h-[38px] w-full rounded-[4px] border border-[#E5E5E5] bg-white px-3 text-sm font-semibold" />
                    <input type="text" value={pr.period} onChange={(e) => setPromos((prev) => prev.map((x, i) => (i === idx ? { ...x, period: e.target.value } : x)))} className="min-h-[36px] w-full rounded-[4px] border border-[#E5E5E5] bg-white px-3 text-xs" />
                    <input type="file" accept="image/*" onChange={(e) => queueUpload(e.target.files?.[0], 'promos', (url) => setPromos((prev) => prev.map((x, i) => (i === idx ? { ...x, posterUrl: url } : x))))} className="w-full text-xs" />
                    {pr.posterUrl && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={previews[pr.posterUrl] || pr.posterUrl} alt={pr.title} className="h-24 w-full rounded border object-cover" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </div>
  );
}

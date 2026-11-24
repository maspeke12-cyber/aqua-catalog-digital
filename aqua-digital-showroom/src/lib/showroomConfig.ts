import { STORE_SETTINGS } from '@/data/homepageData';

export function getShowroomWhatsAppNumber(): string {
  return (
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
    STORE_SETTINGS.whatsappNumber ||
    ''
  ).trim();
}

export function buildWhatsAppHref(phone?: string, message?: string): string {
  const raw = (phone || getShowroomWhatsAppNumber()).trim();
  const digits = raw.replace(/\D/g, '');
  if (!digits) return '#kontak';
  const base = `https://wa.me/${digits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

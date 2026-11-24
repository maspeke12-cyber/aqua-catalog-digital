import React from 'react';
import { MAIN_NAVIGATION, STORE_INFO } from '@/data/previewData';
import { Container } from '@/components/ui/Container';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { CopyrightYear } from '@/components/ui/CopyrightYear';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export function Footer() {
  return (
    <footer id="kontak" className="mt-auto bg-[#111111] text-white">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <BrandLogo logoUrl={STORE_INFO.brandLogoUrl} variant="dark" />

            <h2 className="mt-5 text-xl font-bold tracking-wide text-white">
              {STORE_INFO.storeName}
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75">
              {STORE_INFO.address}
            </p>
            <p className="mt-2 text-xs text-white/60">
              Jam Operasional: {STORE_INFO.operationalHours}
            </p>

            <div className="mt-6">
              <WhatsAppButton
                phone={STORE_INFO.whatsappNumber}
                label="Hubungi Sales AQUA"
              />
              <p className="mt-2 text-xs text-white/60">
                WhatsApp Resmi: {STORE_INFO.whatsappDisplay}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-white/60">
              Navigasi Showroom
            </h3>
            <ul className="mt-4 space-y-2.5">
              {MAIN_NAVIGATION.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.08em] text-white/60">
              Informasi Gerai
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              Kunjungi showroom kami di Jl. Dewi Sartika No.66-72, Kota Palu untuk melihat
              unit display dan berkonsultasi langsung dengan tim kami.
            </p>
            <ul className="mt-4 space-y-2">
              {STORE_INFO.socials.map((social) => (
                <li key={social.name} className="text-xs text-white/65">
                  <span className="font-semibold text-white">{social.name}:</span>{' '}
                  {social.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; <CopyrightYear /> {STORE_INFO.storeTagline}. Seluruh hak cipta
            dilindungi.
          </p>
          <p>
            Katalog digital independen untuk produk AQUA Elektronik. Bukan situs
            resmi prinsipal.
          </p>
        </div>
      </Container>
    </footer>
  );
}

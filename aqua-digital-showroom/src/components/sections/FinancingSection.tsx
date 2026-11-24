import React from 'react';
import { PREVIEW_FINANCING_PARTNERS, STORE_INFO } from '@/data/previewData';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PartnerLogoBox } from "@/components/ui/PartnerLogoBox";
import { Badge } from '@/components/ui/Badge';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export function FinancingSection() {
  return (
    <section
      id="pembiayaan"
      className="border-y border-[#E5E5E5] bg-[#F7F7F7] py-12 md:py-16 lg:py-20"
    >
      <Container>
        <SectionHeading
          eyebrow="Pilihan Pembiayaan"
          title="Mitra Pembiayaan Resmi di Showroom"
          description="CLEO ELECTRONICS by TIARA bekerja sama dengan lembaga pembiayaan terpercaya untuk memberikan pilihan metode pembayaran yang terstruktur."
        />

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
          {PREVIEW_FINANCING_PARTNERS.map((partner) => (
            <article
              key={partner.id}
              className="flex flex-col justify-between rounded-[8px] border border-[#E5E5E5] bg-white p-5 sm:p-6"
            >
              <div>
                <PartnerLogoBox name={p.name} logoUrl={p.logoUrl} />

                <div className="mt-4">
                  <Badge variant="neutral">{partner.categoryLabel}</Badge>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-[#6B6B6B]">
                  {partner.description}
                </p>
              </div>

              <div className="mt-5 border-t border-[#E5E5E5] pt-3.5">
                <p className="text-xs leading-relaxed text-[#6B6B6B]">
                  {partner.verifiedNote}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col justify-between gap-4 rounded-[8px] border border-[#E5E5E5] bg-white p-5 sm:flex-row sm:items-center sm:p-6">
          <div>
            <p className="text-sm font-bold text-[#111111]">
              Tersedia Juga Pembelian Tunai Langsung di Toko
            </p>
            <p className="mt-1 text-xs leading-relaxed text-[#6B6B6B] sm:text-sm">
              Untuk informasi kelengkapan persyaratan pengajuan pembiayaan maupun
              pembelian tunai di Jl. Dewi Sartika No.66-72, Kota Palu, silakan hubungi tim showroom kami.
            </p>
          </div>
          <div className="shrink-0">
            <WhatsAppButton
              phone={STORE_INFO.whatsappPlaceholder}
              variant="outline"
              label="Konsultasi via WhatsApp"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

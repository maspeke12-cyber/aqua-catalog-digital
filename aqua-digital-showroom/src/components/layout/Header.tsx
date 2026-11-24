'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { MAIN_NAVIGATION, STORE_SETTINGS } from '@/data/homepageData';
import { Container } from '@/components/ui/Container';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { DesktopNavigation } from '@/components/layout/DesktopNavigation';
import { MobileNavigation } from '@/components/layout/MobileNavigation';
import { SearchInput } from '@/components/ui/SearchInput';

interface HeaderProps { searchQuery?: string; onSearchChange?: (v: string) => void; }

export function Header({ searchQuery = '', onSearchChange }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-[#E5E5E5] bg-white/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-14 items-center justify-between gap-2 sm:h-16 sm:gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-2.5">
            <BrandLogo logoUrl={STORE_SETTINGS.brandLogoUrl} variant="light" />
            <span className="h-4 w-[1px] shrink-0 bg-[#E5E5E5]" />
            <span className="text-[10px] font-bold leading-tight tracking-wide text-[#111111] sm:text-xs">{STORE_SETTINGS.storeTagline}</span>
          </Link>
          <DesktopNavigation items={MAIN_NAVIGATION} />
          <div className="flex shrink-0 items-center gap-1.5">
            {onSearchChange ? (
              <button type="button" onClick={() => setSearchOpen((p) => !p)} aria-label="Cari" className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] text-[#111111] hover:bg-[#F7F7F7]">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
              </button>
            ) : (
              <Link href="/produk" aria-label="Katalog" className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] text-[#111111] hover:bg-[#F7F7F7]">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
              </Link>
            )}
            <button type="button" onClick={() => setMenuOpen((p) => !p)} aria-label="Menu" className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] border border-[#E5E5E5] text-[#111111] lg:hidden">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{menuOpen ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}</svg>
            </button>
          </div>
        </div>
        {searchOpen && onSearchChange && (
          <div className="border-t border-[#E5E5E5] py-3">
            <SearchInput value={searchQuery} onChange={onSearchChange} placeholder="Cari produk atau kode model..." />
          </div>
        )}
      </Container>
      <MobileNavigation isOpen={menuOpen} items={MAIN_NAVIGATION} onClose={() => setMenuOpen(false)} />
    </header>
  );
}

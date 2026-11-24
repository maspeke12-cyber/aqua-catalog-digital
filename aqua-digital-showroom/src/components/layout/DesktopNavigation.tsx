import React from 'react';
import Link from 'next/link';
import { NavItem } from '@/types/showroom';

interface DesktopNavigationProps {
  items: NavItem[];
}

export function DesktopNavigation({ items }: DesktopNavigationProps) {
  return (
    <nav aria-label="Navigasi utama" className="hidden lg:flex lg:items-center lg:gap-7">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-[#111111] transition-colors hover:text-[#0066B3]"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

import type { Metadata } from 'next';
import { HomeClient } from '@/components/home/HomeClient';

export const metadata: Metadata = {
  title: 'AQUA Digital Showroom | CLEO ELECTRONICS by TIARA — Kota Palu',
  description:
    'Katalog digital resmi perangkat elektronik AQUA di CLEO ELECTRONICS by TIARA, Jl. Dewi Sartika No.66-72, Kota Palu.',
};

export default function HomePage() {
  return <HomeClient />;
}

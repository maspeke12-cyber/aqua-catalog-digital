import React from 'react';
import type { Metadata } from 'next';
import { AdminClient } from '@/components/admin/AdminClient';

export const metadata: Metadata = {
  title: 'Admin Showroom | CLEO ELECTRONICS by TIARA',
  description: 'Panel pengelola katalog produk dan kontak resmi AQUA Elektronik di CLEO ELECTRONICS by TIARA, Kota Palu.',
};

export default function AdminPage() {
  return <AdminClient />;
}

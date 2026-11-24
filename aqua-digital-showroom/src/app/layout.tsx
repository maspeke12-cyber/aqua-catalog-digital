import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
      variable: '--font-plus-jakarta',
        display: 'swap',
        });

        export const metadata: Metadata = {
          title: 'AQUA Digital Showroom | CLEO ELECTRONICS by TIARA',
            description:
                'Katalog digital dan informasi produk AQUA Elektronik di CLEO ELECTRONIC, Jl. Dewi Sartika No.66-72, Kota Palu, Sulawesi Tengah.',
                };

                export default function RootLayout({
                  children,
                  }: Readonly<{
                    children: React.ReactNode;
                    }>) {
                      return (
                          <html lang="id" className={plusJakartaSans.variable}>
                                <body className="min-h-screen flex flex-col bg-white text-[#111111]">
                                        {children}
                                              </body>
                                                  </html>
                                                    );
                                                    }
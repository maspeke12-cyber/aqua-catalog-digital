import React from 'react';

export type BadgeVariant = 'neutral' | 'aqua' | 'dark' | 'success';

interface BadgeProps {
  children: React.ReactNode;
    variant?: BadgeVariant;
      className?: string;
      }

      const VARIANT_STYLES: Record<BadgeVariant, string> = {
        neutral: 'bg-[#EEEEEE] text-[#111111] border-[#E5E5E5]',
          aqua: 'bg-[#F0F7FC] text-[#0066B3] border-[#0066B3]/20',
            dark: 'bg-[#111111] text-white border-[#111111]',
              success: 'bg-[#168A4A]/10 text-[#168A4A] border-[#168A4A]/20',
              };

              export function Badge({
                children,
                  variant = 'neutral',
                    className = '',
                    }: BadgeProps) {
                      return (
                          <span
                                className={`inline-flex items-center rounded-[4px] border px-2.5 py-1 text-xs font-semibold tracking-wide ${VARIANT_STYLES[variant]} ${className}`}
                                    >
                                          {children}
                                              </span>
                                                );
                                                }
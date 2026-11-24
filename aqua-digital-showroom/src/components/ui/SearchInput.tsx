'use client';

import React from 'react';

interface SearchInputProps {
  value: string;
    onChange: (value: string) => void;
      placeholder?: string;
        label?: string;
          onClear?: () => void;
            className?: string;
            }

            export function SearchInput({
              value,
                onChange,
                  placeholder = 'Cari nama produk atau model...',
                    label = 'Pencarian produk',
                      onClear,
                        className = '',
                        }: SearchInputProps) {
                          return (
                              <div className={`relative flex items-center ${className}`}>
                                    <label htmlFor="showroom-search" className="sr-only">
                                            {label}
                                                  </label>
                                                        <span className="pointer-events-none absolute left-3.5 text-[#6B6B6B]">
                                                                <svg
                                                                          className="h-4 w-4"
                                                                                    viewBox="0 0 24 24"
                                                                                              fill="none"
                                                                                                        stroke="currentColor"
                                                                                                                  strokeWidth="2"
                                                                                                                            aria-hidden="true"
                                                                                                                                    >
                                                                                                                                              <circle cx="11" cy="11" r="8" />
                                                                                                                                                        <path d="m21 21-4.3-4.3" />
                                                                                                                                                                </svg>
                                                                                                                                                                      </span>
                                                                                                                                                                            <input
                                                                                                                                                                                    id="showroom-search"
                                                                                                                                                                                            type="search"
                                                                                                                                                                                                    value={value}
                                                                                                                                                                                                            onChange={(e) => onChange(e.target.value)}
                                                                                                                                                                                                                    placeholder={placeholder}
                                                                                                                                                                                                                            className="min-h-[44px] w-full rounded-[4px] border border-[#E5E5E5] bg-white pl-10 pr-10 text-sm text-[#111111] placeholder:text-[#6B6B6B] transition-colors focus:border-[#0066B3] focus:outline-none"
                                                                                                                                                                                                                                  />
                                                                                                                                                                                                                                        {value && (
                                                                                                                                                                                                                                                <button
                                                                                                                                                                                                                                                          type="button"
                                                                                                                                                                                                                                                                    onClick={() => {
                                                                                                                                                                                                                                                                                onChange('');
                                                                                                                                                                                                                                                                                            onClear?.();
                                                                                                                                                                                                                                                                                                      }}
                                                                                                                                                                                                                                                                                                                aria-label="Hapus kata kunci pencarian"
                                                                                                                                                                                                                                                                                                                          className="absolute right-2.5 rounded p-1 text-xs font-medium text-[#6B6B6B] hover:text-[#111111]"
                                                                                                                                                                                                                                                                                                                                  >
                                                                                                                                                                                                                                                                                                                                            Hapus
                                                                                                                                                                                                                                                                                                                                                    </button>
                                                                                                                                                                                                                                                                                                                                                          )}
                                                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                                                                                                                }
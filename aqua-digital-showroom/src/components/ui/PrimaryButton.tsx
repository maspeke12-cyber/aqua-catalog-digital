import React from 'react';

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'sm' | 'md' | 'lg';
      fullWidth?: boolean;
        href?: string;
        }

        const SIZE_CLASSES = {
          sm: 'min-h-[38px] px-4 text-xs',
            md: 'min-h-[44px] px-5 text-sm',
              lg: 'min-h-[50px] px-7 text-base',
              };

              export function PrimaryButton({
                children,
                  size = 'md',
                    fullWidth = false,
                      href,
                        className = '',
                          type = 'button',
                            ...props
                            }: PrimaryButtonProps) {
                              const baseClasses = `inline-flex items-center justify-center gap-2 rounded-[4px] bg-[#111111] font-semibold text-white transition-colors duration-150 hover:bg-[#0066B3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066B3] disabled:cursor-not-allowed disabled:opacity-50 ${
                                  SIZE_CLASSES[size]
                                    } ${fullWidth ? 'w-full' : ''} ${className}`;

                                      if (href) {
                                          return (
                                                <a href={href} className={baseClasses}>
                                                        {children}
                                                              </a>
                                                                  );
                                                                    }

                                                                      return (
                                                                          <button type={type} className={baseClasses} {...props}>
                                                                                {children}
                                                                                    </button>
                                                                                      );
                                                                                      }
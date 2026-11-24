import React from 'react';

interface SecondaryButtonProps
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

              export function SecondaryButton({
                children,
                  size = 'md',
                    fullWidth = false,
                      href,
                        className = '',
                          type = 'button',
                            ...props
                            }: SecondaryButtonProps) {
                              const baseClasses = `inline-flex items-center justify-center gap-2 rounded-[4px] border border-[#111111] bg-white font-semibold text-[#111111] transition-colors duration-150 hover:bg-[#F7F7F7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111] disabled:cursor-not-allowed disabled:opacity-50 ${
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
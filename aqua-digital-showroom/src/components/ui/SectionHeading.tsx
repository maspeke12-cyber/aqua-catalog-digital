import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
    title: string;
      description?: string;
        align?: 'left' | 'center';
          action?: React.ReactNode;
          }

          export function SectionHeading({
            eyebrow,
              title,
                description,
                  align = 'left',
                    action,
                    }: SectionHeadingProps) {
                      const isCenter = align === 'center';

                        return (
                            <div
                                  className={`mb-8 flex flex-col gap-4 md:mb-10 ${
                                          isCenter
                                                    ? 'items-center text-center'
                                                              : 'md:flex-row md:items-end md:justify-between'
                                                                    }`}
                                                                        >
                                                                              <div className={isCenter ? 'max-w-2xl' : 'max-w-2xl'}>
                                                                                      {eyebrow && (
                                                                                                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#0066B3]">
                                                                                                            {eyebrow}
                                                                                                                      </p>
                                                                                                                              )}
                                                                                                                                      <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#111111] sm:text-3xl lg:text-[34px] lg:leading-[1.2]">
                                                                                                                                                {title}
                                                                                                                                                        </h2>
                                                                                                                                                                {description && (
                                                                                                                                                                          <p className="mt-2.5 text-sm leading-relaxed text-[#6B6B6B] sm:text-base">
                                                                                                                                                                                      {description}
                                                                                                                                                                                                </p>
                                                                                                                                                                                                        )}
                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                    {action && <div className="shrink-0">{action}</div>}
                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                          );
                                                                                                                                                                                                                          }
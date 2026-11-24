import React from 'react';

interface LoadingSkeletonProps {
  className?: string;
  }

  export function LoadingSkeleton({ className = 'h-6 w-full' }: LoadingSkeletonProps) {
    return (
        <div
              aria-hidden="true"
                    className={`animate-pulse rounded-[4px] bg-[#EEEEEE] ${className}`}
                        />
                          );
                          }

                          export function ProductCardSkeleton() {
                            return (
                                <div className="flex flex-col rounded-[8px] border border-[#E5E5E5] bg-white p-4">
                                      <LoadingSkeleton className="aspect-[4/3] w-full rounded-[4px]" />
                                            <LoadingSkeleton className="mt-4 h-3 w-20" />
                                                  <LoadingSkeleton className="mt-2 h-5 w-4/5" />
                                                        <LoadingSkeleton className="mt-1.5 h-3.5 w-28" />
                                                              <LoadingSkeleton className="mt-5 h-[44px] w-full" />
                                                                  </div>
                                                                    );
                                                                    }
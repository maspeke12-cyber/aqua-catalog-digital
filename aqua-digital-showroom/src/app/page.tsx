import React from 'react';
import { getShowroomData } from '@/lib/showroomService';
import { HomepagePreview } from '@/components/preview/HomepagePreview';

export default async function HomePage() {
  const cmsData = await getShowroomData();
  return <HomepagePreview cmsData={cmsData} />;
}

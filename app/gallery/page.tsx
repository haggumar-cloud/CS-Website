'use client';

import LineBackground from '@/components/LineBackground';
import ScrollGrid from '@/src/components/common/ScrollGrid';
import HorizontalGallery from '@/src/app/gallery/HorizontalGallery';
import SmoothScrollProvider from '@/src/app/team/SmoothScrollProvider';

export default function Gallery() {
  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-black w-full">
        {/* Background layer */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <LineBackground />
        </div>

        {/* Content layer */}
        <div className="relative z-10 w-full">
          {/* ScrollGrid sits at the top (or provides its own scroll layout) */}
          <ScrollGrid />

          {/* HorizontalGallery follows underneath */}
          <HorizontalGallery />
        </div>
      </div>
    </SmoothScrollProvider>
  );
}

import React, { useState, useRef, useCallback } from 'react';
import { BeforeAfterItem } from '../../../types/gallery';
import { Wrench } from 'lucide-react';

export const ImageCompareSlider: React.FC<{ item: BeforeAfterItem }> = ({ item }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="p-6 rounded-3xl bg-surface border border-border/80 shadow-lg flex flex-col justify-between space-y-4">
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase bg-accent/10 text-accent border border-accent/20">
            {item.category}
          </span>
          <span className="text-xs text-text-muted">Drag handle to compare</span>
        </div>
        <h3 className="text-lg font-bold font-display text-text-primary">{item.title}</h3>
      </div>

      {/* Interactive Drag Comparison Container */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative aspect-[16/10] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-border shadow-inner"
      >
        {/* After Image (Background) */}
        <img
          src={item.afterImage}
          alt={item.afterLabel}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Before Image (Clipped Foreground) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={item.beforeImage}
            alt={item.beforeLabel}
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
          />
        </div>

        {/* Labels Overlay */}
        <div className="absolute bottom-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-md bg-red-600/80 text-white backdrop-blur-md">
          BEFORE: {item.beforeLabel}
        </div>
        <div className="absolute bottom-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-md bg-emerald-600/80 text-white backdrop-blur-md">
          AFTER: {item.afterLabel}
        </div>

        {/* Drag Handle Bar */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-accent text-white border-2 border-white shadow-glow flex items-center justify-center text-xs font-bold">
            ↔
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-text-muted pt-2 border-t border-border/50">
        <Wrench className="w-4 h-4 text-accent shrink-0" />
        <span>{item.description}</span>
      </div>
    </div>
  );
};

import React, { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselItem {
  id: number;
  url: string;
  title: string;
}

interface ThumbnailCarouselProps {
  items: CarouselItem[];
}

export default function ThumbnailCarousel({ items }: ThumbnailCarouselProps) {
  const [index, setIndex] = useState(0);
  const thumbRefs = useRef<(HTMLImageElement | null)[]>([]);

  const goTo = useCallback(
    (i: number) => {
      let next = i;
      if (next < 0) next = items.length - 1;
      if (next >= items.length) next = 0;
      setIndex(next);
    },
    [items.length]
  );

  useEffect(() => {
    const thumb = thumbRefs.current[index];
    if (thumb) {
      thumb.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    }
  }, [index]);

  if (items.length === 0) return null;

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Main slide area */}
      <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "3 / 2" }}>
        {items.map((item, i) => (
          <img
            key={item.id}
            src={item.url}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
            style={{ opacity: i === index ? 1 : 0, zIndex: i === index ? 1 : 0 }}
            draggable={false}
          />
        ))}

        {/* Previous */}
        <button
          onClick={() => goTo(index - 1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background flex items-center justify-center shadow-lg transition-all z-10 opacity-70 hover:opacity-100"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>

        {/* Next */}
        <button
          onClick={() => goTo(index + 1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background flex items-center justify-center shadow-lg transition-all z-10 opacity-70 hover:opacity-100"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>

        {/* Counter */}
        <div className="absolute bottom-3 right-3 bg-background/70 backdrop-blur text-foreground text-xs px-2 py-1 rounded-md z-10">
          {index + 1} / {items.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center mt-3">
        <div
          className="flex gap-2 overflow-x-auto py-1 px-1"
          style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}
        >
          {items.map((item, i) => (
            <img
              key={item.id}
              ref={(el) => { thumbRefs.current[i] = el; }}
              src={item.url}
              alt={item.title}
              onClick={() => setIndex(i)}
              className="w-16 h-16 object-cover rounded cursor-pointer shrink-0 transition-opacity duration-250"
              style={{ opacity: i === index ? 1 : 0.3 }}
              draggable={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselItem {
  id: number;
  url: string;
  title: string;
}

interface ThumbnailCarouselProps {
  items: CarouselItem[];
}

const FULL_WIDTH_PX = 120;
const COLLAPSED_WIDTH_PX = 35;
const GAP_PX = 2;
const MARGIN_PX = 2;

function Thumbnails({
  items,
  index,
  setIndex,
}: {
  items: CarouselItem[];
  index: number;
  setIndex: (i: number) => void;
}) {
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (thumbnailsRef.current) {
      let scrollPosition = 0;
      for (let i = 0; i < index; i++) {
        scrollPosition += COLLAPSED_WIDTH_PX + GAP_PX;
      }
      scrollPosition += MARGIN_PX;
      const containerWidth = thumbnailsRef.current.offsetWidth;
      const centerOffset = containerWidth / 2 - FULL_WIDTH_PX / 2;
      scrollPosition -= centerOffset;
      thumbnailsRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <div className="mt-3 w-full">
      <div
        ref={thumbnailsRef}
        className="flex items-center overflow-x-auto scrollbar-hide h-16"
        style={{ gap: GAP_PX, scrollbarWidth: "none" }}
      >
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            onClick={() => setIndex(i)}
            initial={false}
            animate={i === index ? "active" : "inactive"}
            variants={{
              active: {
                width: FULL_WIDTH_PX,
                marginLeft: MARGIN_PX,
                marginRight: MARGIN_PX,
              },
              inactive: {
                width: COLLAPSED_WIDTH_PX,
                marginLeft: 0,
                marginRight: 0,
              },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative shrink-0 h-full overflow-hidden rounded"
          >
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default function ThumbnailCarousel({ items }: ThumbnailCarouselProps) {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useEffect(() => {
    if (!isDragging && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;
      animate(x, targetX, {
        type: "spring",
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, x, isDragging]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col items-center">
        {/* Main Carousel */}
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden rounded-xl aspect-[16/10]"
        >
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(_e, info) => {
              setIsDragging(false);
              const containerWidth = containerRef.current?.offsetWidth || 1;
              const offset = info.offset.x;
              const velocity = info.velocity.x;

              let newIndex = index;
              if (Math.abs(velocity) > 500) {
                newIndex = velocity > 0 ? index - 1 : index + 1;
              } else if (Math.abs(offset) > containerWidth * 0.3) {
                newIndex = offset > 0 ? index - 1 : index + 1;
              }
              newIndex = Math.max(0, Math.min(items.length - 1, newIndex));
              setIndex(newIndex);
            }}
            style={{ x, display: "flex", width: `${items.length * 100}%` }}
            className="h-full cursor-grab active:cursor-grabbing"
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="relative h-full"
                style={{ width: `${100 / items.length}%` }}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>

          {/* Previous Button */}
          <button
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all z-10 ${
              index === 0
                ? "opacity-40 cursor-not-allowed bg-background/60"
                : "bg-background/80 hover:scale-110 hover:opacity-100 opacity-70"
            }`}
            disabled={index === 0}
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          {/* Next Button */}
          <button
            onClick={() => setIndex((i) => Math.min(items.length - 1, i + 1))}
            className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all z-10 ${
              index === items.length - 1
                ? "opacity-40 cursor-not-allowed bg-background/60"
                : "bg-background/80 hover:scale-110 hover:opacity-100 opacity-70"
            }`}
            disabled={index === items.length - 1}
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-3 right-3 bg-background/70 backdrop-blur text-foreground text-xs px-2 py-1 rounded-md z-10">
            {index + 1} / {items.length}
          </div>
        </div>

        <Thumbnails items={items} index={index} setIndex={setIndex} />
      </div>
    </div>
  );
}

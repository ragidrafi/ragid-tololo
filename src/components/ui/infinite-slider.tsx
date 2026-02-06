'use client';
import { cn } from '@/lib/utils';
import { useRef, useEffect, useState, useCallback } from 'react';
import useMeasure from 'react-use-measure';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [ref, { width, height }] = useMeasure();
  const innerRef = useRef<HTMLDivElement>(null);
  const [animDuration, setAnimDuration] = useState(duration);

  const size = direction === 'horizontal' ? width : height;
  const contentSize = size + gap;

  // Inject a dynamic @keyframes rule
  const [stylesheetId] = useState(() => `inf-slider-${Math.random().toString(36).slice(2, 8)}`);

  useEffect(() => {
    if (contentSize <= gap) return; // not measured yet

    const keyframeName = `slide-${stylesheetId}`;
    const fromVal = reverse ? -contentSize : 0;
    const toVal = reverse ? 0 : -contentSize;
    const prop = direction === 'horizontal' ? 'translateX' : 'translateY';

    const css = `@keyframes ${keyframeName} { from { transform: ${prop}(${fromVal}px); } to { transform: ${prop}(${toVal}px); } }`;

    let style = document.getElementById(stylesheetId) as HTMLStyleElement | null;
    if (!style) {
      style = document.createElement('style');
      style.id = stylesheetId;
      document.head.appendChild(style);
    }
    style.textContent = css;

    if (innerRef.current) {
      innerRef.current.style.animation = 'none';
      // Force reflow
      void innerRef.current.offsetHeight;
      innerRef.current.style.animation = `${keyframeName} ${animDuration}s linear infinite`;
    }

    return () => {
      // Don't remove stylesheet on cleanup to avoid flicker during re-renders
    };
  }, [contentSize, gap, reverse, direction, stylesheetId, animDuration]);

  // Cleanup stylesheet on unmount
  useEffect(() => {
    return () => {
      const style = document.getElementById(stylesheetId);
      if (style) style.remove();
    };
  }, [stylesheetId]);

  const handleMouseEnter = useCallback(() => {
    if (durationOnHover) setAnimDuration(durationOnHover);
  }, [durationOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (durationOnHover) setAnimDuration(duration);
  }, [durationOnHover, duration]);

  const gapStyle = { gap: `${gap}px` };
  const childContainerClass = 'flex shrink-0';
  const childContainerStyle = direction === 'horizontal'
    ? gapStyle
    : { ...gapStyle, flexDirection: 'column' as const };

  return (
    <div
      className={cn('overflow-hidden', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={innerRef}
        className="flex w-max"
        style={direction === 'horizontal' ? gapStyle : { ...gapStyle, flexDirection: 'column' }}
      >
        <div ref={ref} className={childContainerClass} style={childContainerStyle}>
          {children}
        </div>
        <div className={childContainerClass} style={childContainerStyle}>
          {children}
        </div>
        <div className={childContainerClass} style={childContainerStyle}>
          {children}
        </div>
      </div>
    </div>
  );
}

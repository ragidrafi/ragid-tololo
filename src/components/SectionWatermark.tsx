interface WatermarkProps {
  text: string;
  opacity?: number;
}

const SectionWatermark = ({ text, opacity }: WatermarkProps) => {
  const opacityClass = opacity
    ? undefined
    : "text-foreground/[0.08]";

  return (
    <>
      {/* Desktop watermark acting as section title */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-16 flex justify-center overflow-hidden select-none z-0 hidden md:flex"
      >
        <span
          className={`text-[180px] lg:text-[220px] xl:text-[250px] font-black whitespace-nowrap leading-none ${opacityClass ?? ""}`}
          style={opacity ? { color: `hsl(var(--foreground) / ${opacity})` } : undefined}
        >
          {text}
        </span>
      </div>
      {/* Mobile fallback title */}
      <h2 className="md:hidden text-3xl font-bold text-secondary mb-2 relative z-10">{text}</h2>
      <div className="md:hidden green-line mb-10 relative z-10" />
    </>
  );
};

export default SectionWatermark;

interface WatermarkProps {
  text: string;
}

const SectionWatermark = ({ text }: WatermarkProps) => (
  <>
    {/* Desktop watermark acting as section title */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 flex justify-center overflow-hidden select-none z-0 hidden md:flex"
    >
      <span className="text-[180px] lg:text-[220px] xl:text-[250px] font-black text-foreground/[0.08] whitespace-nowrap leading-none mb-8">
        {text}
      </span>
    </div>
    {/* Spacer to push content below watermark */}
    <div className="hidden md:block h-16" />
    {/* Mobile fallback title */}
    <h2 className="md:hidden text-3xl font-bold text-secondary mb-2 relative z-10">{text}</h2>
    <div className="md:hidden green-line mb-10 relative z-10" />
  </>
);

export default SectionWatermark;

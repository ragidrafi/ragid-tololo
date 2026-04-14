interface WatermarkProps {
  text: string;
}

const SectionWatermark = ({ text }: WatermarkProps) => (
  <>
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 flex justify-center overflow-hidden select-none z-0"
    >
      <span className="text-[50px] sm:text-[80px] md:text-[180px] lg:text-[220px] xl:text-[250px] font-black text-foreground/[0.08] whitespace-nowrap leading-none mb-8">
        {text}
      </span>
    </div>
    {/* Spacer to push content below watermark */}
    <div className="h-10 md:h-16" />
  </>
);

export default SectionWatermark;

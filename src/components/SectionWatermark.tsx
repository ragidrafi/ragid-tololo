interface WatermarkProps {
  text: string;
}

const SectionWatermark = ({ text }: WatermarkProps) => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none z-0 hidden md:flex"
  >
    <span className="text-[180px] lg:text-[220px] xl:text-[250px] font-black text-foreground/[0.03] whitespace-nowrap leading-none">
      {text}
    </span>
  </div>
);

export default SectionWatermark;


export default function SectionDivider() {
  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2">
      <div className="h-px bg-[#d9d9d9]" />

      <div className="pointer-events-none absolute inset-0 mx-auto max-w-[1220px]">
        <span className="absolute -top-[12px] left-0 flex h-[22px] w-[22px] items-center justify-center bg-[#f5f5f5] text-[22px] font-light leading-none text-[#c9c9c9]">
          +
        </span>

        <span className="absolute -top-[12px] right-0 flex h-[22px] w-[22px] items-center justify-center bg-[#f5f5f5] text-[22px] font-light leading-none text-[#c9c9c9]">
          +
        </span>
      </div>
    </div>
  );
}

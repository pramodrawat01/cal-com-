
const brands = [
  {
    name: "coinbase",
    className: "text-[27px] font-bold tracking-[-1.2px]",
  },
  {
    name: "storyblok",
    className: "text-[23px] font-bold tracking-[-1px]",
  },
  {
    name: "AngelList",
    className: "text-[22px] font-medium tracking-[-1px]",
  },
  {
    name: "Raycast",
    className: "text-[23px] font-bold tracking-[-1px]",
  },
  {
    name: "▲ Vercel",
    className: "text-[25px] font-bold tracking-[-1px]",
  },
  {
    name: " supabase",
    className: "text-[22px] font-bold tracking-[-1px]",
  },
  {
    name: "Üdemy",
    className: "text-[27px] font-extrabold tracking-[-1.5px]",
  },
  {
    name: "Rho",
    className: "font-serif text-[38px] font-bold tracking-[-2px]",
  },
  {
    name: "deel.",
    className: "text-[30px] font-bold tracking-[-1.5px]",
  },
  {
    name: "◢ Framer",
    className: "text-[19px] font-bold tracking-[-0.8px]",
  },
  {
    name: "ramp",
    className: "text-[28px] font-bold tracking-[-1.5px]",
  },
  {
    name: "◉ Plaid",
    className: "text-[25px] font-semibold tracking-[-1px]",
  },
];

function BrandSet({ copy }) {
  return (
    <div
      className="flex w-max shrink-0 items-center gap-10 pr-10 sm:gap-12 sm:pr-12 lg:gap-14 lg:pr-14"
      aria-hidden={copy === 1 ? "true" : undefined}
    >
      {brands.map((brand, index) => (
        <span
          key={`${copy}-${brand.name}-${index}`}
          className={`shrink-0 whitespace-nowrap text-[#292929] ${brand.className}`}
        >
          {brand.name}
        </span>
      ))}
    </div>
  );
}

export default function BrandCarousel() {
  return (
    <section className="flex flex-col gap-6 px-6 py-6 sm:gap-8 sm:py-6 md:flex-row md:items-center md:justify-between lg:px-12">
      {/* Fixed description */}
      <p className="w-full max-w-[230px] shrink-0 text-sm leading-relaxed text-[#858585]">
        Trusted by fast-growing companies around the world
      </p>

      {/* Infinite marquee */}
     
{/* Infinite marquee */}
<div
  className="group/marquee relative min-w-0 flex-1 overflow-hidden"
  aria-label="Companies using Cal.com"
>
  {/* Left fade */}
  <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#f5f5f5] to-transparent sm:w-16" />

  {/* Scrolling logos */}
  <div className="brand-marquee-track flex w-max items-center group-hover/marquee:[animation-play-state:paused]">
    <BrandSet copy={0} />
    <BrandSet copy={1} />
  </div>

  {/* Right fade */}
  <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#f5f5f5] to-transparent sm:w-16" />
</div>

    </section>
  );
}

import { ChevronRight } from "lucide-react";
import Button from "../ui/Button";

const awards = [
  { type: "award", title: "Product of the day", rank: "1st" },
  { type: "award", title: "Product of the week", rank: "1st" },
  { type: "award", title: "Product of the month", rank: "1st" },
  { type: "review", color: "#F5A623", platform: "P" },
  { type: "review", color: "#F4B400", platform: "G" },
  { type: "review", color: "#FF4D35", platform: "✺" },
];

function Laurel({ flip = false }) {
  return (
    <div
      aria-hidden="true"
      className={`flex h-11 w-6 shrink-0 items-center justify-center ${
        flip ? "-scale-x-100" : ""
      }`}
    >
      <svg
        viewBox="0 0 28 52"
        className="h-full w-full"
        fill="currentColor"
      >
        <path
          d="M23 48C10 40 3 25 5 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {[
          "M5 10 Q0 6 2 2 Q7 4 5 10Z",
          "M7 17 Q1 15 1 10 Q7 11 7 17Z",
          "M10 24 Q4 23 3 18 Q9 18 10 24Z",
          "M13 31 Q7 31 6 26 Q12 25 13 31Z",
          "M17 37 Q11 38 10 33 Q16 31 17 37Z",
          "M21 42 Q15 44 14 39 Q19 37 21 42Z",
          "M24 47 Q18 49 17 44 Q22 42 24 47Z",
        ].map((path, index) => (
          <path key={index} d={path} />
        ))}
      </svg>
    </div>
  );
}

function AwardBadge({ item }) {
  if (item.type === "award") {
    return (
      <div className="flex shrink-0 items-center justify-center gap-1 text-[#455781]">
        <Laurel />

        <div className="min-w-[105px] text-center leading-tight">
          <p className="whitespace-nowrap text-[10px] font-bold sm:text-[11px]">
            {item.title}
          </p>
          <p className="mt-0.5 text-xl font-bold">{item.rank}</p>
        </div>

        <Laurel flip />
      </div>
    );
  }

  return (
    <div className="flex min-w-[88px] shrink-0 flex-col items-start gap-1.5">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            viewBox="0 0 24 24"
            className="h-[17px] w-[17px] sm:h-[18px] sm:w-[18px]"
            fill={item.color}
            aria-hidden="true"
          >
            <path d="M12 2.5 14.9 8.4 21.4 9.3 16.7 13.9 17.8 20.5 12 17.4 6.2 20.5 7.3 13.9 2.6 9.3 9.1 8.4Z" />
          </svg>
        ))}
      </div>

      <span
        className="flex h-[22px] w-[22px] items-center justify-center rounded-full text-sm font-bold text-white"
        style={{ backgroundColor: item.color }}
      >
        {item.platform}
      </span>
    </div>
  );
}

function BackgroundGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Same rounded tiles, borders, and shadows as the previous component */}
      <div
        className="absolute inset-[-55px]"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 164px)",
          gridAutoRows: "80px",
          gap: "16px",
          transform: "translate(-8px, -8px)",
          maskImage:
            "radial-gradient(ellipse 78% 100% at center, black 20%, transparent 52%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 78% 100% at center, black 20%, transparent 52%, transparent 100%)",
        }}
      >
        {Array.from({ length: 100 }).map((_, index) => (
          <div
            key={index}
            className="rounded-[22px] border border-[#eeeeee]"
            style={{
              background: "rgba(255, 255, 255, 0.35)",
              boxShadow:
                "0 3px 8px rgba(0, 0, 0, 0.09), inset 0 1px 2px rgba(255, 255, 255, 0.8)",
            }}
          />
        ))}
      </div>

      {/* Soft fade toward the edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 78% 95% at center, transparent 25%, rgba(255,255,255,0.45) 68%, white 100%)",
        }}
      />
    </div>
  );
}

export default function SchedulingCTA() {
  return (
    <section className="relative border-y border-[#dedede] bg-[#f4f4f5] px-3 py-5 sm:px-4 sm:py-6">
      <div className="relative isolate flex min-h-[340px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#e0e0e0] bg-white px-4 py-12 shadow-[0_3px_8px_rgba(0,0,0,0.07)] sm:min-h-[390px] sm:px-8 sm:py-14 lg:min-h-[455px]">
        <BackgroundGrid />

        <div className="relative z-10 flex w-full flex-col items-center">
          <h2 className="max-w-5xl text-center text-3xl font-bold leading-[1.12] tracking-[-0.055em] text-[#242424] sm:text-4xl md:text-5xl lg:text-[58px]">
            Smarter, simpler scheduling
          </h2>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8">
            <Button to="/signup" variant="dark">
              Get started
              <ChevronRight className="ml-2 inline" size={17} />
            </Button>

            <Button to="/contact" variant="light">
              Talk to sales
              <ChevronRight className="ml-2 inline" size={17} />
            </Button>
          </div>

          <div className="mt-9 flex max-w-full flex-wrap items-center justify-center gap-x-4 gap-y-5 sm:mt-12 sm:gap-x-6 lg:gap-x-7">
            {awards.map((item, index) => (
              <AwardBadge
                key={`${item.title || item.platform}-${index}`}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
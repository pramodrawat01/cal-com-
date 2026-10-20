
import { ShieldCheck } from "lucide-react";
import Button from "../ui/Button";

function BackgroundGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
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

export default function ComplianceCTA() {
  return (
    <section className="relative bg-[#f4f4f5] px-3 py-6 sm:px-5">
      <div className="relative isolate flex min-h-[420px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#e0e0e0] bg-white px-5 py-6 shadow-[0_3px_8px_rgba(0,0,0,0.07)] sm:min-h-[480px] sm:px-8 lg:min-h-[530px]">
        <BackgroundGrid />

        <div className="relative z-10 flex w-full flex-col items-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e7e7e7] bg-white/90 px-3 py-1.5 text-sm shadow-sm">
            <ShieldCheck size={15} strokeWidth={1.8} />
            Compliance
          </span>

          <h2 className="mt-5 max-w-[780px] text-center text-3xl font-bold leading-[1.12] tracking-[-0.055em] text-[#242424] sm:text-4xl md:text-5xl lg:text-[54px]">
            Simplify scheduling.
            <br className="hidden sm:block" /> Strengthen compliance.
          </h2>

          <p className="mx-auto mt-5 max-w-[700px] text-center text-base leading-relaxed text-[#858585] sm:text-lg">
            Cal.com brings modern scheduling to regulated teams
            <br className="hidden sm:block" /> with SOC 2, HIPAA, and total
            admin control, all in one place.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button to="/contact" variant="dark">
              Talk to sales
            </Button>

            <Button to="/signup" variant="light">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

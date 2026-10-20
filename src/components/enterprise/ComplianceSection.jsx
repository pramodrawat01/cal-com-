
import { LockKeyhole, ShieldCheck } from "lucide-react";
import Button from "../ui/Button";

const certifications = [
  { name: "AICPA SOC 2", style: "soc" },
  { name: "CCPA", style: "ccpa" },
  { name: "HIPAA", style: "hipaa" },
  { name: "ISO 27001", style: "iso" },
  { name: "GDPR", style: "gdpr" },
];

function CertificationBadge({ name, style }) {
  const styles = {
    soc: "rounded-full border-2 border-sky-500 text-sky-700",
    ccpa: "rounded-full border-2 border-[#425c79] text-[#425c79]",
    hipaa: "rounded-lg text-[#23556b]",
    iso: "rounded-full border-2 border-blue-600 text-blue-700",
    gdpr: "rounded-full border-2 border-indigo-600 bg-indigo-950 text-yellow-300",
  };

  return (
    <div
      title={name}
      className={`flex h-11 w-11 shrink-0 items-center justify-center text-center ${styles[style]}`}
    >
      {style === "hipaa" ? (
        <div className="text-[8px] font-bold leading-tight">
          <span className="block text-xl leading-5">⚕</span>
          HIPAA
        </div>
      ) : style === "iso" ? (
        <div className="text-[9px] font-extrabold leading-tight">
          ISO
          <span className="block text-[7px]">27001</span>
        </div>
      ) : style === "gdpr" ? (
        <div className="text-[8px] font-bold leading-tight">
          ✦ GDPR ✦
        </div>
      ) : style === "ccpa" ? (
        <div className="text-[9px] font-extrabold leading-tight">
          CCPA
          <span className="block text-[7px]">CERTIFIED</span>
        </div>
      ) : (
        <div className="text-[8px] font-extrabold leading-tight">
          AICPA
          <span className="block">SOC 2</span>
        </div>
      )}
    </div>
  );
}

function SecurityIllustration() {
  return (
    <div className="relative flex min-h-[360px] w-full items-center justify-center overflow-hidden rounded-2xl border border-[#e2e2e2] bg-white shadow-[0_3px_8px_rgba(0,0,0,0.07)] sm:min-h-[440px] lg:min-h-[500px]">
      {/* Subtle dotted grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #cbd0d8 1px, transparent 1.4px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse at center, black 25%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 25%, transparent 85%)",
        }}
      />

      {/* Fine grid lines */}
      <div className="pointer-events-none absolute inset-x-[10%] top-[15%] h-px bg-gradient-to-r from-transparent via-[#e5e7eb] to-transparent" />
      <div className="pointer-events-none absolute inset-x-[10%] bottom-[35%] h-px bg-gradient-to-r from-transparent via-[#e5e7eb] to-transparent" />
      <div className="pointer-events-none absolute inset-y-[8%] left-1/3 w-px bg-gradient-to-b from-transparent via-[#e5e7eb] to-transparent" />
      <div className="pointer-events-none absolute inset-y-[8%] right-1/3 w-px bg-gradient-to-b from-transparent via-[#e5e7eb] to-transparent" />

      {/* Central shield */}
      <div className="relative z-10 -translate-y-5">
        <div className="flex h-[180px] w-[180px] items-center justify-center rounded-xl border-2 border-[#e4e5e9] bg-gradient-to-br from-white via-[#fafafa] to-[#f2f3f5] shadow-[0_3px_10px_rgba(0,0,0,0.04)] sm:h-[200px] sm:w-[200px]">
          <span className="absolute left-3 top-3 h-2.5 w-2.5 rounded-full border border-[#d1d3d8] bg-gradient-to-br from-white to-[#c5c8ce] shadow-sm" />
          <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full border border-[#d1d3d8] bg-gradient-to-br from-white to-[#c5c8ce] shadow-sm" />
          <span className="absolute bottom-3 left-3 h-2.5 w-2.5 rounded-full border border-[#d1d3d8] bg-gradient-to-br from-white to-[#c5c8ce] shadow-sm" />
          <span className="absolute bottom-3 right-3 h-2.5 w-2.5 rounded-full border border-[#d1d3d8] bg-gradient-to-br from-white to-[#c5c8ce] shadow-sm" />

          <div className="relative flex h-[140px] w-[140px] items-center justify-center rounded-full bg-gradient-to-b from-[#f1f2f4] to-white sm:h-[160px] sm:w-[160px]">
            <ShieldCheck
              size={118}
              strokeWidth={1.15}
              className="text-[#e1e3e7] drop-shadow-[0_2px_1px_rgba(0,0,0,0.06)] sm:h-[132px] sm:w-[132px]"
              fill="#fafafa"
            />
          </div>
        </div>
      </div>

      {/* Certification panel */}
      <div className="absolute bottom-[10%] left-1/2 z-20 flex w-max max-w-[92%] -translate-x-1/2 items-center justify-center gap-2 rounded-2xl border border-[#e2e2e2] bg-white/95 px-3 py-3 shadow-[0_2px_6px_rgba(0,0,0,0.03)] sm:gap-3 sm:px-4 sm:py-4">
        {certifications.map((certification) => (
          <CertificationBadge
            key={certification.name}
            name={certification.name}
            style={certification.style}
          />
        ))}
      </div>
    </div>
  );
}

export default function ComplianceSection() {
  return (
    <section className=" bg-[#f4f4f5] px-3 py-6 sm:px-5 lg:px-3">
      <div className="mx-auto grid min-h-[520px] max-w-[1480px] items-center gap-10 rounded-2xl border border-[#e1e1e1] bg-white px-6 py-10 shadow-[0_3px_8px_rgba(0,0,0,0.07)] sm:px-10 sm:py-14 lg:min-h-[620px] lg:grid-cols-[1fr_1fr] lg:gap-14 lg:px-[5%]">
        {/* Left content */}
        <div className="mx-auto w-full max-w-[570px] lg:mx-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e6e6e6] bg-white px-3 py-1.5 text-sm shadow-sm">
            <LockKeyhole size={15} />
            Compliance
          </span>

          <h2 className="mt-5 text-[clamp(2.2rem,4vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.06em] text-[#252525]">
            Information security with every booking
          </h2>

          <p className="mt-5 max-w-[550px] text-base leading-[1.65] text-[#858585] sm:text-lg">
            Your scheduling system shouldn’t be the weakest link in your
            compliance stack. Cal.com’s privacy-by-design architecture gives
            you the confidence of HIPAA, SOC 2 Type II, ISO 27001, CCPA, and
            GDPR compliance, without sacrificing usability.
          </p>

          <div className="mt-6 flex flex-wrap gap-3.5">
            <Button to="/contact" variant="dark">
              Talk to sales
            </Button>

            <Button to="/signup" variant="light">
              Get started
            </Button>
          </div>
        </div>

        {/* Right security illustration */}
        <div className="mx-auto w-full max-w-[660px] lg:justify-self-end">
          <SecurityIllustration />
        </div>
      </div>
    </section>
  );
}

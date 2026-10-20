
import {
  ListChecks,
  Megaphone,
  Hospital,
  HeartHandshake,
  Scale,
  Handshake,
  GraduationCap,
  Users,
  Headset,
} from "lucide-react";
import Button from "../ui/Button";

const useCases = [
  { title: "Sales & Marketing", icon: Megaphone },
  { title: "Healthcare & Wellness", icon: Hospital },
  { title: "Recruiting & HR", icon: HeartHandshake },
  { title: "Professional Services", icon: Scale },
  { title: "Customer success", icon: Handshake },
  { title: "Higher education", icon: GraduationCap },
  { title: "C-suite", icon: Users },
  { title: "Support", icon: Headset },
];

function UseCaseCard({ title, icon: Icon }) {
  return (
    <a
      href="/contact"
      className="group flex min-h-[145px] flex-col items-center justify-center gap-4 rounded-[20px] border border-[#e2e2e2] bg-[#fdfdfd] px-3 py-6 shadow-[0_3px_7px_rgba(0,0,0,0.055)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cfcfcf] hover:bg-white hover:shadow-[0_8px_20px_rgba(0,0,0,0.07)] sm:min-h-[158px]"
    >
      <span className="relative flex h-[56px] w-[56px] items-center justify-center rounded-xl border border-[#dedede] bg-gradient-to-b from-white to-[#ededed] text-[#898989] shadow-inner transition-transform duration-300 group-hover:scale-105">
        {/* Small corner details from the reference */}
        <span className="absolute left-1 top-1 h-1 w-1 rounded-full bg-[#d5d5d5]" />
        <span className="absolute right-1 top-1 h-1 w-1 rounded-full bg-[#d5d5d5]" />
        <span className="absolute bottom-1 left-1 h-1 w-1 rounded-full bg-[#d5d5d5]" />
        <span className="absolute bottom-1 right-1 h-1 w-1 rounded-full bg-[#d5d5d5]" />

        <Icon size={27} strokeWidth={1.9} />
      </span>

      <h3 className="text-center text-base font-semibold tracking-[-0.025em] text-[#202020] sm:text-lg">
        {title}
      </h3>
    </a>
  );
}

export default function UseCasesSection() {
  return (
    <section className="relative  bg-[#f4f4f5] px-3 py-6 sm:px-5 lg:px-3">
      
      <div className="relative mx-auto max-w-[1370px] rounded-2xl border border-[#e1e1e1] bg-white px-5 py-14 shadow-[0_3px_8px_rgba(0,0,0,0.06)] sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        {/* Heading */}
        <div className="mx-auto max-w-[960px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e7e7e7] bg-white px-3 py-1.5 text-sm shadow-sm">
            <ListChecks size={15} strokeWidth={1.8} />
            Use cases
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-[-0.055em] text-[#242424] sm:text-4xl md:text-5xl lg:text-[52px]">
            Proven across teams &amp; industries who
            <br className="hidden md:block" /> can't afford downtime
          </h2>

          <p className="mx-auto mt-5 max-w-[800px] text-base leading-relaxed text-[#858585] sm:text-lg">
            Cal.com is compliant with a wide range of industries, including
            healthcare, sales, service, and SaaS, ensuring secure and compliant
            scheduling for diverse use cases.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button to="/contact" variant="dark">
              Talk to sales
            </Button>

            <Button to="/signup" variant="light">
              Get started
            </Button>
          </div>
        </div>

        {/* Use case cards */}
        <div className="mx-auto mt-12 grid max-w-[1220px] grid-cols-1 gap-3.5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-3.5">
          {useCases.map((item) => (
            <UseCaseCard
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

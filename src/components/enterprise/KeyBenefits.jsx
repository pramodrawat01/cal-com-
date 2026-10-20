
import {
  Sparkles,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  ArrowLeftRight,
  Zap,
} from "lucide-react";
import Button from "../ui/Button";

const benefits = [
  {
    number: "01",
    title: "Create unlimited sub-teams",
    description:
      "Easily organize your teams by creating a parent team and adding unlimited sub-teams, ensuring seamless management and collaboration across your organization.",
    type: "teams",
  },
  {
    number: "02",
    title: "Insights dashboard to analyze bookings",
    description:
      "The Insights dashboard provides a clear overview of booking data, helping you spot opportunities and top performers with ease.",
    type: "insights",
  },
  {
    number: "03",
    title: "99.9% SLA",
    description:
      "Enjoy guaranteed 99.9% uptime (with an option for 99.99%) with our Service Level Agreement, ensuring your scheduling remains uninterrupted and reliable.",
    type: "sla",
  },
  {
    number: "04",
    title: "Slack Connect for even faster support",
    description:
      "We offer Slack Connect support, allowing direct and rapid communication with our team for quicker resolutions and personalized assistance.",
    type: "integration",
  },
];

function TeamPreview() {
  const teams = [
    {
      name: "Marketing",
      url: "deel.cal.com/marketing",
      members: "16 members",
      icon: "◉",
      color: "text-red-500",
    },
    {
      name: "Sales",
      url: "deel.cal.com/sales",
      members: "32 members",
      icon: "🚀",
      color: "",
    },
    {
      name: "Engineering",
      url: "deel.cal.com/engineering",
      members: "42 members",
      icon: "⚙",
      color: "text-gray-500",
    },
    {
      name: "Product",
      url: "deel.cal.com/product",
      members: "24 members",
      icon: "✨",
      color: "",
    },
  ];

  return (
    <div className="relative flex h-full min-h-[230px] items-center justify-center overflow-hidden rounded-xl border border-[#e1e1e1] bg-[#f7f7f7] p-5 sm:min-h-[260px]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#eaeaea_1px,transparent_1px),linear-gradient(to_bottom,#eaeaea_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />

      <div className="relative w-full max-w-[390px] space-y-1">
        {teams.map((team, index) => (
          <div
            key={team.name}
            className={`relative flex items-center gap-3 rounded-xl border border-[#e5e5e5] bg-white px-3 py-3 shadow-[0_2px_5px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-1 ${
              index === 0
                ? "z-10 ml-0"
                : index === 1
                  ? "z-[9] ml-5"
                  : index === 2
                    ? "z-[8] ml-10"
                    : "z-[7] ml-[60px]"
            }`}
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#ededed] bg-[#fafafa] text-base">
              <span className={team.color}>{team.icon}</span>
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-2">
                <span className="text-xs font-semibold text-[#242424] sm:text-sm">
                  {team.name}
                </span>
                <span className="text-[10px] text-[#858585] sm:text-xs">
                  {team.url}
                </span>
              </div>
              <p className="mt-1 text-[11px] text-[#858585]">
                {team.members}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InsightsPreview() {
  const stats = [
    { label: "Events created", value: "1888", change: "16.7%" },
    { label: "Events completed", value: "1802", change: "15.7%" },
    { label: "Events rescheduled", value: "200", change: "8.7%" },
  ];

  const points = [
    20, 28, 25, 36, 30, 44, 38, 53, 45, 60, 50, 69, 63, 78, 68, 86, 73,
    95, 84, 76, 89, 68, 79, 58, 69, 48, 55, 39, 48, 30, 40, 25,
  ];

  return (
    <div className="relative h-full min-h-[230px] overflow-hidden rounded-xl border border-[#e1e1e1] bg-[#f7f7f7] p-3 sm:min-h-[260px] sm:p-5">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#eaeaea_1px,transparent_1px),linear-gradient(to_bottom,#eaeaea_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />

      <div className="relative mx-auto h-full max-w-[480px] overflow-hidden rounded-xl border border-[#e4e4e4] bg-white p-3 shadow-sm sm:p-4">
        <h4 className="text-sm font-semibold text-[#252525]">Insights</h4>
        <p className="mt-1 text-[10px] text-[#858585]">
          View booking insights across your events
        </p>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="min-w-0 rounded-lg border border-[#e8e8e8] bg-white p-2 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
            >
              <p className="truncate text-[9px] text-[#666] sm:text-[10px]">
                {stat.label}
              </p>
              <p className="mt-1 text-base font-bold text-[#222] sm:text-xl">
                {stat.value}
              </p>
              <p className="mt-1 flex items-center gap-0.5 text-[8px] text-[#737373] sm:text-[9px]">
                <TrendingUp size={10} className="text-emerald-600" />
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-lg border border-[#e8e8e8] p-3">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-semibold text-[#333]">
              Event trends
            </p>
            <span className="text-[9px] text-[#858585]">Last 30 days</span>
          </div>

          <div className="relative mt-3 h-[90px] overflow-hidden">
            <div className="absolute inset-0 flex flex-col justify-between">
              {[0, 1, 2, 3].map((line) => (
                <div
                  key={line}
                  className="border-t border-dashed border-[#ededed]"
                />
              ))}
            </div>

            <svg
              viewBox="0 0 320 100"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
              fill="none"
            >
              <defs>
                <linearGradient id="insightsFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#69717e" stopOpacity=".2" />
                  <stop offset="100%" stopColor="#69717e" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d={`M ${points.map((value, index) => `${(index / (points.length - 1)) * 320},${100 - value}`).join(" L ")} L 320 100 L 0 100 Z`}
                fill="url(#insightsFill)"
              />
              <path
                d={`M ${points.map((value, index) => `${(index / (points.length - 1)) * 320},${100 - value}`).join(" L ")}`}
                stroke="#58616d"
                strokeWidth="2.5"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SLAPreview() {
  const services = ["App", "Website", "API"];

  return (
    <div className="relative flex min-h-[230px] items-center justify-center overflow-hidden rounded-xl border border-[#e1e1e1] bg-[#f7f7f7] p-5 sm:min-h-[260px]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#eaeaea_1px,transparent_1px),linear-gradient(to_bottom,#eaeaea_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />

      <div className="relative w-full max-w-[320px] rounded-xl border border-[#e0e0e0] bg-white p-4 shadow-sm">
        <div className="mb-5 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f5f5f5]">
            <Zap size={16} className="text-[#a1a1a1]" />
          </div>
          <span className="text-[11px] font-semibold text-[#252525]">
            All systems operational
          </span>
          <span className="ml-auto h-2 w-2 rounded-full bg-emerald-500" />
        </div>

        <div className="space-y-4">
          {services.map((service) => (
            <div key={service}>
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-[10px] font-medium text-[#444]">
                  {service}
                </span>
                <span className="text-[10px] font-semibold text-[#444]">
                  99.9%
                </span>
              </div>

              <div className="h-4 overflow-hidden rounded-md bg-[#e9e9e9] p-[1px]">
                <div className="relative h-full w-[99.9%] overflow-hidden rounded-[5px] bg-emerald-500">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent,transparent_3px,rgba(255,255,255,0.18)_3px,rgba(255,255,255,0.18)_5px)]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function IntegrationPreview() {
  return (
    <div className="relative flex min-h-[230px] items-center justify-center overflow-hidden rounded-xl border border-[#e1e1e1] bg-[#f7f7f7] p-5 sm:min-h-[260px]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#eaeaea_1px,transparent_1px),linear-gradient(to_bottom,#eaeaea_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />

      <div className="relative flex w-full max-w-[360px] items-center justify-center gap-2 sm:gap-3">
        <div className="flex h-[135px] min-w-0 flex-1 items-center justify-center rounded-xl border border-[#e2e2e2] bg-white shadow-[0_2px_5px_rgba(0,0,0,0.04)] sm:h-[165px]">
          <div className="grid h-16 w-16 grid-cols-3 grid-rows-3 gap-1 sm:h-[78px] sm:w-[78px] sm:gap-1.5">
            <span className="col-span-2 rounded-tl-2xl rounded-tr-2xl bg-[#36c5f0]" />
            <span className="row-span-2 rounded-tr-2xl bg-[#2eb67d]" />
            <span className="rounded-bl-2xl bg-[#e01e5a]" />
            <span className="rounded-br-2xl bg-[#ecb22e]" />
            <span className="rounded-bl-2xl bg-[#36c5f0]" />
            <span className="rounded-br-2xl bg-[#2eb67d]" />
          </div>
        </div>

        <div className="z-10 -mx-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e4e4e4] bg-white shadow-sm sm:-mx-5">
          <ArrowLeftRight size={16} className="text-[#222]" />
        </div>

        <div className="flex h-[135px] min-w-0 flex-1 items-center justify-center rounded-xl border border-[#e2e2e2] bg-white shadow-[0_2px_5px_rgba(0,0,0,0.04)] sm:h-[165px]">
          <span className="text-[52px] font-semibold tracking-[-0.09em] text-[#252525] sm:text-[66px]">
            Cal
          </span>
        </div>
      </div>
    </div>
  );
}

function BenefitVisual({ type }) {
  switch (type) {
    case "teams":
      return <TeamPreview />;
    case "insights":
      return <InsightsPreview />;
    case "sla":
      return <SLAPreview />;
    case "integration":
      return <IntegrationPreview />;
    default:
      return null;
  }
}

function BenefitCard({ benefit }) {
  return (
    <article className="group flex min-w-0 flex-col rounded-[20px] border border-[#e2e2e2] bg-white p-5 shadow-[0_3px_7px_rgba(0,0,0,0.055)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_22px_rgba(0,0,0,0.07)] sm:p-6">
      <span className="mb-4 flex h-8 w-9 items-center justify-center rounded-lg bg-[#e7e9ed] font-mono text-sm font-medium text-[#596579]">
        {benefit.number}
      </span>

      <h3 className="text-lg font-semibold tracking-[-0.025em] text-[#252525] sm:text-xl">
        {benefit.title}
      </h3>

      <p className="mt-2 min-h-[76px] text-sm leading-[1.65] text-[#858585] sm:text-base">
        {benefit.description}
      </p>

      <div className="mt-6 flex-1">
        <BenefitVisual type={benefit.type} />
      </div>
    </article>
  );
}

export default function KeyBenefits() {
  return (
    <section className="relative  bg-[#f4f4f5] px-4 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
      {/* Page guide lines */}
      {/* <div className="pointer-events-none absolute inset-y-0 left-[9.5%] hidden border-l border-[#e1e1e1] lg:block" />
      <div className="pointer-events-none absolute inset-y-0 right-[9.5%] hidden border-l border-[#e1e1e1] lg:block" /> */}

      <div className="relative mx-auto max-w-[1160px]">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-[900px] text-center sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e7e7e7] bg-white px-3 py-1.5 text-sm shadow-sm">
            <Sparkles size={14} />
            Key benefits
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-[-0.055em] text-[#242424] sm:text-4xl md:text-5xl lg:text-[52px]">
            Get more meetings. Close more deals.
            <br className="hidden md:block" /> Make more money.
          </h2>

          <p className="mx-auto mt-5 max-w-[700px] text-base leading-relaxed text-[#858585] sm:text-lg">
            Unlock enterprise success with streamlined booking process,
            actionable meeting insights, and effortless team coordination.
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

        {/* Benefit cards */}
        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-4">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.number} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}


import {
  Grid2X2,
  Users,
  UserRound,
  CalendarDays,
  Zap,
  Clock3,
  Mail,
  ShieldCheck,
  Globe2,
  CreditCard,
  CheckCircle2,
  ChevronDown,
  Plus,
  Building2,
  ArrowRight,
} from "lucide-react";
import Button from "../ui/Button";

const features = [
  {
    number: "01",
    title: "Round-robin and attribute-based routing",
    description:
      "Automatically match bookings to the right person or team by location, specialty, or availability.",
    type: "routing",
  },
  {
    number: "02",
    title: "Shared team pages and routing forms",
    description:
      "Manage bookings across distributed teams with centralized control and consistent branding.",
    type: "forms",
  },
  {
    number: "03",
    title: "Automated reminders",
    description:
      "Reduce no-shows and maintain HIPAA compliance with automated voice and SMS scheduling updates.",
    type: "reminders",
  },
  {
    number: "04",
    title: "Centralized admin controls",
    description:
      "Role-based access and sub-teams bring consistency and compliance to every booking and meeting.",
    type: "admin",
  },
  {
    number: "05",
    title: "Company subdomain",
    description:
      "Your company.cal.com subdomain unifies branding, permissions, and data policies across every team.",
    type: "domain",
  },
  {
    number: "06",
    title: "Centralized billing",
    description:
      "Streamline reviews, renewals, and access—domain enforcement keeps your workspace secure.",
    type: "billing",
  },
];

function PreviewFrame({ children }) {
  return (
    <div className="relative mt-7 flex h-[190px] items-center justify-center overflow-hidden rounded-xl border border-[#e2e2e2] bg-[#f7f7f7] p-4 shadow-[0_2px_6px_rgba(0,0,0,0.055)] sm:h-[205px]">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ededed 1px, transparent 1px),
            linear-gradient(to bottom, #ededed 1px, transparent 1px)
          `,
          backgroundSize: "78px 78px",
          maskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 85%)",
        }}
      />
      <div className="relative z-10 w-full max-w-[310px]">
        {children}
      </div>
    </div>
  );
}

function Avatar({ label, color = "bg-[#e9edf2] text-[#5a6472]" }) {
  return (
    <span
      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold ${color}`}
    >
      {label}
    </span>
  );
}

function RoutingPreview() {
  return (
    <PreviewFrame>
      <div className="relative mx-auto max-w-[285px]">
        <div className="relative z-10 flex items-center gap-3 rounded-xl border border-[#e6e6e6] bg-white px-3 py-3 shadow-sm">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f2f2f2]">
            <CalendarDays size={16} className="text-[#737983]" />
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-2 w-24 rounded-full bg-[#e9e9e9]" />
            <div className="h-2 w-12 rounded-full bg-[#f0f0f0]" />
          </div>
        </div>

        <div className="absolute -right-3 top-[-45px] flex flex-col items-center gap-1.5">
          {[0, 1, 2, 3].map((person) => (
            <div
              key={person}
              className={`flex h-6 w-6 items-center justify-center rounded-full border border-dashed ${
                person === 1
                  ? "border-[#aeb4bc] bg-white"
                  : "border-[#d8d8d8] bg-[#fbfbfb]"
              }`}
            >
              <UserRound
                size={13}
                className={person === 1 ? "text-[#747b84]" : "text-[#c2c5ca]"}
              />
            </div>
          ))}
        </div>

        <div className="absolute right-0 top-1/2 h-[100px] -translate-y-1/2 border-l border-dashed border-[#d2d2d2]" />
      </div>
    </PreviewFrame>
  );
}

function FormsPreview() {
  return (
    <PreviewFrame>
      <div className="mx-auto max-w-[245px]">
        <div className="flex items-center gap-2 rounded-xl border border-[#e6e6e6] bg-white px-3 py-2 shadow-sm">
          <div className="flex -space-x-2">
            <Avatar label="S" color="bg-[#e6edf7] text-[#536d99]" />
            <Avatar label="M" color="bg-[#f5e8de] text-[#a46b43]" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold text-[#424242]">
              Sales team
            </p>
            <p className="flex items-center gap-1 text-[9px] text-emerald-700">
              <CheckCircle2 size={10} />
              Booking confirmed
            </p>
          </div>
        </div>

        <div className="flex h-10 items-center justify-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#e7e7e7] bg-white shadow-sm">
            <Zap size={16} className="text-[#414141]" />
          </div>
        </div>

        <div className="rounded-xl border border-[#e5e5e5] bg-white p-3 shadow-sm">
          <p className="text-center text-[11px] font-semibold text-[#444]">
            Routing form
          </p>
          <div className="mt-3 space-y-2">
            <div className="h-3 rounded-full bg-[#f2f2f2]" />
            <div className="h-3 w-[65%] rounded-full bg-[#f2f2f2]" />
            <div className="flex justify-end pt-1">
              <div className="h-5 w-16 rounded-md bg-[#e9e9e9]" />
            </div>
          </div>
        </div>
      </div>
    </PreviewFrame>
  );
}

function RemindersPreview() {
  const reminders = [
    {
      icon: Zap,
      title: "When",
      subtitle: "Before event starts",
    },
    {
      icon: Clock3,
      title: "How long before",
      subtitle: "1 hour",
    },
    {
      icon: Mail,
      title: "Send email to organizer",
      subtitle: "Event reminder",
    },
  ];

  return (
    <PreviewFrame>
      <div className="mx-auto max-w-[225px] space-y-2">
        {reminders.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center gap-3 rounded-xl border border-[#e7e7e7] bg-white px-3 py-2.5 shadow-sm"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#ededed] bg-[#fafafa]">
                <Icon size={16} className="text-[#777d85]" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-[#a0a3a9]">{item.title}</p>
                <p className="text-[10px] font-medium text-[#555]">
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </PreviewFrame>
  );
}

function AdminPreview() {
  return (
    <PreviewFrame>
      <div className="relative mx-auto flex h-[150px] max-w-[260px] items-center justify-center">
        <div className="absolute h-[145px] w-[145px] rounded-full border border-[#e9e9e9]" />
        <div className="absolute h-[112px] w-[112px] rounded-full border border-[#e4e4e4]" />
        <div className="absolute h-[80px] w-[80px] rounded-full border border-[#e4e4e4]" />

        <div className="relative z-10 flex h-[60px] w-[60px] items-center justify-center rounded-full border border-[#e2e2e2] bg-white shadow-sm">
          <UserRound size={27} strokeWidth={1.7} className="text-[#888d95]" />
        </div>

        <div className="absolute left-[calc(50%+17px)] top-[calc(50%-27px)] z-20 flex h-8 w-8 items-center justify-center rounded-full border border-[#e3e3e3] bg-white shadow-sm">
          <Plus size={18} className="text-[#6d737c]" />
        </div>
      </div>
    </PreviewFrame>
  );
}

function DomainPreview() {
  return (
    <PreviewFrame>
      <div className="mx-auto max-w-[250px] overflow-hidden rounded-xl border border-[#e5e5e5] bg-white shadow-sm">
        <div className="flex h-7 items-center gap-1.5 border-b border-[#eeeeee] px-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff786e]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#f5c15b]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#5cc9a4]" />

          <div className="ml-4 flex min-w-0 flex-1 items-center justify-center gap-1 rounded-full border border-[#ededed] bg-[#fafafa] px-2 py-1">
            <Globe2 size={10} className="shrink-0 text-[#929292]" />
            <span className="truncate text-[9px] text-[#818181]">
              company.cal.com/cedric
            </span>
          </div>
        </div>

        <div className="space-y-3 p-4">
          <div className="h-3 w-[60%] rounded-full bg-[#f0f0f0]" />
          <div className="h-14 rounded-lg bg-[#fafafa]" />
          <div className="flex items-center justify-between">
            <div className="h-2 w-[35%] rounded-full bg-[#eeeeee]" />
            <div className="h-6 w-16 rounded-md bg-[#ededed]" />
          </div>
        </div>
      </div>
    </PreviewFrame>
  );
}

function BillingPreview() {
  return (
    <PreviewFrame>
      <div className="mx-auto max-w-[275px] rounded-xl border border-[#e9e9e9] bg-white p-4 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] font-semibold text-[#454545]">
              Enterprise plan
            </p>
            <p className="mt-1 text-[9px] text-[#8c8c8c]">14 days free</p>
          </div>
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f4f4f4]">
            <CreditCard size={14} className="text-[#747982]" />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-2 rounded-lg border border-[#ededed] bg-[#fdfdfd] p-2.5">
          <div className="min-w-0">
            <p className="text-[9px] font-semibold text-[#555]">
              Annual billing
            </p>
            <span className="mt-1 inline-block rounded bg-[#e3f6ed] px-1.5 py-0.5 text-[9px] font-semibold text-[#25835b]">
              Save 20%
            </span>
          </div>
          <div className="text-right">
            <p className="whitespace-nowrap text-[9px] text-[#777]">
              US$15,000.00/year
            </p>
            <div className="mt-2 flex justify-end">
              <span className="flex h-4 w-8 items-center justify-end rounded-full bg-[#292d33] px-0.5">
                <span className="h-3 w-3 rounded-full bg-white" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </PreviewFrame>
  );
}

function FeatureIllustration({ type }) {
  switch (type) {
    case "routing":
      return <RoutingPreview />;
    case "forms":
      return <FormsPreview />;
    case "reminders":
      return <RemindersPreview />;
    case "admin":
      return <AdminPreview />;
    case "domain":
      return <DomainPreview />;
    case "billing":
      return <BillingPreview />;
    default:
      return null;
  }
}

function FeatureCard({ feature }) {
  return (
    <article className="flex min-w-0 flex-col rounded-[20px] border border-[#e2e2e2] bg-white p-5 shadow-[0_3px_7px_rgba(0,0,0,0.055)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_22px_rgba(0,0,0,0.07)] sm:p-6">
      <span className="flex h-8 w-9 items-center justify-center rounded-lg bg-[#e7e9ed] font-mono text-sm font-medium text-[#596579]">
        {feature.number}
      </span>

      <h3 className="mt-4 text-lg font-semibold leading-snug tracking-[-0.025em] text-[#252525] sm:text-xl">
        {feature.title}
      </h3>

      <p className="mt-2 min-h-[78px] text-sm leading-[1.65] text-[#858585] sm:text-base">
        {feature.description}
      </p>

      <FeatureIllustration type={feature.type} />
    </article>
  );
}

export default function TeamCoordinationFeatures() {
  return (
    <section className="relative  bg-[#f4f4f5] px-4 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
     
      <div className="relative mx-auto max-w-[1240px]">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-[900px] text-center sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e7e7e7] bg-white px-3 py-1.5 text-sm shadow-sm">
            <Grid2X2 size={14} />
            Features
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-[-0.055em] text-[#242424] sm:text-4xl md:text-5xl lg:text-[52px]">
            Simplify team coordination and
            <br className="hidden md:block" /> reduce scheduling friction
          </h2>

          <p className="mx-auto mt-5 max-w-[760px] text-base leading-relaxed text-[#858585] sm:text-lg">
            Cal.com simplifies team coordination with automated workflows and
            secure access, keeping scheduling efficient and compliant for teams
            of any size.
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

        {/* Feature grid */}
        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.number} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

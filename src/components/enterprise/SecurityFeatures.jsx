
import {
  ShieldCheck,
  ShieldPlus,
  Users,
  Building2,
  LockKeyhole,
  Fingerprint,
  UserRound,
  ArrowLeftRight,
  Check,
  KeyRound,
  Settings2,
  Database,
  Globe2,
  Sparkles,
} from "lucide-react";
import Button from "../ui/Button";

const features = [
  {
    number: "01",
    title: "Domain-wide delegation",
    description:
      "Simplify setup and ensure compliance across your organization. Cal.com gives administrators centralized control over calendars, bookings, and access.",
    type: "delegation",
  },
  {
    number: "02",
    title: "SAML SSO, SCIM provisioning",
    description:
      "SAML SSO, SCIM provisioning, and automated workflows give admins full visibility and control from one dashboard.",
    type: "sso",
  },
  {
    number: "03",
    title: "Privacy compliance tools",
    description:
      "Role-based access (RBAC), SAML SSO, and configurable data residency options simplify privacy management across multiple regulatory jurisdictions.",
    type: "privacy",
  },
  {
    number: "04",
    title: "Encryption and security monitoring",
    description:
      "Cal.com encrypts data in transit and at rest, with continuous monitoring and vulnerability management for ongoing protection.",
    type: "encryption",
  },
];

function PreviewShell({ children, className = "" }) {
  return (
    <div
      className={`relative isolate flex min-h-[230px] items-center justify-center overflow-hidden rounded-xl border border-[#e3e3e3] bg-[#f7f7f7] p-5 shadow-[0_2px_5px_rgba(0,0,0,0.035)] sm:min-h-[260px] ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 49.7%, #e6e6e6 49.9%, transparent 50.1%),
            linear-gradient(-45deg, transparent 49.7%, #e6e6e6 49.9%, transparent 50.1%)
          `,
          backgroundSize: "180px 180px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_10%,#f7f7f7_90%)]" />
      {children}
    </div>
  );
}

function CalMark({ className = "" }) {
  return (
    <div
      className={`flex h-[68px] w-[68px] items-center justify-center rounded-2xl bg-gradient-to-b from-[#303030] to-[#171717] text-white shadow-[0_4px_8px_rgba(0,0,0,0.12)] ${className}`}
    >
      <span className="text-[27px] font-semibold tracking-[-0.08em]">
        Cal
      </span>
    </div>
  );
}

function DelegationPreview() {
  const teams = [
    { name: "Marketing", icon: "M", color: "bg-amber-100 text-amber-700" },
    { name: "Sales", icon: "S", color: "bg-blue-100 text-blue-700" },
    {
      name: "Engineering",
      icon: "E",
      color: "bg-violet-100 text-violet-700",
    },
  ];

  return (
    <PreviewShell>
      <div className="relative grid w-full max-w-[380px] grid-cols-2 items-center gap-3 sm:gap-4">
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-[115px] w-full flex-col items-center justify-center gap-2 rounded-xl border border-[#e3e3e3] bg-white p-3 shadow-sm sm:h-[130px]">
            <Building2 size={28} strokeWidth={1.5} className="text-[#717783]" />
            <span className="text-xs font-semibold text-[#333]">
              Organization
            </span>
            <span className="text-[10px] text-[#929292]">
              Main workspace
            </span>
          </div>
          <span className="text-[10px] text-[#777]">Admin controls</span>
        </div>

        <div className="absolute left-1/2 top-[40%] z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e0e0e0] bg-white shadow-sm">
          <ArrowLeftRight size={15} className="text-[#555]" />
        </div>

        <div className="space-y-2">
          {teams.map((team) => (
            <div
              key={team.name}
              className="flex items-center gap-2 rounded-lg border border-[#e5e5e5] bg-white px-2 py-2 shadow-sm sm:px-3"
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${team.color}`}
              >
                {team.icon}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[10px] font-semibold text-[#333] sm:text-xs">
                  {team.name}
                </p>
                <p className="mt-0.5 text-[9px] text-[#888]">Sub-team</p>
              </div>
              <Check size={13} className="shrink-0 text-emerald-600" />
            </div>
          ))}
        </div>
      </div>
    </PreviewShell>
  );
}

function SSOPreview() {
  return (
    <PreviewShell>
      <div className="relative w-full max-w-[380px]">
        <div className="rounded-xl border border-[#e1e1e1] bg-white p-4 shadow-sm sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-[#252525]">
                Identity management
              </p>
              <p className="mt-1 text-[10px] text-[#858585] sm:text-xs">
                Authentication and provisioning
              </p>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f1f2f4]">
              <Fingerprint size={20} className="text-[#505968]" />
            </div>
          </div>

          <div className="mt-4 space-y-2.5">
            <div className="flex items-center justify-between rounded-lg border border-[#e8e8e8] p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fff4d6]">
                  <KeyRound size={16} className="text-[#8a6b18]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#333]">
                    SAML Single Sign-On
                  </p>
                  <p className="mt-0.5 text-[10px] text-[#888]">
                    Secure authentication
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-medium text-emerald-700">
                Active
              </span>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-[#e8e8e8] p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eaf0ff]">
                  <Users size={16} className="text-[#4b64a4]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#333]">
                    SCIM provisioning
                  </p>
                  <p className="mt-0.5 text-[10px] text-[#888]">
                    Automated user management
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-medium text-emerald-700">
                Active
              </span>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2 text-[10px] text-[#7a7a7a]">
            <Settings2 size={13} />
            Managed from one dashboard
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}

function PrivacyPreview() {
  const people = [
    { x: "50%", y: "8%" },
    { x: "25%", y: "24%" },
    { x: "40%", y: "23%" },
    { x: "60%", y: "23%" },
    { x: "75%", y: "36%" },
    { x: "25%", y: "67%" },
    { x: "40%", y: "78%" },
    { x: "65%", y: "76%" },
    { x: "50%", y: "92%" },
  ];

  return (
    <PreviewShell>
      <div className="relative h-[220px] w-full max-w-[380px]">
        {/* Permission rings */}
        <div className="absolute left-1/2 top-1/2 aspect-square w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e5e5e5]" />
        <div className="absolute left-1/2 top-1/2 aspect-square w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e1e1e1]" />
        <div className="absolute left-1/2 top-1/2 aspect-square w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e1e1e1]" />

        {/* Connected users */}
        {people.map((person, index) => (
          <div
            key={index}
            className="absolute z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e6e6e6] bg-white shadow-[0_2px_5px_rgba(0,0,0,0.05)]"
            style={{ left: person.x, top: person.y }}
          >
            <UserRound
              size={17}
              className={index === 0 ? "text-[#c5c8cd]" : "text-[#858b94]"}
            />
          </div>
        ))}

        {/* Central Cal mark */}
        <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <CalMark />
        </div>
      </div>
    </PreviewShell>
  );
}

function EncryptionPreview() {
  return (
    <PreviewShell className="bg-[#f5f5f5]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#fff_0%,#f5f5f5_72%)]" />

      <div className="relative flex aspect-square w-[225px] max-w-[90%] items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-[#e8e8e8]" />
        <div className="absolute inset-[14%] rounded-full border border-[#e5e5e5]" />
        <div className="absolute inset-[28%] rounded-full border border-[#e3e3e3]" />

        <div className="relative flex h-[88px] w-[88px] items-center justify-center rounded-full border border-[#e0e0e0] bg-white shadow-[0_3px_8px_rgba(0,0,0,0.04)] sm:h-[96px] sm:w-[96px]">
          <ShieldCheck
            size={42}
            strokeWidth={1.6}
            className="text-[#898d95]"
          />
        </div>
      </div>
    </PreviewShell>
  );
}

function FeatureVisual({ type }) {
  switch (type) {
    case "delegation":
      return <DelegationPreview />;
    case "sso":
      return <SSOPreview />;
    case "privacy":
      return <PrivacyPreview />;
    case "encryption":
      return <EncryptionPreview />;
    default:
      return null;
  }
}

function FeatureCard({ feature }) {
  return (
    <article className="flex min-w-0 flex-col rounded-[20px] border border-[#e2e2e2] bg-white p-5 shadow-[0_3px_7px_rgba(0,0,0,0.055)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_22px_rgba(0,0,0,0.07)] sm:p-6">
      <span className="mb-4 flex h-8 w-9 items-center justify-center rounded-lg bg-[#e7e9ed] font-mono text-sm font-medium text-[#596579]">
        {feature.number}
      </span>

      <h3 className="text-lg font-semibold tracking-[-0.025em] text-[#252525] sm:text-xl">
        {feature.title}
      </h3>

      <p className="mt-2 min-h-[76px] text-sm leading-[1.65] text-[#858585] sm:text-base">
        {feature.description}
      </p>

      <div className="mt-6 flex-1">
        <FeatureVisual type={feature.type} />
      </div>
    </article>
  );
}

export default function SecurityFeatures() {
  return (
    <section className="relative bg-[#f4f4f5] px-4 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24">
      {/* Page guide lines */}
      <div className="pointer-events-none absolute inset-y-0 left-[9.5%] hidden border-l border-[#e1e1e1] lg:block" />
      <div className="pointer-events-none absolute inset-y-0 right-[9.5%] hidden border-l border-[#e1e1e1] lg:block" />

      <div className="relative mx-auto max-w-[1160px]">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-[900px] text-center sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e7e7e7] bg-white px-3 py-1.5 text-sm shadow-sm">
            <ShieldPlus size={14} />
            Security features
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-[-0.055em] text-[#242424] sm:text-4xl md:text-5xl lg:text-[52px]">
            Designed for smooth rollouts and
            <br className="hidden md:block" /> scalable governance
          </h2>

          <p className="mx-auto mt-5 max-w-[740px] text-base leading-relaxed text-[#858585] sm:text-lg">
            Built for easy organization-wide deployment. Cal.com eliminates
            patchwork tools and scattered accounts with unified security,
            consistency, and control.
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

        {/* Four security feature cards */}
        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-4">
          {features.map((feature) => (
            <FeatureCard key={feature.number} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

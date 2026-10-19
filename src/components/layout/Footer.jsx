
import { useState } from "react";
import {
  ChevronDown,
  ExternalLink,
  Globe,
} from "lucide-react";

const footerColumns = [
  {
    title: "Solutions",
    links: [
      "iOS/Android App",
      "Self-hosted",
      "Pricing",
      "Docs",
      "Cal.ai - AI Phone Agent",
      "Enterprise",
      "Integrate Cal.com",
      "Routing",
      "Cal.com Atoms",
      "Desktop App",
      "FAQ",
      "Enterprise API",
      "GitHub",
      "Docker",
    ],
  },
  {
    title: "Use Cases",
    links: [
      "Sales",
      "Marketing",
      "Talent Acquisition",
      "Customer Support",
      "Higher Education",
      "Telehealth",
      "Professional Services",
      "Hiring Marketplace",
      "Human Resources",
      "Tutoring",
      "C-suite",
      "Law",
    ],
  },
  {
    title: "Resources",
    links: [
      "Affiliate Program",
      "Help Docs",
      "Blog",
      "Cal Fonts",
      "Teams",
      "Embed",
      "Recurring events",
      "Developers",
      "OOO",
      "Workflows",
      "Instant Meetings",
      "App Store",
      "Requires confirmation",
      "Payments",
    ],
  },
  {
    title: "Company",
    links: [
      "Jobs",
      "About",
      "Open Startup",
      "Support",
      "Privacy",
      "Terms",
      "License",
      "Security",
      "Changelog",
      "Get a demo",
      "Talk to sales",
    ],
  },
];

const downloads = [
  { name: "Android", icon: "▶️" },
  { name: "Chrome", icon: "🌐" },
  { name: "Safari", icon: "🧭" },
  { name: "Edge", icon: "🌊" },
  { name: "Firefox", icon: "🦊" },
  { name: "macOS", icon: "" },
  { name: "Windows", icon: "⊞" },
  { name: "Linux", icon: "🐧" },
];

const footerLinks = {
  "iOS/Android App": "/apps",
  "Self-hosted": "/self-hosting",
  Pricing: "/pricing",
  Docs: "/docs",
  "Cal.ai - AI Phone Agent": "/cal-ai",
  Enterprise: "/enterprise",
  "Integrate Cal.com": "/apps",
  Routing: "/routing",
  "Cal.com Atoms": "/atoms",
  "Desktop App": "/download",
  FAQ: "/faq",
  "Enterprise API": "/docs/api",
  GitHub: "https://github.com/calcom/cal.com",
  Docker: "/docs/self-hosting/docker",
  Sales: "/sales",
  Marketing: "/marketing",
  "Talent Acquisition": "/solutions/talent-acquisition",
  "Customer Support": "/solutions/customer-support",
  "Higher Education": "/solutions/higher-education",
  Telehealth: "/solutions/telehealth",
  "Professional Services": "/solutions/professional-services",
  "Hiring Marketplace": "/solutions/hiring",
  "Human Resources": "/solutions/hr",
  Tutoring: "/solutions/tutoring",
  "C-suite": "/solutions/executives",
  Law: "/solutions/legal",
  "Affiliate Program": "/affiliate-program",
  "Help Docs": "/help",
  Blog: "/blog",
  "Cal Fonts": "/cal-fonts",
  Teams: "/teams",
  Embed: "/embed",
  "Recurring events": "/recurring-events",
  Developers: "/docs",
  OOO: "/ooo",
  Workflows: "/workflows",
  "Instant Meetings": "/instant-meetings",
  "App Store": "/apps",
  "Requires confirmation": "/requires-confirmation",
  Payments: "/payments",
  Jobs: "/jobs",
  About: "/about",
  "Open Startup": "https://github.com/calcom/cal.com",
  Support: "/support",
  Privacy: "/privacy",
  Terms: "/terms",
  License: "/license",
  Security: "/security",
  Changelog: "/changelog",
  "Get a demo": "/contact",
  "Talk to sales": "/contact",
};

function ComplianceBadges() {
  const badges = [
    { title: "ISO", subtitle: "27001" },
    { title: "AICPA", subtitle: "SOC 2" },
    { title: "CCPA", subtitle: "COMPLIANT" },
    { title: "GDPR", subtitle: "COMPLIANT" },
    { title: "HIPAA", subtitle: "COMPLIANT" },
  ];

  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      {badges.map((badge) => (
        <div
          key={badge.title}
          className="flex h-[48px] min-w-[48px] flex-col items-center justify-center rounded-full border border-white/30 px-2 text-center text-white/80"
          title={`${badge.title} ${badge.subtitle}`}
        >
          <span className="text-[10px] font-extrabold leading-tight">
            {badge.title}
          </span>
          <span className="mt-0.5 text-[7px] leading-tight">
            {badge.subtitle}
          </span>
        </div>
      ))}
    </div>
  );
}

function DownloadButton({ name, icon }) {
  return (
    <a
      href="/download"
      className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/[0.04] px-3 py-2 text-sm text-white/90 transition hover:border-white/40 hover:bg-white/10"
    >
      <span className="text-lg leading-none">{icon}</span>
      <span>{name}</span>
    </a>
  );
}

export default function Footer() {
  const [language, setLanguage] = useState("English");

  return (
    <footer className="relative overflow-hidden rounded-2xl bg-[#242424] text-white mx-3 mt-6 mb-2">
      <div className="mx-auto max-w-[1500px] px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-[1.8fr_0.8fr_0.8fr_0.8fr_0.65fr] lg:gap-x-10">
          {/* Brand and downloads */}
          <div className="col-span-2 max-w-[390px] md:col-span-1">
            <a
              href="/"
              className="inline-block text-[30px] font-bold tracking-[-0.07em]"
            >
              Cal.com
            </a>

            <p className="mt-5 max-w-[355px] text-[15px] leading-relaxed text-white/65">
              Cal.com® and Cal® are registered trademarks of Cal.com, Inc.
              All rights reserved.
            </p>

            <ComplianceBadges />

            <p className="mt-7 max-w-[360px] text-[15px] leading-relaxed text-white/65">
              Our mission is to connect a billion people by 2031 through
              calendar scheduling.
            </p>

            {/* Language and status */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <label className="relative">
                <Globe
                  size={15}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/60"
                />
                <select
                  value={language}
                  onChange={(event) => setLanguage(event.target.value)}
                  className="h-[42px] w-[145px] appearance-none rounded-lg border border-white/20 bg-white/[0.07] pl-9 pr-8 text-sm text-white outline-none transition hover:bg-white/10 focus:border-white/40"
                >
                  <option className="bg-[#242424]" value="English">
                    English
                  </option>
                  <option className="bg-[#242424]" value="Español">
                    Español
                  </option>
                  <option className="bg-[#242424]" value="Français">
                    Français
                  </option>
                  <option className="bg-[#242424]" value="Deutsch">
                    Deutsch
                  </option>
                  <option className="bg-[#242424]" value="日本語">
                    日本語
                  </option>
                </select>
                <ChevronDown
                  size={14}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/60"
                />
              </label>

              <a
                href="https://status.cal.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-[42px] items-center gap-3 rounded-lg border border-white/20 bg-white/[0.04] px-3 font-mono text-[10px] text-white/80 transition hover:bg-white/10"
              >
                All Systems Operational
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </a>
            </div>

            {/* Downloads */}
            <h3 className="mt-8 text-lg font-semibold">Downloads</h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {downloads.map((item) => (
                <DownloadButton
                  key={item.name}
                  name={item.name}
                  icon={item.icon}
                />
              ))}
            </div>

            {/* Review badges */}
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://www.g2.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-[72px] w-[168px] items-center justify-between bg-[#ed652e] px-3 text-white transition hover:brightness-110"
              >
                <span>
                  <span className="block text-lg leading-none tracking-[-2px]">
                    ★★★★★
                  </span>
                  <span className="mt-1 block text-[11px] font-medium leading-tight">
                    Read our
                    <br />
                    reviews on
                  </span>
                </span>
                <span className="text-2xl font-bold">G²</span>
              </a>

              <a
                href="https://www.trustpilot.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-[72px] w-[168px] items-center justify-between bg-emerald-500 px-3 text-white transition hover:brightness-110"
              >
                <span>
                  <span className="block text-lg leading-none tracking-[-2px]">
                    ★★★★★
                  </span>
                  <span className="mt-1 block text-[11px] font-medium leading-tight">
                    Read our
                    <br />
                    reviews on
                  </span>
                </span>
                <span className="text-2xl font-bold">★</span>
              </a>
            </div>
          </div>

          {/* Navigation columns */}
          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="mb-5 text-base font-semibold text-white">
                {column.title}
              </h3>

              <ul className="space-y-[17px]">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href={footerLinks[link] || "/"}
                      className="group inline-flex items-center gap-1 text-[15px] leading-snug text-white/65 transition hover:text-white"
                    >
                      {link}
                      {link === "GitHub" && (
                        <ExternalLink
                          size={12}
                          className="opacity-0 transition group-hover:opacity-70"
                        />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom line */}
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Cal.com, Inc.</p>
          <p>Made for better scheduling.</p>
        </div>
      </div>
    </footer>
  );
}

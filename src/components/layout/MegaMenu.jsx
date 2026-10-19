
import {
  UserRound,
  UsersRound,
  Network,
  Send,
  CircleDollarSign,
  FlaskConical,
  GraduationCap,
  Presentation,
  FileText,
  Code2,
  Layers3,
  Terminal,
  CalendarDays,
  Smartphone,
  Moon,
  CreditCard,
  Workflow,
  Newspaper,
  Zap,
  ContactRound,
  Webhook,
  BookOpen,
  MessageSquare,
  Headset,
  Building2,
  Sparkles,
} from "lucide-react";

const solutionsTeams = [
  {
    icon: UserRound,
    title: "For Individuals",
    description: "Personal scheduling made simple",
    href: "/solutions/individuals",
  },
  {
    icon: UsersRound,
    title: "For Teams",
    description: "Collaborative scheduling for groups",
    href: "/solutions/teams",
  },
  {
    icon: Network,
    title: "For Organizations",
    description: "Larger teams scheduling for more control & security",
    href: "/solutions/organizations",
  },
  {
    icon: UsersRound,
    title: "For Enterprises",
    description: "Enterprise-level scheduling solutions",
    href: "/enterprise",
  },
];

const useCases = [
  { icon: Send, title: "Recruiting" },
  { icon: CircleDollarSign, title: "Sales" },
  { icon: UsersRound, title: "HR" },
  { icon: GraduationCap, title: "Education" },
  { icon: Headset, title: "Support" },
  { icon: FlaskConical, title: "Healthcare" },
  { icon: MessageSquare, title: "Telehealth" },
  { icon: Presentation, title: "Marketing" },
];

const developerItems = [
  {
    icon: FileText,
    title: "Developer Documentation",
    description: "Documentation for the Cal.com platform",
    href: "/docs",
  },
  {
    icon: Code2,
    title: "API",
    description: "Build your own integrations with our public API",
    href: "/docs/api",
  },
  {
    icon: Layers3,
    title: "Scheduling Components",
    description: "Use our React atoms to add scheduling to your app",
    href: "/docs/platform",
  },
  {
    icon: Terminal,
    title: "Create OAuth Client",
    description: "Integrate Cal.com using OAuth",
    href: "/apps",
  },
];

const resourcesItems = [
  {
    icon: CalendarDays,
    title: "Font: Cal Sans UI & Text",
    description: "Our own variable typeface for user interface design",
    href: "/resources",
  },
  {
    icon: Smartphone,
    title: "App Store",
    description: "Integrate with your favorite apps",
    href: "/apps",
  },
  {
    icon: UsersRound,
    title: "Collective Events",
    description: "Schedule events with multiple participants",
    href: "/features/collective",
  },
  {
    icon: BookOpen,
    title: "Help Docs",
    description: "Need to learn more about our system? Check the help docs",
    href: "/help",
  },
  {
    icon: Terminal,
    title: "Embed",
    description: "Embed Cal.com into your website",
    href: "/embed",
  },
  {
    icon: Moon,
    title: "Out Of Office",
    description: "Schedule time off with ease",
    href: "/features/out-of-office",
  },
  {
    icon: CreditCard,
    title: "Payments",
    description: "Accept payments for bookings",
    href: "/features/payments",
  },
  {
    icon: Workflow,
    title: "Workflows",
    description: "Automate scheduling and reminders",
    href: "/features/workflows",
  },
  {
    icon: Newspaper,
    title: "Blog",
    description: "Stay up to date with the latest news and updates",
    href: "/blog",
  },
  {
    icon: Zap,
    title: "Instant Meetings",
    description: "Meet with clients in minutes",
    href: "/features/instant-meetings",
  },
  {
    icon: ContactRound,
    title: "Dynamic Group Links",
    description: "Seamlessly book meetings with multiple people",
    href: "/features",
  },
  {
    icon: Webhook,
    title: "Webhooks",
    description: "Get notified when something happens",
    href: "/docs/webhooks",
  },
];


function MenuItem({ item, compact = false }) {
  const Icon = item.icon;

  return (
    <a
      href={item.href}
      className="group flex min-w-0 items-start gap-3 rounded-xl p-1 transition-colors hover:bg-[#f4f4f4]"
    >
      {/* Compact icon box */}
      <span className="relative flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-xl border border-[#dedede] bg-[#f4f4f4] transition-colors duration-200 group-hover:bg-white">
        <span className="absolute left-2 top-2 h-1 w-1 rounded-full bg-[#d2d2d2] transition-all duration-200 group-hover:left-3 group-hover:top-3" />
        <span className="absolute right-2 top-2 h-1 w-1 rounded-full bg-[#d2d2d2] transition-all duration-200 group-hover:right-3 group-hover:top-3" />
        <span className="absolute bottom-2 left-2 h-1 w-1 rounded-full bg-[#d2d2d2] transition-all duration-200 group-hover:bottom-3 group-hover:left-3" />
        <span className="absolute bottom-2 right-2 h-1 w-1 rounded-full bg-[#d2d2d2] transition-all duration-200 group-hover:bottom-3 group-hover:right-3" />

        <Icon size={compact ? 23 : 25} strokeWidth={2.3} />
      </span>

      <span className="min-w-0 pt-0.5">
        <span className="block text-[15px] font-semibold leading-5 text-[#303030]">
          {item.title}
        </span>

        {item.description && (
          <span className="mt-0.5 block text-[15px] leading-[1.4] text-[#929292]">
            {item.description}
          </span>
        )}
      </span>
    </a>
  );
}

function SolutionsMenu() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_1.25fr_0.95fr]">
      <div>
        <p className="mb-2 text-sm font-medium text-[#333]">
            By team size
        </p>

        <div className="space-y-3">
            {solutionsTeams.map((item) => (
            <MenuItem key={item.title} item={item} />
            ))}
        </div>
    </div>

      <div>
        <p className="mb-2 text-sm font-medium text-[#333]">
            By use case
        </p>

        <div className="grid grid-cols-2 gap-x-3 gap-y-3">
            {useCases.map((item) => (
            <MenuItem key={item.title} item={item} compact />
            ))}
        </div>
        </div>

      <a
        href="/cal-ai"
className="relative flex min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#6546f5] via-[#9672ee] to-[#d69afa] p-5 text-center text-white transition-transform duration-300 hover:scale-[1.01]"      >
        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-[#241749] px-3 py-1.5 text-xs font-semibold">
          <Sparkles size={13} />
          Try Cal.ai now!
        </span>

        <span className="text-5xl font-bold tracking-[-0.07em]">
  Cal.ai
</span>

<span className="mt-8 max-w-[220px] text-lg font-bold leading-tight">
  Supercharged scheduling with AI-powered calls
</span>
      </a>
    </div>
  );
}

function DeveloperMenu() {
  return (
    <div className="grid grid-cols-1 gap-5">
      {developerItems.map((item) => (
        <MenuItem key={item.title} item={item} />
      ))}
    </div>
  );
}

function ResourcesMenu() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2 xl:grid-cols-3">
      {resourcesItems.map((item) => (
        <MenuItem key={item.title} item={item} />
      ))}
    </div>
  );
}

export default function MegaMenu({ activeMenu }) {
  if (!activeMenu) return null;

  return (
    <div className="absolute left-1/2 top-full z-50 w-[calc(100%-24px)] max-w-[950px] -translate-x-1/2 pt-2">
      <div
  className={`max-h-[calc(100vh-120px)] overflow-y-auto rounded-[22px] border border-[#e0e0e0] bg-white p-5 shadow-[0_12px_45px_rgba(0,0,0,0.08)] ${
    activeMenu === "solutions" ? "xl:p-6" : ""
  }`}
>
        {activeMenu === "solutions" && <SolutionsMenu />}
        {activeMenu === "developer" && <DeveloperMenu />}
        {activeMenu === "resources" && <ResourcesMenu />}
      </div>
    </div>
  );
}

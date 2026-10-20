
import { Check } from "lucide-react";
import Button from "../ui/Button";

const plans = [
  {
    name: "Individual",
    description: "Scheduling as an individual.",
    price: "Free forever",
    button: "Try for free",
  },
  {
    name: "Teams",
    description: "Schedule as a team.",
    price: "$12",
    suffix: "per month/user",
    discount: "Save 25%",
    button: "Try for free",
  },
  {
    name: "Organizations",
    description: "Schedule company-wide.",
    price: "$28",
    suffix: "per month/user",
    discount: "Save 25%",
    button: "Try for free",
    featured: true,
  },
  {
    name: "Enterprise",
    description: "Scheduling without limits.",
    price: "Custom pricing",
    button: "Talk to sales",
  },
];

const features = [
  {
    name: "Unlimited event types",
    description:
      "Create as many booking templates as you need for different meeting types.",
    available: [true, true, true, true],
  },
  {
    name: "Unlimited calendar connections",
    description:
      "Connect multiple calendars to sync availability and prevent double bookings.",
    available: [true, true, true, true],
  },
  {
    name: "Unlimited meetings",
    description:
      "Accept unlimited bookings without restrictions on the number of meetings.",
    available: [true, true, true, true],
  },
  {
    name: "Multiple duration options",
    description: "Offer flexible meeting durations for each event type.",
    available: [true, true, true, true],
  },
  {
    name: "Automatic timezone detection & conflict checking",
    description:
      "Automatically adjust for attendee timezones and prevent scheduling conflicts.",
    available: [true, true, true, true],
  },
  {
    name: "Meeting cancellation",
    description:
      "Allow organizers and attendees to cancel meetings using a secure link.",
    available: [true, true, true, true],
  },
  {
    name: "Meeting rescheduling",
    description:
      "Allow organizers and attendees to reschedule without back-and-forth emails.",
    available: [true, true, true, true],
  },
  {
    name: "Meeting reassignment",
    description: "Transfer a scheduled meeting to another team member.",
    available: [false, true, true, true],
  },
  {
    name: "Round-robin scheduling",
    description: "Distribute bookings among available team members.",
    available: [false, true, true, true],
  },
  {
    name: "Managed and collective event types",
    description: "Coordinate bookings across multiple team members.",
    available: [false, true, true, true],
  },
  {
    name: "Unlimited sub-teams",
    description: "Create and manage multiple teams within your organization.",
    available: [false, false, true, true],
  },
  {
    name: "SAML SSO and SCIM",
    description: "Manage secure authentication and user provisioning.",
    available: [false, false, true, true],
  },
  {
    name: "Dedicated onboarding and engineering support",
    description: "Get dedicated assistance for your enterprise deployment.",
    available: [false, false, false, true],
  },
];

function PlanHeader({ plan }) {
  return (
    <div
      className={`flex h-full flex-col rounded-2xl border p-2 ${
        plan.featured
          ? "border-[#333] bg-[#242424] text-white"
          : "border-[#e1e1e1] bg-white text-[#252525]"
      }`}
    >
      <h3 className="text-base font-semibold sm:text-lg">{plan.name}</h3>

      <p
        className={` text-xs leading-4 sm:text-xs ${
          plan.featured ? "text-white" : "text-[#858585]"
        }`}
      >
        {plan.description}
      </p>

      <div className="mt-1 flex flex-wrap items-center gap-x-1">
        <span className="text-base font-bold tracking-tight sm:text-md">
          {plan.price}
        </span>

        {plan.suffix && (
          <span className="text-[10px] sm:text-xs">{plan.suffix}</span>
        )}

        {plan.discount && (
          <span className="rounded bg-[#eff6ff] px-1 py-0.5 text-[10px] text-[#1670d2]">
            {plan.discount}
          </span>
        )}
      </div>

      <div className="mt-auto pt-3">
        <Button
          to={plan.name === "Enterprise" ? "/contact" : "/signup"}
          variant={plan.featured ? "light" : "dark"}
        >
          {plan.button}
        </Button>
      </div>
    </div>
  );
}

export default function FeatureBreakdown() {
  return (
    <section className="relative ">

      {/* Sticky plan header: sticks while feature rows scroll */}
      <div className="sticky top-0 z-30 border-b border-[#dedede] bg-white rounded-tr-2xl rounded-tl-2xl pb-4  ">
        <div className="px-4 pb-5 pt-12 sm:px-7 sm:pt-20 lg:px-10">
            <p className="text-xl font-semibold tracking-tight text-[#252525]">
            Feature breakdown
            </p>

            <p className=" text-sm text-[#858585] sm:text-md">
            Compare our Free and Teams plans to see why Cal.com is the better
            choice.
            </p>
        </div>
        <div className="grid grid-cols-[minmax(120px,1.2fr)_repeat(4,minmax(145px,1fr))] items-end gap-2 px-4 sm:gap-2.5 sm:px-7 lg:px-10">
          <div className="pb-5 pl-1 text-sm font-semibold text-[#252525]">
            Features
          </div>

          {plans.map((plan) => (
            <PlanHeader key={plan.name} plan={plan} />
          ))}
        </div>
      </div>

      {/* Feature rows scroll normally beneath the sticky header */}
      <div>
        {features.map((feature) => (
          <div
            key={feature.name}
            className="grid grid-cols-[minmax(120px,1.2fr)_repeat(4,minmax(145px,1fr))] items-center gap-2 border-b border-[#e1e1e1] px-4 py-2 last:border-b-0 sm:gap-2.5 sm:px-7 lg:px-10"
          >
            <div className="py-1 pr-2">
              <h3 className="text-sm font-medium leading-5 text-[#252525] sm:text-base">
                {feature.name}
              </h3>

              <p className=" text-xs leading-[1.45] text-[#858585]">
                {feature.description}
              </p>
            </div>

            {feature.available.map((available, index) => (
              <div
                key={`${feature.name}-${plans[index].name}`}
                className="flex min-h-10 items-center justify-center"
              >
                {available ? (
                  <Check
                    size={22}
                    strokeWidth={2}
                    className="text-[#10b981]"
                    aria-label="Included"
                  />
                ) : (
                  <span
                    className="text-[#d0d0d0]"
                    aria-label="Not included"
                  >
                    —
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

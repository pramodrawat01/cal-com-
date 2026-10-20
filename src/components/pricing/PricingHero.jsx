
import { useState } from "react";
import { Check, HandCoins } from "lucide-react";
import Button from "../ui/Button";

const plans = [
  {
    name: "Individuals",
    price: "Free",
    description: "Everything you could need for scheduling as an individual.",
    button: "Use for free",
    note: "*Free forever",
    featureHeading: "Free features:",
    features: [
      "Connect with tools like Zoom, Google Meet, Slack, HubSpot, Zapier, Make and more to automate your workflow.",
      "Integrate with 100+ apps",
      "Mobile App",
      "Browser Extension",
      "Accept Stripe & PayPal payments",
      "Two-way Salesforce & HubSpot sync",
      "1-click import Calendly events",
    ],
  },
  {
    name: "Teams",
    monthlyPrice: 16,
    yearlyPrice: 12,
    description: "For small teams & startups with combined scheduling needs.",
    button: "Try for free",
    note: "*14 day free trial",
    featureHeading: "Free plan features, plus:",
    features: [
      "1 team, shared availability",
      "Round-robin scheduling",
      "Managed & collective event types",
      "Recurring events",
      "Customizable email & SMS notifications",
      "Remove Cal.com branding",
      "Routing forms",
      "Booking analytics",
      "Custom APIs",
    ],
    discount: "Save 25%",
  },
  {
    name: "Organizations",
    monthlyPrice: 37,
    yearlyPrice: 28,
    description:
      "For larger teams looking for more control, privacy, and security.",
    button: "Try for free",
    note: "*14 day free trial",
    featureHeading: "Teams plan features, plus:",
    features: [
      "Unlimited sub-teams",
      "Route by custom variables",
      "Company subdomain (yourcompany.cal.com)",
      "SAML SSO and SCIM",
      "SOC 2, HIPAA, ISO 27001 compliant",
      "Instant meetings",
      "Domain-wide delegation",
      "Role-based permissions",
      "Additional APIs",
    ],
    discount: "Save 25%",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "The most advanced scheduling for enterprise without limits.",
    button: "Talk to sales",
    note: "*Annual pricing",
    featureHeading: "Organizations plan features, plus:",
    features: [
      "Dedicated onboarding and engineering support",
      "SLA & uptime guarantees",
      "HRIS & directory integrations",
      "Priority Slack & account support",
      "Dedicated database",
    ],
  },
];


function BillingToggle({ yearly, onChange, featured }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={yearly}
      aria-label="Annual billing"
      onClick={onChange}
      className="flex shrink-0 items-center gap-2"
    >
      <span
        className={`text-[9px] font-semibold ${
          featured ? "text-white" : "text-[#667085]"
        }`}
      >
        YEARLY
      </span>

      <span
        className={`relative inline-flex h-[19px] w-[36px] shrink-0 items-center rounded-full p-[2px] transition-colors duration-200 ${
          yearly ? "bg-[#555555]" : "bg-[#d0d0d0]"
        }`}
      >
        <span
          className={`h-[16px] w-[16px] rounded-full bg-white shadow-sm transition-transform duration-200 ${
            yearly ? "translate-x-[16px]" : "translate-x-0"
          }`}
        />
      </span>
    </button>
  );
}


function PlanCard({ plan, yearly, setYearly }) {
  const featured = plan.featured;

  const price =
    plan.price ??
    (yearly ? plan.yearlyPrice : plan.monthlyPrice);

  return (
    <article
      className={`flex min-w-0 flex-col rounded-[20px] border p-4 shadow-[0_3px_8px_rgba(0,0,0,0.07)] sm:p-5 ${
        featured
          ? "border-[#333] bg-[#242424] text-white"
          : "border-[#e2e2e2] bg-white text-[#252525]"
      }`}
    >
      <div className="flex min-h-[28px] items-center justify-between gap-2">
        <h3 className="text-xl font-semibold tracking-[-0.035em]">
          {plan.name}
        </h3>

        {plan.monthlyPrice && (
          <BillingToggle
            yearly={yearly}
            onChange={() => setYearly((value) => !value)}
            featured={featured}
          />
        )}
      </div>

      <div className="mt-6 flex min-h-[43px] flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="text-[32px] font-semibold leading-none tracking-[-0.055em]">
          {typeof price === "number" ? `$${price}` : price}
        </span>

        {typeof price === "number" && (
          <span
            className={`text-sm ${
              featured ? "text-white" : "text-[#858585]"
            }`}
          >
            per user/month
          </span>
        )}

        {plan.discount && (
          <span className="rounded bg-[#eff6ff] px-1.5 py-0.5 text-[11px] font-medium text-[#1670d2]">
            {plan.discount}
          </span>
        )}
      </div>

      <p
        className={`mt-3 min-h-[52px] text-[15px] leading-[1.55] ${
          featured ? "text-white" : "text-[#858585]"
        }`}
      >
        {plan.description}
      </p>

      <div className="mt-5">
        <Button
          to={plan.name === "Enterprise" ? "/contact" : "/signup"}
          variant={featured && plan.name !== "Enterprise" ? "light" : "dark"}
          block
        >
          {plan.button}
        </Button>

        <p
          className={`mt-2 text-center text-xs ${
            featured ? "text-white" : "text-[#344054]"
          }`}
        >
          {plan.note}
        </p>
      </div>

      <div className="mt-7">
        <h4 className="mb-4 text-sm font-medium">{plan.featureHeading}</h4>

        <ul className="space-y-3">
          {plan.features.map((feature, index) => {
            const descriptionBox =
              plan.name === "Individuals" && index === 0;

            return (
              <li
                key={feature}
                className={`flex items-start gap-2.5 text-[14px] leading-[1.55] ${
                  descriptionBox
                    ? `mb-1 rounded-xl border p-3 ${
                        featured
                          ? "border-white/20"
                          : "border-[#e2e2e2] text-[#444]"
                      }`
                    : ""
                }`}
              >
                {!descriptionBox && (
                  <Check
                    size={18}
                    strokeWidth={2}
                    className="mt-0.5 shrink-0"
                  />
                )}

                <span
                  className={
                    descriptionBox
                      ? ""
                      : "underline decoration-dashed decoration-[#bcbcbc] underline-offset-[5px]"
                  }
                >
                  {feature}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}

export default function PricingHero() {
  const [yearly, setYearly] = useState(true);

  return (
    <section className="relative  bg-[#f4f4f5] px-4 pb-20 pt-20 sm:px-7 sm:pt-24 lg:px-10">
      <div className="mx-auto max-w-[1190px]">
        <div className="mb-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e7e7e7] bg-white px-3 py-1.5 text-sm shadow-sm">
            <HandCoins size={15} />
            Pricing
          </span>

          <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-0.06em] text-[#242424] sm:text-5xl lg:text-[68px]">
            Choose your Cal.com subscription
          </h1>

          <p className="mt-5 max-w-[780px] text-base leading-relaxed text-[#858585] sm:text-lg">
            Start scheduling for free, with no usage limits. For collaborative
            features, choose one of our premium plans that fits your company
            size.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Button to="/contact" variant="dark">
              Talk to sales
            </Button>

            <Button to="/pricing/features" variant="light">
              See feature breakdown
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <PlanCard
              key={plan.name}
              plan={plan}
              yearly={yearly}
              setYearly={setYearly}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

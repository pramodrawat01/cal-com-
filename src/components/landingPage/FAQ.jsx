import { useState } from "react";
import { CircleHelp, ChevronRight, Plus, X } from "lucide-react";
import Button from "../ui/Button";

const faqs = [
  {
    question:
      "What is Cal.com and how does it work as a scheduling app?",
    answer:
      "Cal.com is a scheduling app and meeting scheduling software used by over a million people to eliminate booking back-and-forth. You share a link, and Cal.com handles calendar syncing, timezone detection, reminders, and video calls through Zoom, Google Meet, Microsoft Teams, and Cal Video. It works as a simple meeting scheduler for 1-on-1s or a full automated scheduling system with routing and workflows, making it both a flexible scheduling tool and a powerful online booking system.",
  },
  {
    question:
      "What makes Cal.com different from other scheduling apps?",
    answer:
      "Cal.com is open source and designed to give individuals and teams more control over their scheduling workflows. It offers calendar integrations, customizable booking pages, team scheduling, routing forms, automated workflows, and flexible deployment options.",
  },
  {
    question:
      "How much does Cal.com cost and what's included in each plan?",
    answer:
      "Cal.com offers plans for individuals, teams, and organizations. Available features and pricing depend on the plan, with options for personal scheduling, team collaboration, advanced automation, and enterprise requirements.",
  },
  {
    question: "Can I connect multiple calendars to Cal.com?",
    answer:
      "Yes. You can connect supported calendar providers to manage availability, check for scheduling conflicts, and keep your bookings organized across calendars.",
  },
  {
    question: "Does Cal.com support team scheduling?",
    answer:
      "Yes. Cal.com supports team scheduling features such as shared event types, collective meetings, round-robin scheduling, and routing workflows, depending on your plan.",
  },
  {
    question: "Can I customize my booking page?",
    answer:
      "You can customize your booking experience with event details, availability, scheduling preferences, and other options available in your account.",
  },
  {
    question: "Which video conferencing tools can I integrate?",
    answer:
      "Cal.com supports integrations with popular conferencing tools, including Zoom, Google Meet, and Microsoft Teams, so meeting details can be included in your booking workflow.",
  },
  {
    question: "Is Cal.com suitable for businesses and enterprises?",
    answer:
      "Yes. Businesses can use Cal.com for team availability, scheduling workflows, integrations, and centralized scheduling. Enterprise options provide additional capabilities for organizational requirements.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden border-y border-[#dedede] bg-[#f4f4f5] px-4 py-16 sm:px-7 sm:py-24 lg:px-10 lg:py-32">
      {/* Page guide lines */}
      {/* <div className="pointer-events-none absolute inset-y-0 left-[10.5%] hidden border-l border-[#e1e1e1] lg:block" />
      <div className="pointer-events-none absolute inset-y-0 right-[10.5%] hidden border-l border-[#e1e1e1] lg:block" /> */}

      <div className="relative mx-auto max-w-[1000px]">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-[850px] text-center sm:mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e7e7e7] bg-white px-3 py-1.5 text-[13px] shadow-sm">
            <CircleHelp size={15} />
            FAQ
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-[-0.055em] text-[#242424] sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[1.12]">
            Frequently asked questions
          </h2>

          <p className="mt-5 text-base text-[#858585] sm:text-lg">
            These are some of our most frequently asked questions.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button to="/contact" variant="dark">
              Talk to sales
              <ChevronRight className="ml-2 inline" size={17} />
            </Button>

            <Button to="/signup" variant="light">
              Get started
              <ChevronRight className="ml-2 inline" size={17} />
            </Button>
          </div>
        </div>

        {/* Accordion */}
        <div className="w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={faq.question}
                className="border-b border-[#dedede]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  className="flex w-full items-center justify-between gap-5 py-5 text-left sm:py-6"
                >
                  <span className="text-base font-semibold tracking-[-0.02em] text-[#252525] sm:text-[19px]">
                    {faq.question}
                  </span>

                  <span className="shrink-0 text-[#242424]">
                    {isOpen ? (
                      <X size={19} strokeWidth={1.8} />
                    ) : (
                      <Plus size={19} strokeWidth={1.8} />
                    )}
                  </span>
                </button>

                <div
                  id={answerId}
                  hidden={!isOpen}
                  className="pb-6 pr-2 sm:pr-5"
                >
                  <p className="max-w-none text-[15px] leading-[1.75] text-[#929292] sm:text-[17px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Globe2,
  MapPin,
  ShieldCheck,
  Video,
} from "lucide-react";
import Button from "../ui/Button";

const APPOINTMENTS = [
  {
    name: "Emma Brown",
    initials: "EB",
    title: "Office Hours",
    description:
      "Join a virtual meeting to discuss your child's academic progress and development plan.",
    duration: "15m",
    durations: ["15m", "30m", "45m", "1h"],
    location: "MS Teams",
    locationType: "video",
    timezone: "America/New York",
    selectedDay: 6,
    availableDays: [6, 7, 8, 15, 20, 21, 22],
    accent: "bg-emerald-100 text-emerald-800",
  },
  {
    name: "Alex Morgan",
    initials: "AM",
    title: "Enterprise Demo",
    description:
      "Discover how automated scheduling can simplify workflows across your organization.",
    duration: "30m",
    durations: ["15m", "30m", "45m", "1h"],
    location: "Google Meet",
    locationType: "video",
    timezone: "America/New York",
    selectedDay: 8,
    availableDays: [6, 8, 9, 15, 20, 21, 27, 28],
    accent: "bg-sky-100 text-sky-800",
  },
  {
    name: "Jordan Lee",
    initials: "JL",
    title: "Sales Consultation",
    description:
      "Let's discuss your team's scheduling needs and find the right solution for your business.",
    duration: "45m",
    durations: ["15m", "30m", "45m", "1h"],
    location: "Zoom",
    locationType: "video",
    timezone: "Europe/London",
    selectedDay: 15,
    availableDays: [7, 9, 15, 16, 20, 21, 22, 29],
    accent: "bg-violet-100 text-violet-800",
  },
  {
    name: "Cédric van Ravesteijn",
    initials: "CV",
    title: "Partnerships Meeting",
    description:
      "Let's explore how our teams can work together and create new opportunities.",
    duration: "15m",
    durations: ["15m", "30m", "45m", "1h"],
    location: "Cal Video",
    locationType: "video",
    timezone: "Europe/Amsterdam",
    selectedDay: 20,
    availableDays: [15, 16, 20, 21, 22, 23, 27, 28, 29],
    accent: "bg-slate-200 text-slate-700",
  },
  {
    name: "Denise Wilson",
    initials: "DW",
    title: "Property Viewing",
    description:
      "Tour your potential dream home with our experienced real estate professionals.",
    duration: "45m",
    durations: ["15m", "30m", "45m", "1h"],
    location: "Pine Realty Office",
    locationType: "place",
    timezone: "Australia/Sydney",
    selectedDay: 21,
    availableDays: [15, 16, 20, 21, 22, 23, 27, 28, 29, 30],
    accent: "bg-amber-100 text-amber-800",
  },
];

function BookingPreview({ appointment }) {
  const [selectedDuration, setSelectedDuration] = useState(
    appointment.duration
  );
  const [selectedDay, setSelectedDay] = useState(
    appointment.selectedDay
  );

  useEffect(() => {
    setSelectedDuration(appointment.duration);
    setSelectedDay(appointment.selectedDay);
  }, [appointment]);

  // May 2025 starts on Thursday.
  const firstDayOfMonth = new Date(2025, 4, 1).getDay();
  const daysInMonth = new Date(2025, 5, 0).getDate();

  const calendarCells = [
    ...Array(firstDayOfMonth).fill(null),
    ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
  ];

  const hasAvailability = (day) =>
    appointment.availableDays.includes(day);

  return (
    <div className="overflow-hidden rounded-xl border border-[#e0e2e5] bg-white">
      <div className="grid min-h-[390px] grid-cols-1 md:grid-cols-[0.95fr_1.05fr]">
        {/* Profile and appointment details */}
        <div className="border-b border-[#e0e2e5] p-6 sm:p-7 md:border-b-0 md:border-r">
          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#e9eee8]">
            <CalendarDays size={18} className="text-[#455c4a]" />
          </div>

          <p className="text-sm text-[#777]">{appointment.name}</p>

          <h3 className="mt-1 text-xl font-bold tracking-tight text-black">
            {appointment.title}
          </h3>

          <p className="mt-2 text-sm leading-[1.6] text-[#858585]">
            {appointment.description}
          </p>

          {/* Duration selector */}
          <div className="mt-5 flex items-center gap-2">
            <Clock3 size={17} className="shrink-0 text-gray-500" />

            <div className="flex min-w-0 flex-1 rounded-xl bg-[#f3f3f4] p-1">
              {appointment.durations.map((duration) => (
                <button
                  key={duration}
                  type="button"
                  onClick={() => setSelectedDuration(duration)}
                  className={`flex-1 rounded-lg px-1 py-2 text-xs transition sm:text-sm ${
                    selectedDuration === duration
                      ? "bg-white font-semibold text-black shadow-sm ring-1 ring-black/5"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {duration}
                </button>
              ))}
            </div>
          </div>

          {/* Meeting location */}
          <p className="mt-5 flex items-center gap-2 text-sm text-[#777]">
            {appointment.locationType === "place" ? (
              <MapPin size={17} className="shrink-0" />
            ) : (
              <Video size={17} className="shrink-0" />
            )}
            <span>{appointment.location}</span>
          </p>

          {/* Timezone */}
          <button
            type="button"
            className="mt-5 flex items-center gap-1.5 text-left text-sm text-[#777]"
          >
            <Globe2 size={17} className="shrink-0" />
            <span className="break-all">{appointment.timezone}</span>
            <ChevronDown size={13} className="shrink-0" />
          </button>
        </div>

        {/* Calendar */}
        <div className="min-w-0 p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-[#222]">
              May <span className="font-normal text-[#64748b]">2025</span>
            </h3>

            <div className="flex gap-1">
              <button
                type="button"
                aria-label="Previous month"
                className="rounded-md p-1 text-gray-400 hover:bg-gray-100"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                aria-label="Next month"
                className="rounded-md p-1 text-gray-400 hover:bg-gray-100"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-7 gap-1 text-center sm:gap-1.5">
            {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
              (day) => (
                <span
                  key={day}
                  className="py-2 text-[9px] font-medium text-[#64748b] sm:text-[11px]"
                >
                  {day}
                </span>
              )
            )}

            {calendarCells.map((day, index) => {
              const available = day !== null && hasAvailability(day);
              const selected = day === selectedDay;

              return (
                <div key={index} className="aspect-square min-w-0">
                  {day !== null && (
                    <button
                      type="button"
                      disabled={!available}
                      onClick={() => setSelectedDay(day)}
                      aria-label={`May ${day}${available ? ", available" : ", unavailable"}`}
                      className={`relative h-full w-full rounded-md text-xs transition-colors sm:text-sm ${
                        selected
                          ? "bg-[#374151] text-white"
                          : available
                            ? "bg-[#e5e7eb] text-[#111827] hover:bg-[#d1d5db]"
                            : "text-[#858585]"
                      }`}
                    >
                      {day}
                      {available && !selected && (
                        <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-black" />
                      )}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function ReviewBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 pt-8 sm:justify-start">
      <div>
        <div className="flex gap-0.5 text-lg text-emerald-500">
          {"★★★★★".split("").map((star, index) => (
            <span
              key={index}
              className="bg-emerald-500 px-0.5 text-white"
            >
              {star}
            </span>
          ))}
        </div>
        <p className="mt-1 text-xs font-semibold text-[#222]">
          ★ Trustpilot
        </p>
      </div>

      <div>
        <div className="text-xl tracking-[2px] text-[#efa83c]">
          ★★★★★
        </div>
        <p className="mt-1 text-xs font-semibold text-[#777]">
          Product reviews
        </p>
      </div>

      <div>
        <div className="text-xl tracking-[2px] text-[#ff4939]">
          ★★★★★
        </div>
        <p className="mt-1 text-xs font-semibold text-[#777]">
          Customer ratings
        </p>
      </div>
    </div>
  );
}

export default function EnterpriseHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex(
        (current) => (current + 1) % APPOINTMENTS.length
      );
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  const appointment = APPOINTMENTS[activeIndex];

  return (
    <section className="rounded-2xl border border-[#e1e1e1] bg-white px-5 py-12 shadow-[0_2px_5px_rgba(0,0,0,0.04)] sm:px-8 sm:py-16 lg:px-8 lg:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        {/* Enterprise hero copy */}
        <div className="mx-auto w-full max-w-[540px] lg:mx-0">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e0e0e0] bg-white px-3 py-1.5 text-xs font-medium text-[#333] shadow-sm">
            <ShieldCheck size={14} />
            Enterprise
          </span>

          <h1 className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold leading-[1.06] tracking-[-0.065em] text-[#252525]">
            The operating system for scheduling
          </h1>

          <p className="mt-6 max-w-[500px] text-base leading-[1.65] text-[#858585] sm:text-lg">
            Close more deals faster with scheduling that looks great and works
            well every time.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button to="/contact" variant="dark">
              Talk to sales
            </Button>

            <Button to="/signup" variant="light">
              Get started
            </Button>
          </div>
        </div>

        {/* Rotating booking preview */}
        <div
          className="min-w-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
        >
          <div
            key={activeIndex}
            className="animate-[bookingFade_500ms_ease_both]"
          >
            <BookingPreview appointment={appointment} />
          </div>

          <ReviewBadges />

          {/* Slide indicators */}
          <div className="mt-5 flex items-center justify-center gap-2 sm:justify-start">
            {APPOINTMENTS.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${item.title}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-7 bg-[#333]"
                    : "w-1.5 bg-[#d1d5db] hover:bg-[#999]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

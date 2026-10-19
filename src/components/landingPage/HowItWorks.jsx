
import { useEffect, useState } from "react";
import {
  CalendarDays,
  Calendar,
  Clock3,
  Plus,
  Copy,
  Video,
  MicOff,
  MessageCircle,
  Monitor,
  CircleDot,
  UserRound,
} from "lucide-react";
import Button from "../ui/Button";

const AVAILABILITY_STATES = [
  [true, false, true],
  [true, true, false],
  [false, true, true],
  [true, true, true],
  [false, false, false],
  [true, false, true],
  [false, true, false],
  [true, true, false],
  [false, false, true],
];

function SectionBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e5e5e5] bg-white px-3.5 py-1.5 text-xs font-medium text-[#252525] shadow-[0_3px_12px_rgba(0,0,0,0.05)]">
      <span className="flex items-center">
        <span className="h-2.5 w-2.5 rounded-[2px] border border-current" />
        <span className="-ml-1.5 mt-1 h-2.5 w-2.5 rounded-[2px] border border-current bg-white" />
      </span>
      How it works
    </span>
  );
}

/* -------------------------------------------------------
   CARD 1: Calendar integrations orbit around Cal.com
------------------------------------------------------- */

function CalendarOrbit() {
  return (
    <div className="relative mx-auto h-[240px] w-full max-w-[340px] overflow-hidden">
      {/* Orbit rings */}
      <div className="absolute left-1/2 top-1/2 h-[125px] w-[125px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#eeeeee]" />

      <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#eeeeee]" />

      <div className="absolute left-1/2 top-1/2 h-[235px] w-[235px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#eeeeee]" />

      {/* Orbiting icons */}
      <div className="calendar-orbit calendar-orbit-one">
        <span className="calendar-orbit-icon">
          <CalendarDays size={18} className="text-[#4285f4]" />
        </span>
      </div>

      <div className="calendar-orbit calendar-orbit-two">
        <span className="calendar-orbit-icon">
          <Calendar size={18} className="text-[#34a853]" />
        </span>
      </div>

      <div className="calendar-orbit calendar-orbit-three">
        <span className="calendar-orbit-icon">
          <CalendarDays size={18} className="text-[#ea4335]" />
        </span>
      </div>

      {/* Center logo */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="rounded-full border border-[#e2e2e2] bg-[#f8f8f8] px-4 py-2 text-sm font-bold tracking-tight text-[#222] shadow-sm">
          Cal.com
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   CARD 2: Availability toggles
------------------------------------------------------- */

function ToggleSwitch({ enabled }) {
  return (
    <span
      className={`relative inline-flex h-[17px] w-[32px] shrink-0 rounded-full transition-colors duration-300 ${
        enabled ? "bg-[#252525]" : "bg-[#e7e7e7]"
      }`}
    >
      <span
        className={`absolute top-[2px] h-[13px] w-[13px] rounded-full bg-white shadow-sm transition-transform duration-300 ${
          enabled ? "translate-x-[17px]" : "translate-x-[2px]"
        }`}
      />
    </span>
  );
}

function AvailabilityRow({
  day,
  enabled,
  start,
  end,
}) {
  return (
    <div
      className={`grid grid-cols-[32px_30px_minmax(0,1fr)_10px_minmax(0,1fr)_18px_18px] items-center gap-1.5 transition-all duration-500 sm:gap-2 ${
        enabled
          ? "opacity-100 blur-0"
          : "opacity-45 blur-[0.5px]"
      }`}
    >
      <ToggleSwitch enabled={enabled} />

      <span className="text-[10px] text-[#666] sm:text-xs">
        {day}
      </span>

      <span className="truncate rounded-lg border border-[#e7e7e7] bg-white px-1 py-2 text-center text-[10px] text-[#777] sm:text-xs">
        {start}
      </span>

      <span className="text-center text-xs text-[#777]">–</span>

      <span className="truncate rounded-lg border border-[#e7e7e7] bg-white px-1 py-2 text-center text-[10px] text-[#777] sm:text-xs">
        {end}
      </span>

      <Plus size={15} className="text-[#777]" />

      <Copy size={14} className="text-[#777]" />
    </div>
  );
}

function AvailabilityPreview() {
  const [enabledDays, setEnabledDays] = useState(
    AVAILABILITY_STATES[0]
  );

  useEffect(() => {
    let step = 0;
    let timeoutId;

    const scheduleNext = () => {
      const delay = 2000 + Math.random() * 1000;

      timeoutId = window.setTimeout(() => {
        step += 1;

        // Periodically show every day switched off.
        const nextState =
          step % 5 === 0
            ? [false, false, false]
            : AVAILABILITY_STATES[
                Math.floor(Math.random() * AVAILABILITY_STATES.length)
              ];

        setEnabledDays(nextState);
        scheduleNext();
      }, delay);
    };

    scheduleNext();

    return () => window.clearTimeout(timeoutId);
  }, []);

  const rows = [
    { day: "Mon", start: "8:30 am", end: "5:00 pm" },
    { day: "Tue", start: "9:00 am", end: "6:30 pm" },
    { day: "Wed", start: "10:00 am", end: "7:00 pm" },
  ];

  return (
    <div className="relative mx-auto h-[240px] w-full max-w-[340px] overflow-hidden">
      {/* Layered settings panels */}
      <div className="absolute left-[15%] right-[-14%] top-[34px] h-[175px] rounded-t-xl border border-[#e5e5e5] bg-white" />

      <div className="absolute left-[10%] right-[-9%] top-[47px] h-[175px] rounded-t-xl border border-[#e5e5e5] bg-white" />

      {/* Main availability panel */}
      <div className="absolute bottom-[-26px] left-[5%] right-[-16%] top-[60px] rounded-t-xl border border-[#e1e1e1] bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.02)]">
        <div className="flex items-center gap-1 border-b border-[#e9e9e9] px-3 py-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#dedede]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#dedede]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#dedede]" />
        </div>

        <div className="space-y-3 px-3 py-5 sm:px-4">
          {rows.map((row, index) => (
            <AvailabilityRow
              key={row.day}
              {...row}
              enabled={enabledDays[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   CARD 3: Video meeting participant
------------------------------------------------------- */

function MeetingPreview() {
  return (
    <div className="relative mx-auto h-[240px] w-full max-w-[340px] overflow-hidden">
      {/* Browser window */}
      <div className="absolute bottom-[-24px] left-0 right-[-15%] top-[34px] overflow-hidden rounded-t-xl border border-[#e0e0e0] bg-white">
        <div className="flex h-[35px] items-center gap-1.5 border-b border-[#e5e5e5] px-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#dedede]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#dedede]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#dedede]" />
        </div>

        {/* Meeting layout */}
        <div className="grid h-[190px] grid-cols-2">
          <div className="border-r border-[#e5e5e5]" />

          <div className="relative flex items-center justify-center overflow-hidden">
            {/* Expanding and collapsing slate */}
            <div className="meeting-avatar-halo absolute h-[84px] w-[84px] rounded-full bg-[#f4f4f4]" />

            <div className="relative z-10 flex h-20 w-20 items-center justify-center">
              <UserRound
                size={58}
                strokeWidth={1.4}
                fill="#262626"
                className="text-[#262626]"
              />
            </div>
          </div>
        </div>

        {/* Meeting controls */}
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-[#e5e5e5] bg-white px-3 py-2.5 shadow-sm">
          <Video size={13} fill="#262626" />
          <MicOff size={13} />
          <MessageCircle size={13} fill="#262626" />
          <Monitor size={13} />
          <CircleDot size={13} />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   Reusable step card
------------------------------------------------------- */

function StepCard({
  number,
  title,
  description,
  children,
}) {
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-[20px] border border-[#e5e5e5] bg-white p-5 shadow-[0_3px_7px_rgba(0,0,0,0.07)] transition-shadow duration-300 hover:shadow-[0_7px_20px_rgba(0,0,0,0.07)] sm:p-6">
      <span className="inline-flex h-8 w-9 items-center justify-center self-start rounded-lg bg-[#e7e9ed] text-sm font-semibold text-[#647084]">
        {number}
      </span>

      <h3 className="mt-4 text-[19px] font-semibold tracking-[-0.5px] text-[#242424] sm:text-xl">
        {title}
      </h3>

      <p className="mt-1.5 min-h-[72px] text-[15px] leading-[1.65] text-[#858585] sm:text-base">
        {description}
      </p>

      <div className="mt-auto pt-4">
        {children}
      </div>
    </article>
  );
}

export default function HowItWorks() {
  return (
    <section className="px-5 pb-24 pt-20 sm:px-8 sm:pb-28 sm:pt-24 lg:px-12">
      {/* Heading */}
      <div className="flex flex-col items-center text-center">
        <SectionBadge />

        <h2 className="mt-6 max-w-5xl text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.12] tracking-[-0.055em] text-[#252525]">
          With us, appointment scheduling is easy
        </h2>

        <p className="mt-5 max-w-[650px] text-base leading-relaxed text-[#858585] sm:text-lg">
          Effortless scheduling for business and individuals, powerful
          solutions for fast-growing modern companies.
        </p>

       
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Button to="/signup" variant="dark">
            Get started
        </Button>

        <Button to="/demo" variant="light">
            Book a demo
        </Button>
        </div>

      </div>

      {/* Three animated cards */}
      <div className="mx-auto mt-12 grid max-w-[1180px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:gap-5">
        <StepCard
          number="01"
          title="Connect your calendar"
          description="We'll handle all the cross-referencing, so you don't have to worry about double bookings."
        >
          <CalendarOrbit />
        </StepCard>

        <StepCard
          number="02"
          title="Set your availability"
          description="Want to block off weekends? Set up any buffers? We make that easy."
        >
          <AvailabilityPreview />
        </StepCard>

        <StepCard
          number="03"
          title="Choose how to meet"
          description="It could be a video chat, phone call, or a walk in the park!"
        >
          <MeetingPreview />
        </StepCard>
      </div>
    </section>
  );
}

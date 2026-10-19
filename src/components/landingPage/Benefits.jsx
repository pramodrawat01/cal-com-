
import { useEffect, useState } from "react";
import {
  ArrowDownUp,
  CalendarClock,
  CalendarDays,
  CalendarPlus,
  Check,
  ChevronDown,
  Clock3,
  CreditCard,
  Globe2,
  Languages,
  Link2,
  MapPin,
  MessageSquare,
  MousePointer2,
  Plus,
  ShieldCheck,
  Video,
  Workflow,
  X,
} from "lucide-react";
import Button from "../ui/Button";
import '../../styles/Benefits.css';

const bookingProfiles = [
  {
    name: "Cédric van Ravesteijn",
    title: "Partnerships & Collaborations",
    description:
      "Are you an agency, influencer, SaaS founder, or business looking to collaborate with Cal.com? Let's chat!",
    duration: "30m",
    location: "Cal Video",
    timezone: "Europe/Amsterdam",
    initials: "CV",
    color: "#dce7dc",
  },
  {
    name: "Peer Richelsen",
    title: "German Lessons",
    description: "Let's learn German!",
    duration: "1h",
    location: "Google Meet",
    timezone: "Europe/Hamburg",
    initials: "PR",
    color: "#dce9ee",
  },
  {
    name: "Rajiv Sahal",
    title: "Platform API Meeting",
    description:
      "Interested in building on top of Cal.com or integrating our platform API into your product? Let's explore what's possible.",
    duration: "45m",
    location: "Google Meet",
    timezone: "South America/Buenos Aires",
    initials: "RS",
    color: "#e8e3d7",
  },
  {
    name: "Denise Wilson",
    title: "Property Viewing",
    description:
      "Tour your potential dream home with our experienced real estate professionals.",
    duration: "45m",
    location: "Pine Realty Office",
    timezone: "Australia/Sydney",
    initials: "DW",
    color: "#e7e0ed",
  },
  {
    name: "Michael Oliver",
    title: "Legal Consultation",
    description:
      "Discuss your legal matters with our experienced attorneys in a private consultation.",
    duration: "30m",
    location: "Zoom",
    timezone: "Europe/London",
    initials: "MO",
    color: "#e5e5e5",
  },
];

const features = [
  {
    title: "Accept payments",
    description:
      "You can monetize your bookings through our Stripe integration.",
    icon: CreditCard,
  },
  {
    title: "Built-in video conferencing",
    description:
      "Meet face-to-face with built-in video conferencing for your bookings.",
    icon: Video,
  },
  {
    title: "Short booking links",
    description:
      "Create memorable booking links that are easy to share.",
    icon: Link2,
  },
  {
    title: "Privacy first",
    description:
      "Keep your scheduling data private and your meetings secure.",
    icon: ShieldCheck,
  },
  {
    title: "65+ languages",
    description:
      "Let invitees schedule meetings in their preferred language.",
    icon: Languages,
  },
  {
    title: "Easy embeds",
    description:
      "Embed your scheduling page directly into your website.",
    icon: CalendarPlus,
  },
  {
    title: "All your favorite apps",
    description:
      "Connect the tools you already use to simplify your workflow.",
    icon: Workflow,
  },
  {
    title: "Simple customization",
    description:
      "Customize your booking experience to match your brand.",
    icon: MousePointer2,
  },
];

function BenefitsHeading() {
  return (
    <div className="benefits-heading text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-[#e5e5e5] bg-white px-3 py-1.5 text-xs font-medium shadow-sm">
        <CalendarDays size={14} />
        Benefits
      </span>

      <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-bold tracking-[-0.055em] text-[#252525] sm:text-4xl lg:text-5xl">
        Your all-purpose scheduling app
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#858585] sm:text-base">
        Discover a variety of our advanced features. Unlimited and
        free for individuals.
      </p>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
        <Button to="/signup" variant="dark">
          Get started
        </Button>
        <Button to="/demo" variant="light">
          Book a demo
        </Button>
      </div>
    </div>
  );
}

const settings = [
  {
    notice: "2 days",
    before: "0 mins",
    after: "30 mins",
    interval: "1 hour",
  },
  {
    notice: "1 day",
    before: "15 mins",
    after: "15 mins",
    interval: "30 mins",
  },
  {
    notice: "4 hours",
    before: "5 mins",
    after: "45 mins",
    interval: "15 mins",
  },
  {
    notice: "12 hours",
    before: "0 mins",
    after: "15 mins",
    interval: "1 hour",
  },
  {
    notice: "3 days",
    before: "30 mins",
    after: "30 mins",
    interval: "2 hours",
  },
];

function SelectField({ label, value }) {
  return (
    <label className="min-w-0">
      <span className="mb-1.5 block text-xs font-medium text-black sm:text-sm">
        {label}
      </span>
      <span className="flex h-10 items-center justify-between rounded-xl border border-[#e1e1e1] bg-white px-3 text-xs text-[#252525] sm:text-sm">
        {value}
        <ChevronDown size={15} className="shrink-0" />
      </span>
    </label>
  );
}

function NoticeBuffersCard() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % settings.length);
    }, 1600);

    return () => clearInterval(timer);
  }, []);

  const current = settings[index];

  return (
    <div className="benefit-card flex min-w-0 flex-col overflow-hidden rounded-[20px] border border-[#e2e2e2] bg-white p-5 shadow-[0_3px_7px_rgba(0,0,0,0.06)] sm:p-6">
      <h3 className="text-lg font-semibold tracking-tight text-[#171717]">
        Avoid meeting overload
      </h3>
      <p className="mt-1.5 text-sm leading-[1.6] text-[#858585] sm:text-base">
        Only get booked when you want to. Set daily, weekly or monthly
        limits and add buffers around your events to allow you to focus
        or take a break.
      </p>

      <div className="benefit-mockup-space relative mt-6 min-h-[285px] flex-1 pt-3 sm:mt-7">
        <div className="absolute inset-x-3 top-0 h-10 rounded-t-2xl border border-[#e2e2e2] bg-white" />
        <div className="absolute inset-x-1 top-3 h-10 rounded-t-2xl border border-[#e2e2e2] bg-white" />

        <div
          className="relative z-10 rounded-t-2xl border border-[#e2e2e2] bg-white p-4 sm:p-5"
          key={index}
        >
          <h4 className="text-base font-semibold tracking-tight">
            Notice and buffers
          </h4>

          <div className="mt-4">
            <SelectField label="Minimum notice" value={current.notice} />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <SelectField
              label="Buffer before event"
              value={current.before}
            />
            <SelectField
              label="Buffer after event"
              value={current.after}
            />
          </div>

          <div className="mt-4">
            <SelectField
              label="Time-slot intervals"
              value={current.interval}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function BookingLinkCard() {
  const [profileIndex, setProfileIndex] = useState(0);
  const [durationIndex, setDurationIndex] = useState(0);

  const profile = bookingProfiles[profileIndex];
  const durations = ["15m", "30m", "45m", "1h"];

  useEffect(() => {
    const timer = setInterval(() => {
      setProfileIndex((current) => (current + 1) % bookingProfiles.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setDurationIndex(durations.indexOf(profile.duration));
  }, [profile.duration]);

  return (
    <div className="benefit-card flex min-w-0 flex-col overflow-hidden rounded-[20px] border border-[#e2e2e2] bg-white p-5 shadow-[0_3px_7px_rgba(0,0,0,0.06)] sm:p-6">
      <h3 className="text-lg font-semibold tracking-tight text-[#171717]">
        Stand out with a custom booking link
      </h3>
      <p className="mt-1.5 text-sm leading-[1.6] text-[#858585] sm:text-base">
        Customize your booking link so it’s short and easy to remember
        for your bookers. No more long, complicated links one can easily
        forget.
      </p>

      <div className="benefit-mockup-space relative mt-6 min-h-[285px] flex-1 pt-5">
        <div className="absolute inset-x-5 top-1 h-10 rounded-t-2xl border border-[#e2e2e2] bg-white" />

        <div className="relative z-10 mx-1 mt-2 min-h-[300px] rounded-t-2xl border border-[#e2e2e2] bg-white px-4 pb-5 pt-7 sm:mx-4 sm:px-5">
          <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-2xl border border-[#e1e1e1] bg-[#f4f4f4] px-3 py-2 text-lg font-bold tracking-tight">
            cal.com/{profile.name.split(" ")[0].toLowerCase()}
          </div>

          <div
            key={profileIndex}
            className="animate-[bookingFade_500ms_ease_both]"
          >
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-bold text-[#333]"
              style={{ backgroundColor: profile.color }}
            >
              {profile.initials}
            </div>

            <p className="mt-2 text-sm text-[#858585]">{profile.name}</p>
            <h4 className="mt-0.5 text-lg font-semibold leading-snug tracking-tight text-black">
              {profile.title}
            </h4>
            <p className="mt-2 text-sm leading-[1.55] text-[#858585]">
              {profile.description}
            </p>

            <div className="mt-4 flex items-center gap-2">
              <Clock3 size={16} className="shrink-0 text-[#737b89]" />
              <div className="flex min-w-0 items-center rounded-xl bg-[#f3f3f5] p-1">
                {durations.map((duration, index) => (
                  <span
                    key={duration}
                    className={`rounded-lg px-2 py-1.5 text-xs sm:px-2.5 ${
                      durationIndex === index
                        ? "bg-white text-black shadow-sm"
                        : "text-[#858585]"
                    }`}
                  >
                    {duration}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-4 flex items-center gap-2 text-sm text-[#858585]">
              <Video size={15} />
              {profile.location}
            </p>

            <p className="mt-4 flex items-center gap-2 text-sm text-[#858585]">
              <Globe2 size={15} />
              <span className="truncate">{profile.timezone}</span>
              <ChevronDown size={13} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const calendarEvents = [
  { day: 0, title: "Lunch date", time: "12 PM – 1 PM", tone: "purple" },
  { day: 1, title: "Coffee", time: "11 AM – 12 PM", tone: "purple" },
  { day: 2, title: "Design conference", time: "2 PM – 3 PM", tone: "gray" },
  { day: 3, title: "Team sync", time: "10 AM – 11 AM", tone: "purple" },
  { day: 4, title: "Planning", time: "1 PM – 2 PM", tone: "gray" },
];

function CalendarOverlayCard() {
  const [visibleEvents, setVisibleEvents] = useState(0);
  const [overlayEnabled, setOverlayEnabled] = useState(true);
  const [hours, setHours] = useState("12h");

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleEvents((current) =>
        current >= calendarEvents.length ? 0 : current + 1
      );
    }, 1300);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="benefit-card flex min-w-0 flex-col overflow-hidden rounded-[20px] border border-[#e2e2e2] bg-white p-5 shadow-[0_3px_7px_rgba(0,0,0,0.06)] sm:p-6">
      <h3 className="text-lg font-semibold tracking-tight text-[#171717]">
        Streamline your bookers’ experience
      </h3>
      <p className="mt-1.5 text-sm leading-[1.6] text-[#858585] sm:text-base">
        Let your bookers overlay their calendar, receive booking
        confirmations via text or email, get events added to their
        calendar, and allow them to reschedule with ease.
      </p>

      <div className="relative mt-6 min-h-[250px] flex-1 overflow-hidden rounded-t-2xl border border-[#e2e2e2] bg-white">
        
        <div className="flex h-12 items-center justify-end gap-2 border-b border-[#e2e2e2] px-3 sm:px-4">
          <button
            type="button"
            onClick={() => setOverlayEnabled((value) => !value)}
            aria-label="Toggle calendar overlay"
            className={`relative h-5 w-9 rounded-full transition-colors ${
              overlayEnabled ? "bg-[#252525]" : "bg-[#d6d6d6]"
            }`}
          >
            <span
              className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-all ${
                overlayEnabled ? "left-[18px]" : "left-0.5"
              }`}
            />
          </button>
          <span className="whitespace-nowrap text-xs font-medium">
            Overlay my calendar
          </span>

          <div className="flex rounded-lg bg-[#f3f3f5] p-0.5">
            {["12h", "24h"].map((option) => (
              <button
                type="button"
                key={option}
                onClick={() => setHours(option)}
                className={`rounded-md px-2 py-1 text-[10px] ${
                  hours === option
                    ? "bg-white text-black shadow-sm"
                    : "text-[#858585]"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-5 border-b border-[#e2e2e2] text-center text-xs text-[#858585]">
          {["Wed 06", "Thu 07", "Fri 08", "Sat 09", "Sun 10"].map(
            (day) => (
              <div key={day} className="py-3">
                {day}
              </div>
            )
          )}
        </div>

        <div className="relative grid grid-cols-5">
          {Array.from({ length: 15 }, (_, index) => (
            <div
              key={index}
              className="relative h-[54px] border-b border-r border-[#e2e2e2]"
            >
              {overlayEnabled &&
                calendarEvents.slice(0, visibleEvents).map((event, eventIndex) =>
                  event.day === index % 5 &&
                  Math.floor(index / 5) === (eventIndex % 3) ? (
                    <div
                      key={event.title}
                      className={`absolute inset-x-0.5 top-0.5 z-10 rounded-lg p-1.5 py-3 text-[10px] leading-tight animate-[bookingFade_350ms_ease_both] ${
                        event.tone === "purple"
                          ? "bg-[#eadcff] text-[#9b51d5]"
                          : "bg-[#f0f1f3] text-[#666]"
                      }`}
                    >
                      <strong className="block truncate">{event.title}</strong>
                      <span>{event.time}</span>
                    </div>
                  ) : null
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const reminders = [
  {
    title: "Booking rescheduled",
    description: "Melissa Smith has rescheduled the meeting to Wed, 25 Mar 15:00.",
    time: "30 mins",
  },
  {
    title: "Meeting reminder",
    description: "Your meeting starts soon. We look forward to seeing you at 04:55!",
    time: "1 hour",
  },
  {
    title: "Booking confirmed",
    description: "Your upcoming meeting has been successfully confirmed.",
    time: "Just now",
  },
];

function ReminderStackCard() {
  const [activeReminder, setActiveReminder] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReminder((current) => (current + 1) % reminders.length);
    }, 1800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="benefit-card flex min-w-0 flex-col overflow-hidden rounded-[20px] border border-[#e2e2e2] bg-white p-5 shadow-[0_3px_7px_rgba(0,0,0,0.06)] sm:p-6">
      <h3 className="text-lg font-semibold leading-snug tracking-tight text-[#171717]">
        Reduce no-shows with automated meeting reminders
      </h3>
      <p className="mt-1.5 text-sm leading-[1.6] text-[#858585] sm:text-base">
        Easily send SMS or meeting reminder emails about bookings,
        and send automated follow-ups to gather any relevant
        information before the meeting.
      </p>

      <div className="relative mt-auto min-h-[210px] flex-1">
        {reminders.map((reminder, index) => {
          const position =
            (index - activeReminder + reminders.length) % reminders.length;

          return (
            <div
              key={reminder.title}
              className="absolute left-1/2 flex w-[96%] max-w-[400px] mt-10 items-center gap-3 rounded-2xl border border-[#e2e2e2] bg-white p-3 shadow-sm transition-all duration-500"
              style={{
                top: `${44 + position * 22}px`,
                zIndex: reminders.length - position,
                opacity: position === 2 ? 0.45 : 1,
                transform: `translateX(-50%) scale(${
                  position === 0 ? 1 : position === 1 ? 0.97 : 0.94
                })`,
              }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#252525] text-sm font-bold text-white">
                Cal
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs font-semibold text-[#171717]">
                  {reminder.title}
                </h4>
                <p className="mt-1 line-clamp-2 text-[10px] leading-relaxed text-[#858585]">
                  {reminder.description}
                </p>
              </div>
              <span className="shrink-0 text-[9px] text-[#858585]">
                {reminder.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MoreFeatures() {
  return (
    <section className="pb-16 pt-20 sm:pb-24 sm:pt-24">
      <h2 className="text-center text-3xl font-bold tracking-[-0.055em] text-[#252525] sm:text-4xl lg:text-5xl">
        ...and so much more!
      </h2>

      
<div className="mx-auto mt-10 grid max-w-[860px] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-3.5">
  {features.map(({ title, description, icon: Icon }) => (
    <article
      key={title}
      tabIndex={0}
      className="feature-tile group relative flex h-[205px]  cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[18px] border border-[#e2e2e2] bg-white px-3 py-6 text-center shadow-[0_3px_7px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#777]"
    >
      {/* Dots that move to the card corners on hover */}
      <span className="feature-corner feature-corner-tl" />
      <span className="feature-corner feature-corner-tr" />
      <span className="feature-corner feature-corner-bl" />
      <span className="feature-corner feature-corner-br" />

      {/* Icon shown by default, hidden on hover */}
    <span className="feature-icon-box absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-200 group-hover:invisible group-hover:opacity-0 group-focus-visible:invisible group-focus-visible:opacity-0">
        <span className="relative flex h-[68px] w-[68px] items-center justify-center rounded-2xl border border-[#e1e1e1] bg-[#f6f6f6] text-[#333] shadow-sm">
            <Icon size={29} strokeWidth={2.4} />

            <span className="icon-dot icon-dot-tl" />
            <span className="icon-dot icon-dot-tr" />
            <span className="icon-dot icon-dot-bl" />
            <span className="icon-dot icon-dot-br" />
        </span>
        </span>

      {/* Title and description shown on hover */}
      <div className="flex flex-col items-center justify-center px-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <h3 className="text-sm font-semibold leading-snug text-[#333] sm:text-base">
          {title}
        </h3>

        <p className="mt-3 max-w-[210px] text-sm leading-relaxed text-[#858585]">
          {description}
        </p>
      </div>
    </article>
  ))}
</div>

    </section>
  );
}

export default function Benefits() {
  return (
    <section className="px-4 pb-6 pt-20 sm:px-6 sm:pt-24 lg:px-10">
      <BenefitsHeading />

      <div className="mx-auto mt-12 grid max-w-[1180px] grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-3.5">
        <NoticeBuffersCard />
        <BookingLinkCard />
        <CalendarOverlayCard />
        <ReminderStackCard />
      </div>

      <MoreFeatures />
    </section>
  );
}

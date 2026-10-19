
// import {
//   ArrowRight,
//   CalendarDays,
//   ChevronDown,
//   ChevronLeft,
//   ChevronRight,
//   Clock3,
//   Globe2,
//   MapPin,
// } from "lucide-react";

// const days = [
//   { day: 1, active: true },
//   { day: 2, active: true },
//   { day: 5 },
//   { day: 6, active: true },
//   { day: 7, active: true },
//   { day: 8, active: true },
//   { day: 9, active: true },
//   { day: 12 },
//   { day: 13 },
//   { day: 14 },
//   { day: 15, active: true },
//   { day: 16, active: true },
//   { day: 19 },
//   { day: 20, active: true },
//   { day: 21, active: true },
//   { day: 22, active: true },
//   { day: 23, active: true },
//   { day: 26 },
//   { day: 27, active: true },
//   { day: 28, active: true },
//   { day: 29, active: true },
//   { day: 30, active: true },
// ];

// function SignupButtons() {
//   return (
//     <div className="flex flex-col gap-3">
//       <button className="flex h-11 items-center justify-center gap-3 rounded-xl bg-[#252525] px-4 text-sm font-semibold text-white transition hover:bg-black">
//         <span className="text-lg font-bold text-[#4285F4]">G</span>
//         Sign up with Google
//       </button>

//       <button className="flex h-11 items-center justify-center gap-2 rounded-xl border border-[#e1e1e1] bg-gradient-to-b from-white to-[#ededed] px-4 text-sm font-medium text-[#333] transition hover:bg-white">
//         Sign up with email
//         <ChevronRight size={17} />
//       </button>

//       <p className="text-sm text-[#858585]">
//         No credit card required
//       </p>
//     </div>
//   );
// }

// function BookingPreview() {
//   return (
//     <div className="overflow-hidden rounded-xl border border-[#e0e2e5] bg-white">
//       <div className="grid min-h-[390px] grid-cols-1 md:grid-cols-[0.95fr_1.05fr]">
//         {/* Appointment information */}
//         <div className="border-b border-[#e0e2e5] p-6 sm:p-7 md:border-b-0 md:border-r">
//           <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#e9eee8]">
//             <CalendarDays size={18} className="text-[#455c4a]" />
//           </div>

//           <p className="text-sm text-[#777]">Dr. Sarah Smith</p>

//           <h3 className="mt-1 text-xl font-bold tracking-tight text-black">
//             Medical Appointment
//           </h3>

//           <p className="mt-2 text-sm leading-[1.6] text-[#858585]">
//             Welcome to Sacred Heart Hospital. Please pick a time for
//             your appointment.
//           </p>

//           <div className="mt-5 flex items-center gap-2">
//             <Clock3 size={16} className="shrink-0 text-gray-500" />
//             <div className="flex flex-wrap rounded-xl bg-[#f3f3f4] p-1 text-xs">
//               {["15m", "30m", "45m", "1h"].map((time) => (
//                 <button
//                   key={time}
//                   className={`rounded-lg px-2.5 py-2 ${
//                     time === "1h"
//                       ? "bg-white font-semibold text-black shadow-sm"
//                       : "text-gray-600"
//                   }`}
//                 >
//                   {time}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <p className="mt-5 flex items-center gap-2 text-sm text-[#777]">
//             <MapPin size={16} />
//             22 Street, Chicago
//           </p>

//           <button className="mt-5 flex items-center gap-2 text-left text-sm text-[#777]">
//             <Globe2 size={16} />
//             <span>Asia/Singapore</span>
//             <ChevronDown size={13} />
//           </button>
//         </div>

//         {/* Calendar */}
//         <div className="p-5 sm:p-7">
//           <div className="flex items-center justify-between">
//             <h3 className="font-semibold text-[#222]">
//               May <span className="font-normal text-[#64748b]">2025</span>
//             </h3>

//             <div className="flex gap-1">
//               <button
//                 aria-label="Previous month"
//                 className="rounded-md p-1 text-gray-400 hover:bg-gray-100"
//               >
//                 <ChevronLeft size={16} />
//               </button>
//               <button
//                 aria-label="Next month"
//                 className="rounded-md p-1 text-gray-400 hover:bg-gray-100"
//               >
//                 <ChevronRight size={16} />
//               </button>
//             </div>
//           </div>

//           <div className="mt-6 grid grid-cols-7 gap-1.5 text-center">
//             {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
//               (day) => (
//                 <span
//                   key={day}
//                   className="py-2 text-[10px] font-medium text-[#64748b] sm:text-[11px]"
//                 >
//                   {day}
//                 </span>
//               )
//             )}

//             {/* May 2025 starts on Thursday */}
//             {[null, null, null, null, ...days].map((item, index) => (
//               <div key={index} className="aspect-square">
//                 {item && (
//                   <button
//                     className={`relative h-full w-full rounded-md text-xs transition ${
//                       item.day === 27
//                         ? "bg-[#374151] text-white"
//                         : item.active
//                           ? "bg-[#e5e7eb] text-[#111827] hover:bg-[#d1d5db]"
//                           : "text-[#777] hover:bg-gray-100"
//                     }`}
//                   >
//                     {item.day}
//                     {item.day === 1 && (
//                       <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-black" />
//                     )}
//                   </button>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ReviewBadges() {
//   return (
//     <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 pt-8 sm:justify-start">
//       <div>
//         <div className="flex gap-0.5 text-lg text-emerald-500">
//           {"★★★★★".split("").map((star, i) => (
//             <span key={i} className="bg-emerald-500 px-0.5 text-white">
//               {star}
//             </span>
//           ))}
//         </div>
//         <p className="mt-1 text-xs font-semibold text-[#222]">
//           ★ Trustpilot
//         </p>
//       </div>

//       <div>
//         <div className="text-xl tracking-[2px] text-[#efa83c]">
//           ★★★★★
//         </div>
//         <p className="mt-1 text-xs font-semibold text-[#777]">
//           Product reviews
//         </p>
//       </div>

//       <div>
//         <div className="text-xl tracking-[2px] text-[#ff4939]">
//           ★★★★★
//         </div>
//         <p className="mt-1 text-xs font-semibold text-[#777]">
//           Customer ratings
//         </p>
//       </div>
//     </div>
//   );
// }

// export default function Hero() {
//   return (
//     <section className="rounded-2xl border border-[#e1e1e1] bg-white px-5 py-12 shadow-[0_2px_5px_rgba(0,0,0,0.04)] sm:px-8 sm:py-16 lg:px-8 lg:py-20">
//       <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
//         {/* Hero copy */}
//         <div className="mx-auto w-full max-w-[540px] lg:mx-0">
//           <a
//             href="#release"
//             className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e0e0e0] bg-[#f8f8f8] px-3 py-1.5 text-xs font-medium text-[#333] shadow-sm transition hover:bg-gray-100"
//           >
//             Cal.com launches v6.9.5
//             <ArrowRight size={13} />
//           </a>

//           <h1 className="text-[clamp(2.7rem,5vw,4.5rem)] font-bold leading-[1.06] tracking-[-0.065em] text-[#252525]">
//             The better way to schedule your meetings
//           </h1>

//           <p className="mt-6 max-w-[500px] text-base leading-[1.65] text-[#858585] sm:text-lg">
//             A fully customizable scheduling software for individuals,
//             businesses taking calls and developers building scheduling
//             platforms where users meet users.
//           </p>

//           <div className="mt-6 max-w-[490px]">
//             <SignupButtons />
//           </div>
//         </div>

//         {/* Booking mockup */}
//         <div className="min-w-0">
//           <BookingPreview />
//           <ReviewBadges />
//         </div>
//       </div>
//     </section>
//   );
// }




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
  Video,
} from "lucide-react";

const APPOINTMENTS = [
  {
    name: "Isabella Valce",
    initials: "IV",
    title: "Photoshoot",
    description:
      "Capture your special moments with our professional photography services today.",
    duration: "1h",
    durations: ["15m", "30m", "45m", "1h"],
    location: "Rock Wall Woods",
    locationType: "place",
    timezone: "South America/Rio de Janeiro",
    selectedDay: 7,
    availableDays: [1, 2, 6, 7, 8, 9, 15, 16, 21, 22, 27, 28, 29],
    accent: "bg-stone-200 text-stone-700",
  },
  {
    name: "Ethan Taylor",
    initials: "ET",
    title: "Academic Counseling",
    description:
      "Virtual counseling session for university students to discuss academic progress and well-being.",
    duration: "45m",
    durations: ["15m", "30m", "45m", "1h"],
    location: "Google Meet",
    locationType: "video",
    timezone: "America/California",
    selectedDay: 8,
    availableDays: [6, 7, 8, 9, 20, 21, 22, 23, 27, 28, 29, 30],
    accent: "bg-amber-100 text-amber-800",
  },
  {
    name: "Michael Oliver",
    initials: "MO",
    title: "Legal Consultation",
    description:
      "Discuss your legal matters with our experienced attorneys in a private consultation.",
    duration: "30m",
    durations: ["15m", "30m", "45m", "1h"],
    location: "Zoom",
    locationType: "video",
    timezone: "Europe/London",
    selectedDay: 9,
    availableDays: [1, 2, 6, 7, 9, 15, 16, 20, 21, 22, 23, 27, 28, 29, 30],
    accent: "bg-sky-100 text-sky-800",
  },
  {
    name: "Cédric van Ravesteijn",
    initials: "CV",
    title: "Partnerships Meeting",
    description:
      "Are you an agency, influencer, SaaS founder, or business looking to collaborate with Cal.com? Let's chat!",
    duration: "15m",
    durations: ["15m", "30m", "45m", "1h"],
    location: "Cal Video",
    locationType: "video",
    timezone: "Europe/Amsterdam",
    selectedDay: 15,
    availableDays: [15, 16, 20, 21, 22, 23, 27, 28, 29, 30],
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
    accent: "bg-emerald-100 text-emerald-800",
  },
];

function SignupButtons() {
  return (
    <div className="flex flex-col gap-3">
      <button className="flex h-11 items-center justify-center gap-3 rounded-xl bg-[#252525] px-4 text-sm font-semibold text-white transition hover:bg-black">
        <span className="text-lg font-bold text-[#4285F4]">G</span>
        Sign up with Google
      </button>

      <button className="flex h-11 items-center justify-center gap-2 rounded-xl border border-[#e1e1e1] bg-gradient-to-b from-white to-[#ededed] px-4 text-sm font-medium text-[#333] transition hover:bg-white">
        Sign up with email
        <ChevronRight size={17} />
      </button>

      <p className="text-sm text-[#858585]">
        No credit card required
      </p>
    </div>
  );
}

function BookingPreview({ appointment }) {
  const [selectedDuration, setSelectedDuration] = useState(
    appointment.duration
  );
  const [selectedDay, setSelectedDay] = useState(
    appointment.selectedDay
  );

  // Reset the selection whenever the appointment changes.
  useEffect(() => {
    setSelectedDuration(appointment.duration);
    setSelectedDay(appointment.selectedDay);
  }, [appointment]);

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
        {/* Appointment details */}
        <div className="border-b border-[#e0e2e5] p-6 sm:p-7 md:border-b-0 md:border-r">
          <div
            className={`mb-3 flex h-9 w-9 items-center justify-center rounded-full ${appointment.accent}`}
          >
            <span className="text-xs font-semibold">
              {appointment.initials}
            </span>
          </div>

          <p className="text-sm text-[#777]">
            {appointment.name}
          </p>

          <h3 className="mt-1 text-xl font-bold tracking-tight text-black">
            {appointment.title}
          </h3>

          <p className="mt-2 text-sm leading-[1.6] text-[#858585]">
            {appointment.description}
          </p>

          {/* Duration selector */}
          <div className="mt-5 flex items-center gap-2">
            <Clock3
              size={17}
              className="shrink-0 text-gray-500"
            />

            <div className="flex min-w-0 flex-1 rounded-xl bg-[#f3f3f4] p-1">
              {appointment.durations.map((duration) => (
                <button
                  key={duration}
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

          {/* Location */}
          <p className="mt-5 flex items-center gap-2 text-sm text-[#777]">
            {appointment.locationType === "place" ? (
              <MapPin size={17} className="shrink-0" />
            ) : (
              <Video size={17} className="shrink-0" />
            )}
            <span>{appointment.location}</span>
          </p>

          {/* Timezone */}
          <button className="mt-5 flex items-center gap-1.5 text-left text-sm text-[#777]">
            <Globe2 size={17} className="shrink-0" />
            <span className="break-all">
              {appointment.timezone}
            </span>
            <ChevronDown size={13} className="shrink-0" />
          </button>
        </div>

        {/* Calendar */}
        <div className="min-w-0 p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-[#222]">
              May{" "}
              <span className="font-normal text-[#64748b]">
                2025
              </span>
            </h3>

            <div className="flex gap-1">
              <button
                aria-label="Previous month"
                className="rounded-md p-1 text-gray-400 hover:bg-gray-100"
              >
                <ChevronLeft size={16} />
              </button>

              <button
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

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (
        current + 1
      ) % APPOINTMENTS.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  const appointment = APPOINTMENTS[activeIndex];

  return (
    <section className="rounded-2xl border border-[#e1e1e1] bg-white px-5 py-12 shadow-[0_2px_5px_rgba(0,0,0,0.04)] sm:px-8 sm:py-16 lg:px-8 lg:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        {/* Hero copy */}
        <div className="mx-auto w-full max-w-[540px] lg:mx-0">
          <a
            href="#release"
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e0e0e0] bg-[#f8f8f8] px-3 py-1.5 text-xs font-medium text-[#333] shadow-sm transition hover:bg-gray-100"
          >
            Cal.com launches v6.9.5
            <ArrowRight size={13} />
          </a>

          <h1 className="text-[clamp(2.7rem,5vw,4.5rem)] font-bold leading-[1.06] tracking-[-0.065em] text-[#252525]">
            The better way to schedule your meetings
          </h1>

          <p className="mt-6 max-w-[500px] text-base leading-[1.65] text-[#858585] sm:text-lg">
            A fully customizable scheduling software for individuals,
            businesses taking calls and developers building scheduling
            platforms where users meet users.
          </p>

          <div className="mt-6 max-w-[490px]">
            <SignupButtons />
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


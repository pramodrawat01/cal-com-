
import { useState } from "react";
import {
  ArrowLeft,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Eye,
  EyeOff,
  Globe2,
  Info,
  MapPin,
} from "lucide-react";

const timeSlots = [
  ["9:30 am", "10:00 am", "10:30 am", "11:00 am", "11:30 am", "12:00 pm", "12:30 pm", "5:30 pm", "6:30 pm"],
  ["9:30 am", "10:00 am", "10:30 am", "11:00 am", "11:30 am", "12:00 pm", "12:30 pm"],
  ["9:30 am", "10:00 am", "11:30 am", "6:30 pm"],
];

const calendarDays = [
  { day: 1, muted: true },
  { day: 2, muted: true },
  { day: 3, muted: true },
  { day: 4, muted: true },
  { day: 5 },
  { day: 6 },
  { day: 7 },
  { day: 8 },
  { day: 9 },
  { day: 10 },
  { day: 11 },
  { day: 12 },
  { day: 13 },
  { day: 14 },
  { day: 15 },
  { day: 16 },
  { day: 17 },
  { day: 18 },
  { day: 19 },
  { day: 20, active: true },
  { day: 21, active: true },
  { day: 22, active: true },
  { day: 23, active: true },
  { day: 24 },
  { day: 25 },
  { day: 26 },
  { day: 27, active: true },
  { day: 28, active: true },
  { day: 29, active: true },
  { day: 30, active: true },
];

function Laurel({ flip = false }) {
  return (
    <span
      aria-hidden="true"
      className={`text-[29px] leading-none text-black ${
        flip ? "-scale-x-100" : ""
      }`}
    >
      ❧
    </span>
  );
}

function Awards() {
  const awards = [
    { title: "Product of the day", rating: "P", color: "#F2A83B" },
    { title: "Product of the week", rating: "G", color: "#F5B400" },
    { title: "Product of the month", rating: "G²", color: "#FF4B35" },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-5">
      {awards.map((award, i) => (
        <div key={award.title} className="min-w-0">
          <div className="flex items-center justify-center gap-1">
            <Laurel />
            <div className="text-center text-[9px] font-bold leading-tight text-black sm:text-[10px]">
              <p className="whitespace-nowrap">{award.title}</p>
              <p className="mt-0.5 text-base">1st</p>
            </div>
            <Laurel flip />
          </div>

          <div className="mt-4 flex flex-col items-center gap-1.5 sm:items-start sm:pl-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className="text-[20px] leading-none sm:text-[23px]"
                  style={{ color: award.color }}
                >
                  {i === 2 && index === 4 ? "◐" : "★"}
                </span>
              ))}
            </div>

            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full text-lg font-bold ${
                award.rating === "G" ? "bg-transparent" : "text-white"
              }`}
              style={{
                backgroundColor:
                  award.rating === "G" ? "transparent" : award.color,
                color: award.rating === "G" ? "#4285F4" : "white",
              }}
            >
              {award.rating === "G" ? (
                <span className="text-[30px] font-bold">G</span>
              ) : (
                award.rating
              )}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function CalendarPreview() {
  return (
    <div className="w-full min-w-0 overflow-hidden rounded-[18px] border border-[#d9dce2] bg-white p-1.5 shadow-[0_0_0_7px_rgba(255,255,255,0.35)] sm:p-2">
      <div className="grid min-h-[440px] grid-cols-[42%_58%] overflow-hidden rounded-xl border border-[#e2e4e8] sm:min-h-[535px]">
        {/* Event profile and mini calendar */}
        <div className="flex min-w-0 flex-col border-r border-[#e0e2e6]">
          <div className="p-3 sm:p-5">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#d7e3db] text-[10px]">
                👩🏽
              </div>
              <span className="truncate text-[10px] font-medium text-[#667085] sm:text-xs">
                Alex Fisher
              </span>
            </div>

            <h3 className="text-sm font-bold tracking-tight text-[#171717] sm:text-lg">
              Design Workshop
            </h3>

            <div className="mt-3 space-y-3 text-[9px] text-[#475467] sm:text-xs">
              <p className="flex items-start gap-1.5">
                <Info size={13} className="shrink-0" />
                A longer chat to run through design.
              </p>
              <p className="flex items-center gap-1.5">
                <Clock3 size={13} className="shrink-0" />
                30 mins
              </p>
              <p className="flex items-center gap-1.5">
                <MapPin size={13} className="shrink-0" />
                Zoom
              </p>
              <p className="flex items-center gap-1.5">
                <Globe2 size={13} className="shrink-0" />
                <span className="truncate">Europe/Dublin</span>
              </p>
            </div>
          </div>

          <div className="mt-auto border-t border-[#e4e6eb] p-2 sm:p-3">
            <div className="mb-3 flex items-center justify-between text-[9px] sm:text-xs">
              <p className="font-semibold text-[#344054]">
                June <span className="font-normal text-gray-400">2023</span>
              </p>
              <div className="flex gap-2 text-gray-400">
                <ChevronLeft size={13} />
                <ChevronRight size={13} />
              </div>
            </div>

            <div className="mb-2 grid grid-cols-7 text-center text-[7px] text-gray-400 sm:text-[9px]">
              {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                (day) => <span key={day}>{day}</span>
              )}
            </div>

            <div className="grid grid-cols-7 gap-0.5">
              {calendarDays.map((item, index) => (
                <div
                  key={`${item.day}-${index}`}
                  className={`flex aspect-square items-center justify-center rounded-sm text-[8px] sm:text-[10px] ${
                    item.active
                      ? "bg-[#e4e7ec] font-medium text-gray-900"
                      : item.muted
                      ? "text-gray-300"
                      : "text-[#98a2b3]"
                  }`}
                >
                  {item.day}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Availability panel */}
        <div className="min-w-0 bg-[#f9fafb]">
          <div className="flex h-[45px] items-center justify-between border-b border-[#d0d5dd] px-2 sm:h-[54px] sm:px-4">
            <span className="whitespace-nowrap text-[9px] font-semibold sm:text-xs">
              Jun 20, 2023
            </span>
            <div className="flex gap-2">
              <ChevronLeft size={14} />
              <ChevronRight size={14} />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1 px-1.5 pt-3 sm:gap-1.5 sm:px-2.5">
            {["MON 20", "TUE 21", "WED 22"].map((day) => (
              <p
                key={day}
                className="truncate pb-1 text-center text-[7px] font-semibold text-gray-500 sm:text-[9px]"
              >
                {day}
              </p>
            ))}

            {Array.from({ length: 9 }).map((_, row) =>
              timeSlots.map((slots, col) => (
                <div key={`${row}-${col}`} className="min-w-0">
                  {slots[row] && (
                    <div className="flex h-[26px] items-center justify-center whitespace-nowrap rounded-md border border-[#d8dde5] bg-white px-0.5 text-[8px] text-[#171717] sm:h-[30px] sm:text-[10px]">
                      {slots[row]}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialButton({ type, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-10 w-full items-center justify-center gap-3 rounded-lg border text-sm font-medium transition hover:brightness-95 ${
        type === "google"
          ? "border-[#242424] bg-[#242424] text-white"
          : "border-[#d8d8d8] bg-white text-[#171717] shadow-sm"
      }`}
    >
      {type === "google" ? (
        <span className="font-bold text-[#4285F4]">G</span>
      ) : (
        <span className="grid grid-cols-2 gap-[2px]">
          <span className="h-[7px] w-[7px] bg-[#f35325]" />
          <span className="h-[7px] w-[7px] bg-[#81bc06]" />
          <span className="h-[7px] w-[7px] bg-[#05a6f0]" />
          <span className="h-[7px] w-[7px] bg-[#ffba08]" />
        </span>
      )}
      {children}
    </button>
  );
}

export default function Signup() {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Connect this form to your signup API here.
  }

  return (
    <main className="min-h-screen bg-white px-3 sm:px-6">
      <div className="mx-auto grid min-h-[calc(100vh-24px)] max-w-[1600px] overflow-hidden rounded-[24px] border border-[#e5e7eb] bg-[#f5f6f8] lg:grid-cols-2">
        {/* Left: Signup panel */}
        <section className="flex items-center justify-center px-5 py-12 sm:px-10 lg:px-12 xl:px-16">
          <div className="w-full max-w-[420px]">
            {showEmailForm && (
              <button
                type="button"
                onClick={() => setShowEmailForm(false)}
                className="mb-8 flex items-center gap-2 text-sm text-[#344054] transition hover:text-black"
              >
                <ArrowLeft size={17} />
                Back
              </button>
            )}

            <h1 className="text-[28px] font-bold leading-[1.08] tracking-[-0.045em] text-[#111827] sm:text-[32px]">
              Create your Cal.com
              <br />
              account
            </h1>

            <p className="mt-2 max-w-[340px] text-[15px] leading-[1.5] text-[#667085] sm:text-base">
              Free for individuals. Team plans for collaborative features.
            </p>

            {!showEmailForm ? (
              <div className="mt-8 space-y-5">
                <SocialButton
                  type="google"
                  onClick={() => {}}
                >
                  Continue with Google
                </SocialButton>

                <SocialButton
                  type="microsoft"
                  onClick={() => {}}
                >
                  Continue with Microsoft
                </SocialButton>

                <div className="flex items-center gap-3 text-sm text-[#667085]">
                  <span className="h-px flex-1 bg-[#e0e3e8]" />
                  or
                  <span className="h-px flex-1 bg-[#e0e3e8]" />
                </div>

                <button
                  type="button"
                  onClick={() => setShowEmailForm(true)}
                  className="h-10 w-full rounded-lg border border-[#d8d8d8] bg-white text-sm font-medium text-[#171717] shadow-sm transition hover:bg-gray-50"
                >
                  Continue with Email
                </button>

                <button
                  type="button"
                  className="block w-full pt-1 text-center text-sm text-[#171717] hover:underline"
                >
                  or SAML
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div>
                  <label
                    htmlFor="username"
                    className="mb-2 block text-sm font-medium text-[#171717]"
                  >
                    Username
                  </label>
                  <div className="flex h-[38px] items-center overflow-hidden rounded-xl border border-[#d5d7dc] bg-white shadow-sm focus-within:border-gray-500">
                    <span className="pl-3 text-sm text-[#667085]">cal.com/</span>
                    <input
                      id="username"
                      name="username"
                      autoComplete="username"
                      required
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                      placeholder=""
                      className="h-full min-w-0 flex-1 bg-transparent px-1 text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-[#171717]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="john@doe.com"
                    className="h-[38px] w-full rounded-xl border border-[#d5d7dc] bg-white px-3 text-sm outline-none shadow-sm transition placeholder:text-[#98a2b3] focus:border-gray-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-[#171717]"
                  >
                    Password
                  </label>
                  <div className="flex h-[38px] items-center rounded-xl border border-[#d5d7dc] bg-white pr-3 shadow-sm focus-within:border-gray-500">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      required
                      minLength={12}
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="Enter a password"
                      className="h-full min-w-0 flex-1 rounded-xl bg-transparent px-3 text-sm outline-none placeholder:text-[#98a2b3]"
                    />
                    <button
                      type="button"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      onClick={() => setShowPassword((value) => !value)}
                      className="text-[#667085] hover:text-black"
                    >
                      {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                    </button>
                  </div>
                  <p className="mt-2 text-sm text-[#667085]">
                    <span className="mr-2">•</span>
                    Minimum 12 characters long
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={
                    !username.trim() ||
                    !email.trim() ||
                    password.length < 12
                  }
                  className="mt-5 h-[38px] w-full rounded-xl bg-[#252525] text-sm font-semibold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:bg-[#777] disabled:hover:bg-[#777]"
                >
                  Get started
                </button>
              </form>
            )}

            <p className="mt-8 text-[14px] leading-[1.55] text-[#667085]">
              By creating an account, you agree to Cal.com&apos;s{" "}
              <a href="/terms" className="font-medium text-black hover:underline">
                Terms of Service
              </a>
              , which incorporate the{" "}
              <a href="/dpa" className="font-medium text-black hover:underline">
                Data Processing Agreement
              </a>{" "}
              and{" "}
              <a href="/terms" className="font-medium text-black hover:underline">
                SCC Schedule
              </a>
              . Please also read our{" "}
              <a href="/privacy" className="font-medium text-black hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </section>

        {/* Right: Awards and booking preview */}
        <aside className="hidden min-w-0 flex-col gap-6 overflow-hidden bg-[#eceef1] px-5 py-8 sm:px-8 lg:flex lg:px-8 xl:px-12">
          <div className="mx-auto w-full max-w-[510px]">
            <Awards />
          </div>

          <div className="min-w-0 flex-1">
            <CalendarPreview />
          </div>
        </aside>
      </div>
    </main>
  );
}

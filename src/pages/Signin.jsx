
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "../styles/Signin.css"

function DottedWorldMap() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1400 720"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <defs>
        <pattern id="world-dots" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.65" fill="#777777" />
        </pattern>

        <clipPath id="world-shapes">
          <path d="M80 150 L125 105 185 90 225 112 260 94 305 113 332 146 315 173 280 180 260 210 224 223 210 252 185 262 173 295 146 281 128 244 112 214 92 198 Z" />
          <path d="M225 276 L265 280 297 314 310 354 294 393 279 432 266 478 242 518 226 484 217 438 195 399 187 359 199 319 Z" />
          <path d="M345 102 L397 80 451 90 480 112 523 102 558 117 596 105 630 121 675 107 713 125 755 107 800 121 835 100 878 115 918 92 966 108 1003 92 1040 114 1088 100 1125 123 1172 112 1206 140 1248 138 1291 164 1268 192 1231 200 1196 224 1168 250 1134 258 1109 284 1084 276 1060 247 1034 239 1007 258 985 289 954 300 929 277 907 250 877 244 853 218 822 225 801 203 774 213 748 191 719 205 693 190 666 204 638 186 611 197 584 174 553 183 522 161 491 173 463 150 436 163 411 142 380 151 359 132 Z" />
          <path d="M515 210 L560 207 591 227 614 255 640 279 653 318 635 359 618 388 601 423 578 440 561 413 551 378 529 350 516 320 498 294 503 260 Z" />
          <path d="M728 215 L769 203 813 215 848 244 876 272 883 309 865 336 847 370 831 403 805 425 780 407 764 377 748 350 732 316 712 291 709 255 Z" />
          <path d="M924 304 L960 286 997 296 1028 321 1047 352 1033 375 1002 381 978 365 952 361 931 340 Z" />
          <path d="M1103 391 L1140 380 1177 397 1204 425 1221 458 1199 482 1168 474 1145 454 1119 443 Z" />
          <path d="M381 190 L405 174 431 181 442 202 428 223 403 222 Z" />
          <path d="M1202 272 L1230 260 1253 275 1243 297 1219 301 Z" />
        </clipPath>

        <radialGradient id="map-fade">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="72%" stopColor="white" stopOpacity=".85" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>

        <mask id="map-mask">
          <rect width="1400" height="720" fill="url(#map-fade)" />
        </mask>
      </defs>

      <rect
        width="1400"
        height="720"
        fill="url(#world-dots)"
        clipPath="url(#world-shapes)"
        mask="url(#map-mask)"
        opacity=".55"
      />
    </svg>
  );
}

function GoogleMark() {
  return (
    <span className="signin-google-mark" aria-hidden="true">
      G
    </span>
  );
}

function MicrosoftMark() {
  return (
    <span className="grid grid-cols-2 gap-[2px]" aria-hidden="true">
      <span className="h-[9px] w-[9px] bg-[#f35325]" />
      <span className="h-[9px] w-[9px] bg-[#81bc06]" />
      <span className="h-[9px] w-[9px] bg-[#05a6f0]" />
      <span className="h-[9px] w-[9px] bg-[#ffba08]" />
    </span>
  );
}

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    // Connect your existing sign-in API here.
    console.log({ email, password });
  }

  return (
<main className="signin-page relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#101010] px-4 pb-16 pt-4 text-white sm:px-6">
          {/* Subtle vertical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0, transparent 143px, rgba(255,255,255,.055) 144px, transparent 145px)",
        }}
      />

      {/* Dotted world map */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <DottedWorldMap />
        <div className="signin-map-glow absolute inset-0" />
      </div>

      {/* Login card */}
<div className="relative z-10 my-auto w-full max-w-[420px] overflow-hidden rounded-[18px] border border-[#303030] bg-[#1a1a1a] shadow-[0_20px_70px_rgba(0,0,0,0.28)]">        
    <div className="px-6 pb-7 pt-7 sm:px-9 sm:pt-8">
          <header className="mb-5 text-center">
  <a
    href="/"
    className="inline-block text-[22px] font-bold tracking-[-1.2px] text-white"
  >
    Cal.com
  </a>

  <p className="mt-1 text-[13px] text-[#858585]">
    Welcome back! Sign in to continue
  </p>
</header>

          <div className="space-y-3.5">
            <button
              type="button"
              className="flex h-[42px] w-full items-center justify-center gap-3 rounded-xl border border-[#e7e7e7] bg-[#f5f5f5] text-[15px] font-medium text-[#303030] transition hover:bg-white"
              onClick={() => {
                // Connect Google OAuth here.
              }}
            >
              <GoogleMark />
              Sign in with Google
            </button>

            <button
              type="button"
              className="flex h-[42px] w-full items-center justify-center gap-2.5 rounded-xl border border-transparent bg-[#242424] text-[15px] font-medium text-[#f5f5f5] transition hover:bg-[#2b2b2b]"
              onClick={() => {
                // Connect Microsoft OAuth here.
              }}
            >
              <MicrosoftMark />
              Sign in with Microsoft
            </button>
          </div>

          <div className="my-7 flex items-center gap-4">
            <span className="h-px flex-1 bg-[#2b2b2b]" />
            <span className="text-sm text-[#a0a0a0]">or</span>
            <span className="h-px flex-1 bg-[#2b2b2b]" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <label
                htmlFor="signin-email"
                className="mb-2 block text-[14px] font-semibold text-[#f0f0f0]"
              >
                Email
              </label>
              <input
                id="signin-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="h-[37px] w-full rounded-xl border border-[#353535] bg-[#202020] px-3 text-sm text-white outline-none transition placeholder:text-[#777] focus:border-[#777]"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="signin-password"
                  className="text-[14px] font-semibold text-[#f0f0f0]"
                >
                  Password
                </label>
                <a
                  href="/forgot-password"
                  className="text-[14px] text-[#a0a0a0] transition hover:text-white"
                >
                  Forgot?
                </a>
              </div>

              <div className="flex h-[37px] items-center rounded-xl border border-[#353535] bg-[#202020] pr-3 transition focus-within:border-[#777]">
                <input
                  id="signin-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="h-full min-w-0 flex-1 bg-transparent px-3 text-sm text-white outline-none"
                />

                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((current) => !current)}
                  className="flex items-center text-[#b7b7b7] transition hover:text-white"
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="h-[42px] w-full rounded-xl bg-[#f5f5f5] text-[15px] font-medium text-[#252525] transition hover:bg-white"
            >
              Continue
            </button>
          </form>
        </div>

<footer className="flex min-h-[58px] flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-[#303030] bg-[#202020] px-3 py-4 text-center text-[12px] font-medium">
              <a href="/signup" className="transition hover:text-white">
            Create account
          </a>
          <span className="text-[#777]">·</span>
          <a href="/signin/saml" className="transition hover:text-white">
            Sign in with SAML/OIDC
          </a>
        </footer>
      </div>

      {/* World clock strip */}
      <div className="pointer-events-none absolute inset-x-0 bottom-4 z-10 hidden justify-center gap-7 px-4 sm:flex sm:gap-10 lg:gap-[54px]">
        {[
          ["1:07 AM", "UTC-8"],
          ["3:07 AM", "UTC-6"],
          ["5:07 AM", "UTC-4"],
          ["7:07 AM", "UTC-2"],
          ["9:07 AM", "UTC+0"],
          ["11:07 AM", "UTC+2"],
          ["1:07 PM", "UTC+4"],
          ["3:07 PM", "UTC+6"],
          ["5:07 PM", "UTC+8"],
        ].map(([time, zone]) => (
          <div key={zone} className="min-w-0 text-center">
            <p className="whitespace-nowrap text-[13px] font-medium text-[#a45116]">
              {time}
            </p>
            <p className="mt-0.5 whitespace-nowrap text-[12px] text-[#555]">
              {zone}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

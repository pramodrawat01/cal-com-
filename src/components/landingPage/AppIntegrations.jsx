
import { useEffect, useState } from "react";
import { Grid2X2 } from "lucide-react";
import Button from "../ui/Button";
import "../../styles/AppIntegrations.css";

const apps = [
  {
    name: "Outlook",
    url: "https://cdn.simpleicons.org/microsoftoutlook/0078D4",
  },
  {
    name: "Google Meet",
    url: "https://cdn.simpleicons.org/googlemeet/00897B",
  },
  {
    name: "Google Calendar",
    url: "https://cdn.simpleicons.org/googlecalendar/4285F4",
  },
  {
    name: "Microsoft Teams",
    url: "https://cdn.simpleicons.org/microsoftteams/6264A7",
  },
  {
    name: "Slack",
    url: "https://cdn.simpleicons.org/slack/4A154B",
  },
  {
    name: "Zoom",
    url: "https://cdn.simpleicons.org/zoom/2D8CFF",
  },
  {
    name: "Google Analytics",
    url: "https://cdn.simpleicons.org/googleanalytics/E37400",
  },
  {
    name: "Calendly",
    url: "https://cdn.simpleicons.org/calendly/006BFF",
  },
];

export default function AppIntegrations() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setStep((current) => (current + 1) % apps.length);
    }, 1500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="px-3 py-6  sm:px-5 lg:px-3">
      <div className="grid min-h-[460px] items-center gap-10 rounded-2xl border border-[#e1e1e1] bg-white px-6 py-10 shadow-[0_3px_7px_rgba(0,0,0,0.06)] sm:px-10 sm:py-14 lg:min-h-[448px] lg:grid-cols-[1.25fr_0.85fr] lg:gap-12 lg:px-[5%]">
        {/* Left content */}
        <div className="mx-auto w-full max-w-[720px] lg:mx-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e6e6e6] bg-white px-3 py-1.5 text-[13px] shadow-sm">
            <Grid2X2 size={14} fill="currentColor" />
            App store
          </span>

          <h2 className="mt-5 text-[clamp(2rem,3.5vw,3.5rem)] font-bold leading-[1.12] tracking-[-0.06em] text-[#252525]">
            All your key tools in sync
            <br className="hidden sm:block" /> with your meetings
          </h2>

          <p className="mt-5 max-w-[700px] text-[15px] leading-relaxed text-[#858585] sm:text-lg">
            Connects to Slack, Salesforce, and 100+ more. Bookings show
            up where your team already works.
          </p>

          <div className="mt-6 flex flex-wrap gap-3.5">
            <Button to="/signup" variant="dark">
              Get started
            </Button>

            <Button to="/apps" variant="light">
              Explore apps
            </Button>
          </div>
        </div>

        {/* Animated app grid */}
        <div
          className="mx-auto w-full max-w-[490px] lg:justify-self-end"
          aria-label="Connected applications"
        >
          <div className="integration-grid relative grid aspect-[1.85/1] grid-cols-4 grid-rows-2">
            {apps.map((app, index) => {
              const position = (index + step) % apps.length;
              const column = position % 4;
              const row = Math.floor(position / 4);

              return (
                <div
                  key={app.name}
                  className="integration-icon absolute flex h-1/2 w-1/4 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                  style={{
                    left: `${column * 25 + 12.5}%`,
                    top: `${row * 50 + 25}%`,
                  }}
                  title={app.name}
                >
                  <img
                    src={app.url}
                    alt={app.name}
                    draggable="false"
                    className="h-8 w-8 object-contain transition-transform duration-300 hover:scale-110 sm:h-10 sm:w-10 lg:h-12 lg:w-12"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

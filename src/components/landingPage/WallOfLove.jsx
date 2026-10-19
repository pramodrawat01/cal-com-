import { useState } from "react";
import { Copy, ChevronRight, Heart } from "lucide-react";
import Button from "../ui/Button";

const testimonials = [
  {
    name: "Aria Minaei",
    handle: "@ariaminaei",
    avatar: "https://i.pravatar.cc/100?img=12",
    platform: "P",
    text: "Just gave it a go and it's definitely the easiest meeting I've ever scheduled! No context switching, no distractions, and works even better on mobile too.",
  },
  {
    name: "Regina Gerbeaux",
    handle: "@regina_gerbeaux",
    avatar: "https://i.pravatar.cc/100?img=47",
    platform: "P",
    text: "Second to none on all calendar scheduling apps - team ships fast and new features / versions are constantly being released.",
  },
  {
    name: "Tosin 🌧️",
    handle: "@heisguyy",
    avatar: "https://i.pravatar.cc/100?img=11",
    platform: "X",
    text: "@calcom is the best thing I discovered this year.",
    highlight: "@calcom",
  },
  {
    name: "Ben",
    handle: "@supaml",
    avatar: "https://i.pravatar.cc/100?img=60",
    platform: "P",
    text: "Amazing. I've been sharing it with everyone I know. It's helped me create more events spontaneously, because of how smooth it is compared to Calendly and Harmonizely.",
  },
  {
    name: "Shivansh",
    handle: "@Shivansh_C",
    avatar: "https://i.pravatar.cc/100?img=13",
    platform: "X",
    text: "I've officially transitioned out of Calendly to for personal calendar needs.\n\nSimple onboarding, automated workflows and comprehensive documentation- that's the reason why. The fact that it's open source is a cherry on cake.",
  },
  {
    name: "Jessie Zwaan✨",
    handle: "@jessicamayzwaan",
    avatar: "https://i.pravatar.cc/100?img=44",
    platform: "X",
    text: "@calcom has shared an easy how-to guide on integrating @whereby rooms into your scheduling. ⚡⚡⚡",
    highlight: "@calcom",
    link: "cal.com/blog/customizable...",
  },
  {
    name: "David Asabina",
    handle: "@david_asabina",
    avatar: "https://i.pravatar.cc/100?img=68",
    platform: "P",
    text: "Was logged out of my account and Peer (CEO, co-founder) tended to the matter within an hour. It doesn't get much better than this. For an OSS product to be this focused on customer service is next level.",
  },
  {
    name: "Guillermo Rauch",
    handle: "@rauchg",
    avatar: "https://i.pravatar.cc/100?img=52",
    platform: "X",
    text: "Coolest domain. Check\nCoolest mission. Check\nCoolest product. Check",
    link: "cal.com",
  },
  
  {
    name: "Regina Gerbeaux",
    handle: "",
    avatar: "https://i.pravatar.cc/100?img=49",
    platform: "",
    text: "I have used all the calendar scheduling apps and cal.com is the easiest, most intuitive, and best out of all of them. They actually listen to user concerns and address them, and their speed of shipping new versions and features is second to none. The integrations they have are also massively powerful.\n\nWould highly recommend!",
  },
  {
    name: "Alex Morgan",
    handle: "@alexmorgan",
    avatar: "https://i.pravatar.cc/100?img=33",
    platform: "X",
    text: "Cal.com makes scheduling simple. The experience is fast, clean, and easy to share with clients.",
  },
  {
    name: "Taylor",
    handle: "@taylorr",
    avatar: "https://i.pravatar.cc/100?img=45",
    platform: "P",
    text: "A fantastic scheduling tool with a great open-source community and useful integrations.",
  },
  {
    name: "Jay Fajardo",
    handle: "@jayfajardo",
    avatar: "https://i.pravatar.cc/100?img=57",
    platform: "X",
    text: "Stoked to try out as a replacement for Calendly.",
  },
  {
  name: "Jordan Lee",
  handle: "@jordanlee",
  avatar: "https://i.pravatar.cc/100?img=15",
  platform: "X",
  text: "Scheduling meetings has never been easier. Cal.com keeps everything organized and saves me time every week.",
},
{
  name: "Morgan Chen",
  handle: "@morganchen",
  avatar: "https://i.pravatar.cc/100?img=32",
  platform: "P",
  text: "The interface is clean, the integrations are excellent, and sharing booking links with clients is effortless.",
},
{
  name: "Chris Taylor",
  handle: "@christaylor",
  avatar: "https://i.pravatar.cc/100?img=53",
  platform: "X",
  text: "We switched our team's scheduling workflow to Cal.com and love the flexibility and customization options.",
},
{
  name: "Sam Wilson",
  handle: "@samwilson",
  avatar: "https://i.pravatar.cc/100?img=14",
  platform: "P",
  text: "A great alternative for managing appointments. The open-source approach and continuous improvements make it even better.",
},
{
  name: "Alex Rivera",
  handle: "@alexrivera",
  avatar: "https://i.pravatar.cc/100?img=68",
  platform: "X",
  text: "Simple to use, easy to share, and powerful enough for our team's scheduling needs.",
},
];

function TestimonialCard({ item }) {
  const renderText = () => {
    if (!item.highlight) return item.text;

    const parts = item.text.split(item.highlight);

    return parts.map((part, index) => (
      <span key={index}>
        {part}
        {index < parts.length - 1 && (
          <span className="text-[#7c19ff]">{item.highlight}</span>
        )}
      </span>
    ));
  };

  return (
    <article className="mb-3.5 break-inside-avoid rounded-2xl border border-[#e2e2e2] bg-[#f8f9fb] p-4 transition-colors duration-200 hover:border-[#c9c9c9] sm:p-[18px]">
      <div className="mb-3 flex items-center gap-3">
        <div className="relative shrink-0">
          <img
            src={item.avatar}
            alt={item.name}
            loading="lazy"
            className="h-11 w-11 rounded-full object-cover"
          />

          {item.platform && (
            <span
              className={`absolute -bottom-1 -right-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full border-2 border-[#f8f9fb] text-[10px] font-bold ${
                item.platform === "P"
                  ? "bg-[#f15b2a] text-white"
                  : "bg-transparent text-black"
              }`}
            >
              {item.platform}
            </span>
          )}
        </div>

        <div className="min-w-0">
          <h3 className="font-medium leading-tight text-[#344054]">
            {item.name}
          </h3>
          {item.handle && (
            <p className="mt-0.5 text-sm leading-tight text-[#667085]">
              {item.handle}
            </p>
          )}
        </div>
      </div>

      <p className="whitespace-pre-line text-[15px] leading-[1.65] text-[#424d60] sm:text-base">
        {renderText()}
      </p>

      {item.link && (
        <a
          href="https://cal.com/blog"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block break-words text-[15px] text-[#7c19ff] hover:underline"
        >
          {item.link}
        </a>
      )}
    </article>
  );
}

export default function WallOfLove() {
  const [showAll, setShowAll] = useState(false);

  const visibleTestimonials = showAll
    ? testimonials
    : testimonials.slice(0, 10);

  const columns = [
    visibleTestimonials.filter((_, index) => index % 3 === 0),
    visibleTestimonials.filter((_, index) => index % 3 === 1),
    visibleTestimonials.filter((_, index) => index % 3 === 2),
  ];

  return (
    <section className="relative overflow-hidden border-y border-[#dedede] bg-[#f4f4f5] px-4 py-16 sm:px-7 sm:py-24 lg:px-10 lg:py-32">
      {/* Subtle page guide lines */}
      {/* <div className="pointer-events-none absolute inset-y-0 left-[9.5%] hidden border-l border-[#e1e1e1] lg:block" />
      <div className="pointer-events-none absolute inset-y-0 right-[9.5%] hidden border-l border-[#e1e1e1] lg:block" /> */}

      <div className="relative mx-auto max-w-[1000px]">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-[850px] text-center sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e7e7e7] bg-white px-3 py-1.5 text-sm shadow-sm">
            <Copy size={14} />
            Wall of love
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-[-0.055em] text-[#242424] sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[1.12]">
            See why our users love Cal.com
          </h2>

          <p className="mx-auto mt-5 max-w-[680px] text-base leading-relaxed text-[#858585] sm:text-lg">
            Read the impact we've had from those who matter most - our
            customers.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button to="/signup" variant="dark">
              Get started
            </Button>

            <Button to="/contact" variant="light">
              Book a demo
            </Button>
          </div>
        </div>

        {/* Masonry testimonials */}
<div className="relative">
  <div
    className={`grid grid-cols-1 items-start gap-3.5 md:grid-cols-2 lg:grid-cols-3 ${
      !showAll ? "max-h-[760px] overflow-hidden" : ""
    }`}
  >
    {columns.map((column, columnIndex) => (
      <div key={columnIndex} className="min-w-0">
        {column.map((item, index) => (
          <TestimonialCard
            key={`${item.name}-${item.handle}-${index}`}
            item={item}
          />
        ))}
      </div>
    ))}
  </div>

  {/* Fade at the bottom */}
  {!showAll && (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-48 bg-gradient-to-b from-transparent via-[#f4f4f5]/80 to-[#f4f4f5]" />
  )}
</div>

        {/* Show more */}
        <div className="relative z-20 -mt-3 flex justify-center">
  <button
    type="button"
    onClick={() => setShowAll((previous) => !previous)}
    className="rounded-lg border border-[#dedede] bg-white px-4 py-2 text-sm font-medium text-[#344054] transition hover:border-[#bdbdbd] hover:bg-[#fafafa]"
  >
    {showAll ? "Show less" : "Show more"}
  </button>
</div>
      </div>
    </section>
  );
}


import { useCallback, useEffect, useRef, useState } from "react";
import { UsersRound } from "lucide-react";
import "../../styles/Testimonials.css";

const testimonials = [
  {
    quote:
      "More elegant than Calendly, more open than SavvyCal, Cal.com works and it feels just right.",
    name: "Flo Merian",
    role: "Product Marketing, Mintlify",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    quote:
      "Protecting personal health time is a non-negotiable, so making room for scheduling just works.",
    name: "Navi",
    role: "Founder",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    quote:
      "I think Cal.com has a very good way of creating a new category by being both great and well designed.",
    name: "Guillermo Rauch",
    role: "CEO, Vercel",
    avatar: "https://i.pravatar.cc/100?img=11",
  },
  {
    quote:
      "Scheduling should be simple, flexible, and open. Cal.com makes that experience feel effortless.",
    name: "Alex Chen",
    role: "Product Designer",
    avatar: "https://i.pravatar.cc/100?img=13",
  },
  {
    quote:
      "Our team spends less time coordinating meetings and more time doing meaningful work.",
    name: "Sarah Johnson",
    role: "Operations Lead",
    avatar: "https://i.pravatar.cc/100?img=44",
  },
  {
    quote:
      "A thoughtful scheduling experience that fits into the tools we already use every day.",
    name: "Daniel Kim",
    role: "Software Engineer",
    avatar: "https://i.pravatar.cc/100?img=68",
  },
];

const COUNT = testimonials.length;
const GAP = 20;
const START_INDEX = COUNT;

export default function Testimonials() {
  const viewportRef = useRef(null);
  const cardRef = useRef(null);
  const dragRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(START_INDEX);
  const [dimensions, setDimensions] = useState({
    viewport: 0,
    card: 516,
  });
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [paused, setPaused] = useState(false);

  // Repeat the testimonials so the carousel can loop seamlessly.
  const items = [...testimonials, ...testimonials, ...testimonials];

  const measure = useCallback(() => {
    if (!viewportRef.current || !cardRef.current) return;

    setDimensions({
      viewport: viewportRef.current.clientWidth,
      card: cardRef.current.getBoundingClientRect().width,
    });
  }, []);

  useEffect(() => {
    measure();

    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  // Automatically advance every 3.5 seconds.
  useEffect(() => {
    if (paused || dragging) return;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => index + 1);
    }, 3500);

    return () => window.clearInterval(timer);
  }, [paused, dragging]);

  // Center the active card in the viewport.
  const offset =
    dimensions.viewport / 2 -
    (activeIndex * (dimensions.card + GAP) + dimensions.card / 2) +
    dragOffset;

  const handleTransitionEnd = () => {
    if (dragging) return;

    if (activeIndex >= COUNT * 2) {
      setTransitionEnabled(false);
      setActiveIndex(START_INDEX);
    } else if (activeIndex < COUNT) {
      setTransitionEnabled(false);
      setActiveIndex(START_INDEX + COUNT - 1);
    }
  };

  useEffect(() => {
    if (!transitionEnabled) {
      const frame = window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });

      return () => window.cancelAnimationFrame(frame);
    }
  }, [transitionEnabled]);

  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    dragRef.current = {
      startX: event.clientX,
      lastX: event.clientX,
      moved: false,
    };

    setDragging(true);
    setPaused(true);
    setDragOffset(0);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!dragRef.current) return;

    const delta = event.clientX - dragRef.current.startX;

    dragRef.current.lastX = event.clientX;
    if (Math.abs(delta) > 5) dragRef.current.moved = true;

    setDragOffset(delta);
  };

  const handlePointerUp = () => {
    if (!dragRef.current) return;

    const delta = dragRef.current.lastX - dragRef.current.startX;
    const step = dimensions.card + GAP;

    if (Math.abs(delta) > 45) {
      const steps = Math.max(1, Math.round(Math.abs(delta) / step));

      setActiveIndex((index) =>
        index + (delta < 0 ? steps : -steps)
      );
    }

    setDragOffset(0);
    setDragging(false);
    dragRef.current = null;

    // Resume autoplay after a short pause.
    window.setTimeout(() => setPaused(false), 1200);
  };

  const handlePointerCancel = () => {
    dragRef.current = null;
    setDragOffset(0);
    setDragging(false);
    window.setTimeout(() => setPaused(false), 1200);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-heading">
        <span className="testimonials-badge">
          <UsersRound size={14} />
          Testimonials
        </span>

        <h2>Don’t just take our word for it</h2>

        <p>
          Our users are our best ambassadors. Discover why we're the top
          choice for scheduling meetings.
        </p>
      </div>

      <div
        ref={viewportRef}
        className={`testimonials-viewport ${
          dragging ? "is-dragging" : ""
        }`}
        onPointerEnter={() => setPaused(true)}
        onPointerLeave={() => {
          if (!dragging) setPaused(false);
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onTransitionEnd={handleTransitionEnd}
        role="region"
        aria-label="Customer testimonials"
      >
        <div
          className="testimonials-track"
          style={{
            gap: `${GAP}px`,
            transform: `translate3d(${offset}px, 0, 0)`,
            transition:
              dragging || !transitionEnabled
                ? "none"
                : "transform 650ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {items.map((testimonial, index) => {
            const distance = Math.abs(index - activeIndex);
            const isActive = distance === 0;

            return (
              <article
                key={`${testimonial.name}-${index}`}
                ref={index === 0 ? cardRef : null}
                className={`
                    
                    testimonial-card ${
                  isActive ? "testimonial-card-active" : ""
                }`}
                style={{
                  opacity:
                    distance === 0 ? 1 : distance === 1 ? 0.38 : 0.12,
                  transform: `scale(${isActive ? 1 : 0.985})`,
                }}
              >
                <blockquote>{testimonial.quote}</blockquote>

                <div className="testimonial-author">
                  <img
                    src={testimonial.avatar}
                    alt=""
                    draggable="false"
                  />

                  <div>
                    <p className="testimonial-name">
                      {testimonial.name}
                    </p>
                    <p className="testimonial-role">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

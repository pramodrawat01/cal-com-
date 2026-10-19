
import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

import Button from "../ui/Button";
import MegaMenu from "./MegaMenu";

const navItems = [
  { label: "Solutions", menu: "solutions" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "Cal.ai", href: "/cal-ai" },
  { label: "Developer", menu: "developer" },
  { label: "Resources", menu: "resources" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    const handleOutsideClick = (event) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setActiveMenu(null);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setMobileMenuOpen(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleMenu = (menu) => {
    setActiveMenu((current) => (
      current === menu ? null : menu
    ));
  };

  return (
    <header
      ref={headerRef}
      onMouseLeave={() => setActiveMenu(null)}
      className={`sticky top-0 z-50 mx-auto transition-all duration-300 ${
        isScrolled ? "px-3 pt-3 sm:px-5" : "px-0 pt-0"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className={`relative mx-auto flex items-center justify-between gap-4 transition-all duration-300 ${
          isScrolled
            ? "max-w-[1440px] rounded-[22px] border border-[#d5d5d5] bg-white/95 px-5 py-3 shadow-sm backdrop-blur-md sm:px-8 lg:px-10"
            : "max-w-[1360px] border border-transparent bg-transparent px-6 py-3 lg:px-12"
        }`}
      >
        {/* Logo */}
        <a
          href="/"
          className="shrink-0 text-[22px] font-bold tracking-[-1.8px] text-[#262626] sm:text-[28px]"
        >
          Cal.com
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-5 xl:flex 2xl:gap-8">
          {navItems.map((item) => {
            const isActive = activeMenu === item.menu;

            if (!item.menu) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="whitespace-nowrap text-[15px] font-medium text-[#343434] transition-colors hover:text-black"
                >
                  {item.label}
                </a>
              );
            }

            return (
              <button
                key={item.label}
                type="button"
                aria-expanded={isActive}
                aria-haspopup="true"
                onMouseEnter={() => setActiveMenu(item.menu)}
                onClick={() => toggleMenu(item.menu)}
                className="group flex items-center gap-1.5 whitespace-nowrap text-[15px] font-medium text-[#343434] transition-colors hover:text-black"
              >
                {item.label}

                <ChevronDown
                  size={15}
                  className={`text-gray-500 transition-transform duration-200 ${
                    isActive ? "rotate-180" : ""
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Desktop actions */}
        <div className="hidden shrink-0 items-center gap-3 sm:flex sm:gap-5 xl:flex">
          <a
            href="/signin"
            className="whitespace-nowrap text-[15px] font-semibold text-[#262626]"
          >
            Sign in
          </a>

          <Button to="/signup" variant="dark">
            Get started
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => {
            setMobileMenuOpen((open) => !open);
            setActiveMenu(null);
          }}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e0e0e0] bg-white xl:hidden"
        >
          {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        {/* Desktop mega-menu */}
        <div className="hidden xl:block">
          <MegaMenu activeMenu={activeMenu} />
        </div>
      </nav>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="absolute left-3 right-3 top-full z-50 mt-2 max-h-[calc(100vh-100px)] overflow-y-auto rounded-2xl border border-[#e0e0e0] bg-white p-4 shadow-xl sm:left-5 sm:right-5 xl:hidden">
          {navItems.map((item) => {
            const isActive = activeMenu === item.menu;

            return (
              <div key={item.label} className="border-b border-[#eeeeee] last:border-0">
                {item.menu ? (
                  <>
                    <button
                      type="button"
                      onClick={() => toggleMenu(item.menu)}
                      aria-expanded={isActive}
                      className="flex w-full items-center justify-between py-3 text-left text-sm font-medium"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          isActive ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isActive && (
                      <div className="pb-4">
                        <MegaMenu activeMenu={item.menu} />
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block py-3 text-sm font-medium"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            );
          })}

          <div className="flex gap-3 pt-4">
            <Button to="/signin" variant="light" className="flex-1">
              Sign in
            </Button>
            <Button to="/signup" variant="dark" className="flex-1">
              Get started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

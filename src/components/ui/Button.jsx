
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const variants = {
  dark: {
    base: "bg-[#252525] text-white border border-[#252525]",
    hover: "hover:bg-black hover:border-black",
    arrow: "text-white/50",
  },

  light: {
    base: "bg-white text-[#252525] border border-[#e1e1e1]",
    hover: "hover:bg-[#f8f8f8] hover:border-[#d1d1d1]",
    arrow: "text-[#858585]",
  },
};

export default function Button({
  children,
  to,
  href,
  variant = "dark",
  showArrow = true,
  className = "",
  onClick,
  type = "button",
  ...props
}) {
  const styles = variants[variant] ?? variants.dark;

  const classes = `
    group inline-flex items-center justify-center gap-2
    rounded-xl px-6 py-2
    text-sm font-semibold whitespace-nowrap
    transition-all duration-200 ease-in-out
    ${styles.base}
    ${styles.hover}
    ${className}
  `;

  const content = (
    <>
      <span>{children}</span>

      {showArrow && (
        <ChevronRight
          size={18}
          strokeWidth={2.5}
          className={`shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 ${styles.arrow}`}
        />
      )}
    </>
  );

  // Internal application routes
  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        onClick={onClick}
        {...props}
      >
        {content}
      </Link>
    );
  }

  // External URLs
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  // Regular button
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
}


export default function GridBackground({
  children,
  className = "",
}) {
  return (
    <div
      className={`relative isolate ${className}`}
    >
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

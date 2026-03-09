const base =
  "inline-flex items-center justify-center rounded-full font-medium transition focus:outline-none focus:ring-2 focus:ring-neutral-300 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary: "bg-neutral-900 text-white hover:bg-neutral-800",
  secondary: "bg-white text-neutral-900 border border-neutral-200 hover:bg-neutral-50",
  ghost: "bg-transparent text-neutral-900 hover:bg-neutral-100",
};

const sizes = {
  sm: "text-xs px-3 py-2",
  md: "text-sm px-4 py-2.5",
  lg: "text-sm px-5 py-3",
};

export default function Button({
  as: Comp = "button",
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  return <Comp className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />;
}
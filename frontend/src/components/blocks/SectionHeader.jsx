export default function SectionHeader({ eyebrow, title, description, align = "center" }) {
  const center = align === "center";
  return (
    <div className={center ? "text-center" : "text-left"}>
      {eyebrow ? <p className="text-xs font-medium text-neutral-500">{eyebrow}</p> : null}
      <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {description ? (
        <p className={`mt-3 text-sm leading-6 text-neutral-600 sm:text-base ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
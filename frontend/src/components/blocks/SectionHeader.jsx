import { typography } from "../../styles/typography";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  const center = align === "center";

  return (
    <div className={center ? "text-center" : "text-left"}>
      {eyebrow ? <p className={typography.eyebrow}>{eyebrow}</p> : null}

      <h2 className={`mt-3 ${typography.sectionTitle}`}>{title}</h2>

      {description ? (
        <p
          className={`mt-3 ${
            center ? typography.paragraphCenter : `max-w-2xl ${typography.paragraph}`
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
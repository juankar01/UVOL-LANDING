import Section from "../layout/Section";
import Button from "../ui/Button";

export default function SplitSection({
  eyebrow,
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  imageSrc,
  imageAlt = "",
  imageSide = "left",
}) {
  const isLeft = imageSide === "left";

  return (
    <Section className="py-14 sm:py-16 lg:py-20">
      <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Imagen */}
        <div
          className={`mx-auto w-full max-w-[480px] ${
            isLeft ? "lg:order-1 lg:justify-self-end" : "lg:order-2 lg:justify-self-start"
          }`}
        >
          <div className="overflow-hidden rounded-3xl bg-neutral-100 shadow-soft">
            <img
              src={imageSrc}
              alt={imageAlt || title}
              loading="lazy"
              className="h-64 w-full object-cover sm:h-[360px] lg:h-[340px]"
            />
          </div>
        </div>

        {/* Texto */}
        <div
          className={`mx-auto w-full max-w-[480px] lg:max-w-[420px] ${
            isLeft ? "lg:order-2 lg:justify-self-start" : "lg:order-1 lg:justify-self-end"
          }`}
        >
          {eyebrow ? (
            <p className="text-xs font-medium text-neutral-500">{eyebrow}</p>
          ) : null}

          <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h3>

          {subtitle ? (
            <p className="mt-2 text-sm text-neutral-600">{subtitle}</p>
          ) : null}

          <p className="mt-4 text-sm leading-6 text-neutral-600 sm:text-base">
            {description}
          </p>

          {ctaText ? (
            <Button as="a" href={ctaHref || "#"} className="mt-6 gap-2">
              {ctaText} <span aria-hidden>↗</span>
            </Button>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
import { Link } from "react-router-dom";
import Section from "../../components/layout/Section";
import Button from "../../components/ui/Button";
import { typography } from "../../styles/typography";

export default function FeatureTimelineItem({
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

  const isExternalCta = ctaHref?.startsWith("http");

  const ctaProps = isExternalCta
    ? { as: "a", href: ctaHref }
    : { as: Link, to: ctaHref || "#" };

  return (
    <Section className="py-14 sm:py-16 lg:py-20">
      {/* Mobile / Tablet */}
      <div className="mx-auto grid max-w-[680px] items-center gap-8 sm:gap-10 lg:hidden">
        <div className="overflow-hidden rounded-3xl bg-neutral-100 shadow-soft">
          <img
            src={imageSrc}
            alt={imageAlt || title}
            loading="lazy"
            className="h-64 w-full object-cover sm:h-[360px]"
          />
        </div>

        <div className="w-full">
          {eyebrow ? <p className={typography.eyebrow}>{eyebrow}</p> : null}

          <h3 className={`mt-3 ${typography.cardTitle}`}>{title}</h3>

          {subtitle ? (
            <p className="mt-2 text-sm text-neutral-600">{subtitle}</p>
          ) : null}

          <p className={`mt-4 ${typography.paragraph}`}>{description}</p>

          {ctaText ? (
            <Button {...ctaProps} className="mt-6 gap-2">
              {ctaText} <span aria-hidden>↗</span>
            </Button>
          ) : null}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-0">
        {isLeft ? (
          <>
            <div className="flex justify-end pr-0">
              <div className="w-full max-w-[520px] overflow-hidden rounded-l-3xl bg-neutral-100 shadow-soft lg:translate-x-[15px]">
                <img
                  src={imageSrc}
                  alt={imageAlt || title}
                  loading="lazy"
                  className="h-[360px] w-full object-cover"
                />
              </div>
            </div>

            <div className="w-8" />

            <div className="pl-10">
              <div className="max-w-[420px]">
                {eyebrow ? (
                  <p className={typography.eyebrow}>{eyebrow}</p>
                ) : null}

                <h3 className={`mt-3 ${typography.cardTitle}`}>{title}</h3>

                {subtitle ? (
                  <p className="mt-2 text-sm text-neutral-600">{subtitle}</p>
                ) : null}

                <p className={`mt-4 ${typography.paragraph}`}>
                  {description}
                </p>

                {ctaText ? (
                  <Button {...ctaProps} className="mt-6 gap-2">
                    {ctaText} <span aria-hidden>↗</span>
                  </Button>
                ) : null}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-end pr-10">
              <div className="max-w-[420px]">
                {eyebrow ? (
                  <p className={typography.eyebrow}>{eyebrow}</p>
                ) : null}

                <h3 className={`mt-3 ${typography.cardTitle}`}>{title}</h3>

                {subtitle ? (
                  <p className="mt-2 text-sm text-neutral-600">{subtitle}</p>
                ) : null}

                <p className={`mt-4 ${typography.paragraph}`}>
                  {description}
                </p>

                {ctaText ? (
                  <Button {...ctaProps} className="mt-6 gap-2">
                    {ctaText} <span aria-hidden>↗</span>
                  </Button>
                ) : null}
              </div>
            </div>

            <div className="w-8" />

            <div className="flex justify-start pl-0">
              <div className="w-full max-w-[520px] overflow-hidden rounded-r-3xl bg-neutral-100 shadow-soft lg:-translate-x-[15px]">
                <img
                  src={imageSrc}
                  alt={imageAlt || title}
                  loading="lazy"
                  className="h-[360px] w-full object-cover"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </Section>
  );
}
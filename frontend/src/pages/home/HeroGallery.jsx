import { useEffect, useRef } from "react";

const images = [
  { src: "/img/hero/hero-left.webp", alt: "Voluntariado (izquierda)" },
  { src: "/img/hero/hero-center.webp", alt: "Comunidad (centro)" },
  { src: "/img/hero/hero-right.webp", alt: "Conexión (derecha)" },
];

const topChips = [
  { name: "Fundación Vida Verde", role: "ONG / Educación" },
  { name: "Fundación ProFuturo", role: "Organización" },
  { name: "Alianza Solidaria", role: "Comunidad" },
];

const bottomChips = [
  { name: "Fernanda Ibáñez", role: "Voluntaria" },
  { name: "Andrés Molina", role: "Voluntario" },
  { name: "Valentine Morgan", role: "Voluntaria" },
];

function HeroChip({ name, role }) {
  return (
    <div className="flex min-w-0 items-center gap-2 rounded-full bg-white/95 px-3 py-2 shadow-sm ring-1 ring-black/5">
      <span className="h-6 w-6 shrink-0 rounded-full bg-neutral-300" />
      <span className="min-w-0 text-left leading-tight">
        <span className="block truncate text-[10px] font-medium text-neutral-900">
          {name}
        </span>
        <span className="block truncate text-[9px] text-neutral-500">
          {role}
        </span>
      </span>
    </div>
  );
}

export default function HeroGallery() {
  const mobileCarouselRef = useRef(null);

  useEffect(() => {
    const container = mobileCarouselRef.current;
    if (!container) return;

    const secondCard = container.children[1];
    if (!secondCard) return;

    const left =
      secondCard.offsetLeft - (container.clientWidth - secondCard.clientWidth) / 2;

    container.scrollLeft = left;
  }, []);

  return (
    <div className="mt-10">
      {/* Mobile + Tablet */}
      <div className="lg:hidden">
        <div
          ref={mobileCarouselRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {images.map((img) => (
            <div key={img.src} className="min-w-[84%] snap-center sm:min-w-[62%]">
              <div className="relative overflow-hidden rounded-[28px] bg-neutral-100 shadow-soft">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-64 w-full object-cover sm:h-72"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:grid lg:grid-cols-12 lg:gap-4 xl:gap-5">
        <div className="relative col-span-3 overflow-hidden rounded-[28px] bg-neutral-100 shadow-soft">
          <img
            src="/img/hero/hero-left.webp"
            alt="Voluntariado (izquierda)"
            className="h-[320px] w-full object-cover xl:h-[360px]"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="relative col-span-6 overflow-hidden rounded-[28px] bg-neutral-100 shadow-soft">
          <img
            src="/img/hero/hero-center.webp"
            alt="Comunidad (centro)"
            className="h-[320px] w-full object-cover xl:h-[360px]"
          />

          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute bottom-4 left-4 right-4 xl:bottom-5 xl:left-5 xl:right-5">
            <div className="ml-8 grid grid-cols-3 gap-2 xl:ml-10 xl:gap-3">
              {topChips.map((chip) => (
                <HeroChip key={chip.name} name={chip.name} role={chip.role} />
              ))}
            </div>

            <div className="mt-2 grid grid-cols-3 gap-2 xl:mt-3 xl:gap-3">
              {bottomChips.map((chip) => (
                <HeroChip key={chip.name} name={chip.name} role={chip.role} />
              ))}
            </div>
          </div>
        </div>

        <div className="relative col-span-3 overflow-hidden rounded-[28px] bg-neutral-100 shadow-soft">
          <img
            src="/img/hero/hero-right.webp"
            alt="Conexión (derecha)"
            className="h-[320px] w-full object-cover xl:h-[360px]"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>
    </div>
  );
}
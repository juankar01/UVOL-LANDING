import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const images = [
  { src: "/img/hero/hero-left.webp", alt: "Voluntariado (izquierda)" },
  { src: "/img/hero/hero-center.webp", alt: "Comunidad (centro)" },
  { src: "/img/hero/hero-right.webp", alt: "Conexión (derecha)" },
];

const topChips = [
  {
    name: "Fundación Vida Verde",
    role: "ONG / Educación",
    avatar: "/img/avatars/avatar1.webp",
  },
  {
    name: "Fundación ProFuturo",
    role: "Organización",
    avatar: "/img/avatars/avatar2.webp",
  },
  {
    name: "Alianza Solidaria",
    role: "Comunidad",
    avatar: "/img/avatars/avatar3.webp",
  },
];

const bottomChips = [
  {
    name: "Fernan Williams",
    role: "Voluntaria",
    avatar: "/img/avatars/avatar4.webp",
  },
  {
    name: "Fox Mulder",
    role: "Voluntario",
    avatar: "/img/avatars/avatar5.webp",
  },
  {
    name: "Valentine Morgan",
    role: "Voluntaria",
    avatar: "/img/avatars/avatar6.webp",
  },
];

function HeroChip({ name, role, avatar, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay, ease: "easeOut" }}
      className="flex min-w-0 items-center gap-2 rounded-full bg-white/95 px-3 py-2 shadow-sm ring-1 ring-black/5"
    >
      <img
        src={avatar}
        alt={name}
        className="h-6 w-6 shrink-0 rounded-full object-cover"
      />

      <span className="min-w-0 text-left leading-tight">
        <span className="block truncate text-[10px] font-medium text-neutral-900">
          {name}
        </span>

        <span className="block truncate text-[9px] text-neutral-500">
          {role}
        </span>
      </span>
    </motion.div>
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
      secondCard.offsetLeft -
      (container.clientWidth - secondCard.clientWidth) / 2;

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
          {images.map((img, index) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="min-w-[84%] snap-center sm:min-w-[62%]"
            >
              <div className="relative overflow-hidden rounded-[28px] bg-neutral-100 shadow-soft">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-64 w-full object-cover sm:h-72"
                />

                <div className="absolute inset-0 bg-black/10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:grid lg:grid-cols-12 lg:gap-4 xl:gap-5">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
          className="relative col-span-3 overflow-hidden rounded-[28px] bg-neutral-100 shadow-soft"
        >
          <img
            src="/img/hero/hero-left.webp"
            alt="Voluntariado (izquierda)"
            className="h-[320px] w-full object-cover xl:h-[360px]"
          />
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.4, delay: 0.14, ease: "easeOut" }}
          className="relative col-span-6 overflow-hidden rounded-[28px] bg-neutral-100 shadow-soft"
        >
          <img
            src="/img/hero/hero-center.webp"
            alt="Comunidad (centro)"
            className="h-[320px] w-full object-cover xl:h-[360px]"
          />

          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute bottom-4 left-4 right-4 xl:bottom-5 xl:left-5 xl:right-5">
            <div className="ml-8 grid grid-cols-3 gap-2 xl:ml-10 xl:gap-3">
              {topChips.map((chip, index) => (
                <HeroChip
                  key={chip.name}
                  name={chip.name}
                  role={chip.role}
                  avatar={chip.avatar}
                  delay={0.35 + index * 0.05}
                />
              ))}
            </div>

            <div className="mt-2 grid grid-cols-3 gap-2 xl:mt-3 xl:gap-3">
              {bottomChips.map((chip, index) => (
                <HeroChip
                  key={chip.name}
                  name={chip.name}
                  role={chip.role}
                  avatar={chip.avatar}
                  delay={0.5 + index * 0.05}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.4, delay: 0.23, ease: "easeOut" }}
          className="relative col-span-3 overflow-hidden rounded-[28px] bg-neutral-100 shadow-soft"
        >
          <img
            src="/img/hero/hero-right.webp"
            alt="Conexión (derecha)"
            className="h-[320px] w-full object-cover xl:h-[360px]"
          />

          <div className="absolute inset-0 bg-black/10" />
        </motion.div>
      </div>
    </div>
  );
}
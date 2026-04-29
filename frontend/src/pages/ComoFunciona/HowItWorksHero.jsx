import { motion } from "framer-motion";
import Section from "../../components/layout/Section";

export default function HowItWorksHero() {
  return (
    <Section className="!py-0">
      <div className="relative py-16 sm:py-20 lg:min-h-[calc(100vh-56px)] lg:py-0">
        {/* Mobile + Tablet */}
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-5xl">
              Haz voluntariado en 3 pasos
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-neutral-600 sm:text-base">
              Comienza tu camino como voluntario y genera impacto real en tu
              comunidad o en línea.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
            className="mt-10 w-full overflow-hidden rounded-[28px] bg-neutral-100 shadow-soft"
          >
            <img
              src="/img/HowItWorks/home-tablet.webp"
              alt="Grupo de voluntarios"
              className="h-72 w-full object-cover sm:h-[420px]"
            />
          </motion.div>
        </div>

        {/* Desktop texto central */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="absolute left-1/2 top-1/2 z-10 mx-auto hidden w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center lg:flex"
        >
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Haz voluntariado en 3 pasos
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-600 sm:text-base">
            Comienza tu camino como voluntario y genera impacto real en tu
            comunidad o en línea.
          </p>
        </motion.div>

        {/* Izquierda arriba */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-4 top-16 hidden lg:block"
        >
          <div className="relative h-56 w-72">
            <div className="absolute left-0 top-0 h-44 w-44 overflow-hidden rounded-3xl bg-neutral-100 shadow-soft">
              <img
                src="/img/HowItWorks/home-img1.webp"
                alt="Voluntarios reunidos"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute left-24 top-24 h-40 w-48 overflow-hidden rounded-3xl bg-neutral-100 shadow-soft">
              <img
                src="/img/HowItWorks/home-img2.webp"
                alt="Grupo de voluntarios"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Derecha arriba */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 top-10 hidden lg:block"
        >
          <div className="relative h-60 w-[430px]">
            <div className="absolute left-0 top-24 h-36 w-40 overflow-hidden rounded-3xl bg-neutral-100 shadow-soft">
              <img
                src="/img/HowItWorks/home-img3.webp"
                alt="Voluntarios compartiendo"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute left-24 top-0 h-48 w-44 overflow-hidden rounded-3xl bg-neutral-100 shadow-soft">
              <img
                src="/img/HowItWorks/home-img7.webp"
                alt="Grupo de voluntarios"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute right-0 top-12 h-44 w-40 overflow-hidden rounded-3xl bg-neutral-100 shadow-soft">
              <img
                src="/img/HowItWorks/home-img5.webp"
                alt="Voluntariado con animales"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Izquierda abajo */}
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-12 hidden lg:block"
        >
          <div className="relative h-60 w-80">
            <div className="absolute left-0 bottom-0 h-44 w-48 overflow-hidden rounded-3xl bg-neutral-100 shadow-soft">
              <img
                src="/img/HowItWorks/home-img6.webp"
                alt="Participantes de voluntariado"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute left-32 bottom-24 h-40 w-48 overflow-hidden rounded-3xl bg-neutral-100 shadow-soft">
              <img
                src="/img/HowItWorks/home-img4.webp"
                alt="Voluntario usando celular"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Derecha abajo */}
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-16 hidden lg:block"
        >
          <div className="relative h-60 w-80">
            <div className="absolute left-0 top-0 h-44 w-56 overflow-hidden rounded-3xl bg-neutral-100 shadow-soft">
              <img
                src="/img/HowItWorks/home-img9.webp"
                alt="Actividad comunitaria"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute left-40 top-16 h-44 w-44 overflow-hidden rounded-3xl bg-neutral-100 shadow-soft">
              <img
                src="/img/HowItWorks/home-img8.webp"
                alt="Voluntarios jóvenes"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
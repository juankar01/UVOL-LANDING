import { useState } from "react";
import { motion } from "framer-motion";
import Section from "../../components/layout/Section";

export default function PrivacyHero() {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <Section className="!py-0">
      <div className="flex flex-col items-center justify-center py-16 sm:py-20 lg:min-h-[calc(100vh-56px)] lg:py-0">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mx-auto w-full max-w-6xl text-center"
        >
          <h1 className="mx-auto max-w-5xl text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:text-[56px] lg:leading-[1.08]">
            Porque confiar en una red con propósito también es sentirse{" "}
            <span className="text-[#219653]">protegido</span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-6 text-neutral-600 sm:text-base">
            Te ofrecemos un entorno confiable para que participes con
            <br />
            tranquilidad y controles tu información en todo momento.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
            className="relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-[28px] bg-neutral-100 shadow-soft"
          >
            <img
              src="/img/Privacity/hero-img1.webp"
              alt="Seguridad y privacidad en la plataforma"
              className="h-[260px] w-full object-cover sm:h-[380px] lg:h-[460px]"
            />

            <div className="absolute inset-0 bg-emerald-900/20" />

            <button
              type="button"
              onClick={() => setOpenVideo(true)}
              aria-label="Reproducir video"
              className="absolute left-1/2 top-1/2 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-neutral-900 shadow-soft transition hover:scale-105"
            >
              ▶
            </button>
          </motion.div>
        </motion.div>
      </div>

      {openVideo ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-[28px] bg-black">
            <button
              type="button"
              onClick={() => setOpenVideo(false)}
              aria-label="Cerrar video"
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-neutral-900"
            >
              ×
            </button>

            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/R9NxCd0pPQk?autoplay=1"
                title="Video de privacidad Uvol"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : null}
    </Section>
  );
}
import { motion } from "framer-motion";
import Section from "../../components/layout/Section";
import Button from "../../components/ui/Button";

export default function PrivacySupport() {
  return (
    <Section className="pt-4 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="mx-auto max-w-6xl rounded-[28px] bg-[#219653] px-6 py-12 text-center text-white sm:px-10 lg:py-14"
      >
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Reportes y soporte
        </h2>

        <p className="mt-4 text-sm text-white/90 sm:text-base">
          ¿Detectaste actividad sospechosa o te sientes inseguro?
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/90 sm:text-base">
          Accede al Centro de ayuda o usa el botón “Reportar” visible en todo
          momento para enviarnos tu caso. Nuestro equipo lo atenderá con
          prioridad.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button as="a" href="/centro-de-ayuda" className="min-w-36">
            Centro de ayuda
          </Button>

          <a
            href="/centro-de-ayuda"
            className="inline-flex min-w-36 items-center justify-center rounded-full border border-white/70 bg-transparent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Reportar
          </a>
        </div>
      </motion.div>
    </Section>
  );
}
import { motion } from "framer-motion";
import FeatureTimelineItem from "./FeatureTimelineItem";

export default function Features() {
  return (
    <div className="relative">
      {/* Línea central */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="relative h-full w-px border-l border-dashed border-neutral-200">
          <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-300 bg-white" />
          <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-300 bg-white" />
          <span className="absolute left-1/2 bottom-0 h-3 w-3 -translate-x-1/2 translate-y-1/2 rounded-full border border-neutral-300 bg-white" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <FeatureTimelineItem
          eyebrow="Red Uvol"
          title="Únete y haz impacto"
          subtitle="Haz voluntariado en 3 pasos"
          description="Crea tu perfil, encuentra oportunidades afines y participa en causas reales."
          ctaText="Ver más"
          ctaHref="/como-funciona"
          imageSide="left"
          imageSrc="/img/feature/feature-uno.webp"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <FeatureTimelineItem
          eyebrow="Red Uvol"
          title="Privacidad"
          subtitle="Tu confianza es lo primero"
          description="Tus datos están protegidos. Tú decides quién ve tu actividad."
          ctaText="Ver más"
          ctaHref="/privacidad"
          imageSide="right"
          imageSrc="/img/feature/feature-dos.webp"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <FeatureTimelineItem
          eyebrow="Red Uvol"
          title="Servicios"
          subtitle="Herramientas para potenciar tu impacto"
          description="Calendario, sugerencias personalizadas y comunicación fácil."
          ctaText="Ver más"
          ctaHref="/para-empresas"
          imageSide="left"
          imageSrc="/img/feature/feature-tres.webp"
        />
      </motion.div>
    </div>
  );
}
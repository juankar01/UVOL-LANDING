import { motion } from "framer-motion";
import FeatureTimelineItem from "../Inicio/FeatureTimelineItem";

export default function CompanyFeatures() {
  const appUrl = import.meta.env.VITE_APP_URL || "";
  const registerUrl = appUrl ? `${appUrl}/register` : "#";

  return (
    <div id="soluciones" className="relative">
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
          title="Voluntariado corporativo"
          subtitle="Moviliza a tu equipo con propósito"
          description="Activa la participación de tus colaboradores en jornadas sociales y ambientales alineadas con los valores de tu empresa."
          ctaText="¡Únete ya!"
          ctaHref={registerUrl}
          imageSide="right"
          imageSrc="/img/ForCompanies/feature-img1.webp"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <FeatureTimelineItem
          title="Medición de impacto"
          subtitle="Convierte acciones en resultados tangibles"
          description="Accede a informes detallados con datos de participación, horas invertidas y logros alcanzados."
          ctaText="¡Únete ya!"
          ctaHref={registerUrl}
          imageSide="left"
          imageSrc="/img/ForCompanies/feature-img2.webp"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <FeatureTimelineItem
          title="Impacto visible"
          subtitle="Haz visible tu compromiso con la sociedad"
          description="Publica tus acciones en un entorno auténtico y conectado, donde tu compromiso inspira a otros."
          ctaText="¡Únete ya!"
          ctaHref={registerUrl}
          imageSide="right"
          imageSrc="/img/ForCompanies/feature-img3.webp"
        />
      </motion.div>
    </div>
  );
}
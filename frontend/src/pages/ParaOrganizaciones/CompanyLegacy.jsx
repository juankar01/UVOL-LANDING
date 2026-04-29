import { motion } from "framer-motion";
import Section from "../../components/layout/Section";

export default function CompanyLegacy() {
  return (
    <Section className="pb-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="text-center"
      >
        <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          Construye un <span className="text-[#219653]">legado</span> social
          <br />
          desde tu organización
        </h2>

        <div className="mx-auto mt-12 max-w-6xl">
          <img
            src="/img/ForCompanies/org-img.webp"
            alt="Vista de Uvol en computador"
            loading="lazy"
            className="w-full object-contain"
          />
        </div>
      </motion.div>
    </Section>
  );
}
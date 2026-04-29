import { motion } from "framer-motion";
import Section from "../../components/layout/Section";
import SectionHeader from "../../components/blocks/SectionHeader";

export default function Intro() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <SectionHeader
          title="Una red. Mil formas de ayudar."
          description="Una nueva forma de conectar con causas, crear impacto real y construir comunidad. Uvol es el punto de encuentro entre personas solidarias y organizaciones con propósito."
        />
      </motion.div>
    </Section>
  );
}
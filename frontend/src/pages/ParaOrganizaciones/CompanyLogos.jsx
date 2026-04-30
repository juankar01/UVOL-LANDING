import { motion } from "framer-motion";
import Section from "../../components/layout/Section";
import { typography } from "../../styles/typography";

const logos = ["G", "▦", "", "a", "∞", "✷"];

export default function CompanyLogos() {
  return (
    <Section className="!pt-0 !pb-16 md:!pb-0 lg:!pb-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="mx-auto max-w-5xl text-center"
      >
        <h2 className={typography.sectionTitle}>Confían en nosotros</h2>

        <p className={`mx-auto mt-4 max-w-2xl ${typography.paragraph}`}>
          Estas y muchas más organizaciones están comprometidas con el impacto
          social. ¡Súmate tú también!
        </p>

        <div className="mx-auto mt-10 max-w-4xl overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max"
          >
            <div className="flex shrink-0 items-center gap-16 pr-16 text-4xl font-semibold text-neutral-300 sm:gap-20 sm:pr-20">
              {logos.map((logo, index) => (
                <span key={`logo-a-${index}`} className="min-w-16 text-center">
                  {logo}
                </span>
              ))}
            </div>

            <div
              aria-hidden="true"
              className="flex shrink-0 items-center gap-16 pr-16 text-4xl font-semibold text-neutral-300 sm:gap-20 sm:pr-20"
            >
              {logos.map((logo, index) => (
                <span key={`logo-b-${index}`} className="min-w-16 text-center">
                  {logo}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
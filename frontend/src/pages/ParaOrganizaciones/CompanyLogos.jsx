import { motion } from "framer-motion";
import Section from "../../components/layout/Section";

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
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Confían en nosotros
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-neutral-500">
          Estas y muchas más organizaciones están comprometidas con el impacto
          social. ¡Súmate tú también!
        </p>

        <div className="mx-auto mt-10 flex max-w-4xl justify-center overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-16 text-4xl font-semibold text-neutral-300 sm:gap-20"
          >
            {[...logos, ...logos].map((logo, index) => (
              <span key={index} className="min-w-16 text-center">
                {logo}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
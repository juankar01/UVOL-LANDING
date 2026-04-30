import { motion } from "framer-motion";
import Section from "../../components/layout/Section";
import Button from "../../components/ui/Button";
import HeroGallery from "./HeroGallery";
import { typography } from "../../styles/typography";

export default function Hero() {
  const appUrl = import.meta.env.VITE_APP_URL || "";

  return (
    <Section className="!py-0" containerClassName="text-center">
      <div className="py-16 sm:py-20 lg:pt-12 lg:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700 shadow-sm">
            <div className="flex -space-x-2">
              <img
                src="/img/avatars/avatar4.webp"
                alt="Usuario activo"
                className="h-5 w-5 rounded-full border border-white object-cover"
              />
              <img
                src="/img/avatars/avatar6.webp"
                alt="Usuario activo"
                className="h-5 w-5 rounded-full border border-white object-cover"
              />
              <img
                src="/img/avatars/avatar3.webp"
                alt="Usuario activo"
                className="h-5 w-5 rounded-full border border-white object-cover"
              />
            </div>

            <span>100 Usuarios activos</span>
          </div>

          <h1 className={`mx-auto mt-6 max-w-3xl ${typography.heroTitle}`}>
            La red donde ayudar también
            <span className="block">—es hacer comunidad.</span>
          </h1>

          <p className={`mx-auto mt-4 max-w-xl ${typography.paragraph}`}>
            Comparte tu impacto con una comunidad que no se queda quieta.
          </p>

          <div className="mt-6 flex justify-center">
            <Button as="a" href={appUrl ? `${appUrl}/register` : "#"} size="lg">
              ¡Empezar ahora!
            </Button>
          </div>
        </motion.div>

        <HeroGallery />
      </div>
    </Section>
  );
}
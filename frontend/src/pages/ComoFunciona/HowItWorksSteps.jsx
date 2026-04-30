import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "../../components/layout/Section";
import Button from "../../components/ui/Button";
import { typography } from "../../styles/typography";

const steps = [
  {
    id: "perfil",
    tab: "Crear perfil",
    title: (
      <>
        Activa tu perfil y empieza tu viaje{" "}
        <span className="text-[#219653]">solidario</span>
      </>
    ),
    description:
      "Regístrate como voluntario u organización. Personaliza tu perfil con intereses, causas y logros.",
    image: "/img/HowItWorks/tab-img1.webp",
    alt: "Perfil de Uvol en celular",
  },
  {
    id: "oportunidades",
    tab: "Oportunidades",
    title: (
      <>
        Explora causas y <span className="text-[#219653]">oportunidades</span>{" "}
        afines
      </>
    ),
    description:
      "Filtra por temas que te apasionan, explora iniciativas con impacto y elige dónde sumar tu energía.",
    image: "/img/HowItWorks/tab-img2.webp",
    alt: "Oportunidades de voluntariado en Uvol",
  },
  {
    id: "participa",
    tab: "Participa",
    title: (
      <>
        Participa, colabora y genera{" "}
        <span className="text-[#219653]">impacto</span> real
      </>
    ),
    description:
      "Participa en eventos, colabora y deja huella. Sigue tu impacto y construye tu camino solidario.",
    image: "/img/HowItWorks/tab-img3.webp",
    alt: "Voluntarios participando",
  },
];

export default function HowItWorksSteps() {
  const [activeStep, setActiveStep] = useState(steps[0]);
  const appUrl = import.meta.env.VITE_APP_URL || "";
  const loginUrl = appUrl ? `${appUrl}/login` : "#";

  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {/* Mobile + Tablet */}
        <div className="mx-auto max-w-3xl text-center lg:hidden">
          <div className="mb-8 flex justify-center gap-6 overflow-x-auto text-sm text-neutral-700 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {steps.map((step) => (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveStep(step)}
                className={`shrink-0 pb-1 transition ${
                  activeStep.id === step.id
                    ? "border-b-2 border-neutral-900 text-neutral-900"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {step.tab}
              </button>
            ))}
          </div>

          <div className="mx-auto w-full max-w-xl overflow-hidden rounded-[28px] bg-neutral-100 shadow-soft">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeStep.id}
                src={activeStep.image}
                alt={activeStep.alt}
                loading="lazy"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="h-56 w-full object-cover sm:h-72"
              />
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mt-8"
            >
              <h2 className={`mx-auto max-w-3xl ${typography.sectionTitle}`}>
                {activeStep.title}
              </h2>

              <p className={`mx-auto mt-5 max-w-xl ${typography.paragraph}`}>
                {activeStep.description}
              </p>

              <div className="mt-6 flex justify-center">
                <Button as="a" href={loginUrl}>
                  ¡Empezar ahora!
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop */}
        <div className="hidden items-center gap-16 lg:grid lg:grid-cols-2">
          <div className="text-center">
            <div className="mb-8 flex justify-center gap-8 text-sm text-neutral-700">
              {steps.map((step) => (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(step)}
                  className={`pb-1 transition ${
                    activeStep.id === step.id
                      ? "border-b-2 border-neutral-900 text-neutral-900"
                      : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  {step.tab}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <h2 className={`mx-auto max-w-3xl ${typography.sectionTitle}`}>
                  {activeStep.title}
                </h2>

                <p className={`mx-auto mt-5 max-w-xl ${typography.paragraph}`}>
                  {activeStep.description}
                </p>

                <div className="mt-6 flex justify-center">
                  <Button as="a" href={loginUrl}>
                    ¡Empezar ahora!
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[28px] bg-neutral-100 shadow-soft">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeStep.id}
                src={activeStep.image}
                alt={activeStep.alt}
                loading="lazy"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="h-[420px] w-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
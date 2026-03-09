import Section from "../../components/layout/Section";
import FAQAccordion from "../../components/ui/FAQAccordion";

const faqItems = [
  {
    id: 1,
    question: "¿Qué es esta plataforma?",
    answer:
      "Uvol es una red social de voluntariado que conecta personas y organizaciones para generar impacto real a través de causas, eventos y comunidad.",
  },
  {
    id: 2,
    question: "¿Quién puede registrarse?",
    answer:
      "Pueden registrarse voluntarios, organizaciones y personas interesadas en participar en iniciativas sociales o crear oportunidades de impacto.",
  },
  {
    id: 3,
    question: "¿Es gratis usar la plataforma?",
    answer:
      "Sí, el acceso base a la plataforma está pensado para facilitar la conexión entre usuarios, causas y organizaciones.",
  },
  {
    id: 4,
    question: "¿Cómo me inscribo en un evento?",
    answer:
      "Solo debes crear tu cuenta, explorar los eventos disponibles y seleccionar la opción de inscripción en la actividad que te interese.",
  },
];

export default function FAQSection() {
  return (
    <Section className="pt-16 sm:pt-20">
      <div className="mx-auto max-w-3xl lg:max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Todo lo que quieres saber
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base">
            ¿No sabes por dónde empezar? ¿Tienes dudas sobre si es gratis o cómo
            funciona? Tranquilo, acá te lo explicamos todo paso a paso.
          </p>
        </div>

        <div className="mt-10 sm:mt-12">
          <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-[28px]">
            Preguntas frecuentes
          </h3>

          <div className="mt-6">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </div>
    </Section>
  );
}
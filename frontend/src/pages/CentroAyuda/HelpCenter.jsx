import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Section from "../../components/layout/Section";
import FAQAccordion from "../../components/ui/FAQAccordion";
import { typography } from "../../styles/typography";

const helpSections = [
  {
    title: "Cuenta y acceso",
    items: [
      {
        id: "cuenta-1",
        question: "¿Cómo creo una cuenta en Uvol?",
        answer:
          "Puedes crear tu cuenta desde el botón de registro. Elige si eres voluntario u organización y completa la información básica solicitada.",
      },
      {
        id: "cuenta-2",
        question: "¿Puedo iniciar sesión con Google?",
        answer:
          "Sí. Uvol permite iniciar sesión con Google si esa opción está disponible en la pantalla de acceso.",
      },
      {
        id: "cuenta-3",
        question: "¿Olvidé mi contraseña, cómo la recupero?",
        answer:
          "En la pantalla de inicio de sesión selecciona la opción de recuperar contraseña y sigue las instrucciones enviadas a tu correo.",
      },
      {
        id: "cuenta-4",
        question:
          "¿Puedo cambiar mi tipo de perfil de voluntario a organización?",
        answer:
          "No por el momento. Una vez creada la cuenta con un tipo de perfil, se mantiene así. Si necesitas una cuenta de organización, debes crearla como organización desde el registro.",
      },
    ],
  },
  {
    title: "Voluntariado y participación",
    items: [
      {
        id: "voluntariado-1",
        question: "¿Cómo encuentro oportunidades de voluntariado?",
        answer:
          "Puedes explorar oportunidades desde la sección de eventos y revisar las actividades publicadas por organizaciones.",
      },
      {
        id: "voluntariado-2",
        question: "¿Qué tipos de actividades puedo realizar como voluntario?",
        answer:
          "Puedes participar en actividades sociales, ambientales, educativas, comunitarias o eventos organizados por organizaciones registradas en la plataforma.",
      },
      {
        id: "voluntariado-3",
        question:
          "¿Qué hago si no puedo asistir a un evento al que me inscribí?",
        answer:
          "Puedes cancelar tu participación desde el detalle del evento, para que la organización tenga información actualizada sobre los asistentes.",
      },
      {
        id: "voluntariado-4",
        question: "¿Uvol entrega certificados de participación?",
        answer:
          "Por ahora Uvol no emite certificados automáticos. Si una organización ofrece algún reconocimiento, deberá informarlo directamente en el evento.",
      },
    ],
  },
  {
    title: "Organizaciones y eventos",
    items: [
      {
        id: "org-1",
        question: "¿Cómo registro mi organización en Uvol?",
        answer:
          "Debes seleccionar el registro como organización, completar los datos solicitados y esperar la revisión correspondiente antes de usar ciertas funciones.",
      },
      {
        id: "org-2",
        question: "¿Qué necesito para publicar un evento?",
        answer:
          "Debes tener una cuenta de organización y completar la información básica del evento, como título, descripción, fecha, ubicación y cupos disponibles.",
      },
      {
        id: "org-3",
        question: "¿Puedo editar un evento ya publicado?",
        answer:
          "Sí, puedes editar información del evento. Es recomendable hacerlo con responsabilidad para no confundir a los voluntarios inscritos.",
      },
      {
        id: "org-4",
        question: "¿Cómo gestiono la asistencia a mis eventos?",
        answer:
          "Desde el detalle o panel del evento puedes revisar la información de los voluntarios inscritos y hacer seguimiento básico de la participación.",
      },
    ],
  },
  {
    title: "Seguridad y soporte",
    items: [
      {
        id: "soporte-1",
        question: "¿Qué hago si veo una cuenta sospechosa?",
        answer:
          "Puedes reportar la situación al equipo de soporte para que sea revisada. Uvol busca mantener una comunidad segura y confiable.",
      },
      {
        id: "soporte-2",
        question: "¿Qué hago si encuentro un evento falso o confuso?",
        answer:
          "Repórtalo al equipo de soporte. Revisaremos la información del evento y tomaremos las medidas necesarias según el caso.",
      },
      {
        id: "soporte-3",
        question: "¿Puedo eliminar mi cuenta?",
        answer:
          "Sí. Puedes solicitar la eliminación de tu cuenta comunicándote con el equipo de soporte de Uvol.",
      },
      {
        id: "soporte-4",
        question: "¿Dónde puedo pedir ayuda?",
        answer:
          "Puedes escribir al correo de soporte o usar los canales de ayuda disponibles en la plataforma cuando estén habilitados.",
      },
    ],
  },
];

export default function HelpCenter() {
  const [query, setQuery] = useState("");

  const filteredSections = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) return helpSections;

    return helpSections
      .map((section) => ({
        ...section,
        items: section.items.filter((item) => {
          const content =
            `${section.title} ${item.question} ${item.answer}`.toLowerCase();

          return content.includes(normalizedQuery);
        }),
      }))
      .filter((section) => section.items.length > 0);
  }, [query]);

  return (
    <Section className="!py-0">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="mx-auto max-w-3xl py-16 sm:py-20 lg:py-20"
      >
        <h1 className={typography.heroTitle}>Centro de ayuda Uvol</h1>

        <div className="relative mt-6">
          <Search
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
          />

          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar una pregunta..."
            className="h-12 w-full rounded-full border border-neutral-300 bg-white pl-11 pr-4 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-neutral-500"
          />
        </div>

        <div className="mt-14 space-y-16">
          {filteredSections.map((section) => (
            <div key={section.title}>
              <h2 className={typography.cardTitle}>{section.title}</h2>

              <div className="mt-6">
                <FAQAccordion items={section.items} />
              </div>
            </div>
          ))}

          {filteredSections.length === 0 ? (
            <div className="rounded-[24px] border border-neutral-200 bg-neutral-50 px-6 py-10 text-center">
              <h2 className={typography.cardTitle}>
                No encontramos resultados
              </h2>

              <p className={`mx-auto mt-2 max-w-md ${typography.paragraph}`}>
                Intenta buscar con otras palabras o revisa las categorías del
                centro de ayuda.
              </p>
            </div>
          ) : null}
        </div>
      </motion.div>
    </Section>
  );
}
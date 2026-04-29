import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Section from "../../components/layout/Section";
import FAQAccordion from "../../components/ui/FAQAccordion";

const helpSections = [
  {
    title: "Cuenta y Seguridad",
    items: [
      {
        id: "cuenta-1",
        question: "¿Cómo creo una cuenta en Uvol?",
        answer:
          "Puedes crear tu cuenta desde el botón de registro. Elige si eres voluntario u organización y completa la información básica solicitada.",
      },
      {
        id: "cuenta-2",
        question: "¿Olvidé mi contraseña, cómo la recupero?",
        answer:
          "En la pantalla de inicio de sesión selecciona la opción de recuperar contraseña y sigue las instrucciones enviadas a tu correo.",
      },
      {
        id: "cuenta-3",
        question:
          "¿Puedo cambiar mi tipo de perfil de voluntario a organización?",
        answer:
          "Una vez creada la cuenta con el rol especificado, así se quedará. Las cuentas de organización pasan por una verificación antes de ser creadas.",
      },
    ],
  },
  {
    title: "Voluntariado y Participación",
    items: [
      {
        id: "voluntariado-1",
        question: "¿Cómo encuentro oportunidades de voluntariado?",
        answer:
          "Puedes explorar oportunidades desde la sección de eventos o desde las recomendaciones de otros eventos.",
      },
      {
        id: "voluntariado-2",
        question: "¿Qué tipos de actividades puedo realizar como voluntario?",
        answer:
          "Puedes participar en actividades sociales, ambientales, educativas, comunitarias o eventos organizados por organizaciones verificadas.",
      },
      {
        id: "voluntariado-3",
        question:
          "¿Qué hago si no puedo asistir a un evento al que me inscribí?",
        answer:
          "Puedes cancelar tu participación desde el detalle del evento para que la organización tenga información actualizada.",
      },
      {
        id: "voluntariado-4",
        question: "¿Recibo algún tipo de reconocimiento o certificado?",
        answer:
          "Las organizaciones pueden registrar tu participación y, según el evento, emitir reconocimientos o certificados.",
      },
    ],
  },
  {
    title: "Organizaciones y Eventos",
    items: [
      {
        id: "org-1",
        question: "¿Cómo registro mi organización en Uvol?",
        answer:
          "Selecciona el registro como organización, completa los datos solicitados y espera la validación correspondiente.",
      },
      {
        id: "org-2",
        question: "¿Qué requisitos necesito para publicar un evento?",
        answer:
          "Debes tener un perfil de organización, completar la información del evento y cumplir con las normas de publicación de la plataforma.",
      },
      {
        id: "org-3",
        question: "¿Puedo editar un evento ya publicado?",
        answer:
          "Sí, podrás editar detalles del evento siempre que no afecten de forma crítica a los voluntarios inscritos.",
      },
      {
        id: "org-4",
        question: "¿Cómo gestiono la asistencia a mis eventos?",
        answer:
          "Desde el panel del evento podrás revisar inscritos, asistencia y datos básicos de participación.",
      },
    ],
  },
  {
    title: "Privacidad y Configuración",
    items: [
      {
        id: "privacidad-1",
        question: "¿Quién puede ver mis publicaciones y eventos?",
        answer:
          "Tú decides la visibilidad de tu actividad según las opciones disponibles en la configuración de privacidad.",
      },
      {
        id: "privacidad-2",
        question: "¿Cómo configuro mi visibilidad?",
        answer:
          "Puedes ajustar tu visibilidad desde la configuración de tu perfil y modificarla cuando lo necesites.",
      },
      {
        id: "privacidad-3",
        question: "¿Puedo eliminar mi cuenta?",
        answer:
          "Sí, puedes solicitar la eliminación de tu cuenta desde configuración o contactando al centro de ayuda.",
      },
      {
        id: "privacidad-4",
        question: "¿Dónde gestiono mis notificaciones?",
        answer:
          "Las notificaciones se gestionan desde la configuración de tu cuenta, donde podrás activar o desactivar preferencias.",
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
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
          Centro de ayuda uvol
        </h1>

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
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                {section.title}
              </h2>

              <div className="mt-6">
                <FAQAccordion items={section.items} />
              </div>
            </div>
          ))}

          {filteredSections.length === 0 ? (
            <div className="rounded-[24px] border border-neutral-200 bg-neutral-50 px-6 py-10 text-center">
              <h2 className="text-xl font-semibold text-neutral-900">
                No encontramos resultados
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-neutral-600">
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
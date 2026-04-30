import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Container from "../../components/layout/Container";
import { typography } from "../../styles/typography";

const termsSections = [
  {
    id: "quienes-somos",
    title: "1. ¿Quiénes somos?",
    content: (
      <p>
        Uvol es una red social de voluntariado en etapa inicial que busca
        conectar personas, organizaciones y empresas interesadas en participar
        en actividades de impacto social. Estos términos regulan el uso general
        de la plataforma.
      </p>
    ),
  },
  {
    id: "aceptacion",
    title: "2. Aceptación de los términos",
    content: (
      <p>
        Al crear una cuenta, iniciar sesión o utilizar Uvol, aceptas estos
        términos y condiciones. Si no estás de acuerdo con ellos, te
        recomendamos no usar la plataforma.
      </p>
    ),
  },
  {
    id: "cuentas",
    title: "3. Cuentas de usuario",
    content: (
      <>
        <p>Para usar algunas funciones de Uvol, necesitas crear una cuenta.</p>

        <ul>
          <li>Debes proporcionar información real y actualizada.</li>
          <li>Eres responsable de mantener segura tu cuenta.</li>
          <li>No debes compartir tu contraseña con otras personas.</li>
          <li>
            Uvol puede revisar o restringir cuentas que presenten actividad
            sospechosa o incumplan estos términos.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "tipos-cuenta",
    title: "4. Tipos de cuenta",
    content: (
      <p>
        Uvol permite crear cuentas de voluntarios y cuentas de organizaciones.
        Las organizaciones pueden requerir una revisión o validación adicional
        antes de publicar eventos o actividades dentro de la plataforma.
      </p>
    ),
  },
  {
    id: "uso-plataforma",
    title: "5. Uso de la plataforma",
    content: (
      <>
        <p>
          Uvol debe usarse con fines relacionados con voluntariado, comunidad e
          impacto social.
        </p>

        <ul>
          <li>Explorar oportunidades de voluntariado.</li>
          <li>Participar o inscribirse en eventos.</li>
          <li>Publicar contenido relacionado con actividades sociales.</li>
          <li>
            Conectar con usuarios u organizaciones dentro de la comunidad.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "conducta",
    title: "6. Conductas no permitidas",
    content: (
      <>
        <p>Para mantener una comunidad segura, no está permitido:</p>

        <ul>
          <li>Publicar contenido ofensivo, falso, discriminatorio o dañino.</li>
          <li>Suplantar la identidad de otra persona u organización.</li>
          <li>Usar la plataforma para fraude, spam o actividades engañosas.</li>
          <li>Acosar, amenazar o incomodar a otros usuarios.</li>
          <li>Publicar eventos falsos o con información confusa.</li>
          <li>
            Intentar afectar la seguridad o funcionamiento de la plataforma.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "contenido",
    title: "7. Contenido publicado por usuarios",
    content: (
      <p>
        Los usuarios son responsables del contenido que publican en Uvol,
        incluyendo textos, imágenes, comentarios, eventos o información de
        perfil. Uvol puede retirar contenido que incumpla estos términos o que
        afecte la seguridad de la comunidad.
      </p>
    ),
  },
  {
    id: "eventos",
    title: "8. Eventos y actividades",
    content: (
      <p>
        Las organizaciones son responsables de la información que publican sobre
        sus eventos, incluyendo fechas, ubicación, requisitos, cupos y
        condiciones de participación. Los voluntarios deben revisar la
        información antes de inscribirse o asistir a una actividad.
      </p>
    ),
  },
  {
    id: "mensajes",
    title: "9. Comunicación entre usuarios",
    content: (
      <p>
        Uvol puede permitir la comunicación entre usuarios y organizaciones.
        Esta función debe utilizarse de forma respetuosa y relacionada con
        actividades de voluntariado o participación comunitaria.
      </p>
    ),
  },
  {
    id: "reportes",
    title: "10. Reportes y moderación",
    content: (
      <p>
        Los usuarios pueden reportar contenido, cuentas o actividades que
        consideren sospechosas, inapropiadas o contrarias a estos términos. Uvol
        podrá revisar los reportes y tomar medidas como ocultar contenido,
        restringir funciones o suspender cuentas.
      </p>
    ),
  },
  {
    id: "disponibilidad",
    title: "11. Disponibilidad del servicio",
    content: (
      <p>
        Uvol se encuentra en etapa inicial, por lo que algunas funciones pueden
        cambiar, estar en prueba o presentar interrupciones temporales.
        Trabajamos para mejorar la plataforma, pero no garantizamos
        disponibilidad continua o libre de errores.
      </p>
    ),
  },
  {
    id: "servicios-externos",
    title: "12. Servicios externos",
    content: (
      <p>
        Uvol puede apoyarse en servicios externos para funciones como
        autenticación, envío de correos, alojamiento o herramientas técnicas
        necesarias para operar la plataforma.
      </p>
    ),
  },
  {
    id: "responsabilidad",
    title: "13. Responsabilidad",
    content: (
      <p>
        Uvol facilita la conexión entre voluntarios y organizaciones, pero no
        reemplaza la responsabilidad de cada usuario u organización sobre sus
        acciones, publicaciones, eventos o compromisos asumidos dentro y fuera
        de la plataforma.
      </p>
    ),
  },
  {
    id: "cambios",
    title: "14. Cambios en los términos",
    content: (
      <p>
        Como Uvol está en crecimiento, estos términos pueden actualizarse cuando
        se agreguen nuevas funciones o cambien las condiciones de uso. La
        versión vigente estará disponible en esta página.
      </p>
    ),
  },
  {
    id: "contacto",
    title: "15. Contacto",
    content: (
      <p>
        Si tienes preguntas sobre estos términos, puedes escribirnos a:{" "}
        <a
          href="mailto:uvolleal@gmail.com"
          className="font-medium text-neutral-900 underline underline-offset-4"
        >
          uvolleal@gmail.com
        </a>
      </p>
    ),
  },
];

export default function TermsPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <section className="bg-[#219653] py-14 text-white sm:py-16 lg:py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <button
              type="button"
              onClick={handleGoBack}
              className="inline-flex cursor-pointer items-center gap-2 text-xs text-white/90 transition hover:text-white"
            >
              <ArrowLeft size={14} />
              Volver
            </button>

            <h1 className={`mt-5 ${typography.heroTitle} text-white`}>
              Términos y Condiciones de Uvol
            </h1>

            <p className="mt-5 text-sm text-white/85 sm:text-base">
              Versión inicial de los términos de uso
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="max-w-4xl space-y-12"
            >
              {termsSections.map((section) => (
                <article
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24"
                >
                  <h2 className={typography.sectionTitleSmall}>
                    {section.title}
                  </h2>

                  <div className="policy-content mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                    {section.content}
                  </div>
                </article>
              ))}
            </motion.div>

            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-[24px] border border-neutral-200 bg-white p-5">
                <p className="text-sm font-semibold text-neutral-900">Índice</p>

                <nav className="mt-4 space-y-3">
                  {termsSections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-xs leading-5 text-neutral-500 transition hover:text-neutral-900"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </div>
  );
}
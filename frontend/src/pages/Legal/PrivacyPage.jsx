import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Container from "../../components/layout/Container";
import { typography } from "../../styles/typography";

// Este array guarda toda la información de la página.
// Luego usamos .map() para pintar todo.
const policySections = [
  {
    id: "quienes-somos",
    title: "1. ¿Quiénes somos?",
    content: (
      <p>
        Uvol es una red social de voluntariado en etapa inicial que busca
        conectar personas, organizaciones y empresas interesadas en participar
        en actividades de impacto social. Esta política explica de forma
        sencilla cómo manejamos la información dentro de la plataforma.
      </p>
    ),
  },
  {
    id: "datos-recopilamos",
    title: "2. Información que recopilamos",
    content: (
      <>
        <p>
          Para que puedas usar Uvol, podemos recopilar algunos datos básicos,
          como:
        </p>

        <ul>
          <li>Nombre o nombre de usuario.</li>
          <li>Correo electrónico.</li>
          <li>Contraseña protegida.</li>
          <li>Tipo de cuenta: voluntario u organización.</li>
          <li>
            Información básica del perfil, como foto, descripción o ubicación.
          </li>
          <li>
            Actividad dentro de la plataforma, como publicaciones, eventos,
            inscripciones, seguidores o mensajes.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "uso-datos",
    title: "3. Cómo usamos esta información",
    content: (
      <>
        <p>
          Usamos la información para permitir el funcionamiento básico de Uvol:
        </p>

        <ul>
          <li>Crear y administrar cuentas de usuario.</li>
          <li>
            Mostrar perfiles, publicaciones y eventos dentro de la plataforma.
          </li>
          <li>
            Permitir la inscripción y gestión de actividades de voluntariado.
          </li>
          <li>Facilitar la comunicación entre usuarios y organizaciones.</li>
          <li>
            Mejorar la seguridad y prevenir usos indebidos de la plataforma.
          </li>
          <li>Responder solicitudes de soporte o reportes.</li>
        </ul>

        <p>No vendemos la información personal de los usuarios.</p>
      </>
    ),
  },
  {
    id: "organizaciones",
    title: "4. Cuentas de organizaciones",
    content: (
      <p>
        Las cuentas de organizaciones pueden requerir información adicional para
        identificar correctamente a la entidad que crea eventos o actividades.
        Esta información se usa para dar mayor confianza a los voluntarios y
        evitar el mal uso de la plataforma.
      </p>
    ),
  },
  {
    id: "seguridad",
    title: "5. Seguridad de la información",
    content: (
      <>
        <p>
          Aplicamos medidas básicas de seguridad para proteger la información de
          los usuarios, como el uso de autenticación, contraseñas protegidas y
          buenas prácticas en el manejo de datos.
        </p>

        <p>
          Aunque trabajamos para mantener la plataforma segura, ningún sistema
          digital es completamente infalible. Por eso también recomendamos a los
          usuarios cuidar sus credenciales y reportar cualquier actividad
          sospechosa.
        </p>
      </>
    ),
  },
  {
    id: "habeas-data",
    title: "6. Derechos sobre tus datos personales / Hábeas Data",
    content: (
      <>
        <p>
          En Colombia, el derecho de hábeas data está respaldado por el artículo
          15 de la Constitución Política y por la Ley 1581 de 2012 sobre
          protección de datos personales.
        </p>

        <p>
          Como usuario de Uvol, puedes solicitar información sobre los datos
          personales que tenemos asociados a tu cuenta, pedir su actualización,
          corrección o eliminación cuando corresponda.
        </p>

        <ul>
          <li>Conocer qué información personal tenemos registrada.</li>
          <li>Solicitar la actualización o corrección de tus datos.</li>
          <li>Preguntar para qué se usa tu información dentro de Uvol.</li>
          <li>Solicitar la eliminación de tu cuenta o información asociada.</li>
          <li>Revocar autorizaciones cuando sea aplicable según la ley.</li>
        </ul>

        <p>
          Para ejercer estos derechos, puedes escribirnos a{" "}
          <a
            href="mailto:uvolleal@gmail.com"
            className="font-medium text-neutral-900 underline underline-offset-4"
          >
            uvolleal@gmail.com
          </a>{" "}
          indicando tu solicitud y el correo asociado a tu cuenta.
        </p>
      </>
    ),
  },
  {
    id: "terceros",
    title: "7. Servicios externos",
    content: (
      <p>
        Uvol puede utilizar servicios externos necesarios para su
        funcionamiento, como autenticación con Google, envío de correos o
        alojamiento de la plataforma. Estos servicios se usan únicamente para
        operar funciones básicas del sistema.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "8. Cookies y almacenamiento técnico",
    content: (
      <p>
        Actualmente Uvol no utiliza cookies publicitarias ni sistemas de
        recomendación personalizados basados en seguimiento. La plataforma puede
        usar almacenamiento técnico del navegador cuando sea necesario para
        mantener la sesión iniciada o recordar información básica de
        funcionamiento.
      </p>
    ),
  },
  {
    id: "reportes",
    title: "9. Reportes y soporte",
    content: (
      <p>
        Si un usuario detecta una actividad sospechosa, contenido inadecuado o
        un problema con su cuenta, puede comunicarse con el equipo de soporte de
        Uvol para revisar el caso.
      </p>
    ),
  },
  {
    id: "eliminacion",
    title: "10. Eliminación de cuenta",
    content: (
      <p>
        Los usuarios pueden solicitar la eliminación de su cuenta comunicándose
        con el equipo de soporte. Al eliminar una cuenta, la información
        asociada podrá ser removida o desactivada según las necesidades técnicas
        y de seguridad de la plataforma.
      </p>
    ),
  },
  {
    id: "cambios-politica",
    title: "11. Cambios en esta política",
    content: (
      <p>
        Como Uvol está en crecimiento, esta política puede actualizarse cuando
        se agreguen nuevas funciones o cambie la forma en que se maneja la
        información. La versión vigente estará disponible en esta página.
      </p>
    ),
  },
  {
    id: "contacto",
    title: "12. Contacto",
    content: (
      <p>
        Si tienes preguntas sobre esta política o sobre el manejo de tu
        información, puedes escribirnos a:{" "}
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

export default function PrivacyPolicy() {
  // Estado para volver a la página anterior o mandar al inicio si no hay historial.
  const navigate = useNavigate();

  /*
    Esta función se ejecuta cuando el usuario hace clic en "Volver".

    window.history.length > 1:
    significa que sí hay una página anterior en el historial.

    navigate(-1):
    vuelve una página atrás, como el botón atrás del navegador.

    navigate("/"):
    si no hay historial, manda al inicio.
  */
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
              Política de Privacidad de Uvol
            </h1>

            <p className="mt-5 text-sm text-white/85 sm:text-base">
              Versión inicial de políticas de privacidad (30-04-2026)
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
              {/*
                Recorremos el array policySections.
                Por cada objeto se crea un article con título y contenido.
              */}
              {policySections.map((section) => (
                <article
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24"
                >
                  {/*
                    El Id permite que el índice lateral pueda navegar a esta sección
                    usando href="#id".
                  */}

                  <h2 className={typography.sectionTitleSmall}>
                    {section.title}
                  </h2>

                  <div className="policy-content mt-4 text-sm leading-7 text-neutral-700 sm:text-base">
                    {section.content}
                  </div>
                </article>
              ))}
            </motion.div>

            {/* Índice lateral. */}
            <aside className="hidden lg:block">
              {/*
                sticky top-24 hace que el índice se quede visible
                mientras bajas por la página.
              */}
              <div className="sticky top-24 rounded-[24px] border border-neutral-200 bg-white p-5">
                <p className="text-sm font-semibold text-neutral-900">Índice</p>

                <nav className="mt-4 space-y-3">
                  {/*
                    Se reutiliza el mismo array para crear el índice.
                    Así no tenemos que escribir los enlaces a mano.
                  */}
                  {policySections.map((section) => (
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
import { motion } from "framer-motion";
import Section from "../../components/layout/Section";
import { ShieldCheck, EyeOff, ShieldPlus, BadgeCheck } from "lucide-react";

const cards = [
  {
    title: "Seguridad en la plataforma",
    description:
      "Monitoreamos la actividad para prevenir fraudes, suplantación y mal uso. Contamos con verificación de identidad para organizaciones y protocolos de acción ante reportes.",
    Icon: ShieldCheck,
  },
  {
    title: "Control de tu visibilidad",
    description:
      "Decide quién puede ver tu perfil, tus publicaciones y tu historial de participación. Puedes modificar tus ajustes de privacidad en cualquier momento desde tu cuenta.",
    Icon: EyeOff,
  },
  {
    title: "Protección de tus datos",
    description:
      "Guardamos tu información personal de forma segura con tecnología de cifrado, servidores protegidos y buenas prácticas en el manejo de datos. Nunca vendemos ni compartimos tus datos con terceros sin tu consentimiento.",
    Icon: ShieldPlus,
  },
  {
    title: "Tus derechos",
    description:
      "Tienes acceso total a tu información: puedes consultarla, modificarla, descargarla o eliminarla cuando quieras. En Uvol, tus derechos están protegidos y siempre tendrás el control de tu experiencia en la plataforma.",
    Icon: BadgeCheck,
  },
];

export default function PrivacyCards() {
  return (
    <Section>
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:gap-16">
        {cards.map(({ title, description, Icon }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            className="rounded-[28px] border border-neutral-200 bg-white px-6 py-10 text-center shadow-sm transition-shadow hover:shadow-soft"
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-neutral-300 text-[#219653]">
              <Icon size={34} strokeWidth={1.8} />
            </div>

            <h2 className="mt-8 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              {title}
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-neutral-600 sm:text-base">
              {description}
            </p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

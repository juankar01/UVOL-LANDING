import { motion } from "framer-motion";
import Section from "../../components/layout/Section";
import { ShieldCheck, Building2, ShieldPlus, BadgeCheck } from "lucide-react";
import { typography } from "../../styles/typography";

const cards = [
  {
    title: "Seguridad en la plataforma",
    description:
      "Trabajamos para mantener una comunidad confiable. Revisamos reportes, cuidamos el acceso a las cuentas y buscamos prevenir usos indebidos dentro de la plataforma.",
    Icon: ShieldCheck,
  },
  {
    title: "Cuentas responsables",
    description:
      "Las cuentas de organizaciones pueden pasar por revisión antes de publicar actividades. Esto ayuda a que los voluntarios participen con mayor confianza.",
    Icon: Building2,
  },
  {
    title: "Protección de tus datos",
    description:
      "Usamos tu información solo para el funcionamiento básico de Uvol, como crear tu cuenta, mostrar tu perfil, gestionar eventos y facilitar la comunicación.",
    Icon: ShieldPlus,
  },
  {
    title: "Soporte y reportes",
    description:
      "Si encuentras una cuenta sospechosa, un evento confuso o algún problema con tu perfil, puedes contactar al equipo de soporte para revisar el caso.",
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

            <h2 className={`mt-8 ${typography.cardTitle}`}>{title}</h2>

            <p className={`mx-auto mt-3 max-w-md ${typography.paragraph}`}>
              {description}
            </p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
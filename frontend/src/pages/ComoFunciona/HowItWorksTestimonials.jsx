import { motion } from "framer-motion";
import Section from "../../components/layout/Section";

const testimonials = [
  {
    name: "Rose Yaeger",
    role: "Voluntaria, 19 años",
    image: "/img/HowItWorks/avatar-img3.webp",
    text: "El voluntariado me ha permitido conocer realidades diferentes y contribuir a mejorarlas. Ha sido una experiencia transformadora que recomiendo a todos los jóvenes.",
  },
  {
    name: "Brad Pills",
    role: "Voluntario, 25 años",
    image: "/img/HowItWorks/avatar-img1.webp",
    text: "El voluntariado me ha permitido conocer realidades diferentes y contribuir a mejorarlas. Ha sido una experiencia transformadora que recomiendo a todos los jóvenes.",
  },
  {
    name: "Camelia Santos",
    role: "Voluntaria, 22 años",
    image: "/img/HowItWorks/avatar-img2.webp",
    text: "El voluntariado me ha permitido conocer realidades diferentes y contribuir a mejorarlas. Ha sido una experiencia transformadora que recomiendo a todos los jóvenes.",
  },
];

export default function HowItWorksTestimonials() {
  return (
    <Section className="pb-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="text-center"
      >
        <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          Lo que otros dicen de <span className="text-[#219653]">Uvol</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base">
          Voluntarios y organizaciones comparten cómo Uvol les ayudó a encontrar
          causas que los inspiran y a marcar la diferencia.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            className={`relative rounded-[28px] border border-neutral-200 bg-white px-6 pb-8 pt-12 text-center shadow-sm transition-shadow hover:shadow-soft ${
              index === 2
                ? "md:col-span-2 md:mx-auto md:w-full md:max-w-[380px] lg:col-span-1 lg:max-w-none"
                : ""
            }`}
          >
            <div className="absolute left-1/2 top-0 h-16 w-16 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 border-white bg-neutral-200 shadow-sm">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="text-sm leading-6 text-neutral-600">"{item.text}"</p>

            <h3 className="mt-6 text-sm font-semibold text-neutral-900">
              {item.name}
            </h3>

            <p className="mt-1 text-xs text-neutral-500">{item.role}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
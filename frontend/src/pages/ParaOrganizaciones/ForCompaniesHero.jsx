import { motion } from "framer-motion";
import Section from "../../components/layout/Section";
import Button from "../../components/ui/Button";

export default function ForCompaniesHero() {
  return (
    <Section className="!py-0">
      <div className="py-16 sm:py-20 lg:grid lg:min-h-[calc(100vh-56px)] lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-0">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700 shadow-sm lg:mx-0">
            <div className="flex -space-x-2">
              <img
                src="/img/avatars/avatar1.webp"
                alt="Organización"
                className="h-5 w-5 rounded-full border border-white object-cover"
              />
              <img
                src="/img/avatars/avatar2.webp"
                alt="Organización"
                className="h-5 w-5 rounded-full border border-white object-cover"
              />
              <img
                src="/img/avatars/avatar3.webp"
                alt="Organización"
                className="h-5 w-5 rounded-full border border-white object-cover"
              />
            </div>

            <span>Más de 100mil organizaciones</span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:text-[56px] lg:leading-[1.08]">
            Impulsa tu compromiso social como empresa
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-neutral-600 sm:text-base lg:mx-0">
            Conecta tu equipo con causas reales. Organiza voluntariado
            corporativo, fortalece tu impacto social y construye una cultura
            empresarial más humana.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button as="a" href="/register" className="justify-center">
              Regístrate
            </Button>

            <a
              href="#soluciones"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 hover:text-neutral-900"
            >
              Soluciones
            </a>
          </div>

          {/* Mobile + Tablet: imagen principal limpia */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
            className="mt-12 overflow-hidden rounded-[28px] bg-neutral-100 shadow-soft lg:hidden"
          >
            <img
              src="/img/ForCompanies/hero-img3.webp"
              alt="Empresa usando Uvol"
              className="h-72 w-full object-cover sm:h-[420px]"
            />
          </motion.div>
        </motion.div>

        {/* Desktop: imagen empresa + celular superpuesto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
          className="relative mx-auto hidden w-full max-w-[600px] pb-10 lg:block lg:pb-0"
        >
          <div className="ml-auto w-[74%] overflow-hidden rounded-[28px] bg-neutral-100 shadow-soft">
            <img
              src="/img/ForCompanies/hero-img2.webp"
              alt="Empresa usando Uvol"
              className="h-[520px] w-full object-cover"
            />
          </div>

          <div className="absolute bottom-8 left-4 w-[210px] overflow-hidden rounded-[24px] bg-white shadow-soft ring-1 ring-black/5">
            <img
              src="/img/ForCompanies/mobile-img.webp"
              alt="Vista móvil de Uvol"
              className="h-auto w-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
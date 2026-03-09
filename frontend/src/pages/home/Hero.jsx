import Section from "../../components/layout/Section";
import Button from "../../components/ui/Button";
import HeroGallery from "./HeroGallery";

export default function Hero() {
  const appUrl = import.meta.env.VITE_APP_URL || "";

  return (
    <Section className="pt-8 sm:pt-10 lg:pt-12" containerClassName="text-center">
      <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700 shadow-sm">
        <div className="flex -space-x-2">
          <span className="h-5 w-5 rounded-full border border-white bg-neutral-200" />
          <span className="h-5 w-5 rounded-full border border-white bg-neutral-300" />
          <span className="h-5 w-5 rounded-full border border-white bg-neutral-400" />
        </div>

        <span>Menos 0 usuarios activos pa</span>
      </div>

      <h1 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        La red donde ayudar también
        <span className="block">—es hacer comunidad.</span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl text-sm text-neutral-600 sm:text-base">
        Comparte tu impacto con una comunidad que no se queda quieta.
      </p>

      <div className="mt-6 flex justify-center">
        <Button as="a" href={appUrl ? `${appUrl}/register` : "#"} size="lg">
          ¡Empezar ahora!
        </Button>
      </div>

      <HeroGallery />
    </Section>
  );
}
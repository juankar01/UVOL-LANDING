import { NavLink } from "react-router-dom";
import Container from "./Container";

const FOOTER_LINKS = [
  { label: "Política de privacidad", to: "/politica-de-privacidad" },
  { label: "Términos y condiciones", to: "/terminos-y-condiciones" },
  { label: "Centro de ayuda", to: "/centro-de-ayuda" },
  {
    label: "Manual de usuario",
    href: "/docs/manual-usuario-uvol.pdf",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="pt-16 pb-8">
      <Container>
        <div className="flex flex-col items-center gap-6 pt-6 text-center text-sm text-neutral-600 lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <div className="text-neutral-900">© Uvol</div>

          <nav className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
            {FOOTER_LINKS.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-neutral-900"
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="transition hover:text-neutral-900"
                >
                  {link.label}
                </NavLink>
              ),
            )}
          </nav>

          <a
            href="mailto:uvolleal@gmail.com"
            className="transition hover:text-neutral-900 lg:text-right"
          >
            uvolleal@gmail.com
          </a>
        </div>
      </Container>
    </footer>
  );
}
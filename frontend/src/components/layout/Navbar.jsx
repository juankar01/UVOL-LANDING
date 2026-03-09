import { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "./Container";
import Button from "../ui/Button";
import MobileMenu from "./MobileMenu";
import { NAV_LINKS } from "../../data/nav";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const appUrl = import.meta.env.VITE_APP_URL || "";

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white">
        <Container className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Uvol" className="w-10 h-10" />
            <NavLink to="/" className="font-semibold tracking-tight">
              Uvol
            </NavLink>
          </div>

          <nav className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-sm ${
                    isActive
                      ? "font-medium text-neutral-900"
                      : "text-neutral-600 hover:text-neutral-900"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button as="a" href={appUrl ? `${appUrl}/login` : "#"} size="sm">
              Iniciar sesión
            </Button>
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-2xl text-neutral-900 transition hover:bg-neutral-100 lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
          >
            ☰
          </button>
        </Container>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
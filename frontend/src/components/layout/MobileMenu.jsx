import { NavLink } from "react-router-dom";
import Button from "../ui/Button";
import { NAV_LINKS } from "../../data/nav";

export default function MobileMenu({ open, onClose }) {
  if (!open) return null;

  const appUrl = import.meta.env.VITE_APP_URL || "";

  return (
    <div className="fixed inset-0 z-[100] lg:hidden">
      <div className="absolute inset-0 bg-white animate-[fadeIn_.22s_ease-out]" />

      <div className="relative flex h-full flex-col overflow-y-auto bg-white animate-[menuIn_.28s_ease-out]">
        {/* Header */}
        <div className="flex items-center justify-end px-5 py-4">
          <button
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-2xl text-neutral-900 transition hover:bg-neutral-100"
            aria-label="Cerrar menú"
          >
            ×
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 px-5 pt-8">
          <div className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={onClose}
                className={({ isActive }) =>
                  `py-5 text-[2rem] font-semibold leading-none tracking-tight transition ${
                    isActive
                      ? "text-neutral-900"
                      : "text-neutral-500 hover:text-neutral-900"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* CTA */}
        <div className="border-t border-neutral-200 px-5 py-5">
          <Button
            as="a"
            href={appUrl ? `${appUrl}/login` : "#"}
            className="w-full justify-center py-4 text-base"
          >
            Iniciar sesión
          </Button>
        </div>
      </div>
    </div>
  );
}
import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Section from "../../components/layout/Section";
import Button from "../../components/ui/Button";
import { typography } from "../../styles/typography";

const REPORT_TYPES = [
  "Cuenta sospechosa",
  "Organización falsa o dudosa",
  "Evento falso o confuso",
  "Contenido inapropiado",
  "Acoso o comportamiento indebido",
  "Problema con mi cuenta",
  "Otro",
];

export default function PrivacySupport() {
  const apiUrl = import.meta.env.VITE_API_URL || "";

  const [openReport, setOpenReport] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "Cuenta sospechosa",
    relatedTo: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCloseModal = () => {
    setOpenReport(false);
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    if (!form.email.trim() || !form.message.trim()) {
      setErrorMessage("El correo y la descripción son obligatorios.");
      return;
    }

    if (!apiUrl) {
      setErrorMessage("No está configurada la URL de la API.");
      return;
    }

    try {
      setSending(true);

      const response = await fetch(`${apiUrl}/public-reports`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error?.message || "No se pudo enviar el reporte.",
        );
      }

      setSuccessMessage(
        "Reporte enviado correctamente. Gracias por avisarnos.",
      );

      setForm({
        name: "",
        email: "",
        type: "Cuenta sospechosa",
        relatedTo: "",
        message: "",
      });
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <Section className="pt-4 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="mx-auto max-w-6xl rounded-[28px] bg-[#219653] px-6 py-12 text-center text-white sm:px-10 lg:py-14"
      >
        <h2 className={`${typography.sectionTitleSmall} text-white`}>
          Reportes y soporte
        </h2>

        <p className="mt-4 text-sm text-white/90 sm:text-base">
          ¿Detectaste actividad sospechosa o te sientes inseguro?
        </p>

        <p
          className={`mx-auto mt-4 max-w-2xl ${typography.paragraph} text-white/90`}
        >
          Accede al Centro de ayuda o usa el botón “Reportar” para contarnos qué
          ocurrió. Revisaremos el caso para cuidar la comunidad.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button as="a" href="/centro-de-ayuda" className="min-w-36">
            Centro de ayuda
          </Button>

          <button
            type="button"
            onClick={() => setOpenReport(true)}
            className="inline-flex min-w-36 items-center justify-center rounded-full border border-white/70 bg-transparent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10 cursor-pointer"
          >
            Reportar
          </button>
        </div>
      </motion.div>

      {openReport ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4">
          <div className="w-full max-w-lg rounded-[28px] bg-white p-6 shadow-soft">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">
                  Reportar una situación
                </h3>

                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  Ayúdanos a revisar cuentas, eventos o actividades sospechosas
                  dentro de Uvol.
                </p>
              </div>

              <button
                type="button"
                onClick={handleCloseModal}
                className="inline-flex items-center justify-center rounded-full text-xl text-neutral-700 transition hover:bg-neutral-170 cursor-pointer"
              >
                <X size={22} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-left">
              <div>
                <label className="text-sm font-medium text-neutral-800">
                  Tu nombre <span className="text-neutral-400">(opcional)</span>
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Ej: Will Smith"
                  className="mt-2 h-11 w-full rounded-xl border border-neutral-300 px-4 text-sm outline-none transition focus:border-neutral-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-neutral-800">
                  Correo electrónico
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@correo.com"
                  className="mt-2 h-11 w-full rounded-xl border border-neutral-300 px-4 text-sm outline-none transition focus:border-neutral-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-neutral-800">
                  ¿Qué quieres reportar?
                </label>

                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="mt-2 h-11 w-full rounded-xl border border-neutral-300 bg-white px-4 text-sm outline-none transition focus:border-neutral-500"
                >
                  {REPORT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-neutral-800">
                  Usuario, organización o evento relacionado{" "}
                  <span className="text-neutral-400">(opcional)</span>
                </label>

                <input
                  type="text"
                  name="relatedTo"
                  value={form.relatedTo}
                  onChange={handleChange}
                  placeholder="Ej: @usuario, nombre del evento o link"
                  className="mt-2 h-11 w-full rounded-xl border border-neutral-300 px-4 text-sm outline-none transition focus:border-neutral-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-neutral-800">
                  Describe lo sucedido
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Cuéntanos brevemente qué ocurrió..."
                  className="mt-2 w-full resize-none rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none transition focus:border-neutral-500"
                />
              </div>

              {errorMessage ? (
                <p className="text-sm text-red-600">{errorMessage}</p>
              ) : null}

              {successMessage ? (
                <p className="text-sm text-[#219653]">{successMessage}</p>
              ) : null}

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 cursor-pointer"
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center rounded-full bg-[#219653] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#1b7f46] disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
                >
                  {sending ? "Enviando..." : "Enviar reporte"}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </Section>
  );
}

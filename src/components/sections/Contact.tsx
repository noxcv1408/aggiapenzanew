import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import AnimatedSection from "../AnimatedSection";
import AnimatedWords from "../AnimatedWords";
import { useLanguage } from "@/contexts/LanguageContext";

// ─── EmailJS setup ───────────────────────────────────────────────────────────
// 1. Crea un account gratuito su https://emailjs.com (200 email/mese gratis)
// 2. Aggiungi un Email Service (Gmail, Outlook, ecc.)
// 3. Crea un Email Template con le variabili: {{from_name}}, {{reply_to}}, {{message}}
// 4. Copia Service ID, Template ID e Public Key nel file .env.local:
//
//    VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
//    VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
//    VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
// ─────────────────────────────────────────────────────────────────────────────

const Contact = () => {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Fallback if env vars not configured yet
    if (!serviceId || !templateId || !publicKey) {
      alert("EmailJS non configurato. Aggiungi le variabili in .env.local");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contatti" className="relative z-10 py-32 px-6">
      <div className="mx-auto max-w-xl">
        <AnimatedSection>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-12 text-center">
            <AnimatedWords text={t.contact.title} />
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="from_name"
              placeholder={t.contact.name}
              required
              className="input-glow w-full rounded-lg border border-border bg-card px-5 py-4 text-foreground text-sm outline-none transition-all placeholder:text-muted-foreground"
            />
            <input
              type="email"
              name="reply_to"
              placeholder={t.contact.email}
              required
              className="input-glow w-full rounded-lg border border-border bg-card px-5 py-4 text-foreground text-sm outline-none transition-all placeholder:text-muted-foreground"
            />
            <textarea
              name="message"
              placeholder={t.contact.message}
              required
              rows={5}
              className="input-glow w-full rounded-lg border border-border bg-card px-5 py-4 text-foreground text-sm outline-none transition-all resize-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              disabled={status === "sending" || status === "success"}
              className="w-full rounded-full bg-foreground px-8 py-4 text-sm font-medium text-primary-foreground transition-all hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? t.contact.sending : t.contact.send}
            </button>

            {status === "success" && (
              <p className="text-center text-sm text-foreground/80">{t.contact.success}</p>
            )}
            {status === "error" && (
              <p className="text-center text-sm text-destructive">{t.contact.error}</p>
            )}
          </form>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mt-10 text-center text-muted-foreground text-sm space-y-1">
            <p>info@aggiapenza.it</p>
            <p>{t.contact.city}</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;

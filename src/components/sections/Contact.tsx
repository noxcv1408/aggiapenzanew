import { useState } from "react";
import AnimatedSection from "../AnimatedSection";
import AnimatedWords from "../AnimatedWords";

const Contact = () => {
  const [form, setForm] = useState({ nome: "", email: "", messaggio: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Grazie per il messaggio! Ti contatteremo presto.");
    setForm({ nome: "", email: "", messaggio: "" });
  };

  return (
    <section id="contatti" className="relative z-10 py-32 px-6">
      <div className="mx-auto max-w-xl">
        <AnimatedSection>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-12 text-center">
            <AnimatedWords text="Parliamo." />
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Nome"
              required
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="input-glow w-full rounded-lg border border-border bg-card px-5 py-4 text-foreground text-sm outline-none transition-all placeholder:text-muted-foreground"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="input-glow w-full rounded-lg border border-border bg-card px-5 py-4 text-foreground text-sm outline-none transition-all placeholder:text-muted-foreground"
            />
            <textarea
              placeholder="Messaggio"
              required
              rows={5}
              value={form.messaggio}
              onChange={(e) => setForm({ ...form, messaggio: e.target.value })}
              className="input-glow w-full rounded-lg border border-border bg-card px-5 py-4 text-foreground text-sm outline-none transition-all resize-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-foreground px-8 py-4 text-sm font-medium text-primary-foreground transition-all hover:bg-foreground/90"
            >
              Invia
            </button>
          </form>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mt-10 text-center text-muted-foreground text-sm space-y-1">
            <p>info@aggiapenza.it</p>
            <p>Napoli, Italia</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;

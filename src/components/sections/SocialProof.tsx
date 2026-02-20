import AnimatedSection from "../AnimatedSection";
import AnimatedWords from "../AnimatedWords";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = [
  {
    quote: "Aggiapenza ha trasformato la nostra presenza online. Professionali, precisi, sempre disponibili.",
    name: "Marco R.",
    role: "CEO, TechItalia Srl",
  },
  {
    quote: "Finalmente un'agenzia che capisce le PMI. Risultati concreti, zero fronzoli.",
    name: "Giulia P.",
    role: "Fondatrice, Bottega Moderna",
  },
];

const SocialProof = () => {
  const { t } = useLanguage();
  return (
    <section className="relative z-10 py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            <AnimatedWords text={t.socialProof.title} />
          </h2>
        </AnimatedSection>

        {/* Client logos placeholder */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-6 mb-16 mt-10">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="h-12 w-28 rounded-lg bg-secondary/50 border border-border/30"
              />
            ))}
          </div>
        </AnimatedSection>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <AnimatedSection key={testimonial.name} delay={0.3 + i * 0.1}>
              <div className="card-hover rounded-xl border border-border bg-card p-8">
                <p className="text-foreground/90 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="text-foreground font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

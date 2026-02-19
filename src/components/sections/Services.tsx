import AnimatedSection from "../AnimatedSection";
import AnimatedWords from "../AnimatedWords";

const services = [
  { icon: "🔍", title: "SEO", desc: "Visibilità organica che dura nel tempo" },
  { icon: "🌐", title: "Siti Web", desc: "Design che converte, codice che vola" },
  { icon: "📱", title: "Social Media", desc: "Presenza autentica su ogni canale" },
  { icon: "⚙️", title: "Automazione", desc: "Processi che lavorano per te" },
  { icon: "📊", title: "Marketing", desc: "Strategie data-driven su misura" },
  { icon: "🛡️", title: "Cybersecurity", desc: "Proteggi la tua presenza digitale" },
];

const Services = () => (
  <section id="servizi" className="relative z-10 py-32 px-6">
    <div className="mx-auto max-w-6xl">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
          <AnimatedWords text="I nostri servizi" />
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.1}>
            <div className="card-hover rounded-xl border border-border bg-card p-8 h-full">
              <span className="text-3xl mb-4 block">{s.icon}</span>
              <h3 className="text-xl font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Services;

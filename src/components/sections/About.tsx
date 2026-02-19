import AnimatedSection from "../AnimatedSection";
import AnimatedWords from "../AnimatedWords";

const About = () => (
  <section className="relative z-10 py-32 px-6">
    <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
      {/* Left */}
      <AnimatedSection>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] text-foreground">
          <AnimatedWords text="Agg—ia—pen—za." />
        </h2>
      </AnimatedSection>

      {/* Right */}
      <AnimatedSection delay={0.2}>
        <div className="relative">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Dal dialetto napoletano. Significa pensare con intelligenza prima di agire.
            È il principio dietro ogni strategia che costruiamo per te.
          </p>
          {/* Rotating circle decoration */}
          <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full border border-border/20 animate-rotate-slow hidden lg:block" />
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default About;

import CountUp from "../CountUp";
import AnimatedSection from "../AnimatedSection";

const CounterStrip = () => (
  <AnimatedSection>
    <section className="relative z-10 border-y border-border/30 py-16">
      <div className="mx-auto flex max-w-5xl flex-col md:flex-row items-center justify-around gap-10">
        <CountUp end={50} suffix="+" label="Clienti soddisfatti" />
        <CountUp end={100} suffix="%" label="Focus PMI italiane" />
        <CountUp end={1} label="Interlocutore per tutto il digitale" />
      </div>
    </section>
  </AnimatedSection>
);

export default CounterStrip;

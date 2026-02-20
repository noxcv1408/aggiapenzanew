import CountUp from "../CountUp";
import AnimatedSection from "../AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const CounterStrip = () => {
  const { t } = useLanguage();
  return (
    <AnimatedSection>
      <section className="relative z-10 border-y border-border/30 py-16">
        <div className="mx-auto flex max-w-5xl flex-col md:flex-row items-center justify-around gap-10">
          <CountUp end={50} suffix="+" label={t.counter.clients} />
          <CountUp end={100} suffix="%" label={t.counter.focus} />
          <CountUp end={1} label={t.counter.partner} />
        </div>
      </section>
    </AnimatedSection>
  );
};

export default CounterStrip;

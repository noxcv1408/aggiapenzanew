import { motion } from "framer-motion";
import logoImg from "@/assets/logo-aggiapenza.png";
import AnimatedWords from "../AnimatedWords";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
      {/* Levitating Logo */}
      <motion.div
        className="animate-levitate animate-glow-pulse mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={logoImg}
          alt="Aggiapenza – Buddha e gatto nero"
          className="mx-auto w-[250px] md:w-[300px]"
        />
      </motion.div>

      {/* Title */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-4">
        <AnimatedWords text="Aggiapenza" />
      </h1>

      {/* Subline */}
      <motion.p
        className="text-muted-foreground text-lg md:text-xl max-w-md mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        key={t.hero.sub}
      >
        {t.hero.sub}
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <a
          href="#servizi"
          className="rounded-full border border-foreground/30 px-8 py-3 text-sm font-medium text-foreground transition-all hover:bg-foreground hover:text-primary-foreground"
        >
          {t.hero.discoverServices}
        </a>
        <a
          href="https://wa.me/393314054492"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-foreground px-8 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-foreground/90"
        >
          {t.hero.contactUs}
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

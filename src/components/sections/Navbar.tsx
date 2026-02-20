import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logoImg from "@/assets/logo-aggiapenza.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { Lang } from "@/i18n/translations";

const LANGS: Lang[] = ["it", "en", "ru", "ua"];

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t.nav.about, href: "#chi-siamo" },
    { label: t.nav.services, href: "#servizi" },
    { label: t.nav.contact, href: "#contatti" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "border-b border-border/30 bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src={logoImg} alt="Aggiapenza" className="w-8 h-8 object-contain" />
          <span className="text-sm font-semibold tracking-widest text-foreground uppercase">
            Aggiapenza
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium tracking-widest text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}

          {/* Language switcher */}
          <div className="flex items-center gap-1 border-l border-border/40 pl-6">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-1 text-[10px] font-semibold tracking-widest uppercase rounded transition-colors ${
                  lang === l
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <a
            href="https://wa.me/393314054492"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-foreground/30 px-5 py-2 text-xs font-medium text-foreground transition-all hover:bg-foreground hover:text-primary-foreground"
          >
            {t.nav.cta}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span className={`block h-px w-6 bg-foreground transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-foreground transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-md px-6 py-6 flex flex-col gap-5"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium tracking-widest text-muted-foreground uppercase hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}

          {/* Language switcher mobile */}
          <div className="flex gap-2 pt-2 border-t border-border/30">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 text-xs font-semibold tracking-widest uppercase rounded border transition-colors ${
                  lang === l
                    ? "border-foreground text-foreground"
                    : "border-border/30 text-muted-foreground hover:text-foreground"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <a
            href="https://wa.me/393314054492"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-foreground/30 px-5 py-3 text-sm font-medium text-foreground text-center transition-all hover:bg-foreground hover:text-primary-foreground"
          >
            {t.nav.cta}
          </a>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;

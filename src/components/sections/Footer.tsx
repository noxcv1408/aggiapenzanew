import logoImg from "@/assets/logo-aggiapenza.png";

const Footer = () => (
  <footer className="relative z-10 border-t border-border/30 py-12 px-6">
    <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <img src={logoImg} alt="Aggiapenza" className="w-8 h-8 object-contain" />
        <span className="text-muted-foreground text-xs">
          © 2026 Aggiapenza S.r.l. — Napoli
        </span>
      </div>
      <div className="flex gap-6 text-xs text-muted-foreground">
        <a href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</a>
        <a href="/cookie-policy" className="hover:text-foreground transition-colors">Cookie Policy</a>
      </div>
    </div>
    {/* Radar sweep */}
    <div className="absolute bottom-0 left-0 right-0 h-[1px] overflow-hidden">
      <div className="animate-radar-sweep h-full w-32 bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />
    </div>
  </footer>
);

export default Footer;

import { Link } from "react-router-dom";

const CookiePolicy = () => (
  <div className="min-h-screen bg-background text-foreground px-6 py-20">
    <div className="mx-auto max-w-3xl">
      <Link to="/" className="text-muted-foreground text-sm hover:text-foreground transition-colors mb-10 inline-block">← Torna alla home</Link>
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">
        <p>Questo sito utilizza cookie per migliorare l'esperienza di navigazione dell'utente.</p>

        <h2 className="text-foreground text-lg font-semibold pt-4">1. Cosa sono i cookie</h2>
        <p>I cookie sono piccoli file di testo memorizzati sul dispositivo dell'utente durante la navigazione. Servono a rendere il sito più funzionale e a raccogliere informazioni sull'utilizzo.</p>

        <h2 className="text-foreground text-lg font-semibold pt-4">2. Cookie tecnici</h2>
        <p>Utilizziamo cookie tecnici necessari al funzionamento del sito. Questi cookie non richiedono il consenso dell'utente e non possono essere disattivati.</p>

        <h2 className="text-foreground text-lg font-semibold pt-4">3. Cookie analitici</h2>
        <p>Potremmo utilizzare cookie analitici (es. Google Analytics) per comprendere come gli utenti navigano il sito. Questi dati sono raccolti in forma anonima e aggregata.</p>

        <h2 className="text-foreground text-lg font-semibold pt-4">4. Cookie di terze parti</h2>
        <p>Il sito potrebbe contenere link o widget di terze parti (es. WhatsApp, social media) che utilizzano propri cookie secondo le rispettive informative.</p>

        <h2 className="text-foreground text-lg font-semibold pt-4">5. Gestione dei cookie</h2>
        <p>L'utente può gestire le preferenze sui cookie direttamente dalle impostazioni del proprio browser. La disattivazione di alcuni cookie potrebbe limitare la funzionalità del sito.</p>

        <h2 className="text-foreground text-lg font-semibold pt-4">6. Contatti</h2>
        <p>Per qualsiasi domanda relativa ai cookie, contattaci all'indirizzo info@aggiapenza.it.</p>

        <p className="pt-6 text-xs">Ultimo aggiornamento: Febbraio 2026</p>
      </div>
    </div>
  </div>
);

export default CookiePolicy;

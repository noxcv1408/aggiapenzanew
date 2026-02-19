import { Link } from "react-router-dom";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background text-foreground px-6 py-20">
    <div className="mx-auto max-w-3xl">
      <Link to="/" className="text-muted-foreground text-sm hover:text-foreground transition-colors mb-10 inline-block">← Torna alla home</Link>
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">
        <p><strong className="text-foreground">Titolare del trattamento:</strong> Aggiapenza S.r.l., Napoli, Italia — info@aggiapenza.it</p>

        <h2 className="text-foreground text-lg font-semibold pt-4">1. Dati raccolti</h2>
        <p>Raccogliamo dati personali forniti volontariamente dall'utente (nome, email, messaggio) tramite il modulo di contatto, e dati di navigazione raccolti automaticamente (indirizzo IP, browser, pagine visitate).</p>

        <h2 className="text-foreground text-lg font-semibold pt-4">2. Finalità del trattamento</h2>
        <p>I dati sono trattati per rispondere alle richieste dell'utente, migliorare il servizio e adempiere ad obblighi di legge. Non vendiamo né condividiamo i dati con terzi per scopi di marketing.</p>

        <h2 className="text-foreground text-lg font-semibold pt-4">3. Base giuridica</h2>
        <p>Il trattamento si basa sul consenso dell'utente e sull'esecuzione di misure precontrattuali (art. 6 GDPR).</p>

        <h2 className="text-foreground text-lg font-semibold pt-4">4. Conservazione dei dati</h2>
        <p>I dati personali sono conservati per il tempo necessario alle finalità per cui sono stati raccolti, e comunque non oltre 24 mesi dall'ultimo contatto.</p>

        <h2 className="text-foreground text-lg font-semibold pt-4">5. Diritti dell'utente</h2>
        <p>L'utente ha diritto di accedere ai propri dati, rettificarli, cancellarli, limitarne il trattamento e opporsi allo stesso, scrivendo a info@aggiapenza.it.</p>

        <h2 className="text-foreground text-lg font-semibold pt-4">6. Sicurezza</h2>
        <p>Adottiamo misure tecniche e organizzative adeguate per proteggere i dati personali da accessi non autorizzati, perdita o distruzione.</p>

        <p className="pt-6 text-xs">Ultimo aggiornamento: Febbraio 2026</p>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;

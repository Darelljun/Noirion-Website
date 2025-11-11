import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

interface PrivacyPolicyProps {
  onNavigateHome: () => void;
}

export function PrivacyPolicy({ onNavigateHome }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {/* Back button */}
          <Button 
            onClick={onNavigateHome}
            variant="ghost"
            className="mb-8 text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Zurück zur Startseite
          </Button>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Datenschutzerklärung
            </h1>
            <p className="text-muted-foreground">
              Stand: November 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
            
            <section>
              <h2 className="text-2xl text-foreground mb-4">1. Verantwortliche Stelle</h2>
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="bg-card border border-border rounded-lg p-6 my-4">
                <p className="mb-2"><strong className="text-foreground">Noirion UG (haftungsbeschränkt)</strong></p>
                <p className="mb-2">Königsallee 27</p>
                <p className="mb-2">40212 Düsseldorf</p>
                <p className="mb-2">Deutschland</p>
                <p className="mb-2">Geschäftsführer: Darell Kacou</p>
                <p className="mb-2">E-Mail: info@noirion.ai</p>
                <p>Telefon: +49 (0)221 98656336</p>
              </div>
              <p>
                Bei Fragen zum Datenschutz können Sie sich jederzeit an uns unter{" "}
                <a href="mailto:data@noirion.ai" className="text-primary hover:underline">
                  data@noirion.ai
                </a>{" "}
                wenden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-foreground mb-4">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
              <p>
                Wir erheben und verarbeiten personenbezogene Daten nur, soweit dies zur 
                Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und 
                Leistungen erforderlich ist. Die Erhebung und Verarbeitung erfolgt nur mit 
                Ihrer Einwilligung oder aufgrund einer gesetzlichen Grundlage.
              </p>
              
              <h3 className="text-xl text-foreground mt-6 mb-3">2.1 Besuch unserer Website</h3>
              <p>
                Beim Besuch unserer Website werden automatisch Informationen erfasst, die Ihr 
                Browser an unseren Server übermittelt. Diese Informationen werden temporär in 
                sogenannten Logfiles gespeichert:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
              </ul>
              <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO 
                zur Gewährleistung der Systemsicherheit und zur technischen Administration der 
                Netzinfrastruktur. Die Daten werden gelöscht, sobald sie für den Zweck ihrer 
                Erhebung nicht mehr erforderlich sind, in der Regel nach 7 Tagen.
              </p>

              <h3 className="text-xl text-foreground mt-6 mb-3">2.2 Kontaktformular und E-Mail-Kontakt</h3>
              <p>
                Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, werden Ihre Angaben 
                inklusive der von Ihnen angegebenen Kontaktdaten bei uns gespeichert, um Ihre 
                Anfrage zu bearbeiten und für mögliche Anschlussfragen.
              </p>
              <p>
                Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO 
                (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse 
                an der Beantwortung Ihrer Anfrage). Die Daten werden gelöscht, sobald die 
                Bearbeitung abgeschlossen ist und keine gesetzlichen Aufbewahrungspflichten 
                bestehen.
              </p>

              <h3 className="text-xl text-foreground mt-6 mb-3">2.3 Newsletter</h3>
              <p>
                Mit Ihrer Einwilligung können Sie unseren Newsletter abonnieren. Wir verwenden 
                Ihre E-Mail-Adresse ausschließlich zum Versand von Informationen über unsere 
                Dienstleistungen, KI-Trends und Wachstumsstrategien.
              </p>
              <p>
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO. Sie können Ihre Einwilligung 
                jederzeit widerrufen, indem Sie auf den Abmeldelink in jeder Newsletter-E-Mail 
                klicken oder uns eine E-Mail an info@noirion.ai senden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-foreground mb-4">3. Cookies</h2>
              <p>
                Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem 
                Endgerät gespeichert werden und die Ihr Browser speichert. Cookies ermöglichen es 
                uns, Ihr Gerät wiederzuerkennen und Ihre Nutzererfahrung zu verbessern.
              </p>
              <p>
                Nähere Informationen zu den von uns verwendeten Cookies und deren Zweck finden Sie 
                in unserer{" "}
                <span className="text-primary">Cookie-Richtlinie</span>.
              </p>
              <p>
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies 
                informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies 
                für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der 
                Cookies beim Schließen des Browsers aktivieren.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-foreground mb-4">4. Weitergabe von Daten</h2>
              <p>
                Eine Übermittlung Ihrer personenbezogenen Daten an Dritte findet grundsätzlich 
                nicht statt, es sei denn:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Sie haben ausdrücklich eingewilligt (Art. 6 Abs. 1 lit. a DSGVO)</li>
                <li>Die Weitergabe ist zur Vertragserfüllung erforderlich (Art. 6 Abs. 1 lit. b DSGVO)</li>
                <li>Es besteht eine gesetzliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO)</li>
                <li>Die Weitergabe ist zur Wahrung berechtigter Interessen erforderlich und es besteht 
                    kein Grund zur Annahme, dass Sie ein überwiegendes schutzwürdiges Interesse haben 
                    (Art. 6 Abs. 1 lit. f DSGVO)</li>
              </ul>
              <p>
                Wir arbeiten mit externen Dienstleistern zusammen (z.B. Hosting-Anbieter, 
                E-Mail-Dienstleister). Diese Dienstleister verarbeiten Daten nur in unserem Auftrag 
                und sind vertraglich an unsere Weisungen gebunden (Auftragsverarbeitung gemäß 
                Art. 28 DSGVO).
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-foreground mb-4">5. Speicherdauer</h2>
              <p>
                Wir speichern personenbezogene Daten nur so lange, wie dies für den jeweiligen 
                Zweck erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen. Nach Ablauf 
                der Fristen werden die Daten routinemäßig gelöscht, sofern sie nicht mehr zur 
                Vertragserfüllung oder Vertragsanbahnung erforderlich sind.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-foreground mb-4">6. Ihre Rechte</h2>
              <p>
                Sie haben als betroffene Person folgende Rechte:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong className="text-foreground">Auskunftsrecht (Art. 15 DSGVO):</strong> Sie können 
                  Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen.
                </li>
                <li>
                  <strong className="text-foreground">Berichtigungsrecht (Art. 16 DSGVO):</strong> Sie können 
                  die Berichtigung unrichtiger oder die Vervollständigung Ihrer Daten verlangen.
                </li>
                <li>
                  <strong className="text-foreground">Löschungsrecht (Art. 17 DSGVO):</strong> Sie können 
                  die Löschung Ihrer personenbezogenen Daten verlangen, sofern keine gesetzlichen 
                  Aufbewahrungspflichten entgegenstehen.
                </li>
                <li>
                  <strong className="text-foreground">Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie 
                  können unter bestimmten Voraussetzungen die Einschränkung der Verarbeitung verlangen.
                </li>
                <li>
                  <strong className="text-foreground">Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie können 
                  verlangen, dass wir Ihnen Ihre Daten in einem strukturierten, gängigen und 
                  maschinenlesbaren Format bereitstellen.
                </li>
                <li>
                  <strong className="text-foreground">Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie können 
                  der Verarbeitung Ihrer Daten aus Gründen, die sich aus Ihrer besonderen Situation 
                  ergeben, jederzeit widersprechen.
                </li>
                <li>
                  <strong className="text-foreground">Widerruf der Einwilligung:</strong> Haben Sie uns eine 
                  Einwilligung zur Verarbeitung erteilt, können Sie diese jederzeit widerrufen. Die 
                  Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt davon unberührt.
                </li>
              </ul>
              <p>
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
                <a href="mailto:data@noirion.ai" className="text-primary hover:underline">
                  data@noirion.ai
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-foreground mb-4">7. Beschwerderecht bei einer Aufsichtsbehörde</h2>
              <p>
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die 
                Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Die für uns 
                zuständige Aufsichtsbehörde ist:
              </p>
              <div className="bg-card border border-border rounded-lg p-6 my-4">
                <p className="mb-2"><strong className="text-foreground">Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen</strong></p>
                <p className="mb-2">Kavalleriestraße 2-4</p>
                <p className="mb-2">40213 Düsseldorf</p>
                <p>Telefon: 0211 38424-0</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl text-foreground mb-4">8. Datensicherheit</h2>
              <p>
                Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten 
                gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder gegen 
                den Zugriff unberechtigter Personen zu schützen. Unsere Sicherheitsmaßnahmen werden 
                entsprechend der technologischen Entwicklung fortlaufend verbessert.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-foreground mb-4">9. Änderung der Datenschutzerklärung</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie 
                stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer 
                Leistungen umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
              </p>
            </section>

            <div className="bg-card border border-primary/30 rounded-lg p-6 mt-8">
              <h3 className="text-xl text-foreground mb-3">Kontakt für Datenschutzanfragen</h3>
              <p className="mb-2">
                Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, 
                bei Auskünften, Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an:
              </p>
              <p className="text-primary">
                E-Mail:{" "}
                <a href="mailto:data@noirion.ai" className="hover:underline">
                  data@noirion.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

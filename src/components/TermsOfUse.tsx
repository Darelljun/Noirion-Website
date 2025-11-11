import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

interface TermsOfUseProps {
  onNavigateHome: () => void;
}

export function TermsOfUse({ onNavigateHome }: TermsOfUseProps) {
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
              Nutzungsbedingungen
            </h1>
            <p className="text-muted-foreground">
              Stand: November 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
            
            <section>
              <h2 className="text-2xl text-foreground mb-4">1. Geltungsbereich</h2>
              <p>
                Diese Nutzungsbedingungen gelten für die Nutzung der Website noirion-intelligence.de 
                (nachfolgend "Website") der Noirion UG (haftungsbeschränkt), Königsallee 27, 
                40212 Düsseldorf (nachfolgend "Noirion" oder "wir").
              </p>
              <p>
                Durch den Zugriff auf und die Nutzung dieser Website erklären Sie sich mit diesen 
                Nutzungsbedingungen einverstanden. Wenn Sie mit diesen Bedingungen nicht einverstanden 
                sind, nutzen Sie diese Website bitte nicht.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-foreground mb-4">2. Leistungsumfang</h2>
              <p>
                Diese Website dient der Information über die Dienstleistungen der Noirion UG. 
                Die Darstellung unserer Leistungen stellt kein rechtlich bindendes Angebot dar, 
                sondern eine unverbindliche Information.
              </p>
              <p>
                Wir bemühen uns, die Inhalte dieser Website aktuell, vollständig und richtig 
                darzustellen. Dennoch ist das Auftreten von Fehlern nicht völlig auszuschließen. 
                Noirion übernimmt keine Haftung für die Aktualität, Richtigkeit, Vollständigkeit 
                oder Qualität der bereitgestellten Informationen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-foreground mb-4">3. Urheberrecht und Eigentum</h2>
              <p>
                Sämtliche Inhalte dieser Website (Texte, Bilder, Grafiken, Logos, Videos, Icons, 
                Audio-Dateien etc.) sind urheberrechtlich geschützt und Eigentum der Noirion UG 
                oder Dritter, die uns die entsprechenden Nutzungsrechte eingeräumt haben.
              </p>
              <p>
                Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb 
                der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung von Noirion. 
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen 
                Gebrauch gestattet.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht von Noirion erstellt wurden, werden die 
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche 
                gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam 
                werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von 
                Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-foreground mb-4">4. Haftungsausschluss</h2>
              
              <h3 className="text-xl text-foreground mt-6 mb-3">4.1 Inhalt des Onlineangebotes</h3>
              <p>
                Noirion übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit 
                oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen Noirion, 
                welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung 
                oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter 
                und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, 
                sofern seitens Noirion kein nachweislich vorsätzliches oder grob fahrlässiges 
                Verschulden vorliegt.
              </p>
              <p>
                Noirion behält sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne 
                gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung 
                zeitweise oder endgültig einzustellen.
              </p>

              <h3 className="text-xl text-foreground mt-6 mb-3">4.2 Externe Links</h3>
              <p>
                Diese Website kann Verweise (Links) zu Websites Dritter enthalten. Diese externen 
                Links sind durch eine entsprechende Kennzeichnung für Sie erkennbar. Noirion hat 
                keinen Einfluss auf den Inhalt und die Gestaltung dieser Seiten Dritter und macht 
                sich deren Inhalte nicht zu eigen.
              </p>
              <p>
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber 
                der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung 
                auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
                Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten 
                ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei 
                Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>

              <h3 className="text-xl text-foreground mt-6 mb-3">4.3 Technische Störungen</h3>
              <p>
                Noirion übernimmt keine Haftung für Schäden, die durch technische Störungen, 
                Unterbrechungen, Verzögerungen oder sonstige Fehlfunktionen der Website entstehen. 
                Dies gilt insbesondere für Schäden durch höhere Gewalt, Streiks, Aussperrungen und 
                behördliche Maßnahmen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-foreground mb-4">5. Verfügbarkeit</h2>
              <p>
                Noirion bemüht sich um eine möglichst unterbrechungsfreie Verfügbarkeit der Website. 
                Es besteht jedoch kein Anspruch auf ständige Verfügbarkeit. Wartungsarbeiten, 
                Weiterentwicklungen, technische Störungen oder andere Ereignisse können zu 
                vorübergehenden Unterbrechungen oder Einschränkungen führen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-foreground mb-4">6. Datenschutz</h2>
              <p>
                Bei der Nutzung dieser Website werden personenbezogene Daten erhoben und verarbeitet. 
                Detaillierte Informationen dazu finden Sie in unserer{" "}
                <span className="text-primary">Datenschutzerklärung</span>, die Sie jederzeit über 
                den entsprechenden Link im Footer dieser Website aufrufen können.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-foreground mb-4">7. Änderungen der Nutzungsbedingungen</h2>
              <p>
                Noirion behält sich das Recht vor, diese Nutzungsbedingungen jederzeit und ohne 
                Ankündigung zu ändern. Die jeweils aktuelle Version ist auf der Website veröffentlicht. 
                Maßgeblich ist die zum Zeitpunkt Ihres Besuchs gültige Fassung.
              </p>
              <p>
                Wir empfehlen Ihnen, diese Nutzungsbedingungen regelmäßig zu überprüfen, um über 
                eventuelle Änderungen informiert zu sein. Durch die fortgesetzte Nutzung der Website 
                nach Änderungen der Nutzungsbedingungen erklären Sie sich mit den geänderten 
                Bedingungen einverstanden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-foreground mb-4">8. Anwendbares Recht und Gerichtsstand</h2>
              <p>
                Für sämtliche Rechtsbeziehungen zwischen Noirion und den Nutzern dieser Website gilt 
                ausschließlich das Recht der Bundesrepublik Deutschland unter Ausschluss des 
                UN-Kaufrechts (CISG).
              </p>
              <p>
                Sofern der Nutzer Kaufmann, juristische Person des öffentlichen Rechts oder 
                öffentlich-rechtliches Sondervermögen ist, ist ausschließlicher Gerichtsstand für 
                alle Streitigkeiten aus oder im Zusammenhang mit diesen Nutzungsbedingungen der Sitz 
                der Noirion UG in Düsseldorf.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-foreground mb-4">9. Salvatorische Klausel</h2>
              <p>
                Sollten einzelne Bestimmungen dieser Nutzungsbedingungen unwirksam oder undurchführbar 
                sein oder werden, so wird dadurch die Wirksamkeit der übrigen Bestimmungen nicht berührt. 
                An die Stelle der unwirksamen oder undurchführbaren Bestimmung tritt eine wirksame und 
                durchführbare Regelung, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am 
                nächsten kommt.
              </p>
            </section>

            <div className="bg-card border border-primary/30 rounded-lg p-6 mt-8">
              <h3 className="text-xl text-foreground mb-3">Kontakt</h3>
              <p className="mb-2">
                Bei Fragen zu diesen Nutzungsbedingungen wenden Sie sich bitte an:
              </p>
              <p className="mb-2"><strong className="text-foreground">Noirion UG (haftungsbeschränkt)</strong></p>
              <p className="mb-2">Königsallee 27, 40212 Düsseldorf</p>
              <p className="mb-2">Geschäftsführer: Darell Kacou</p>
              <p className="text-primary">
                E-Mail:{" "}
                <a href="mailto:info@noirion.ai" className="hover:underline">
                  info@noirion.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

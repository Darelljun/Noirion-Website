import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

interface CookiePolicyProps {
  onNavigateHome: () => void;
}

export function CookiePolicy({ onNavigateHome }: CookiePolicyProps) {
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
              Cookie-Richtlinie
            </h1>
            <p className="text-muted-foreground">
              Stand: November 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">
            
            <section>
              <h2 className="text-2xl text-foreground mb-4">1. Was sind Cookies?</h2>
              <p>
                Cookies sind kleine Textdateien, die auf Ihrem Computer oder mobilen Endgerät 
                gespeichert werden, wenn Sie eine Website besuchen. Sie ermöglichen es der Website, 
                Ihr Gerät wiederzuerkennen und bestimmte Informationen über Ihren Besuch zu speichern.
              </p>
              <p>
                Cookies werden von nahezu allen Websites eingesetzt und dienen dazu, die 
                Benutzererfahrung zu verbessern, indem sie beispielsweise Ihre Präferenzen speichern 
                oder Ihnen helfen, sich auf einer Website zurechtzufinden.
              </p>
              <p>
                Cookies können keine Programme ausführen und keine Viren auf Ihren Computer übertragen. 
                Sie sind eindeutig Ihrem Browser zugeordnet und können nur von der Domain gelesen werden, 
                die das Cookie gesetzt hat.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-foreground mb-4">2. Warum verwenden wir Cookies?</h2>
              <p>
                Wir verwenden Cookies auf unserer Website aus verschiedenen Gründen:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong className="text-foreground">Technische Funktionalität:</strong> Einige Cookies 
                  sind notwendig, damit unsere Website ordnungsgemäß funktioniert. Sie ermöglichen 
                  grundlegende Funktionen wie Seitennavigation und Zugriff auf sichere Bereiche.
                </li>
                <li>
                  <strong className="text-foreground">Benutzererfahrung:</strong> Cookies helfen uns, 
                  Ihre Präferenzen zu speichern (z.B. Spracheinstellungen) und die Website für Sie zu 
                  personalisieren.
                </li>
                <li>
                  <strong className="text-foreground">Analyse und Performance:</strong> Wir verwenden 
                  Cookies, um zu verstehen, wie Besucher unsere Website nutzen, welche Seiten am 
                  häufigsten besucht werden und wo Verbesserungspotenzial besteht.
                </li>
                <li>
                  <strong className="text-foreground">Marketing und Kommunikation:</strong> Cookies 
                  ermöglichen es uns, Ihnen relevante Inhalte und Angebote zu präsentieren.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-foreground mb-4">3. Welche Arten von Cookies verwenden wir?</h2>
              
              <h3 className="text-xl text-foreground mt-6 mb-3">3.1 Notwendige Cookies</h3>
              <p>
                Diese Cookies sind für den Betrieb unserer Website unbedingt erforderlich. Sie 
                ermöglichen grundlegende Funktionen wie Seitennavigation und Zugriff auf sichere 
                Bereiche der Website. Ohne diese Cookies kann die Website nicht ordnungsgemäß 
                funktionieren.
              </p>
              <div className="bg-card border border-border rounded-lg p-4 my-4">
                <p className="mb-2"><strong className="text-foreground">Rechtsgrundlage:</strong></p>
                <p>
                  Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technischen Bereitstellung 
                  und Sicherheit der Website)
                </p>
              </div>
              <p className="text-sm italic">
                Beispiele: Session-Cookies, Sicherheits-Cookies, Cookie-Consent-Cookies
              </p>

              <h3 className="text-xl text-foreground mt-6 mb-3">3.2 Funktionale Cookies</h3>
              <p>
                Diese Cookies ermöglichen es der Website, sich an Ihre Entscheidungen zu erinnern 
                (z.B. Ihren Benutzernamen, Ihre Sprachauswahl oder die Region, in der Sie sich befinden) 
                und verbesserte, persönlichere Funktionen bereitzustellen.
              </p>
              <div className="bg-card border border-border rounded-lg p-4 my-4">
                <p className="mb-2"><strong className="text-foreground">Rechtsgrundlage:</strong></p>
                <p>
                  Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) oder Art. 6 Abs. 1 lit. f DSGVO 
                  (berechtigtes Interesse an der Verbesserung der Nutzererfahrung)
                </p>
              </div>
              <p className="text-sm italic">
                Beispiele: Spracheinstellungen, Design-Präferenzen
              </p>

              <h3 className="text-xl text-foreground mt-6 mb-3">3.3 Analyse-Cookies</h3>
              <p>
                Diese Cookies sammeln Informationen darüber, wie Besucher unsere Website nutzen, 
                z.B. welche Seiten am häufigsten besucht werden und ob Fehlermeldungen auftreten. 
                Die gesammelten Informationen sind in der Regel aggregiert und anonym.
              </p>
              <div className="bg-card border border-border rounded-lg p-4 my-4">
                <p className="mb-2"><strong className="text-foreground">Rechtsgrundlage:</strong></p>
                <p>
                  Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
                </p>
              </div>
              <p className="text-sm italic">
                Beispiele: Google Analytics, interne Analyse-Tools
              </p>

              <h3 className="text-xl text-foreground mt-6 mb-3">3.4 Marketing-Cookies</h3>
              <p>
                Diese Cookies werden verwendet, um Besuchern relevante Werbung und Marketingkampagnen 
                anzuzeigen. Sie verfolgen Besucher über verschiedene Websites hinweg und erstellen ein 
                Profil ihrer Interessen, um relevante Werbung anzuzeigen.
              </p>
              <div className="bg-card border border-border rounded-lg p-4 my-4">
                <p className="mb-2"><strong className="text-foreground">Rechtsgrundlage:</strong></p>
                <p>
                  Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
                </p>
              </div>
              <p className="text-sm italic">
                Beispiele: Retargeting-Cookies, Social-Media-Tracking
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-foreground mb-4">4. Cookie-Verwaltung und Widerruf</h2>
              <p>
                Sie haben jederzeit die Möglichkeit, Ihre Cookie-Einstellungen zu verwalten und 
                Ihre Einwilligung zu widerrufen.
              </p>

              <h3 className="text-xl text-foreground mt-6 mb-3">4.1 Browser-Einstellungen</h3>
              <p>
                Die meisten Browser akzeptieren Cookies automatisch. Sie können Ihren Browser jedoch 
                so einstellen, dass er Cookies ablehnt oder Sie benachrichtigt, wenn ein Cookie gesetzt 
                wird. Bitte beachten Sie, dass das Blockieren oder Löschen von Cookies die Funktionalität 
                unserer Website beeinträchtigen kann.
              </p>
              <p>
                Anleitungen zur Cookie-Verwaltung in gängigen Browsern:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong className="text-foreground">Google Chrome:</strong> Einstellungen → Datenschutz 
                  und Sicherheit → Cookies und andere Websitedaten
                </li>
                <li>
                  <strong className="text-foreground">Mozilla Firefox:</strong> Einstellungen → 
                  Datenschutz & Sicherheit → Cookies und Website-Daten
                </li>
                <li>
                  <strong className="text-foreground">Safari:</strong> Einstellungen → Datenschutz → 
                  Cookies und Website-Daten
                </li>
                <li>
                  <strong className="text-foreground">Microsoft Edge:</strong> Einstellungen → Cookies 
                  und Websiteberechtigungen → Cookies und Websitedaten
                </li>
              </ul>

              <h3 className="text-xl text-foreground mt-6 mb-3">4.2 Opt-Out-Möglichkeiten</h3>
              <p>
                Für bestimmte Tracking-Technologien können Sie direkt widersprechen:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  Google Analytics:{" "}
                  <span className="text-primary">Browser-Add-on zur Deaktivierung von Google Analytics</span>
                </li>
                <li>
                  Allgemeine Werbe-Cookies:{" "}
                  <span className="text-primary">www.youronlinechoices.eu</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-foreground mb-4">5. Dauer der Cookie-Speicherung</h2>
              <p>
                Die Speicherdauer von Cookies variiert je nach Typ:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong className="text-foreground">Session-Cookies:</strong> Werden gelöscht, sobald 
                  Sie Ihren Browser schließen.
                </li>
                <li>
                  <strong className="text-foreground">Persistente Cookies:</strong> Bleiben für einen 
                  festgelegten Zeitraum auf Ihrem Gerät gespeichert (typischerweise zwischen einigen 
                  Tagen und mehreren Jahren).
                </li>
              </ul>
              <p>
                Die genaue Speicherdauer können Sie in den Einstellungen Ihres Browsers oder über 
                spezielle Cookie-Management-Tools einsehen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-foreground mb-4">6. Cookies von Drittanbietern</h2>
              <p>
                Auf unserer Website können auch Cookies von Drittanbietern gesetzt werden, beispielsweise 
                wenn wir Inhalte von externen Plattformen (wie YouTube-Videos oder Social-Media-Plugins) 
                einbinden. Diese Drittanbieter können Cookies setzen, um Ihr Nutzungsverhalten zu verfolgen.
              </p>
              <p>
                Wir haben keinen direkten Einfluss auf die Cookies von Drittanbietern. Informationen 
                darüber, wie diese Anbieter Cookies verwenden, finden Sie in deren jeweiligen 
                Datenschutzerklärungen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-foreground mb-4">7. Aktualisierung dieser Cookie-Richtlinie</h2>
              <p>
                Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren, um Änderungen in 
                unserer Praxis oder aus rechtlichen, regulatorischen oder betrieblichen Gründen 
                Rechnung zu tragen. Wir empfehlen Ihnen, diese Seite regelmäßig zu besuchen, um über 
                die Verwendung von Cookies auf unserer Website informiert zu bleiben.
              </p>
            </section>

            <div className="bg-card border border-primary/30 rounded-lg p-6 mt-8">
              <h3 className="text-xl text-foreground mb-3">Fragen zu Cookies?</h3>
              <p className="mb-2">
                Wenn Sie Fragen zur Verwendung von Cookies auf unserer Website haben, wenden Sie sich 
                bitte an:
              </p>
              <p className="mb-2"><strong className="text-foreground">Noirion UG (haftungsbeschränkt)</strong></p>
              <p className="mb-2">Königsallee 27, 40212 Düsseldorf</p>
              <p className="text-primary">
                E-Mail:{" "}
                <a href="mailto:data@noirion.ai" className="hover:underline">
                  data@noirion.ai
                </a>
              </p>
            </div>

            <div className="bg-secondary/30 border border-border rounded-lg p-6 mt-6">
              <p className="mb-0">
                <strong className="text-foreground">Wichtiger Hinweis:</strong> Durch die Nutzung 
                unserer Website mit den Standardeinstellungen Ihres Browsers stimmen Sie der 
                Verwendung von Cookies gemäß dieser Richtlinie zu. Sie können Ihre Einwilligung 
                jederzeit widerrufen, indem Sie Ihre Browser-Einstellungen ändern oder uns kontaktieren.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

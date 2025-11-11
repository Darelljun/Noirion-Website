import { ArrowLeft, Bot, TrendingUp, Zap, BarChart3, Users, Gauge } from "lucide-react";
import { Button } from "./ui/button";

interface ServicesDetailProps {
  onNavigateHome: () => void;
}

export function ServicesDetail({ onNavigateHome }: ServicesDetailProps) {
  const services = [
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "KI-Strategieberatung",
      description: "Entwickeln Sie einen maßgeschneiderten Plan für Ihr Unternehmen",
      fullDescription: [
        "Unsere KI-Strategieberatung hilft Ihnen dabei, einen klaren und umsetzbaren Plan zu entwickeln, wie künstliche Intelligenz Ihr Geschäft voranbringen kann. Wir schauen uns gemeinsam an, wo Ihr Unternehmen gerade steht und welche Ziele Sie erreichen möchten.",
        "In einem persönlichen Strategiegespräch analysieren wir Ihre aktuellen Arbeitsabläufe und identifizieren Bereiche, in denen KI echten Mehrwert schaffen kann. Das könnte zum Beispiel die Automatisierung von Routineaufgaben sein, die Verbesserung Ihrer Kundeninteraktion oder die Optimierung interner Prozesse.",
        "Am Ende erhalten Sie eine klare Roadmap: Welche KI-Lösungen passen zu Ihrem Unternehmen? Wie können Sie diese schrittweise einführen? Und wie messen Sie den Erfolg? Alles wird in einer Sprache erklärt, die jeder versteht – ohne Fachjargon oder komplizierte Technikbegriffe.",
        "Das Ziel ist einfach: Sie sollen genau wissen, welche Schritte als Nächstes sinnvoll sind und wie KI Ihrem Unternehmen hilft, effizienter zu arbeiten, Kosten zu senken und schneller zu wachsen."
      ]
    },
    {
      icon: <Bot className="w-12 h-12 text-primary" />,
      title: "KI-Chatbots",
      description: "Automatisieren Sie Kundenservice und interne Kommunikation",
      fullDescription: [
        "Ein KI-Chatbot ist wie ein virtueller Mitarbeiter, der rund um die Uhr verfügbar ist. Er kann Fragen Ihrer Kunden beantworten, Termine vereinbaren, Informationen bereitstellen und vieles mehr – und das alles automatisch, ohne dass Sie oder Ihr Team eingreifen müssen.",
        "Stellen Sie sich vor: Ein Kunde besucht Ihre Website um 22 Uhr abends und hat eine Frage zu Ihrem Angebot. Statt bis zum nächsten Morgen zu warten, bekommt er sofort eine hilfreiche Antwort vom Chatbot. Das erhöht die Zufriedenheit und die Chance, dass aus einem Interessenten ein Kunde wird.",
        "Unsere KI-Chatbots können auch intern genutzt werden. Mitarbeiter können häufige Fragen zu Unternehmensrichtlinien, Urlaubsanträgen oder Arbeitsabläufen direkt vom Bot beantwortet bekommen, ohne dass die Personalabteilung jedes Mal eingreifen muss.",
        "Das Beste: Der Chatbot lernt mit der Zeit dazu. Je mehr Gespräche er führt, desto besser wird er darin, präzise und hilfreiche Antworten zu geben. Und Sie sparen wertvolle Zeit, die Ihr Team für wichtigere Aufgaben nutzen kann."
      ]
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Geschäftsautomatisierung",
      description: "Eliminieren Sie repetitive Aufgaben und steigern Sie die Effizienz",
      fullDescription: [
        "Geschäftsautomatisierung bedeutet, dass wiederkehrende, zeitintensive Aufgaben von intelligenten Systemen übernommen werden. Das können Dinge sein wie die Bearbeitung von E-Mails, das Erstellen von Berichten, die Verwaltung von Terminen oder die Dateneingabe.",
        "Angenommen, Ihr Team verbringt jeden Tag zwei Stunden damit, Daten aus verschiedenen Quellen zusammenzutragen und in Excel-Tabellen einzutragen. Mit Automatisierung kann diese Aufgabe vollständig von einem KI-Agenten übernommen werden – in wenigen Minuten statt Stunden, und das ohne Fehler.",
        "Ein weiteres Beispiel: Die Terminkoordination. Statt endloser E-Mail-Ketten, um einen Termin mit mehreren Personen zu finden, übernimmt ein automatisiertes System die Koordination. Es schaut in die Kalender aller Beteiligten, findet einen passenden Zeitpunkt und versendet automatisch Einladungen und Erinnerungen.",
        "Das Ergebnis: Ihr Team hat mehr Zeit für strategische Aufgaben, die echten Mehrwert schaffen. Die Effizienz steigt massiv, Fehlerquoten sinken, und Sie sparen Betriebskosten. Automatisierung ist der Schlüssel, um mit weniger Aufwand mehr zu erreichen."
      ]
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: "Prädiktive Analytik",
      description: "Treffen Sie datenbasierte Entscheidungen für bessere Geschäftsergebnisse",
      fullDescription: [
        "Prädiktive Analytik nutzt künstliche Intelligenz, um aus Ihren vorhandenen Daten Vorhersagen über die Zukunft zu treffen. Das klingt kompliziert, ist aber eigentlich ganz einfach: Die KI analysiert Muster in Ihren Geschäftsdaten und sagt voraus, was als Nächstes passieren könnte.",
        "Ein praktisches Beispiel: Sie betreiben einen Online-Shop. Die KI analysiert das Kaufverhalten Ihrer Kunden und kann vorhersagen, welche Produkte in den nächsten Wochen besonders gefragt sein werden. So können Sie rechtzeitig Lagerbestände anpassen und verhindern, dass beliebte Artikel ausverkauft sind.",
        "Oder nehmen wir ein Dienstleistungsunternehmen: Die KI kann basierend auf historischen Daten vorhersagen, in welchen Monaten die Nachfrage am höchsten ist. Sie können dann Ihre Personalplanung und Marketing-Aktivitäten entsprechend anpassen.",
        "Prädiktive Analytik hilft Ihnen, bessere, datenbasierte Entscheidungen zu treffen. Statt auf Bauchgefühl zu setzen, haben Sie klare Zahlen und Prognosen als Grundlage. Das reduziert Risiken und erhöht Ihre Erfolgschancen deutlich."
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Kundenintelligenz",
      description: "Verstehen Sie Ihre Kunden besser und personalisieren Sie Angebote",
      fullDescription: [
        "Kundenintelligenz bedeutet, dass Sie Ihre Kunden wirklich verstehen – ihre Bedürfnisse, Vorlieben und ihr Verhalten. KI-gestützte Systeme analysieren Kundendaten und geben Ihnen wertvolle Einblicke, die Sie für bessere Geschäftsentscheidungen nutzen können.",
        "Stellen Sie sich vor, Sie wissen genau, welche Kunden kurz davor sind, bei Ihnen etwas zu kaufen, welche Kunden zufrieden sind und welche möglicherweise zur Konkurrenz wechseln könnten. Mit diesen Informationen können Sie gezielt reagieren: personalisierte Angebote machen, proaktiv Probleme lösen oder besondere Aktionen für treue Kunden erstellen.",
        "Ein konkretes Beispiel: Ein Kunde hat in der Vergangenheit dreimal dasselbe Produkt gekauft. Die KI erkennt das Muster und schlägt vor, diesem Kunden ein Abo-Modell oder einen Mengenrabatt anzubieten. Das erhöht die Kundenzufriedenheit und Ihren Umsatz.",
        "Kundenintelligenz macht aus allgemeinen Annahmen konkrete Fakten. Sie wissen genau, was Ihre Kunden wollen, und können Ihre Angebote, Ihr Marketing und Ihren Service entsprechend anpassen. Das Ergebnis: zufriedenere Kunden, höhere Verkaufszahlen und langfristige Kundenbindung."
      ]
    },
    {
      icon: <Gauge className="w-12 h-12 text-primary" />,
      title: "Performance-Optimierung",
      description: "Maximieren Sie Effizienz und Leistung in allen Geschäftsbereichen",
      fullDescription: [
        "Performance-Optimierung bedeutet, dass wir Ihre Geschäftsprozesse genau unter die Lupe nehmen und herausfinden, wo es Engpässe, Ineffizienzen oder Verbesserungspotenzial gibt. Dann setzen wir KI-gestützte Lösungen ein, um diese Bereiche zu optimieren.",
        "Ein Beispiel: Ihr Vertriebsteam verbringt viel Zeit damit, Leads zu qualifizieren – also herauszufinden, welche potenziellen Kunden wirklich kaufbereit sind. Eine KI kann diese Aufgabe übernehmen, indem sie automatisch bewertet, welche Leads die höchste Kaufwahrscheinlichkeit haben. Ihr Team konzentriert sich dann nur auf die vielversprechendsten Kontakte.",
        "Oder nehmen wir die Lagerverwaltung: KI kann Lagerbestände in Echtzeit überwachen, optimale Bestellmengen berechnen und rechtzeitig Alarm schlagen, wenn Nachschub benötigt wird. Das verhindert Überbestände (die Geld kosten) und Fehlbestände (die Umsatz kosten).",
        "Das Ziel der Performance-Optimierung ist klar: Sie sollen mit denselben Ressourcen mehr erreichen. Schnellere Prozesse, weniger Verschwendung, bessere Ergebnisse. Und das alles messbar und nachvollziehbar – Sie sehen genau, wo sich Verbesserungen auswirken."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
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
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
              Unsere Leistungen
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Entdecken Sie, wie unsere KI-Lösungen Ihr Geschäft transformieren können. 
              Jede Leistung wird verständlich erklärt – ohne komplizierte Fachbegriffe.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-4 sm:p-6 md:p-8 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1 w-full">
                    <h2 className="text-xl sm:text-2xl md:text-3xl mb-3 break-words">{service.title}</h2>
                    <p className="text-sm sm:text-base md:text-lg text-primary mb-6">{service.description}</p>
                    
                    <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {service.fullDescription.map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-primary/10 to-emerald-400/10 border border-primary/30 rounded-lg p-6 sm:p-8 text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl mb-4">Bereit, Ihr Unternehmen zu transformieren?</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
              Vereinbaren Sie ein kostenloses Strategiegespräch und erfahren Sie, 
              welche KI-Lösungen perfekt zu Ihrem Unternehmen passen.
            </p>
            <Button 
              onClick={onNavigateHome}
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
            >
              Jetzt Strategietermin buchen
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
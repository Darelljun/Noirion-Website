import { ArrowLeft, Wrench, Hammer, HardHat, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface CaseStudiesProps {
  onNavigateHome: () => void;
}

export function CaseStudies({ onNavigateHome }: CaseStudiesProps) {
  const caseStudies = [
    {
      icon: <Wrench className="w-16 h-16 text-primary" />,
      title: "Handwerksbetrieb für Sanitärtechnik",
      industry: "Handwerk & Sanitär",
      challenge: "Überlastung durch manuelle Auftragsannahme und Terminplanung",
      solution: "Automatisierung der Auftragsannahme, intelligente Terminplanung und automatische Rechnungsstellung durch KI-Agenten",
      results: [
        "40% weniger Verwaltungsaufwand",
        "25% schnellere Angebotsbearbeitung",
        "Zufriedenere Kunden durch schnellere Reaktionszeiten",
        "Mehr Zeit für die eigentliche Handwerksarbeit"
      ],
      description: "Ein regionaler Handwerksbetrieb für Sanitärtechnik mit 15 Mitarbeitern stand vor der Herausforderung, dass die Büro-Mitarbeiter täglich mehrere Stunden mit der manuellen Bearbeitung von Kundenanfragen, Terminkoordination und Rechnungserstellung beschäftigt waren. Dies führte zu Verzögerungen und gelegentlich zu verlorenen Aufträgen, weil Anfragen nicht schnell genug bearbeitet wurden. Mit Noirion-KI-Agenten wurden diese Prozesse vollständig automatisiert: Kundenanfragen werden automatisch erfasst und kategorisiert, Termine werden intelligent basierend auf Verfügbarkeit und Standort geplant, und Rechnungen werden nach Auftragsabschluss automatisch erstellt und versendet."
    },
    {
      icon: <Hammer className="w-16 h-16 text-primary" />,
      title: "Metallbauunternehmen",
      industry: "Metallbau & Fertigung",
      challenge: "Ineffiziente Projekt- und Materialkoordination führte zu Verzögerungen",
      solution: "KI-gestützte Projekt- und Materialkoordination mit automatischer Ressourcenplanung",
      results: [
        "30% Effizienzsteigerung bei Projekten",
        "Weniger Kommunikationsaufwand zwischen Teams",
        "Optimierte Materialbestellung und Lagerhaltung",
        "Reduzierte Projektlaufzeiten"
      ],
      description: "Ein mittelständisches Metallbauunternehmen mit 35 Mitarbeitern hatte Schwierigkeiten, den Überblick über laufende Projekte, Materialbestände und Teamkapazitäten zu behalten. Dies führte zu unnötigen Verzögerungen, Doppelbestellungen und suboptimaler Auslastung. Noirion implementierte KI-Agenten, die alle Projekte in Echtzeit überwachen, automatisch Materialbedarfe berechnen und rechtzeitig Bestellungen auslösen. Die KI koordiniert auch die Teamzuweisungen basierend auf Fähigkeiten, Verfügbarkeit und Projektpriorität. Dadurch konnte das Unternehmen seine Effizienz massiv steigern und Projekte termingerechter abschließen."
    },
    {
      icon: <HardHat className="w-16 h-16 text-primary" />,
      title: "Bauunternehmen",
      industry: "Bau & Infrastruktur",
      challenge: "Zeitaufwändige manuelle Personalplanung und Dokumentation",
      solution: "Automatische Personalplanung, Zeiterfassung und Projektdokumentation durch intelligente KI-Systeme",
      results: [
        "50% Zeitersparnis bei interner Verwaltung",
        "Präzisere Arbeitszeiterfassung",
        "Vollständige und aktuelle Projektdokumentation",
        "Bessere Auslastung der Mitarbeiter"
      ],
      description: "Ein Bauunternehmen mit mehreren parallel laufenden Baustellen kämpfte mit der Herausforderung, die Personalplanung effizient zu gestalten. Die manuelle Zuweisung von Mitarbeitern zu verschiedenen Baustellen war zeitaufwändig und fehleranfällig. Außerdem mussten täglich Arbeitsstunden erfasst und Projektfortschritte dokumentiert werden – alles manuell und auf Papier. Noirion entwickelte ein KI-System, das die Personalplanung automatisch optimiert: basierend auf Qualifikationen, Verfügbarkeit, Standort und Projektanforderungen. Die Zeiterfassung erfolgt nun digital und automatisch, und alle Projektdokumentationen werden in Echtzeit aktualisiert. Das Ergebnis: Das Management-Team spart 50% der Zeit für Verwaltungsaufgaben und kann sich auf strategische Entscheidungen konzentrieren."
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Fallstudien
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Erfahren Sie, wie Unternehmen mit Noirion-KI-Agenten ihre Prozesse optimiert, 
              Kosten gesenkt und ihre Effizienz massiv gesteigert haben.
            </p>
          </div>

          {/* Case Studies */}
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0">
                      {study.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl mb-2">{study.title}</h2>
                      <p className="text-primary">{study.industry}</p>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-secondary/30 rounded-lg p-5">
                      <h3 className="text-lg text-foreground mb-2">Herausforderung</h3>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-5 border border-primary/30">
                      <h3 className="text-lg text-foreground mb-2">Lösung</h3>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {study.description}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="bg-gradient-to-r from-primary/5 to-emerald-400/5 border border-primary/20 rounded-lg p-6 mb-6">
                    <h3 className="text-xl text-foreground mb-4">Ergebnisse</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {study.results.map((result, rIndex) => (
                        <div key={rIndex} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                          <p className="text-muted-foreground">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex justify-center">
                    <Button 
                      variant="outline"
                      className="group border-primary/50 hover:bg-primary/10"
                    >
                      Mehr erfahren
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-gradient-to-r from-primary/10 to-emerald-400/10 border border-primary/30 rounded-lg p-8 text-center">
            <h3 className="text-2xl mb-4">Werden Sie die nächste Erfolgsgeschichte</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam herausfinden, wie KI-Agenten auch Ihr Unternehmen 
              transformieren können. Buchen Sie jetzt ein kostenloses Strategiegespräch.
            </p>
            <Button 
              onClick={onNavigateHome}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Jetzt Strategietermin buchen
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

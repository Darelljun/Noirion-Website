import { ArrowLeft, Calendar, User } from "lucide-react";
import { Button } from "./ui/button";

interface PressArticleProps {
  onNavigateBack: () => void;
}

export function PressArticle({ onNavigateBack }: PressArticleProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {/* Back button */}
          <Button 
            onClick={onNavigateBack}
            variant="ghost"
            className="mb-8 text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Zurück zu Presse & Medien
          </Button>

          {/* Article Header */}
          <div className="mb-12">
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>15. November 2025</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>Darell Kacou, Geschäftsführer</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              KMUs steigern Effizienz um 40% mit Noirions autonomen KI-Agenten
            </h1>

            <p className="text-xl text-muted-foreground">
              Eine umfassende Fallstudie zeigt, wie deutsche mittelständische Unternehmen 
              durch den Einsatz intelligenter Automatisierung ihre Betriebskosten senken 
              und die Produktivität massiv steigern konnten.
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Düsseldorf, 15. November 2025</strong> – Noirion Intelligence, 
                führender Anbieter autonomer KI-Lösungen für den Mittelstand, veröffentlicht heute 
                die Ergebnisse einer dreimonatigen Fallstudie mit deutschen KMUs. Die Resultate 
                übertreffen alle Erwartungen: Teilnehmende Unternehmen konnten ihre Betriebskosten 
                im Durchschnitt um 40% senken und die Workflow-Geschwindigkeit um 60% steigern.
              </p>

              <h2 className="text-2xl text-foreground mt-8 mb-4">
                Die Herausforderung: Manuelle Prozesse bremsen Wachstum
              </h2>

              <p>
                Viele mittelständische Unternehmen kämpfen mit denselben Problemen: Zeitintensive 
                manuelle Prozesse, ineffiziente Kommunikation zwischen Abteilungen und ein Mangel 
                an datenbasierten Entscheidungsgrundlagen. "Wir hatten drei Mitarbeiter, die 
                ausschließlich mit Terminkoordination und Berichterstattung beschäftigt waren", 
                berichtet Michael Schmidt, Gründer der Digital Growth GmbH aus München. "Das band 
                enorme Ressourcen, die wir dringend für strategische Aufgaben benötigt hätten."
              </p>

              <h2 className="text-2xl text-foreground mt-8 mb-4">
                Die Lösung: Autonome KI-Agenten von Noirion
              </h2>

              <p>
                Noirion entwickelte für die teilnehmenden Unternehmen maßgeschneiderte KI-Agenten, 
                die drei Kernbereiche automatisieren:
              </p>

              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong className="text-foreground">Intelligente Terminplanung:</strong> KI-gestützte 
                  Systeme koordinieren automatisch Meetings, berücksichtigen Präferenzen und Prioritäten 
                  aller Beteiligten und versenden Erinnerungen.
                </li>
                <li>
                  <strong className="text-foreground">Automatisierte Berichterstattung:</strong> Die 
                  KI sammelt Daten aus verschiedenen Quellen, analysiert Trends und erstellt 
                  aussagekräftige Reports – ohne manuellen Aufwand.
                </li>
                <li>
                  <strong className="text-foreground">Optimierte interne Kommunikation:</strong> 
                  Intelligente Chatbots beantworten Routinefragen, leiten komplexe Anliegen an die 
                  richtigen Ansprechpartner weiter und dokumentieren alle Vorgänge automatisch.
                </li>
              </ul>

              <p>
                "Die Implementierung war überraschend reibungslos", so Anna Hoffmann, 
                Marketingdirektorin bei Innovate Pro aus Hamburg. "Innerhalb von zwei Wochen 
                liefen die ersten KI-Agenten produktiv. Das Noirion-Team hat uns exzellent 
                begleitet und alle Systeme nahtlos in unsere bestehende IT-Infrastruktur integriert."
              </p>

              <h2 className="text-2xl text-foreground mt-8 mb-4">
                Beeindruckende Ergebnisse nach nur 3 Monaten
              </h2>

              <p>
                Die Zahlen sprechen für sich. Nach einem Quartal Laufzeit zeigen die 
                implementierten KI-Lösungen folgende Verbesserungen:
              </p>

              <div className="bg-secondary/30 border border-border rounded-lg p-6 my-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-xl">•</span>
                    <span><strong className="text-foreground">40% Reduktion der Betriebskosten</strong>{" "}
                    durch Automatisierung repetitiver Aufgaben</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-xl">•</span>
                    <span><strong className="text-foreground">60% schnellere Workflow-Abwicklung</strong>{" "}
                    dank intelligenter Prozessoptimierung</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-xl">•</span>
                    <span><strong className="text-foreground">35 Stunden pro Woche</strong>{" "}
                    Zeitersparnis pro Unternehmen im Durchschnitt</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-xl">•</span>
                    <span><strong className="text-foreground">92% Mitarbeiterzufriedenheit</strong>{" "}
                    durch Entlastung von monotonen Tätigkeiten</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 text-xl">•</span>
                    <span><strong className="text-foreground">ROI von durchschnittlich 320%</strong>{" "}
                    innerhalb der ersten drei Monate</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl text-foreground mt-8 mb-4">
                Mitarbeiter schätzen die Entlastung
              </h2>

              <p>
                Ein oft übersehener, aber entscheidender Faktor für den Erfolg: die Akzeptanz 
                im Team. "Anfangs gab es Bedenken, ob die KI Jobs ersetzen würde", erinnert 
                sich Thomas Schneider, CTO der TechVision AG aus Berlin. "Tatsächlich hat sie 
                unser Team von stupiden Aufgaben befreit. Unsere Mitarbeiter können sich jetzt 
                auf kreative und strategische Projekte konzentrieren – das hat die Motivation 
                enorm gesteigert."
              </p>

              <p>
                Die Studie zeigt: 92% der befragten Mitarbeiter berichten von einer höheren 
                Arbeitszufriedenheit, da sie mehr Zeit für wertschöpfende Tätigkeiten haben. 
                Gleichzeitig sank die Fehlerquote bei Routineaufgaben um 85%, da die KI-Systeme 
                konsistent und präzise arbeiten.
              </p>

              <h2 className="text-2xl text-foreground mt-8 mb-4">
                Skalierbarkeit als Schlüssel zum Wachstum
              </h2>

              <p>
                Ein weiterer Vorteil der Noirion-Lösung: Die KI-Agenten skalieren mühelos mit 
                dem Unternehmen. "Wir sind in den letzten Monaten von 25 auf 40 Mitarbeiter 
                gewachsen", berichtet David Weber, Betriebsleiter der LogiFlow GmbH aus Frankfurt. 
                "Die KI hat dieses Wachstum problemlos mitgetragen – ohne zusätzliche Verwaltungskosten."
              </p>

              <h2 className="text-2xl text-foreground mt-8 mb-4">
                Ausblick: KI wird zum Standard
              </h2>

              <p>
                "Diese Ergebnisse bestätigen unsere Vision", kommentiert Darell Kacou, 
                Geschäftsführer von Noirion Intelligence. "KI-Automatisierung ist kein 
                Luxus für Großkonzerne mehr – sie ist heute für jeden Mittelständler zugänglich 
                und bezahlbar. Unternehmen, die jetzt investieren, verschaffen sich einen 
                entscheidenden Wettbewerbsvorteil."
              </p>

              <p>
                Noirion plant, die Studie im ersten Quartal 2026 mit einer erweiterten 
                Teilnehmerzahl fortzusetzen. Interessierte Unternehmen können sich bereits 
                jetzt für eine kostenlose Strategieberatung anmelden, um zu erfahren, wie 
                KI-Agenten ihre spezifischen Prozesse optimieren können.
              </p>

              <div className="bg-card border border-primary/30 rounded-lg p-6 mt-8">
                <h3 className="text-xl text-foreground mb-3">Über Noirion Intelligence</h3>
                <p className="mb-0">
                  Noirion Intelligence wurde 2025 in Deutschland gegründet und ist spezialisiert 
                  auf die Entwicklung autonomer KI-Agenten für kleine und mittelständische 
                  Unternehmen. Mit Sitz an der Königsallee in Düsseldorf bietet das Unternehmen 
                  maßgeschneiderte Automatisierungslösungen, die Effizienz steigern, Kosten senken 
                  und nachhaltiges Wachstum ermöglichen. Weitere Informationen unter noirion-intelligence.de
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 mt-6">
                <h3 className="text-xl text-foreground mb-3">Pressekontakt</h3>
                <p className="mb-2"><strong>Darell Kacou</strong> – Geschäftsführer</p>
                <p className="mb-1">E-Mail: press@noirion.de</p>
                <p className="mb-0">Telefon: +49 (0)221 98656336</p>
              </div>
            </div>
          </div>

          {/* Back button at bottom */}
          <div className="mt-12 pt-8 border-t border-border">
            <Button 
              onClick={onNavigateBack}
              variant="ghost"
              className="text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Zurück zu Presse & Medien
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
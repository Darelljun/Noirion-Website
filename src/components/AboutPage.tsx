import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

interface AboutPageProps {
  onNavigateHome: () => void;
}

export function AboutPage({ onNavigateHome }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Button
            onClick={onNavigateHome}
            variant="ghost"
            className="mb-8 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Zurück zur Startseite
          </Button>

          {/* Title */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Über{" "}
              <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                Noirion
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
              Autonome Intelligenz für Unternehmen, die Präzision verlangen.
            </p>
            <div className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
              <p>
                Noirion ist ein Beratungs- und Technologieunternehmen, das sich auf die Entwicklung autonomer KI-Agenten spezialisiert hat.
                Wir helfen kleinen und mittelständischen Unternehmen sowie Handwerksbetrieben, ihre Abläufe zu automatisieren,
                ihre Effizienz zu steigern und Routineaufgaben zu eliminieren – präzise, zuverlässig und intelligent.
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-secondary/30 border border-border rounded-2xl p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl mb-8 text-center">
                <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                  Unsere Vision
                </span>
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Wir glauben, dass die Zukunft des Handwerks und der Wirtschaft in der Autonomie liegt.
                  Systeme, die denken, entscheiden und handeln – und dadurch Raum für das schaffen,
                  was Menschen wirklich auszeichnet: Kreativität, Strategie und persönliche Beziehungen.
                </p>
                
                <p>
                  Unsere Mission ist es, Unternehmen zu befähigen, den Schritt in eine neue Ära zu gehen –
                  in der KI nicht ersetzt, sondern unterstützt, entlastet und stärkt.
                </p>
                
                <p>
                  Noirion steht für Präzision, Effizienz und Verantwortung.
                  Jede Lösung, die wir entwickeln, soll messbaren Mehrwert schaffen –
                  besonders für jene, die bislang wenig Zugang zu moderner Automatisierung hatten:
                  Handwerker, Betriebe und mittelständische Unternehmen.
                </p>
              </div>
            </div>
          </div>

          {/* Geschichte Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary/30 border border-border rounded-2xl p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl mb-8 text-center">
                <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                  Unsere Geschichte
                </span>
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Noirion begann nicht in einem Labor, sondern mitten im Alltag – dort, wo Menschen an ihre Grenzen stoßen.
                </p>
                
                <p>
                  Unser Gründer Darell Kacou arbeitete viele Jahre mit Unternehmen und Handwerksbetrieben zusammen.
                  Immer wieder sah er dasselbe Muster: Überstunden, Papierberge, Anrufe, die liegenblieben,
                  und Menschen, die mit Routineaufgaben so beschäftigt waren, dass kein Raum mehr blieb für das Wesentliche.
                </p>
                
                <p>
                  Aus dieser Beobachtung entstand eine Vision:
                  Was wäre, wenn Technologie den Menschen nicht ersetzt, sondern ihn befreit?
                </p>
                
                <p>
                  So wurde Noirion gegründet – mit dem Ziel, autonome KI-Agenten zu entwickeln,
                  die Handwerkern, Unternehmern und Teams helfen, den Kopf wieder frei zu bekommen.
                  Systeme, die denken, entscheiden und handeln – präzise, leise, verlässlich.
                </p>
                
                <p>
                  Heute steht Noirion für den Brückenschlag zwischen Innovation und Menschlichkeit.
                  Für uns ist KI kein Selbstzweck, sondern ein Werkzeug, um Arbeit wieder menschlicher zu machen.
                </p>
              </div>

              {/* Signature Block */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="text-muted-foreground">
                  <p className="mb-4">Mit Verstand und Verantwortung,</p>
                  <p className="text-2xl mb-1" style={{ fontFamily: 'cursive' }}>
                    Darell Kacou
                  </p>
                  <p className="text-sm">Geschäftsführer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import { CheckCircle, TrendingUp, Clock, Euro, Users, Target } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Exponentielles Wachstum",
    description: "Skalieren Sie Ihre Geschäftsabläufe, ohne Kosten oder Komplexität proportional zu erhöhen.",
    stat: "300% Durchschn. ROI"
  },
  {
    icon: Clock,
    title: "Zeitersparnis",
    description: "Automatisieren Sie wiederkehrende Aufgaben und geben Sie Ihrem Team Raum für strategische Initiativen.",
    stat: "40+ Std./Woche gespart"
  },
  {
    icon: Euro,
    title: "Kostenreduktion",
    description: "Reduzieren Sie Betriebskosten bei gleichzeitiger Verbesserung von Effizienz und Ausgabequalität.",
    stat: "60% Kostensenkung"
  },
  {
    icon: Users,
    title: "Bessere Kundenerfahrung",
    description: "Bieten Sie personalisierte 24/7-Kundenbetreuung, die Kunden begeistert und bindet.",
    stat: "95% Zufriedenheitsrate"
  },
  {
    icon: Target,
    title: "Datengetriebene Entscheidungen",
    description: "Treffen Sie fundierte Entscheidungen basierend auf KI-gestützten Erkenntnissen und prädiktiven Analysen.",
    stat: "85% Genauigkeitsverbesserung"
  },
  {
    icon: CheckCircle,
    title: "Wettbewerbsvorteil",
    description: "Bleiben Sie der Konkurrenz voraus mit modernster KI-Technologie und Innovation.",
    stat: "2x Schnellere Implementierung"
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
            Warum{" "}
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              Noirion
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schließen Sie sich Tausenden von Unternehmen an, die ihre Abläufe transformiert 
            und bemerkenswertes Wachstum mit unseren KI-Lösungen erreicht haben.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {benefit.description}
              </p>
              <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full">
                <span className="text-sm text-primary font-medium">{benefit.stat}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional visual element */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/10 to-orange-400/10 rounded-2xl border border-primary/20">
            <CheckCircle className="w-5 h-5 text-primary mr-3" />
            <span className="text-lg">
              <span className="text-primary font-medium">1000+</span> Unternehmen skalieren bereits mit KI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
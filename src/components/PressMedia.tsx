import { Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface PressMediaProps {
  onNavigateHome: () => void;
  onNavigateToArticle: () => void;
}

export function PressMedia({ onNavigateHome, onNavigateToArticle }: PressMediaProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Presse & Medien
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Offizielle Informationen, Ankündigungen und Medien-Updates von Noirion.
            </p>
            <div className="max-w-3xl mx-auto text-muted-foreground leading-relaxed">
              <p>
                Noirion entwickelt autonome KI-Agenten, die Unternehmen dabei helfen, 
                Workflows zu automatisieren, Kosten zu senken und Präzision im großen Maßstab 
                zu erreichen. 2025 in Deutschland gegründet, konzentriert sich Noirion darauf, 
                die Effizienz für kleine und mittelständische Unternehmen durch intelligente 
                Automatisierung neu zu definieren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Press Contact section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl mb-8 text-center">Pressekontakt</h2>
          <p className="text-muted-foreground text-center mb-8">
            Für offizielle Anfragen, Interviews oder Pressemitteilungen wenden Sie sich bitte an:
          </p>
          
          <div className="max-w-md mx-auto bg-card border border-border rounded-lg p-8">
            <div className="text-center mb-6">
              <p className="text-lg mb-2">Darell Kacou – Geschäftsführer</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary mr-3" />
                <a 
                  href="mailto:press@noirion.de" 
                  className="text-primary hover:underline"
                >
                  press@noirion.de
                </a>
              </div>
              
              <div className="flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary mr-3" />
                <a 
                  href="tel:+4922198656336" 
                  className="hover:text-primary transition-colors"
                >
                  +49 (0)221 98656336
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl mb-4 text-center">Aktuelle Nachrichten</h2>
          <p className="text-muted-foreground text-center mb-12">
            Fallstudien und Ankündigungen
          </p>
          
          {/* Featured Article Card */}
          <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300">
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-primary">November 2025</span>
              </div>
              
              <h3 className="text-2xl mb-4">
                KMUs steigern Effizienz um 40% mit Noirions autonomen KI-Agenten
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Eine aktuelle Noirion-Fallstudie zeigt, wie deutsche KMUs KI-Agenten zur 
                Automatisierung von Terminplanung, Berichterstattung und interner Kommunikation 
                nutzten. Innerhalb von 3 Monaten reduzierten die Unternehmen ihre Betriebskosten 
                um 40% und verbesserten die Workflow-Geschwindigkeit um 60%.
              </p>
              
              <Button 
                variant="outline" 
                className="group border-primary/50 hover:bg-primary/10"
                onClick={onNavigateToArticle}
              >
                Mehr erfahren
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 text-center">
        <Button 
          onClick={onNavigateHome}
          variant="ghost"
          className="text-muted-foreground hover:text-primary"
        >
          ← Zurück zur Startseite
        </Button>
      </section>
    </div>
  );
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const features = [
  "Prozess- und Workflow-Audit",
  "Identifikation von Automatisierungspotenzial",
  "Erstellung einer KI-Agenten-Roadmap",
  "Strategie zur Systemintegration",
  "ROI- und Performance-Prognose",
  "Kontinuierliche beratende Nachbetreuung"
];

export function Services() {
  const handleBookConsultation = () => {
    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="service" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center min-h-[60vh]">
          <Card className="max-w-2xl w-full bg-card border-border hover:border-primary/50 transition-all duration-300 shadow-2xl">
            <CardHeader className="text-center pb-6 bg-gradient-to-b from-primary/5 to-transparent">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-3xl sm:text-4xl mb-4">
                <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                  Autonome Strategie-Beratung
                </span>
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                Der essenzielle erste Schritt zur Implementierung intelligenter KI-Agenten 
                in Ihrem Unternehmen.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="px-8 pb-8">
              {/* Features List */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5 mr-4 group-hover:bg-primary/20 transition-colors">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-foreground leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 group"
                size="lg"
                onClick={handleBookConsultation}
              >
                Beratung buchen
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Additional info */}
              <p className="text-xs text-center text-muted-foreground mt-4">
                Maßgeschneiderte Strategien für Ihre individuellen Geschäftsanforderungen
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
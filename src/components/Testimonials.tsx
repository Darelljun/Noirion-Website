import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Müller",
    role: "CEO, TechStart Solutions",
    content: "Noirion hat unseren Kundenservice komplett transformiert. Wir sind von 50 Anfragen pro Tag auf 500 gestiegen, mit besseren Reaktionszeiten und höherer Zufriedenheit.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Michael Schmidt",
    role: "Gründer, Digital Growth GmbH",
    content: "Die Automatisierungstools haben uns 40 Stunden pro Woche gespart. Wir haben diese Zeit in Wachstumsstrategien investiert und innerhalb von 6 Monaten einen 300%igen Umsatzanstieg erzielt.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Anna Hoffmann",
    role: "Marketingdirektorin, Innovate Pro",
    content: "Die prädiktiven Analysen halfen uns, neue Marktchancen zu identifizieren, die wir nie entdeckt hätten. Unsere Konversionsraten verbesserten sich um 85%.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "David Weber",
    role: "Betriebsleiter, LogiFlow GmbH",
    content: "Die Implementierung war nahtlos und der ROI war sofort sichtbar. Die KI-Lösungen haben sich im ersten Monat allein durch Kosteneinsparungen amortisiert.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Maria Rodriguez",
    role: "Geschäftsführerin, Connect Solutions",
    content: "Als mittelständisches Unternehmen dachte ich, KI sei unerreichbar. Noirion machte es zugänglich und erschwinglich. Jetzt konkurriere ich mit viel größeren Unternehmen.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Thomas Schneider",
    role: "CTO, TechVision AG",
    content: "Die Sicherheitsfunktionen geben uns Sicherheit. Wir können uns auf Innovation konzentrieren, da wir wissen, dass unsere Daten und Kunden durch modernste KI geschützt sind.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
            Was unsere{" "}
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              Kunden sagen
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Verlassen Sie sich nicht nur auf unser Wort. Sehen Sie, wie Unternehmen wie Ihres 
            bemerkenswerte Ergebnisse mit unseren KI-Lösungen erzielen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors relative overflow-hidden">
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 text-primary/20">
                  <Quote className="w-8 h-8" />
                </div>
                
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-current" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-lg font-medium">Vertraut von 1000+ Unternehmen</div>
            <div className="text-lg font-medium">99,9% Verfügbarkeit</div>
            <div className="text-lg font-medium">24/7 Support</div>
            <div className="text-lg font-medium">SOC 2 konform</div>
          </div>
        </div>
      </div>
    </section>
  );
}
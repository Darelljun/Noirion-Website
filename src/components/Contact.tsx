import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Mail, Phone, MapPin, ArrowRight, Zap } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    businessSize: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      businessSize: "",
      message: ""
    });
    alert("Vielen Dank! Wir melden uns innerhalb von 24 Stunden, um Ihre KI-Beratung zu planen.");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
              Bereit für die{" "}
              <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
                KI-Transformation?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Schließen Sie sich Hunderten von Unternehmen an, die ihre Abläufe bereits mit 
              intelligenter KI revolutionieren. Starten Sie mit unserer strategischen Beratung 
              für maßgeschneiderte KI-Lösungen.
            </p>

            {/* Benefits list */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                <span>Experten-KI-Strategieberatung</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                <span>Maßgeschneiderte Automatisierungs-Roadmap</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                <span>Tiefgehende Geschäftsanalyse</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                <span>Kontinuierliche Implementierungsunterstützung</span>
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3" />
                <span>kontakt@noirion-intelligence.de</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3" />
                <span>+49 (0) 211 987654321</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-primary mr-3" />
                <span>Königsallee, Düsseldorf</span>
              </div>
            </div>

            {/* Urgency indicator */}
            <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <div className="flex items-center">
                <Zap className="w-5 h-5 text-primary mr-3" />
                <span className="text-sm">
                  <span className="text-primary font-medium">Zeitlich begrenzt:</span> Buchen Sie Ihre Beratung noch diesen Monat und erhalten Sie bevorzugte Implementierungsplanung
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Ihre KI-Strategiesitzung planen</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Ihr Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="bg-input-background border-border"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="E-Mail-Adresse"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="bg-input-background border-border"
                    />
                  </div>
                </div>

                <Input
                  placeholder="Firmenname"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  required
                  className="bg-input-background border-border"
                />

                <Select onValueChange={(value) => handleInputChange("businessSize", value)}>
                  <SelectTrigger className="bg-input-background border-border">
                    <SelectValue placeholder="Unternehmensgröße" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="startup">Start-up (1-10 Mitarbeiter)</SelectItem>
                    <SelectItem value="small">Kleinunternehmen (11-50 Mitarbeiter)</SelectItem>
                    <SelectItem value="medium">Mittelständisches Unternehmen (51-200 Mitarbeiter)</SelectItem>
                    <SelectItem value="large">Großunternehmen (200+ Mitarbeiter)</SelectItem>
                  </SelectContent>
                </Select>

                <Textarea
                  placeholder="Erzählen Sie uns von Ihren geschäftlichen Herausforderungen und KI-Zielen..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="bg-input-background border-border min-h-[120px]"
                />

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 group"
                >
                  Beratung buchen
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Mit dem Absenden dieses Formulars stimmen Sie unserer Datenschutzrichtlinie und unseren Nutzungsbedingungen zu.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
import { Button } from "./ui/button";
import { ArrowRight, Bot, Zap, TrendingUp, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleChatDemo = () => {
    // Scroll to bottom to show the chatbot
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
    // Small delay to allow scroll, then user can see the chatbot button
    setTimeout(() => {
      const chatButton = document.querySelector('[data-chatbot-button]');
      if (chatButton) {
        (chatButton as HTMLElement).click();
      }
    }, 1000);
  };

  const handleBookConsultation = () => {
    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic cursor-following gradient */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-300 ease-out pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 212, 170, 0.4) 0%, rgba(74, 222, 128, 0.2) 25%, rgba(110, 231, 183, 0.1) 50%, transparent 70%)`
        }}
      ></div>
      
      {/* Background gradient mesh */}
      <div className="absolute inset-0 gradient-mesh"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/15 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
            <Bot className="w-4 h-4 mr-2" />
            <span className="text-sm">KI-gestützte Unternehmenstransformation</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight">
            Transformieren Sie Ihr Unternehmen mit{" "}
            <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              Intelligenter KI
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Von strategischer KI-Beratung bis zur vollständigen Automatisierungsimplementierung. 
            Erschließen Sie exponentielles Wachstum mit modernsten KI-Lösungen für 
            Unternehmen, die intelligent skalieren möchten.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 h-auto group"
              onClick={handleBookConsultation}
            >
              Beratung buchen
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 h-auto group"
              onClick={handleChatDemo}
            >
              <MessageCircle className="mr-2 w-4 h-4" />
              KI-Chat ausprobieren
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-5 h-5 text-primary mr-2" />
                <span className="text-2xl font-bold text-primary">300%</span>
              </div>
              <p className="text-sm text-muted-foreground">Durchschnittlicher ROI-Anstieg</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-5 h-5 text-primary mr-2" />
                <span className="text-2xl font-bold text-primary">40+</span>
              </div>
              <p className="text-sm text-muted-foreground">Std. wöchentlich eingespart</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Bot className="w-5 h-5 text-primary mr-2" />
                <span className="text-2xl font-bold text-primary">24/7</span>
              </div>
              <p className="text-sm text-muted-foreground">KI-Betrieb</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
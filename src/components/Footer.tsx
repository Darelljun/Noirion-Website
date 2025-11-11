import { Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { MobileFooter } from "./MobileFooter";

interface FooterProps {
  onNavigatePress?: () => void;
  onNavigateServices?: () => void;
  onNavigatePrivacy?: () => void;
  onNavigateTerms?: () => void;
  onNavigateCookies?: () => void;
  onNavigateCaseStudies?: () => void;
  onNavigateAbout?: () => void;
}

export function Footer({ 
  onNavigatePress, 
  onNavigateServices,
  onNavigatePrivacy,
  onNavigateTerms,
  onNavigateCookies,
  onNavigateCaseStudies,
  onNavigateAbout
}: FooterProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Use separate mobile footer for devices < 768px
  if (isMobile) {
    return (
      <MobileFooter
        onNavigatePress={onNavigatePress}
        onNavigateServices={onNavigateServices}
        onNavigatePrivacy={onNavigatePrivacy}
        onNavigateTerms={onNavigateTerms}
        onNavigateCookies={onNavigateCookies}
        onNavigateCaseStudies={onNavigateCaseStudies}
        onNavigateAbout={onNavigateAbout}
      />
    );
  }

  // Desktop footer
  return (
    <footer className="bg-secondary/50 border-t border-border relative z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent mb-4">
              Noirion
            </div>
            <p className="text-muted-foreground mb-6 max-w-md text-xs sm:text-sm">
              Wir befähigen Unternehmer, online mit intelligenten KI-Lösungen zu skalieren. 
              Transformieren Sie Ihre Abläufe, automatisieren Sie Prozesse und erreichen Sie 
              exponentielles Wachstum mit Präzision und Eleganz.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={(e) => e.preventDefault()} 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-medium mb-4 text-sm sm:text-base">Leistungen</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <div 
                  onClick={() => onNavigateServices && onNavigateServices()}
                  role="button"
                  tabIndex={0}
                  className="hover:text-primary transition-colors cursor-pointer py-3 select-none active:scale-95"
                >
                  KI-Strategieberatung
                </div>
              </li>
              <li>
                <div 
                  onClick={() => onNavigateServices && onNavigateServices()}
                  role="button"
                  tabIndex={0}
                  className="hover:text-primary transition-colors cursor-pointer py-3 select-none active:scale-95"
                >
                  KI-Chatbots
                </div>
              </li>
              <li>
                <div 
                  onClick={() => onNavigateServices && onNavigateServices()}
                  role="button"
                  tabIndex={0}
                  className="hover:text-primary transition-colors cursor-pointer py-3 select-none active:scale-95"
                >
                  <span className="hidden sm:inline">Geschäftsautomatisierung</span>
                  <span className="sm:hidden">Automatisierung</span>
                </div>
              </li>
              <li>
                <div 
                  onClick={() => onNavigateServices && onNavigateServices()}
                  role="button"
                  tabIndex={0}
                  className="hover:text-primary transition-colors cursor-pointer py-3 select-none active:scale-95"
                >
                  Prädiktive Analytik
                </div>
              </li>
              <li>
                <div 
                  onClick={() => onNavigateServices && onNavigateServices()}
                  role="button"
                  tabIndex={0}
                  className="hover:text-primary transition-colors cursor-pointer py-3 select-none active:scale-95"
                >
                  Kundenintelligenz
                </div>
              </li>
              <li>
                <div 
                  onClick={() => onNavigateServices && onNavigateServices()}
                  role="button"
                  tabIndex={0}
                  className="hover:text-primary transition-colors cursor-pointer py-3 select-none active:scale-95"
                >
                  <span className="hidden sm:inline">Performance-Optimierung</span>
                  <span className="sm:hidden">Performance</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-medium mb-4 text-sm sm:text-base">Unternehmen</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <div 
                  onClick={() => onNavigateAbout && onNavigateAbout()}
                  role="button"
                  tabIndex={0}
                  className="hover:text-primary transition-colors cursor-pointer py-3 select-none active:scale-95"
                >
                  Über uns
                </div>
              </li>
              <li>
                <div 
                  onClick={() => onNavigateCaseStudies && onNavigateCaseStudies()}
                  role="button"
                  tabIndex={0}
                  className="hover:text-primary transition-colors cursor-pointer py-3 select-none active:scale-95"
                >
                  Fallstudien
                </div>
              </li>
              <li>
                <div 
                  onClick={() => onNavigatePress && onNavigatePress()}
                  role="button"
                  tabIndex={0}
                  className="hover:text-primary transition-colors cursor-pointer py-3 select-none active:scale-95"
                >
                  Presse
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="font-medium mb-2 text-sm sm:text-base">Bleiben Sie auf dem Laufenden</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Erhalten Sie die neuesten KI-Einblicke und Wachstumsstrategien in Ihrem Posteingang.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <div className="flex items-center bg-input-background rounded-lg px-3 py-2 border border-border w-full sm:w-auto">
                <Mail className="w-4 h-4 text-muted-foreground mr-2" />
                <input
                  type="email"
                  placeholder="Ihre E-Mail"
                  className="bg-transparent outline-none text-xs sm:text-sm min-w-[160px] sm:min-w-[200px] w-full"
                />
              </div>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-xs sm:text-sm w-full sm:w-auto">
                Abonnieren
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm text-muted-foreground gap-4">
            <p className="text-xs sm:text-sm">&copy; Noirion Intelligence 2025 alle rechte vorbehalten</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              <button 
                onClick={onNavigatePrivacy}
                className="hover:text-primary transition-colors touch-manipulation cursor-pointer py-2 px-0 bg-transparent border-0"
                type="button"
              >
                Datenschutzrichtlinie
              </button>
              <button 
                onClick={onNavigateTerms}
                className="hover:text-primary transition-colors touch-manipulation cursor-pointer py-2 px-0 bg-transparent border-0"
                type="button"
              >
                Nutzungsbedingungen
              </button>
              <button 
                onClick={onNavigateCookies}
                className="hover:text-primary transition-colors touch-manipulation cursor-pointer py-2 px-0 bg-transparent border-0"
                type="button"
              >
                Cookie-Richtlinie
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
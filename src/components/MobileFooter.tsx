import { Mail } from "lucide-react";

interface MobileFooterProps {
  onNavigatePress?: () => void;
  onNavigateServices?: () => void;
  onNavigatePrivacy?: () => void;
  onNavigateTerms?: () => void;
  onNavigateCookies?: () => void;
  onNavigateCaseStudies?: () => void;
  onNavigateAbout?: () => void;
}

export function MobileFooter({ 
  onNavigatePress, 
  onNavigateServices,
  onNavigatePrivacy,
  onNavigateTerms,
  onNavigateCookies,
  onNavigateCaseStudies,
  onNavigateAbout
}: MobileFooterProps) {

  const handleNavigation = (callback: (() => void) | undefined, pageName: string) => {
    console.log(`🔥 MobileFooter: Navigating to ${pageName}`);
    if (callback) {
      callback();
      console.log(`✅ Navigation to ${pageName} executed`);
    } else {
      console.error(`❌ No callback for ${pageName}`);
    }
  };

  return (
    <footer className="bg-secondary/50 border-t border-border relative z-[100]">
      <div className="container mx-auto px-4 py-12 pb-24">
        <div className="space-y-8">
          {/* Company info */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent mb-4">
              Noirion
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Wir befähigen Unternehmer, online mit intelligenten KI-Lösungen zu skalieren.
            </p>
          </div>

          {/* Services */}
          <div className="border-t border-border pt-6">
            <h3 className="font-medium mb-4 text-base">Leistungen</h3>
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => handleNavigation(onNavigateServices, 'Services')}
                className="block w-full text-left py-4 px-4 -mx-4 text-sm text-muted-foreground hover:text-primary transition-colors rounded-lg cursor-pointer border-0 bg-transparent"
              >
                KI-Strategieberatung
              </button>
              <button
                type="button"
                onClick={() => handleNavigation(onNavigateServices, 'Services')}
                className="block w-full text-left py-4 px-4 -mx-4 text-sm text-muted-foreground hover:text-primary transition-colors rounded-lg cursor-pointer border-0 bg-transparent"
              >
                KI-Chatbots
              </button>
              <button
                type="button"
                onClick={() => handleNavigation(onNavigateServices, 'Services')}
                className="block w-full text-left py-4 px-4 -mx-4 text-sm text-muted-foreground hover:text-primary transition-colors rounded-lg cursor-pointer border-0 bg-transparent"
              >
                Automatisierung
              </button>
            </div>
          </div>

          {/* Company */}
          <div className="border-t border-border pt-6">
            <h3 className="font-medium mb-4 text-base">Unternehmen</h3>
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => handleNavigation(onNavigateAbout, 'About')}
                className="block w-full text-left py-4 px-4 -mx-4 text-sm text-muted-foreground hover:text-primary transition-colors rounded-lg cursor-pointer border-0 bg-transparent"
              >
                Über uns
              </button>
              <button
                type="button"
                onClick={() => handleNavigation(onNavigateCaseStudies, 'Case Studies')}
                className="block w-full text-left py-4 px-4 -mx-4 text-sm text-muted-foreground hover:text-primary transition-colors rounded-lg cursor-pointer border-0 bg-transparent"
              >
                Fallstudien
              </button>
              <button
                type="button"
                onClick={() => handleNavigation(onNavigatePress, 'Press')}
                className="block w-full text-left py-4 px-4 -mx-4 text-sm text-muted-foreground hover:text-primary transition-colors rounded-lg cursor-pointer border-0 bg-transparent"
              >
                Presse
              </button>
            </div>
          </div>

          {/* Newsletter */}
          <div className="border-t border-border pt-6">
            <h3 className="font-medium mb-2 text-base">Bleiben Sie auf dem Laufenden</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Erhalten Sie die neuesten KI-Einblicke in Ihrem Posteingang.
            </p>
            <div className="space-y-2">
              <div className="flex items-center bg-input-background rounded-lg px-3 py-2 border border-border">
                <Mail className="w-4 h-4 text-muted-foreground mr-2" />
                <input
                  type="email"
                  placeholder="Ihre E-Mail"
                  className="bg-transparent outline-none text-sm w-full"
                />
              </div>
              <button
                type="button"
                className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm"
              >
                Abonnieren
              </button>
            </div>
          </div>

          {/* Legal Links */}
          <div className="border-t border-border pt-6">
            <h3 className="font-medium mb-4 text-base">Rechtliches</h3>
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => handleNavigation(onNavigatePrivacy, 'Privacy Policy')}
                className="block w-full text-left py-4 px-4 -mx-4 text-sm text-muted-foreground hover:text-primary transition-colors rounded-lg cursor-pointer border-0 bg-transparent"
              >
                Datenschutzrichtlinie
              </button>
              <button
                type="button"
                onClick={() => handleNavigation(onNavigateTerms, 'Terms of Service')}
                className="block w-full text-left py-4 px-4 -mx-4 text-sm text-muted-foreground hover:text-primary transition-colors rounded-lg cursor-pointer border-0 bg-transparent"
              >
                Nutzungsbedingungen
              </button>
              <button
                type="button"
                onClick={() => handleNavigation(onNavigateCookies, 'Cookie Policy')}
                className="block w-full text-left py-4 px-4 -mx-4 text-sm text-muted-foreground hover:text-primary transition-colors rounded-lg cursor-pointer border-0 bg-transparent"
              >
                Cookie-Richtlinie
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-6 text-center">
            <p className="text-xs text-muted-foreground">
              &copy; Noirion Intelligence 2025 alle rechte vorbehalten
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

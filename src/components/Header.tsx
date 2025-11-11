import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logoImage from "figma:asset/cd22ca39b06e09ca281202326a6e2fbb8dfdf02e.png";

interface HeaderProps {
  onNavigateHome?: () => void;
  onNavigatePress?: () => void;
  onNavigateServices?: () => void;
  onScrollToSection?: (sectionId: string) => void;
}

export function Header({ onNavigateHome, onNavigatePress, onNavigateServices, onScrollToSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === "/") {
      onNavigateHome?.();
    } else if (currentPath === "/press") {
      onNavigatePress?.();
    }
  }, [onNavigateHome, onNavigatePress]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 ${isMenuOpen ? 'bg-background' : 'bg-background/80'} backdrop-blur-lg border-b border-border`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <button 
            onClick={onNavigateHome}
            className="flex items-center cursor-pointer"
          >
            <img 
              src={logoImage} 
              alt="Noirion Logo" 
              className="h-16 w-auto sm:h-20 lg:h-24"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={onNavigateServices}
              className="text-foreground hover:text-primary transition-colors"
            >
              Leistung
            </button>
            <button 
              onClick={() => onScrollToSection?.('benefits')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Vorteile
            </button>
            <button 
              onClick={() => onScrollToSection?.('testimonials')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Referenzen
            </button>
            <button 
              onClick={() => onScrollToSection?.('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Kontakt
            </button>
            <Button 
              onClick={() => onScrollToSection?.('contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Beratung buchen
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-lg">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  onNavigateServices?.();
                  setIsMenuOpen(false);
                }}
                className="text-foreground hover:text-primary transition-colors text-left px-2 py-2"
              >
                Leistung
              </button>
              <button
                onClick={() => {
                  onScrollToSection?.('benefits');
                  setIsMenuOpen(false);
                }}
                className="text-foreground hover:text-primary transition-colors text-left px-2 py-2"
              >
                Vorteile
              </button>
              <button
                onClick={() => {
                  onScrollToSection?.('testimonials');
                  setIsMenuOpen(false);
                }}
                className="text-foreground hover:text-primary transition-colors text-left px-2 py-2"
              >
                Referenzen
              </button>
              <button
                onClick={() => {
                  onScrollToSection?.('contact');
                  setIsMenuOpen(false);
                }}
                className="text-foreground hover:text-primary transition-colors text-left px-2 py-2"
              >
                Kontakt
              </button>
              <Button 
                onClick={() => {
                  onScrollToSection?.('contact');
                  setIsMenuOpen(false);
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-fit"
              >
                Beratung buchen
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
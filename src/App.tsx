import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Benefits } from "./components/Benefits";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Chatbot } from "./components/Chatbot";
import { PressMedia } from "./components/PressMedia";
import { PressArticle } from "./components/PressArticle";
import { ServicesDetail } from "./components/ServicesDetail";
import { CaseStudies } from "./components/CaseStudies";
import { AboutPage } from "./components/AboutPage";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsOfUse } from "./components/TermsOfUse";
import { CookiePolicy } from "./components/CookiePolicy";

type PageType = 'home' | 'press' | 'article' | 'services' | 'casestudies' | 'about' | 'privacy' | 'terms' | 'cookies';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const navigateToPress = () => {
    console.log('🔥 App: Navigating to PRESS');
    setCurrentPage('press');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };
  
  const navigateToHome = () => {
    console.log('🔥 App: Navigating to HOME');
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };
  
  const navigateToArticle = () => {
    console.log('🔥 App: Navigating to ARTICLE');
    setCurrentPage('article');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };
  
  const navigateToServices = () => {
    console.log('🔥 App: Navigating to SERVICES');
    setCurrentPage('services');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };
  
  const navigateToCaseStudies = () => {
    console.log('🔥 App: Navigating to CASE STUDIES');
    setCurrentPage('casestudies');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };
  
  const navigateToAbout = () => {
    console.log('🔥 App: Navigating to ABOUT');
    setCurrentPage('about');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };
  
  const navigateToPrivacy = () => {
    console.log('🔥 App: Navigating to PRIVACY');
    setCurrentPage('privacy');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };
  
  const navigateToTerms = () => {
    console.log('🔥 App: Navigating to TERMS');
    setCurrentPage('terms');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };
  
  const navigateToCookies = () => {
    console.log('🔥 App: Navigating to COOKIES');
    setCurrentPage('cookies');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };
  
  const scrollToSection = (sectionId: string) => {
    // First navigate to home if not already there
    if (currentPage !== 'home') {
      setCurrentPage('home');
      // Wait for page to render, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (currentPage === 'privacy') {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header 
          onNavigateHome={navigateToHome} 
          onNavigatePress={navigateToPress} 
          onNavigateServices={navigateToServices}
          onScrollToSection={scrollToSection}
        />
        <main>
          <PrivacyPolicy onNavigateHome={navigateToHome} />
        </main>
        <Footer 
          onNavigatePress={navigateToPress}
          onNavigateServices={navigateToServices}
          onNavigatePrivacy={navigateToPrivacy}
          onNavigateTerms={navigateToTerms}
          onNavigateCookies={navigateToCookies}
          onNavigateCaseStudies={navigateToCaseStudies}
          onNavigateAbout={navigateToAbout}
        />
      </div>
    );
  }

  if (currentPage === 'terms') {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header 
          onNavigateHome={navigateToHome} 
          onNavigatePress={navigateToPress} 
          onNavigateServices={navigateToServices}
          onScrollToSection={scrollToSection}
        />
        <main>
          <TermsOfUse onNavigateHome={navigateToHome} />
        </main>
        <Footer 
          onNavigatePress={navigateToPress}
          onNavigateServices={navigateToServices}
          onNavigatePrivacy={navigateToPrivacy}
          onNavigateTerms={navigateToTerms}
          onNavigateCookies={navigateToCookies}
          onNavigateCaseStudies={navigateToCaseStudies}
          onNavigateAbout={navigateToAbout}
        />
      </div>
    );
  }

  if (currentPage === 'cookies') {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header 
          onNavigateHome={navigateToHome} 
          onNavigatePress={navigateToPress} 
          onNavigateServices={navigateToServices}
          onScrollToSection={scrollToSection}
        />
        <main>
          <CookiePolicy onNavigateHome={navigateToHome} />
        </main>
        <Footer 
          onNavigatePress={navigateToPress}
          onNavigateServices={navigateToServices}
          onNavigatePrivacy={navigateToPrivacy}
          onNavigateTerms={navigateToTerms}
          onNavigateCookies={navigateToCookies}
          onNavigateCaseStudies={navigateToCaseStudies}
          onNavigateAbout={navigateToAbout}
        />
      </div>
    );
  }

  if (currentPage === 'article') {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header 
          onNavigateHome={navigateToHome} 
          onNavigatePress={navigateToPress} 
          onNavigateServices={navigateToServices}
          onScrollToSection={scrollToSection}
        />
        <main>
          <PressArticle onNavigateBack={navigateToPress} />
        </main>
        <Footer 
          onNavigatePress={navigateToPress}
          onNavigateServices={navigateToServices}
          onNavigatePrivacy={navigateToPrivacy}
          onNavigateTerms={navigateToTerms}
          onNavigateCookies={navigateToCookies}
          onNavigateCaseStudies={navigateToCaseStudies}
          onNavigateAbout={navigateToAbout}
        />
      </div>
    );
  }

  if (currentPage === 'press') {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header 
          onNavigateHome={navigateToHome} 
          onNavigatePress={navigateToPress} 
          onNavigateServices={navigateToServices}
          onScrollToSection={scrollToSection}
        />
        <main>
          <PressMedia onNavigateHome={navigateToHome} onNavigateToArticle={navigateToArticle} />
        </main>
        <Footer 
          onNavigatePress={navigateToPress}
          onNavigateServices={navigateToServices}
          onNavigatePrivacy={navigateToPrivacy}
          onNavigateTerms={navigateToTerms}
          onNavigateCookies={navigateToCookies}
          onNavigateCaseStudies={navigateToCaseStudies}
          onNavigateAbout={navigateToAbout}
        />
      </div>
    );
  }

  if (currentPage === 'services') {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header 
          onNavigateHome={navigateToHome} 
          onNavigatePress={navigateToPress} 
          onNavigateServices={navigateToServices}
          onScrollToSection={scrollToSection}
        />
        <main>
          <ServicesDetail onNavigateHome={navigateToHome} />
        </main>
        <Footer 
          onNavigatePress={navigateToPress}
          onNavigateServices={navigateToServices}
          onNavigatePrivacy={navigateToPrivacy}
          onNavigateTerms={navigateToTerms}
          onNavigateCookies={navigateToCookies}
          onNavigateCaseStudies={navigateToCaseStudies}
          onNavigateAbout={navigateToAbout}
        />
      </div>
    );
  }

  if (currentPage === 'casestudies') {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header 
          onNavigateHome={navigateToHome} 
          onNavigatePress={navigateToPress} 
          onNavigateServices={navigateToServices}
          onScrollToSection={scrollToSection}
        />
        <main>
          <CaseStudies onNavigateHome={navigateToHome} />
        </main>
        <Footer 
          onNavigatePress={navigateToPress}
          onNavigateServices={navigateToServices}
          onNavigatePrivacy={navigateToPrivacy}
          onNavigateTerms={navigateToTerms}
          onNavigateCookies={navigateToCookies}
          onNavigateCaseStudies={navigateToCaseStudies}
          onNavigateAbout={navigateToAbout}
        />
      </div>
    );
  }

  if (currentPage === 'about') {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header 
          onNavigateHome={navigateToHome} 
          onNavigatePress={navigateToPress} 
          onNavigateServices={navigateToServices}
          onScrollToSection={scrollToSection}
        />
        <main>
          <AboutPage onNavigateHome={navigateToHome} />
        </main>
        <Footer 
          onNavigatePress={navigateToPress}
          onNavigateServices={navigateToServices}
          onNavigatePrivacy={navigateToPrivacy}
          onNavigateTerms={navigateToTerms}
          onNavigateCookies={navigateToCookies}
          onNavigateCaseStudies={navigateToCaseStudies}
          onNavigateAbout={navigateToAbout}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header 
        onNavigateHome={navigateToHome} 
        onNavigatePress={navigateToPress} 
        onNavigateServices={navigateToServices}
        onScrollToSection={scrollToSection}
      />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Testimonials />
        <Contact />
      </main>
      <Footer 
        onNavigatePress={navigateToPress}
        onNavigateServices={navigateToServices}
        onNavigatePrivacy={navigateToPrivacy}
        onNavigateTerms={navigateToTerms}
        onNavigateCookies={navigateToCookies}
        onNavigateCaseStudies={navigateToCaseStudies}
        onNavigateAbout={navigateToAbout}
      />
      <Chatbot />
    </div>
  );
}
import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { MessageCircle, Send, X, Bot, User, Minimize2 } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ContactFormState {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

// Detect if user explicitly asks for English
const wantsEnglish = (text: string): boolean => {
  const lowerText = text.toLowerCase();
  return lowerText.includes('english') || 
         lowerText.includes('englisch') || 
         lowerText.includes('speak english') ||
         lowerText.includes('in english') ||
         lowerText.includes('auf englisch');
};

const getBotResponse = (message: string, language: 'de' | 'en', contactFormState?: ContactFormState): { response: string, needsContactInfo?: boolean, switchLanguage?: 'de' | 'en' } => {
  const lowerMessage = message.toLowerCase();
  
  // Check if user wants to switch to English
  if (wantsEnglish(lowerMessage)) {
    return {
      response: `Yes, I can speak English! I'm Junior, your digital assistant at Noirion.
I can help you with questions about our AI agents, our process, or booking a consultation.

How can I help you?`,
      switchLanguage: 'en'
    };
  }
  
  // Greeting responses - many variations
  if (lowerMessage.includes('hallo') || lowerMessage.includes('hi') || lowerMessage.includes('hey') || 
      lowerMessage.includes('guten tag') || lowerMessage.includes('hello') || lowerMessage.includes('moin') ||
      lowerMessage.includes('servus') || lowerMessage.includes('grüß') || lowerMessage.includes('tag')) {
    return {
      response: `👋 Hallo, ich bin Junior, dein digitaler Assistent bei Noirion.
Ich helfe dir bei Fragen zu unseren KI-Agenten, zu unserem Ablauf oder zur Terminbuchung.

Womit kann ich dir helfen?

Du kannst mich zum Beispiel fragen:
– Was macht Noirion genau?
– Funktioniert das auch für Handwerksbetriebe?
– Wie läuft ein Strategiegespräch ab?
– Wie kann ich einen Termin vereinbaren?`
    };
  }

  // About Noirion / Services - many variations
  if (lowerMessage.includes('was macht') || lowerMessage.includes('was ist') || lowerMessage.includes('leistung') || 
      lowerMessage.includes('service') || lowerMessage.includes('angebot') || lowerMessage.includes('bietet') ||
      lowerMessage.includes('macht ihr') || lowerMessage.includes('tut ihr') || lowerMessage.includes('ki-agent') || 
      lowerMessage.includes('ai agent') || lowerMessage.includes('was bietet') || lowerMessage.includes('welche') ||
      lowerMessage.includes('noirion') || lowerMessage.includes('euer') || lowerMessage.includes('eure') ||
      lowerMessage.includes('könnt ihr') || lowerMessage.includes('was kann')) {
    return {
      response: `Noirion entwickelt autonome KI-Agenten, die Routineaufgaben in Unternehmen übernehmen – z. B. Terminplanung, E-Mail-Vorqualifikation, Rechnungsprozesse und interne Kommunikation.

Unser Fokus liegt auf kleinen und mittelständischen Unternehmen sowie Handwerksbetrieben, die ihre Abläufe effizienter und präziser gestalten möchten.

Möchtest du mehr über einen bestimmten Bereich wissen?`
    };
  }

  // Target groups - many variations
  if (lowerMessage.includes('handwerk') || lowerMessage.includes('kleinere') || lowerMessage.includes('kleine') ||
      lowerMessage.includes('kmu') || lowerMessage.includes('mittelstand') || lowerMessage.includes('betrieb') ||
      lowerMessage.includes('firma') || lowerMessage.includes('unternehmen') || lowerMessage.includes('geeignet') ||
      lowerMessage.includes('passt das') || lowerMessage.includes('funktioniert das auch') ||
      lowerMessage.includes('auch für') || lowerMessage.includes('zielgruppe')) {
    return {
      response: `Ja, absolut. Viele unserer Projekte richten sich genau an Handwerksbetriebe und KMUs.
Typische Einsatzbereiche sind Auftragsmanagement, Terminplanung, Rechnungen oder Lagerorganisation.

Im Strategiegespräch finden wir gemeinsam heraus, welche Abläufe bei dir automatisiert werden können.`
    };
  }

  // Process / How it works - many variations
  if (lowerMessage.includes('wie läuft') || lowerMessage.includes('ablauf') || lowerMessage.includes('wie startet') || 
      lowerMessage.includes('prozess') || lowerMessage.includes('wie funktioniert') || lowerMessage.includes('wie geht') ||
      lowerMessage.includes('beginnt') || lowerMessage.includes('anfangen') || lowerMessage.includes('starten') ||
      lowerMessage.includes('loslegen') || lowerMessage.includes('zusammenarbeit') || lowerMessage.includes('vorgehen')) {
    return {
      response: `Jeder Einstieg bei Noirion beginnt mit einem Strategiegespräch.

Dabei analysieren wir deine Abläufe, identifizieren Automatisierungspotenzial und erstellen einen klaren Fahrplan für die technische Umsetzung.

Wenn du möchtest, kann ich dir direkt helfen, einen Termin für ein kostenloses Strategiegespräch zu vereinbaren.`,
      needsContactInfo: true
    };
  }

  // Pricing questions - NEVER give concrete prices! - many variations
  if (lowerMessage.includes('preis') || lowerMessage.includes('kosten') || lowerMessage.includes('teuer') || 
      lowerMessage.includes('viel') || lowerMessage.includes('geld') || lowerMessage.includes('bezahl') ||
      lowerMessage.includes('euro') || lowerMessage.includes('budget') || lowerMessage.includes('investition') ||
      lowerMessage.includes('ausgaben') || lowerMessage.includes('gebühr')) {
    
    // If user insists on a number
    if (lowerMessage.includes('ungefähr') || lowerMessage.includes('circa') || lowerMessage.includes('zahl') || 
        lowerMessage.includes('ca.') || lowerMessage.includes('etwa') || lowerMessage.includes('grob') ||
        lowerMessage.includes('schätz') || lowerMessage.includes('range') || lowerMessage.includes('bereich')) {
      return {
        response: `Ich verstehe, dass du eine grobe Zahl möchtest – aber jede Schätzung ohne Analyse wäre ungenau.
Darum besprechen wir Preise immer transparent im persönlichen Gespräch, sobald wir deinen konkreten Bedarf kennen.

Möchtest du ein kostenloses Erstgespräch vereinbaren?`,
        needsContactInfo: true
      };
    }
    
    return {
      response: `Eine sehr gute Frage. Unsere Preise hängen immer von deinem Unternehmen, deinen Prozessen und dem Automatisierungsumfang ab.

Wir legen Kosten niemals pauschal fest, sondern individuell nach einem persönlichen Strategiegespräch, in dem wir genau verstehen, was du brauchst.

Wenn du möchtest, kann ich dir helfen, direkt ein kostenloses Erstgespräch zu vereinbaren.`,
      needsContactInfo: true
    };
  }

  // Privacy / GDPR - many variations
  if (lowerMessage.includes('datenschutz') || lowerMessage.includes('dsgvo') || lowerMessage.includes('daten') ||
      lowerMessage.includes('privacy') || lowerMessage.includes('sicher') || lowerMessage.includes('schutz')) {
    return {
      response: `Unsere vollständige Datenschutzerklärung findest du auf unserer Datenschutz-Seite im Footer.

Ich darf keine rechtliche Beratung geben oder DSGVO-Artikel auslegen.`
    };
  }

  // Terms of Use - many variations
  if (lowerMessage.includes('nutzungsbedingung') || lowerMessage.includes('agb') || lowerMessage.includes('bedingung') ||
      lowerMessage.includes('terms') || lowerMessage.includes('regelung')) {
    return {
      response: `Unsere Nutzungsbedingungen findest du auf der entsprechenden Seite im Footer.`
    };
  }

  // Cookies - many variations
  if (lowerMessage.includes('cookie') || lowerMessage.includes('tracking')) {
    return {
      response: `Informationen zu Cookies findest du auf unserer Cookie-Richtlinie-Seite im Footer.`
    };
  }

  // Case studies / References - many variations
  if (lowerMessage.includes('beispiel') || lowerMessage.includes('referenz') || lowerMessage.includes('fallstud') || 
      lowerMessage.includes('erfolg') || lowerMessage.includes('kunden') || lowerMessage.includes('projekt') ||
      lowerMessage.includes('erfahrung') || lowerMessage.includes('case') || lowerMessage.includes('zeig') ||
      lowerMessage.includes('beweis') || lowerMessage.includes('resultat')) {
    return {
      response: `Ja, auf unserer Seite „Fallstudien" zeigen wir reale Projekte, in denen Unternehmen mit Noirion bis zu 40 % ihrer Verwaltungszeit eingespart haben.

Du kannst sie dir im Footer unter „Fallstudien" ansehen.`
    };
  }

  // About page - many variations
  if (lowerMessage.includes('über noirion') || lowerMessage.includes('über uns') || lowerMessage.includes('geschichte') || 
      lowerMessage.includes('vision') || lowerMessage.includes('wer seid') || lowerMessage.includes('wer ist') ||
      lowerMessage.includes('hintergrund') || lowerMessage.includes('story')) {
    return {
      response: `Mehr über Noirion, unsere Vision und unsere Geschichte erfährst du auf unserer „Über uns"-Seite im Footer.`
    };
  }

  // Contact / Appointment - many variations
  if (lowerMessage.includes('termin') || lowerMessage.includes('gespräch') || lowerMessage.includes('kontakt') || 
      lowerMessage.includes('sprechen') || lowerMessage.includes('reden') || lowerMessage.includes('treffen') ||
      lowerMessage.includes('buchen') || lowerMessage.includes('vereinbar') || lowerMessage.includes('meeting') ||
      lowerMessage.includes('anruf') || lowerMessage.includes('telefonier') || lowerMessage.includes('beratung') ||
      lowerMessage.includes('interesse') || lowerMessage.includes('möchte') || lowerMessage.includes('würde gerne')) {
    return {
      response: `Super, das freut mich. Ich kann dir helfen, ein kostenloses Strategiegespräch zu vereinbaren.

Bitte gib mir kurz:
– deinen Namen
– deine E-Mail-Adresse
– dein Unternehmen oder deine Branche
– und kurz, wobei wir dir helfen sollen`,
      needsContactInfo: true
    };
  }

  // Very technical questions - many variations
  if (lowerMessage.includes('api') || lowerMessage.includes('code') || lowerMessage.includes('technisch') || 
      lowerMessage.includes('integration') || lowerMessage.includes('schnittstelle') || lowerMessage.includes('program') ||
      lowerMessage.includes('entwickl') || lowerMessage.includes('software')) {
    return {
      response: `Das klingt nach einer sehr spezifischen Frage.
Am besten sprichst du direkt mit unserem Team – ich kann deine Anfrage gerne weitergeben, damit sich jemand persönlich bei dir meldet.`,
      needsContactInfo: true
    };
  }

  // Default response
  return {
    response: `Das ist eine interessante Frage! Ich kann dir Informationen zu unseren KI-Agenten, unserem Ablauf, Preisen oder zur Terminbuchung geben.

Du kannst mich zum Beispiel fragen:
– Was macht Noirion genau?
– Funktioniert das auch für kleinere Betriebe?
– Wie läuft die Zusammenarbeit ab?
– Wie kann ich einen Termin vereinbaren?

Oder möchtest du lieber direkt mit unserem Team sprechen?`,
    needsContactInfo: false
  };
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [language, setLanguage] = useState<'de' | 'en'>('de');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: `👋 Hallo, ich bin Junior, dein digitaler Assistent bei Noirion.
Ich helfe dir bei Fragen zu unseren KI-Agenten, zu unserem Ablauf oder zur Terminbuchung.

Womit kann ich dir helfen?`,
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [collectingContactInfo, setCollectingContactInfo] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isMobile = window.innerWidth < 768;

  // Hide chatbot completely on mobile
  if (isMobile) {
    return null;
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-open chatbot after 10 seconds (only on desktop)
  useEffect(() => {
    if (isMobile) return; // Don't auto-open on mobile
    
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [isMobile]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputMessage;
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const { response, needsContactInfo, switchLanguage } = getBotResponse(currentInput, language);
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      
      // If contact info is needed and not already collecting
      if (needsContactInfo && !collectingContactInfo) {
        setCollectingContactInfo(true);
      }
      
      // If language switch is requested
      if (switchLanguage) {
        setLanguage(switchLanguage);
      }
      
      setIsTyping(false);
    }, 800 + Math.random() * 1200);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-[100] pointer-events-none">
        <Button
          data-chatbot-button
          onClick={() => setIsOpen(true)}
          className={`${isMobile ? 'h-12 w-12' : 'h-14 w-14'} rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group relative pointer-events-auto`}
        >
          <MessageCircle className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'} group-hover:scale-110 transition-transform`} />
        </Button>
        
        {/* Pulse animation - hide on mobile */}
        {!isMobile && (
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping pointer-events-none"></div>
        )}
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100] pointer-events-none">
      <Card className={`${isMobile ? 'w-72' : 'w-80 sm:w-96'} bg-card border-border shadow-2xl transition-all duration-300 ${isMinimized ? 'h-16' : 'h-[32rem]'} pointer-events-auto`}>
        <CardHeader className="p-4 border-b border-border bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                <Bot className="w-4 h-4 text-primary" />
              </div>
              <div>
                <CardTitle className="text-sm">Junior</CardTitle>
                <p className="text-xs text-muted-foreground">
                  {isTyping ? (language === 'en' ? 'typing...' : 'schreibt...') : (language === 'en' ? 'Your digital assistant' : 'Dein digitaler Assistent')}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="h-8 w-8 p-0 hover:bg-secondary"
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0 hover:bg-secondary"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-[26rem]">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className="flex items-start space-x-2 max-w-[80%]">
                    {message.sender === 'bot' && (
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot className="w-3 h-3 text-primary" />
                      </div>
                    )}
                    <div
                      className={`px-3 py-2 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString('de-DE', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                    {message.sender === 'user' && (
                      <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <User className="w-3 h-3 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-3 h-3 text-primary" />
                    </div>
                    <div className="bg-secondary text-secondary-foreground px-3 py-2 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-secondary/30">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={language === 'en' ? "Ask about AI agents, process, prices..." : "Frage nach KI-Agenten, Ablauf, Preisen..."}
                  className="flex-1 bg-input-background border-border"
                  disabled={isTyping}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
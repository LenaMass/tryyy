
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.ai_solutions': 'AI Solutions',
    'nav.pricing': 'Pricing',
    'nav.start_company': 'Start My Company',
    
    // Hero Section
    'hero.seconds': 'In 30 Seconds',
    'hero.headline': 'Know Your Cost, Timeline & Legal Structure!',
    'hero.subtitle': 'Thinking about starting a business in Saudi Arabia? Get an instant cost estimate, a step-by-step timeline, and the best legal structure for your company—all in just 30 seconds!',
    'hero.tagline': '🚀 No consultants. No waiting. Just instant answers.',
    'hero.cta': 'Take the Quiz Now – It\'s Free!',
    
    // Footer
    'footer.description': 'Simplifying business setup in Saudi Arabia with AI-powered solutions.',
    'footer.services': 'Services',
    'footer.resources': 'Resources',
    'footer.legal': 'Legal',
    'footer.rights': 'All rights reserved.',
    
    // Language Switcher
    'language': 'العربية',
    
    // Common
    'back': 'Back',
    'next': 'Next',
    'submit': 'Submit',
  },
  ar: {
    // Navbar
    'nav.about': 'من نحن',
    'nav.services': 'الخدمات',
    'nav.ai_solutions': 'حلول الذكاء الاصطناعي',
    'nav.pricing': 'الأسعار',
    'nav.start_company': 'ابدأ شركتك',
    
    // Hero Section
    'hero.seconds': 'في 30 ثانية',
    'hero.headline': 'اعرف التكلفة والجدول الزمني والهيكل القانوني!',
    'hero.subtitle': 'هل تفكر في بدء عمل تجاري في المملكة العربية السعودية؟ احصل على تقدير تكلفة فوري، وجدول زمني خطوة بخطوة، وأفضل هيكل قانوني لشركتك - كل ذلك في 30 ثانية فقط!',
    'hero.tagline': '🚀 لا مستشارين. لا انتظار. مجرد إجابات فورية.',
    'hero.cta': 'خذ الاختبار الآن - إنه مجاني!',
    
    // Footer
    'footer.description': 'تبسيط إعداد الأعمال في المملكة العربية السعودية بحلول مدعومة بالذكاء الاصطناعي.',
    'footer.services': 'الخدمات',
    'footer.resources': 'الموارد',
    'footer.legal': 'القانونية',
    'footer.rights': 'جميع الحقوق محفوظة.',
    
    // Language Switcher
    'language': 'English',
    
    // Common
    'back': 'رجوع',
    'next': 'التالي',
    'submit': 'إرسال',
  }
};

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const t = (key: string): string => {
    return translations[language][key] || key;
  };
  
  const isRTL = language === 'ar';
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

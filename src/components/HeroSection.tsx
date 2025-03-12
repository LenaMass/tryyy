
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t, isRTL } = useLanguage();
  
  return (
    <div className="relative pt-24 pb-20 overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 -z-10 stripe-grid-pattern opacity-30"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-transparent to-white"></div>
      
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-500 mb-6 animate-fade-in">
            <Clock size={16} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
            <span className="font-medium">{t('hero.seconds')}</span>
          </div>
          
          <h1 className="heading-xl mb-6 animate-slide-up">
            {t('hero.headline')}
          </h1>
          
          <p className="text-xl text-neutral-600 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {t('hero.subtitle')}
          </p>
          
          <p className="text-lg font-medium text-neutral-800 mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {t('hero.tagline')}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link 
              to="/start-quiz" 
              className="button-primary inline-flex items-center justify-center group"
            >
              {t('hero.cta')}
              <ArrowRight size={18} className={`${isRTL ? 'mr-2 group-hover:-translate-x-1' : 'ml-2 group-hover:translate-x-1'} transition-transform`} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, isRTL } = useLanguage();
  
  return (
    <footer className="bg-neutral-900 text-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AKID</h3>
            <p className="text-neutral-400 mb-4">{t('footer.description')}</p>
            <p className="text-neutral-400">info@akid.co</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              <li><Link to="/services/self-guided-setup" className="text-neutral-400 hover:text-white transition-colors">Self-Guided Setup</Link></li>
              <li><Link to="/services/agency-assisted-setup" className="text-neutral-400 hover:text-white transition-colors">Agency-Assisted Setup</Link></li>
              <li><Link to="/services/expert-document-check" className="text-neutral-400 hover:text-white transition-colors">Expert Document Check</Link></li>
              <li><Link to="/services/post-operations-support" className="text-neutral-400 hover:text-white transition-colors">Post-Operations Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.resources')}</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-solutions" className="text-neutral-400 hover:text-white transition-colors">AI Solutions</Link></li>
              <li><Link to="/pricing" className="text-neutral-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/knowledge-base" className="text-neutral-400 hover:text-white transition-colors">Knowledge Base</Link></li>
              <li><Link to="/start-quiz" className="text-neutral-400 hover:text-white transition-colors">Take the Quiz</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-neutral-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="text-neutral-400 hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-neutral-800 text-neutral-400 text-sm">
          <p>© {new Date().getFullYear()} AKID. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

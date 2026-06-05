import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WhatsAppIcon } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          className={`fixed bottom-6 z-50 ${language === 'fr' ? 'right-6' : 'left-6'}`}
        >
          <div className="relative group">
            {/* Tooltip */}
            <div className={`absolute top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium text-gray-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${language === 'fr' ? 'right-full mr-4' : 'left-full ml-4'}`}>
              {language === 'fr' ? "Besoin d'aide ? Discutons !" : 'هل تحتاج مساعدة؟ تحدث معنا!'}
            </div>
            
            <a
              href="https://wa.me/212617505328"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300"
              aria-label={language === 'fr' ? 'Contactez-nous sur WhatsApp' : 'تواصل معنا عبر واتساب'}
            >
              <WhatsAppIcon className="w-8 h-8" />
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

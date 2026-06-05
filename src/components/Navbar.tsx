import { Menu, Calendar as CalendarIcon, MapPin, X, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { WhatsAppIcon } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../translations';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, dir } = useLanguage();
  const texts = t[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: texts.navHome, href: '#home' },
    { name: texts.navAbout, href: '#about' },
    { name: texts.navServices, href: '#services' },
    { name: texts.navTestimonials, href: '#testimonials' },
    { name: texts.navContact, href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm border-b border-slate-100 py-3' : 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100 py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v4.5A2.5 2.5 0 0 0 12.5 9h0A2.5 2.5 0 0 0 15 6.5V2"/><path d="M12 9v13"/><path d="M7 16l-3-3a5 5 0 0 1 7-7"/><path d="M17 16l3-3a5 5 0 0 0-7-7"/></svg>
            </div>
            <div>
              <h1 className="font-bold text-slate-800 leading-tight uppercase tracking-tight text-lg">Centre Dentaire Mahaj Sala</h1>
              <span className="text-[10px] text-primary font-semibold tracking-widest uppercase block">Dr. Iman Kammah</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className={`flex items-center gap-4 border-${dir === 'rtl' ? 'r' : 'l'} px-6 border-slate-200`}>
              <button 
                onClick={() => setLanguage(language === 'fr' ? 'ar' : 'fr')}
                className="flex items-center gap-2 text-slate-600 hover:text-primary text-sm font-bold transition-colors uppercase"
              >
                <Globe className="w-4 h-4" />
                {language === 'fr' ? 'AR' : 'FR'}
              </button>
              <a href="https://wa.me/212617505328" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-full text-slate-700 hover:bg-slate-50 transition-colors">
                <WhatsAppIcon className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold dir-ltr">
                  <bdo dir="ltr">06 17 50 53 28</bdo>
                </span>
              </a>
              <a href="#appointment" className="medical-gradient text-white text-sm font-semibold py-2.5 px-6 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" />
                {texts.bookBtn}
              </a>
            </div>
          </nav>

          <div className="flex items-center gap-3 lg:hidden">
            <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setLanguage(language === 'fr' ? 'ar' : 'fr');
                }}
                className="flex items-center h-10 px-3 gap-2 text-slate-600 hover:text-primary text-xs font-bold transition-colors uppercase border border-slate-200 rounded-xl"
            >
              <Globe className="w-4 h-4" />
              {language === 'fr' ? 'AR' : 'FR'}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 border border-slate-200 rounded-xl text-slate-600 hover:text-primary h-10 w-10 flex items-center justify-center">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl py-4 px-4 flex flex-col gap-4">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="block py-3 px-2 text-slate-800 font-medium hover:bg-slate-50 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a href="https://wa.me/212617505328" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 bg-slate-50 rounded-lg font-semibold text-slate-900 dir-ltr">
               <WhatsAppIcon className="w-5 h-5 text-primary" />
               <bdo dir="ltr">06 17 50 53 28</bdo>
            </a>
            <a 
              href="#appointment" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3 medical-gradient text-white rounded-lg font-medium shadow-md"
            >
              <CalendarIcon className="w-5 h-5" />
               {texts.bookBtn}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

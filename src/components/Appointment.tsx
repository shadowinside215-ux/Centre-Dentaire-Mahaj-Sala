import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../translations';

export default function Appointment() {
  const [status, setStatus] = useState<null | 'success'>(null);
  const { language } = useLanguage();
  const texts = t[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <section id="appointment" className="py-20 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden max-w-5xl mx-auto flex flex-col lg:flex-row">
          
          <div className="p-10 lg:p-14 lg:w-1/2 bg-slate-50 flex flex-col justify-center border-b lg:border-b-0 lg:border-[url(#)] lg:border-r border-slate-100">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              {texts.appTitle1} <span className="text-primary">{texts.appTitle2}</span>
            </h2>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed">
              {texts.appDesc}
            </p>
            
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-[10px] font-bold text-slate-500 mb-2 uppercase tracking-wide">{texts.directContact}</p>
                <div className="text-xl font-bold text-slate-900 mb-4 dir-ltr">
                  <bdo dir="ltr">06 17 50 53 28</bdo>
                </div>
                <a 
                  href="https://wa.me/212617505328"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-medium transition-colors w-full"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  {texts.bookWhatsapp}
                </a>
              </div>
            </div>
          </div>

          <div className="p-10 lg:p-14 lg:w-1/2">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20"
              >
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-500 mb-4">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                  <h3 className="text-2xl font-bold text-slate-900">{texts.successSent}</h3>
                <p className="text-slate-500">{texts.successSentDesc}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-bold text-slate-500 uppercase mb-1">{texts.formName}</label>
                  <input required type="text" id="name" className="w-full p-2.5 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-sm" placeholder={language === 'fr' ? "Ex: Ahmed Alami" : "مثال: أحمد العلمي"} />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-[10px] font-bold text-slate-500 uppercase mb-1">{texts.formPhone}</label>
                    <input required type="tel" id="phone" className="w-full p-2.5 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-sm dir-ltr" placeholder="06 XX XX XX XX" />
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-[10px] font-bold text-slate-500 uppercase mb-1">{texts.formDate}</label>
                    <input type="date" id="date" className="w-full p-2.5 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-sm" />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-[10px] font-bold text-slate-500 uppercase mb-1">{texts.formReason}</label>
                  <select id="service" className="w-full p-2.5 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-sm appearance-none">
                    {language === 'fr' ? (
                      <>
                        <option>Contrôle de routine</option>
                        <option>Détartrage</option>
                        <option>Urgence (Douleur)</option>
                        <option>Orthodontie</option>
                        <option>Esthétique / Blanchiment</option>
                        <option>Autre</option>
                      </>
                    ) : (
                      <>
                        <option>فحص روتيني</option>
                        <option>إزالة الترسبات</option>
                        <option>طوارئ (ألم)</option>
                        <option>تقويم الأسنان</option>
                        <option>تجميل / تبييض</option>
                        <option>أخرى</option>
                      </>
                    )}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] font-bold text-slate-500 uppercase mb-1">{texts.formMsg}</label>
                  <textarea id="message" rows={3} className="w-full p-2.5 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-sm resize-none" placeholder={language === 'fr' ? "Décrivez votre besoin..." : "صف احتياجك..."}></textarea>
                </div>

                <button type="submit" className="w-full medical-gradient text-white font-bold py-3 px-8 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group mt-2 text-sm">
                  {texts.formSubmit}
                  <Send className={`w-4 h-4 transition-transform ${language === 'fr' ? 'group-hover:translate-x-1' : 'group-hover:-translate-x-1 rotate-180'}`} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

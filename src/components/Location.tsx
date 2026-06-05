import { MapPin, Clock } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../translations';

export default function Location() {
  const { language } = useLanguage();
  const texts = t[language];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          <div>
            <h2 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-3 bg-primary/10 inline-block px-3 py-1 rounded-full">{texts.locSection}</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">
              {texts.locTitle1} <span className="text-primary italic">{texts.locTitle2}</span>
            </h3>
            
            <div className="space-y-8 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 bg-white shadow-sm rounded-2xl border border-slate-100 flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{texts.addressLabel}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {language === 'fr' ? (
                      <>
                        Immeuble BMCE, Avenue Mohammed V<br />
                        Résidence Omar, Bâtiment D, Appt 3, 1er Étage<br />
                        En face de la Banque BMCE<br />
                        Sala Al Jadida 11100, Maroc
                      </>
                    ) : (
                      <>
                        عمارة البنك المغربي للتجارة الخارجية، شارع محمد الخامس<br />
                        إقامة عمر، مبنى د، شقة 3، الطابق الأول<br />
                        أمام بنك BMCE<br />
                        سلا الجديدة 11100، المغرب
                      </>
                    )}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 bg-white shadow-sm rounded-2xl border border-slate-100 flex items-center justify-center text-primary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{texts.openHoursLabel}</h4>
                  <div className="text-slate-600 grid grid-cols-2 gap-x-8 text-sm max-w-sm">
                    {language === 'fr' ? (
                      <>
                        <span>Lun - Mer:</span>
                        <span>09:00 - 17:30</span>
                        <span>Jeudi:</span>
                        <span>09:00 - 16:00</span>
                        <span>Vendredi:</span>
                        <span>09:00 - 13:00, 15:00 - 19:00</span>
                        <span>Samedi:</span>
                        <span>09:00 - 14:30</span>
                        <span>Dimanche:</span>
                        <span className="text-red-400 font-bold">Fermé</span>
                      </>
                    ) : (
                      <>
                        <span>الإثنين - الأربعاء:</span>
                        <span>09:00 - 17:30</span>
                        <span>الخميس:</span>
                        <span>09:00 - 16:00</span>
                        <span>الجمعة:</span>
                        <span>09:00 - 13:00, 15:00 - 19:00</span>
                        <span>السبت:</span>
                        <span>09:00 - 14:30</span>
                        <span>الأحد:</span>
                        <span className="text-red-400 font-bold">مغلق</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 bg-white shadow-sm rounded-2xl border border-slate-100 flex items-center justify-center text-primary">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{language === 'fr' ? 'Contact WhatsApp' : 'تواصل عبر واتساب'}</h4>
                  <div className="flex flex-col gap-1 dir-ltr">
                    <a href="https://wa.me/212617505328" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-primary transition-colors text-lg font-bold">06 17 50 53 28</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://maps.google.com/?q=Centre+Dentaire+Mahaj+Sala" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-xl shadow-md transition-all text-sm uppercase tracking-wider block text-center"
              >
                {texts.directionsBtn}
              </a>
            </div>
          </div>

          <div className="h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-sm border border-slate-100">
            {/* Real embed map can go here. Using a detailed map iframe. */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13233.155551323!2d-6.7570!3d34.020882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAxJzE1LjIiTiA2wrA0NScyNS4yIlc!5e0!3m2!1sen!2sma!4v1680000000000!5m2!1sen!2sma" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="bg-gray-200"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}

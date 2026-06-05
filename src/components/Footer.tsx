import { Phone, MapPin } from 'lucide-react';
import { WhatsAppIcon, FacebookIcon, InstagramIcon } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../translations';

export default function Footer() {
  const { language } = useLanguage();
  const texts = t[language];

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 lg:col-span-1">
            <h1 className="font-bold text-xl leading-tight mb-4 text-white uppercase tracking-tight">
              {texts.footerClinicName1} <br/>
              <span className="text-primary">{texts.footerClinicName2}</span>
            </h1>
            <p className="text-slate-400 mb-6 text-sm">
              {texts.footerClinicDesc}
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/centredentaire_mahajsala?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/imankammah/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-teal-400 uppercase tracking-widest mb-6">{texts.footerLinksT}</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-400 hover:text-primary transition-colors text-sm">{texts.navHome}</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-primary transition-colors text-sm">{texts.navAbout}</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-primary transition-colors text-sm">{texts.navServices}</a></li>
              <li><a href="#testimonials" className="text-slate-400 hover:text-primary transition-colors text-sm">{texts.navTestimonials}</a></li>
              <li><a href="#appointment" className="text-slate-400 hover:text-primary transition-colors text-sm">{texts.navContact}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-teal-400 uppercase tracking-widest mb-6">{texts.openHoursLabel}</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {language === 'fr' ? (
                <>
                  <li className="flex justify-between">
                    <span>Lun - Mer</span>
                    <span>09:00 - 17:30</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Jeudi</span>
                    <span>09:00 - 16:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Vendredi</span>
                    <span className="text-right">09:00 - 13:00 <br/> 15:00 - 19:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Samedi</span>
                    <span>09:00 - 14:30</span>
                  </li>
                  <li className="flex justify-between text-primary">
                    <span>Dimanche</span>
                    <span>Fermé</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex justify-between">
                    <span>الإثنين - الأربعاء</span>
                    <span>09:00 - 17:30</span>
                  </li>
                  <li className="flex justify-between">
                    <span>الخميس</span>
                    <span>09:00 - 16:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>الجمعة</span>
                    <span className="text-left">09:00 - 13:00 <br/> 15:00 - 19:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>السبت</span>
                    <span>09:00 - 14:30</span>
                  </li>
                  <li className="flex justify-between text-primary">
                    <span>الأحد</span>
                    <span>مغلق</span>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-teal-400 uppercase tracking-widest mb-6">{texts.footerContactT}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>{language === 'fr' ? 'Immeuble BMCE, Ave Mohammed V, Résidence Omar, Bât. D, Appt 3, 1er Étage, Sala Al Jadida 11100' : 'عمارة البنك المغربي للتجارة الخارجية، شارع محمد الخامس، إقامة عمر، مبنى د، شقة 3، الطابق الأول، سلا الجديدة 11100'}</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm dir-ltr">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:0537817900" className="hover:text-primary transition-colors inline-block w-full text-right lg:text-left">05 37 81 79 00</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm mt-4">
                <a 
                  href="https://wa.me/212617505328" 
                   target="_blank" 
                   rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 py-2 px-4 rounded-lg font-medium transition-colors w-full"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  {texts.bookWhatsapp}
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-medium" dir="ltr">
            &copy; {new Date().getFullYear()} {language === 'fr' ? 'Centre Dentaire Mahaj Sala - Dr. Iman Kammah. Tous droits réservés.' : 'مركز محج سلا لطب الأسنان - د. إيمان قماح. جميع الحقوق محفوظة.'}
          </p>
          <div className="flex gap-4">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium hover:text-white cursor-pointer">{language === 'fr' ? 'Mentions Légales' : 'إشعار قانوني'}</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium hover:text-white cursor-pointer">{language === 'fr' ? 'Confidentialité' : 'الخصوصية'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

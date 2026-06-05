import { Calendar as CalendarIcon, Clock, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { WhatsAppIcon } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../translations';

export default function Hero() {
  const { language } = useLanguage();
  const texts = t[language];

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-50">
      {/* Background with an image and gradient overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50 z-[-2]">
          <div 
            className="absolute inset-0 opacity-10 mix-blend-multiply"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2000")', backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
        </div>
        
        {/* Abstract decorative shapes */}
        <div className="absolute top-20 right-[-10%] w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-3xl z-[-1]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-3xl z-[-1]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary-dark font-medium text-sm mb-6"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            {language === 'fr' ? 'Acceptant de nouveaux patients' : 'استقبال مرضى جدد'}
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.15] mb-6"
          >
            {texts.heroTitle} <br className="hidden md:block" />
            <span className="text-primary">{texts.heroSubtitle}</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl leading-relaxed font-medium"
          >
            {texts.heroDesc}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#appointment" className="inline-flex items-center justify-center gap-2 medical-gradient text-white text-base font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl">
              {texts.heroBook}
              <CalendarIcon className="w-5 h-5" />
            </a>
            <a href="https://wa.me/212617505328" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-base font-bold py-4 px-8 rounded-full transition-all shadow-sm">
              <WhatsAppIcon className="w-5 h-5 text-primary" />
              {texts.heroContact}
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Quick Info Bar overlapping the next section */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-10 hidden lg:block">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-card rounded-3xl shadow-sm p-6 flex items-center justify-between border border-slate-100"
          >
            <div className="flex items-center gap-4 flex-1">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wide">{texts.hoursLabel}</h3>
                <p className="text-sm text-slate-500 mt-1" dir="auto">{texts.hoursValue}</p>
              </div>
            </div>
            
            <div className="w-px h-12 bg-slate-200 mx-6" />
            
            <div className="flex items-center gap-4 flex-1 whitespace-normal">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wide">{texts.addressLabel}</h3>
                <p className="text-sm text-slate-500 mt-1 line-clamp-1">{texts.addressValue}</p>
              </div>
            </div>

            <div className="w-px h-12 bg-slate-200 mx-6" />
            
            <div className="flex-1 text-right">
              <a href="#appointment" className="text-primary font-bold hover:text-primary-dark inline-flex items-center gap-2 group transition-colors">
                {texts.emergencyLink}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

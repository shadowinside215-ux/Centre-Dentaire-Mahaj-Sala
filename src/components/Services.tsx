import { Activity, Smile, Sparkles, ScanFace, Stethoscope, BriefcaseMedical } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../translations';

export default function Services() {
  const { language } = useLanguage();
  const texts = t[language];

  // In a real app we would translate the array in translations.ts, but keeping it inline here for simplicity
  const services = language === 'fr' ? [
    {
      title: "Omnipratique & Prévention",
      desc: "Soins généraux, détartrage, bilans bucco-dentaires et traitement des caries pour toute la famille.",
      icon: Stethoscope,
      bg: "bg-blue-50",
      color: "text-blue-600"
    },
    {
      title: "Esthétique Dentaire",
      desc: "Facettes, blanchiment dentaire professionnel pour retrouver un sourire éclatant et naturel.",
      icon: Sparkles,
      bg: "bg-teal-50",
      color: "text-teal-600"
    },
    {
      title: "Implantologie",
      desc: "Remplacement sécurisé et durable des dents manquantes avec des implants de haute qualité.",
      icon: Activity,
      bg: "bg-sky-50",
      color: "text-sky-600"
    },
    {
      title: "Orthodontie",
      desc: "Alignement des dents pour adultes et enfants. Solutions discrètes et efficaces.",
      icon: ScanFace,
      bg: "bg-indigo-50",
      color: "text-indigo-600"
    },
    {
      title: "Pédodontie",
      desc: "Soins dentaires adaptés aux enfants dans un environnement rassurant et ludique.",
      icon: Smile,
      bg: "bg-emerald-50",
      color: "text-emerald-600"
    },
    {
      title: "Urgences Dentaires",
      desc: "Prise en charge rapide de vos douleurs, abcès, ou traumatismes dentaires.",
      icon: BriefcaseMedical,
      bg: "bg-rose-50",
      color: "text-rose-600"
    }
  ] : [
    {
      title: "الطب العام والوقاية",
      desc: "رعاية عامة، إزالة الترسبات، فحوصات الفم والأسنان وعلاج التسوس لجميع أفراد الأسرة.",
      icon: Stethoscope,
      bg: "bg-blue-50",
      color: "text-blue-600"
    },
    {
      title: "تجميل الأسنان",
      desc: "قشور، تبييض احترافي للأسنان لاستعادة ابتسامة مشرقة وطبيعية.",
      icon: Sparkles,
      bg: "bg-teal-50",
      color: "text-teal-600"
    },
    {
      title: "زراعة الأسنان",
      desc: "استبدال آمن ودائم للأسنان المفقودة بزراعات عالية الجودة.",
      icon: Activity,
      bg: "bg-sky-50",
      color: "text-sky-600"
    },
    {
      title: "تقويم الأسنان",
      desc: "محاذاة الأسنان للبالغين والأطفال. حلول سرية وفعالة.",
      icon: ScanFace,
      bg: "bg-indigo-50",
      color: "text-indigo-600"
    },
    {
      title: "طب أسنان الأطفال",
      desc: "رعاية أسنان مخصصة للأطفال في بيئة مطمئنة وممتعة.",
      icon: Smile,
      bg: "bg-emerald-50",
      color: "text-emerald-600"
    },
    {
      title: "طوارئ الأسنان",
      desc: "إدارة سريعة لآلامك أو خراجاتك أو صدمات الأسنان.",
      icon: BriefcaseMedical,
      bg: "bg-rose-50",
      color: "text-rose-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold text-primary uppercase tracking-widest mb-3 bg-primary/10 inline-block px-3 py-1 rounded-full"
          >
            {texts.servicesSection}
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            {texts.servicesTitle}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            {texts.servicesDesc}
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h4>
                <p className="text-slate-500 leading-relaxed max-w-sm mb-6 text-sm">
                  {service.desc}
                </p>
                <div className="flex items-center text-sm font-bold text-primary">
                  <span className={`group-hover:m${language === 'fr' ? 'r' : 'l'}-2 transition-all`}>{texts.learnMore}</span>
                  <svg className={`w-4 h-4 opacity-0 group-hover:opacity-100 ${language === 'fr' ? '-translate-x-2' : 'translate-x-2'} group-hover:translate-x-0 transition-all ${language === 'fr' ? '' : 'rotate-180'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="mt-16 text-center">
           <a href="#appointment" className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold py-3 px-8 rounded-xl shadow-md transition-all">
            {texts.allServices}
          </a>
        </div>
      </div>
    </section>
  );
}

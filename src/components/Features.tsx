import { motion } from 'motion/react';
import { ShieldCheck, CalendarClock, HeartHandshake, Syringe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../translations';

export default function Features() {
  const { language } = useLanguage();
  const texts = t[language];

  const points = language === 'fr' ? [
    {
      title: "Équipement Moderne",
      desc: "Nous investissons dans les dernières technologies dentaires pour des diagnostics précis et des soins moins invasifs.",
      icon: ShieldCheck
    },
    {
      title: "Environnement Confortable",
      desc: "Un cabinet pensé pour votre détente, réduisant le stress souvent associé aux visites dentaires.",
      icon: HeartHandshake
    },
    {
      title: "Hygiène Stricte",
      desc: "Protocoles rigoureux de stérilisation et d'asepsie pour garantir une sécurité maximale à chaque patient.",
      icon: Syringe
    },
    {
      title: "Disponibilité",
      desc: "Prise en charge rapide des urgences et flexibilité dans les horaires de rendez-vous.",
      icon: CalendarClock
    }
  ] : [
    {
      title: "معدات حديثة",
      desc: "نستثمر في أحدث تقنيات طب الأسنان للحصول على تشخيص دقيق ورعاية أقل تدخلاً.",
      icon: ShieldCheck
    },
    {
      title: "بيئة مريحة",
      desc: "عيادة مصممة لاسترخائك وتقليل التوتر المرتبط عادةً بزيارات الأسنان.",
      icon: HeartHandshake
    },
    {
      title: "نظافة صارمة",
      desc: "بروتوكولات صارمة للتعقيم لضمان أقصى درجات الأمان لكل مريض.",
      icon: Syringe
    },
    {
      title: "التوفر السريع",
      desc: "إدارة سريعة لحالات الطوارئ ومرونة في مواعيد الحجز.",
      icon: CalendarClock
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 border-b border-slate-100 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              {texts.featTitle1} <br /> <span className="text-primary italic">{texts.featTitle2}</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10 max-w-xl">
              {texts.featDesc}
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {points.map((pt, i) => {
                const Icon = pt.icon;
                return (
                  <div key={i} className="flex flex-col gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50/50 border border-teal-100 flex items-center justify-center text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">{pt.title}</h4>
                    <p className="text-sm text-slate-500">{pt.desc}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-slate-100 relative">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000" 
                alt="Intérieur du cabinet dentaire" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

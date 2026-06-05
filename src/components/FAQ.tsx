import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../translations';

export default function FAQ() {
  const { language } = useLanguage();
  const texts = t[language];

  const faqs = language === 'fr' ? [
    {
      q: "Acceptez-vous de nouveaux patients ?",
      a: "Oui, le Centre Dentaire Mahaj Sala est heureux d'accueillir de nouveaux patients, adultes et enfants. N'hésitez pas à nous contacter pour fixer votre premier rendez-vous de bilan."
    },
    {
      q: "Proposez-vous des traitements d'orthodontie ?",
      a: "Absolument. Nous proposons des solutions orthodontiques complètes pour enfants et adultes, incluant les gouttières invisibles et les appareils classiques, pour réaligner votre sourire."
    },
    {
      q: "Faites-vous le blanchiment dentaire ?",
      a: "Oui, nous offrons des services de blanchiment dentaire professionnel au fauteuil, sûrs et efficaces, pour vous redonner un sourire éclatant en une seule séance."
    },
    {
      q: "Comment puis-je prendre un rendez-vous ?",
      a: "Le moyen le plus simple est de nous contacter via WhatsApp ou de nous appeler au 06 17 50 53 28. Vous pouvez également remplir le formulaire sur notre site web."
    },
    {
      q: "Que faire en cas d'urgence dentaire ?",
      a: "En cas d'urgence (douleur aiguë, abscès, dent cassée), appelez-nous ou envoyez un message WhatsApp immédiatement au 06 17 50 53 28. Nous ferons notre maximum pour vous recevoir dans les plus brefs délais."
    }
  ] : [
    {
      q: "هل تستقبلون مرضى جدد؟",
      a: "نعم، مركز طب الأسنان محج سلا يسعده استقبال المرضى الجدد من الأطفال والبالغين. لا تترددوا في الاتصال بنا لتحديد موعدكم الأول للفحص."
    },
    {
      q: "هل تقدمون علاجات تقويم الأسنان؟",
      a: "بالتأكيد. نقدم حلولاً شاملة لتقويم الأسنان للأطفال والبالغين، بما في ذلك التقويم الشفاف والأجهزة التقليدية، لإعادة تنظيم ابتسامتكم."
    },
    {
      q: "هل تقومون بتبييض الأسنان؟",
      a: "نعم، نقدم خدمات تبييض الأسنان الاحترافي في العيادة، وهي آمنة وفعالة، لتعيدوا ابتسامتكم المشرقة في جلسة واحدة."
    },
    {
      q: "كيف يمكنني حجز موعد؟",
      a: "أسهل طريقة هي الاتصال بنا عبر واتساب أو الاتصال على الرقم 06 17 50 53 28. يمكنكم أيضًا ملء النموذج على موقعنا."
    },
    {
      q: "ماذا أفعل في حالة طوارئ الأسنان؟",
      a: "في حالة الطوارئ (ألم حاد، خراج، سن مكسور)، اتصلوا بنا أو أرسلوا رسالة واتساب فورًا على 06 17 50 53 28. سنبذل قصارى جهدنا لاستقبالكم في أقرب وقت ممكن."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            {texts.faqTitle1} <span className="text-primary italic">{texts.faqTitle2}</span>
          </h2>
          <p className="text-slate-500 text-lg">
            {texts.faqDesc}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="border border-slate-100 shadow-sm rounded-2xl overflow-hidden transition-all hover:border-primary/50"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between bg-white text-slate-900 font-bold text-base focus:outline-none"
              >
                {faq.q}
                <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 text-slate-500 leading-relaxed border-t border-slate-100 mt-2 text-sm">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

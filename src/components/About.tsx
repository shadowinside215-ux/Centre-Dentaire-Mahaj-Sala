import { CheckCircle2, Award, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../translations';

export default function About() {
  const { language } = useLanguage();
  const texts = t[language];

  const credentials = [
    texts.cred1,
    texts.cred2,
    texts.cred3,
    texts.cred4
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-3 bg-primary/10 inline-block px-3 py-1 rounded-full">{texts.aboutSection}</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {texts.aboutTitle1} <span className="text-primary italic">{texts.aboutTitle2}</span>
            </h3>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed text-justify lg:text-center">
              {texts.aboutP1}
            </p>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed text-justify lg:text-center">
              {texts.aboutP2}
            </p>

            <ul className="text-sm grid sm:grid-cols-2 gap-4 mb-10 text-left">
              {credentials.map((item, index) => (
                <li key={index} className="flex items-center justify-center sm:justify-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-slate-800 font-bold">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-center gap-6 pt-8 border-t border-slate-100">
              <div className="flex -space-x-4">
                <div className="w-16 h-16 rounded-full border-4 border-white bg-primary text-white flex items-center justify-center font-bold text-lg shadow-sm">
                  +1k
                </div>
              </div>
              <p className="text-slate-500 font-medium text-sm text-left">
                {texts.patientsLabel} <br/> <span className="text-slate-900 font-bold">{texts.satisfiedLabel}</span>
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

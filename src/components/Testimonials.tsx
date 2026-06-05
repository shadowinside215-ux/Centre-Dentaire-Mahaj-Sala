import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../translations';

export default function Testimonials() {
  const { language } = useLanguage();
  const texts = t[language];

  const testimonials = language === 'fr' ? [
    {
      name: "Khalid Moufakir",
      text: "J'ai fait un détartrage aujourd'hui et tout ce que je peux dire, c'est que le service a dépassé mes attentes. Le docteur a été très douce et patiente avec moi. Je la recommande vivement à ma famille et à mes amis.",
      rating: 5
    },
    {
      name: "kerrou sawsane",
      text: "Vraiment heureuse de mes expériences avec le docteur Imane. Les assistantes sont super sympas et vous mettent à l'aise tout de suite. Le docteur explique tout clairement et ne précipite jamais rien.",
      rating: 5
    },
    {
      name: "ghita jalil",
      text: "Mon expérience au cabinet a été fantastique. Elle m'a accueillie chaleureusement et mise à l'aise. Elle est douce, patiente, et explique tout ce qu'elle fait à l'avance, ce qui est très rassurant.",
      rating: 5
    },
    {
      name: "hajar elmasmoudi",
      text: "Une dentiste exceptionnelle, un travail minutieux et d'une incroyable gentillesse. Toute ma vie, j'ai eu peur d'aller chez le dentiste, mais aujourd'hui je suis sereine.",
      rating: 5
    },
    {
      name: "Sanaâ Idrissi",
      text: "Un grand merci au docteur pour son professionnalisme et sa gentillesse. Ma fille avait très peur, mais elle a su la rassurer et soigner ses dents tout en douceur. Je recommande à 100%.",
      rating: 5
    },
    {
      name: "jihane tamkeen",
      text: "Une dentiste pas comme les autres : accompagnée d'une équipe professionnelle, elle fait son métier avec soin, compassion et professionnalisme. Je la recommande vivement.",
      rating: 5
    }
  ] : [
    {
      name: "خالد موفقير",
      text: "قمت بتنظيف أسناني اليوم وكل ما يمكنني قوله هو أن الخدمة فاقت توقعاتي. الدكتورة لطيفة للغاية وصبورة معي. أوصي بها بشدة للعائلة والأصدقاء.",
      rating: 5
    },
    {
      name: "سوسن كرو",
      text: "سعيدة جداً بتجربتي مع الدكتورة إيمان. المساعدات ودودات للغاية ويجعلنك تشعر بالراحة على الفور. الدكتورة تشرح كل شيء بوضوح ولا تتسرع أبدًا.",
      rating: 5
    },
    {
      name: "غيثة جليل",
      text: "كانت تجربتي في العيادة رائعة. بمجرد وصولي، استقبلتني بحرارة وجعلتني أشعر بالراحة. إنها لطيفة وصبورة وتشرح كل ما تفعله مسبقًا، مما جعلني أشعر بالطمأنينة.",
      rating: 5
    },
    {
      name: "هاجر المصمودي",
      text: "طبيبة أسنان استثنائية، عمل دقيق ولطف لا يصدق. طوال حياتي كنت أخاف من الذهاب إلى طبيب الأسنان، لكن خلال زيارتي شعرت بالطمأنينة الكاملة.",
      rating: 5
    },
    {
      name: "سناء الإدريسي",
      text: "شكر كبير للدكتورة على احترافيتها ولطفها. كانت ابنتي خائفة جداً بسبب تجربة سابقة سيئة، لكنها استطاعت طمأنتها وعلاج أسنانها بلطف شديد. أوصي بها 100%.",
      rating: 5
    },
    {
      name: "جيهان تمكين",
      text: "طبيبة أسنان فريدة من نوعها: يرافقها طاقم محترف، وتقوم بعملها بعناية وتعاطف واحتراف. لم أغير طبيبة الأسنان منذ زيارتي الأولى. أوصي بها بشدة.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-3 bg-primary/10 inline-block px-3 py-1 rounded-full">{texts.testiSection}</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              {texts.testiTitle1} <span className="text-primary italic">{texts.testiTitle2}</span>
            </h3>
          </div>
          
          <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20 flex items-center gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900">4.9</div>
              <div className="text-sm font-medium text-slate-500">{texts.outOf5}</div>
            </div>
            <div>
              <div className="flex text-[#FBBF24] mb-1">
                {"★".repeat(5)}
              </div>
              <p className="text-sm font-bold text-slate-900">{texts.googleReviews}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex text-[#FBBF24] text-lg mb-4">
                  {"★".repeat(t.rating)}
                </div>
                <p className="text-slate-600 italic leading-relaxed mb-6 text-sm">
                  "{t.text}"
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

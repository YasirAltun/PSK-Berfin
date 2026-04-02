import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import siteConfig from '../../config/siteConfig';

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const degrees      = siteConfig.education.filter(e => e.type === 'degree');
  const certificates = siteConfig.education.filter(e => e.type === 'certificate');

  return (
    <section id="egitimler" ref={ref} className="section-padding bg-[var(--color-beige-light)] relative overflow-hidden">
      <div className="absolute -bottom-32 -right-24 w-96 h-96 rounded-full bg-mint/15 blur-3xl pointer-events-none" />

      <div className="container-md relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Akademik Altyapı</p>
          <h2 className="heading-lg text-mint-dark">Aldığım Eğitimler</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Akademik Dereceler */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-xl text-brown mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-8 rounded-full bg-mint-dark text-white text-sm flex items-center justify-center flex-shrink-0">🎓</span>
              Akademik Eğitim
            </motion.h3>

            <div className="flex flex-col gap-4">
              {degrees.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="glass rounded-2xl p-5"
                >
                  <p className="font-sans text-xs text-mint-dark font-medium tracking-wide uppercase mb-1">
                    {item.institution}
                  </p>
                  <p className="font-serif text-lg text-[var(--color-text)] leading-snug">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sertifikalar — Timeline */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-xl text-brown mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-8 rounded-full bg-beige-dark text-white text-sm flex items-center justify-center flex-shrink-0">📜</span>
              Sertifikalar
            </motion.h3>

            <div className="relative flex flex-col gap-0 pl-6">
              {/* Timeline çizgisi */}
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-mint via-mint-light to-transparent" />

              {certificates.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.07 }}
                  className="relative pb-5 last:pb-0"
                >
                  {/* Nokta */}
                  <div className="absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full bg-mint border-2 border-[var(--color-beige-light)]" />

                  <div className="glass-beige rounded-xl px-4 py-3">
                    <p className="font-sans text-[0.7rem] text-brown font-medium tracking-wide uppercase mb-0.5">
                      {item.institution}
                    </p>
                    <p className="font-sans text-sm text-[var(--color-text)] leading-snug">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

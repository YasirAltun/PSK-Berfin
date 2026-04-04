import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useParallax } from '../../hooks/useParallax';
import siteConfig from '../../config/siteConfig';

export default function CalismaAlanlari() {
  const { ref, y, yFast, bgY, contentY, contentOpacity } = useParallax(40);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="calisma-alanlari" ref={ref} className="section-padding relative overflow-hidden">
      {/* Parallax arka plan */}
      <motion.div
        style={{
          y: bgY,
          backgroundImage: 'url(https://picsum.photos/seed/green-leaves/1600/900)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          top: -80,
          bottom: -80,
          left: 0,
          right: 0,
        }}
      />
      {/* Renk overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(250,250,248,0.85) 0%, rgba(200,221,212,0.80) 40%, rgba(168,197,181,0.82) 100%)' }} />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-mint to-transparent opacity-40" />
      <motion.div style={{ y }} className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-mint-light/30 blur-3xl pointer-events-none" />
      <motion.div style={{ y: yFast }} className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-beige/40 blur-3xl pointer-events-none" />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="container-md relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Uzmanlık</p>
          <h2 className="heading-lg text-mint-dark">Çalışma Alanlarım</h2>
          <p className="mt-4 font-sans text-[var(--color-text-muted)] max-w-xl mx-auto text-sm leading-relaxed">
            Bireylerin psikolojik iyilik hali için kapsamlı destek sağlıyorum.
            Aşağıdaki alanlarda bireysel terapi seansları gerçekleştiriyorum.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {siteConfig.workAreas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`glass rounded-2xl p-5 flex flex-col items-center text-center gap-3 cursor-default
                ${i === 10 ? 'sm:col-span-2 md:col-span-2' : ''}
              `}
            >
              <span className="text-3xl leading-none">{area.icon}</span>
              <p className="font-sans text-sm font-medium text-[var(--color-text)] leading-snug">
                {area.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Alt not */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center mt-10 font-sans text-xs text-[var(--color-text-muted)] italic"
        >
          Listede yer almayan konularda da destek almak için iletişime geçebilirsiniz.
        </motion.p>
      </motion.div>
    </section>
  );
}

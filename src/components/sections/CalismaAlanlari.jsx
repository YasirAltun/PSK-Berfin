import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useParallax } from '../../hooks/useParallax';
import siteConfig from '../../config/siteConfig';

export default function CalismaAlanlari() {
  const { ref, y, yFast, bgY, contentY, contentOpacity } = useParallax(40);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const items = siteConfig.workAreas;

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

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative">
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 px-6"
        >
          <h2 className="heading-lg text-mint-dark">Çalışma Alanlarım</h2>
        </motion.div>

        {/* Marquee — sonsuz yatay kayan kartlar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="overflow-hidden"
        >
          <div className="marquee-track gap-5 py-2">
            {[...items, ...items].map((area, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-6 flex-shrink-0 w-56 flex flex-col gap-3"
              >
                <span className="text-4xl leading-none">{area.icon}</span>
                <p className="font-sans text-base font-semibold text-[var(--color-text)] leading-snug">
                  {area.title}
                </p>
                <p className="font-sans text-sm text-[var(--color-text-muted)] leading-relaxed font-normal">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dipnot */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center mt-10 px-6 font-sans text-base font-bold text-mint-dark"
        >
          📍 Listede yer almayan konularda da destek almak için iletişime geçebilirsiniz.
        </motion.p>
      </motion.div>
    </section>
  );
}

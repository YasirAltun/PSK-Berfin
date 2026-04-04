import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useParallax } from '../../hooks/useParallax';
import siteConfig from '../../config/siteConfig';

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: 'easeOut' } },
});

export default function About() {
  const { ref, y, yFast, ySlow, bgY, contentY, contentOpacity } = useParallax(50);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="hakkimda" ref={ref} className="section-padding relative overflow-hidden">
      {/* Parallax arka plan — iOS Safari dahil tüm tarayıcılarda çalışır */}
      <motion.div
        style={{
          y: bgY,
          backgroundImage: 'url(https://picsum.photos/seed/nature-soft/1600/900)',
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
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(240,232,220,0.88) 0%, rgba(232,221,208,0.85) 50%, rgba(200,221,212,0.80) 100%)' }} />
      {/* Dekoratif arka plan şekli */}
      <motion.div style={{ y: yFast }} className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-mint/20 blur-3xl pointer-events-none" />
      <motion.div style={{ y: ySlow }} className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-beige/60 blur-3xl pointer-events-none" />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="container-md relative">
        {/* Başlık */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-14 text-center"
        >
          <h2 className="heading-lg text-mint-dark">Hakkımda</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Fotoğraf + rozet */}
          <motion.div
            variants={fadeUp(0.15)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="glass rounded-3xl overflow-hidden w-72 h-[26rem] md:w-80 md:h-[30rem] shadow-xl">
                <img
                  src={siteConfig.about.photoFallback}
                  alt={siteConfig.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = siteConfig.about.photoFallback; }}
                />
              </div>
              {/* Gönüllülük rozeti */}
              <div className="glass-mint absolute -bottom-5 -right-5 rounded-2xl px-5 py-4 max-w-[200px] shadow-lg">
                <p className="font-sans text-xs text-mint-dark font-medium leading-snug">
                  🫶 Gönüllü Terapi Desteği
                  <br />
                  <span className="font-light text-[0.7rem] text-brown">
                    Nöromüsküler Kas Hastalığı Projesinde
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Metin */}
          <div className="flex flex-col gap-6">
            {siteConfig.about.bio.map((paragraph, i) => (
              <motion.p
                key={i}
                variants={fadeUp(0.25 + i * 0.12)}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="font-sans text-[var(--color-text)] leading-relaxed text-base"
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.a
              variants={fadeUp(0.55)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              href="#randevu"
              className="btn-primary self-start mt-2"
            >
              Randevu Al
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

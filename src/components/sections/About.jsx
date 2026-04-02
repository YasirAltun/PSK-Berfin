import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import siteConfig from '../../config/siteConfig';

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: 'easeOut' } },
});

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="hakkimda" ref={ref} className="section-padding bg-[var(--color-beige-light)] relative overflow-hidden">
      {/* Dekoratif arka plan şekli */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-mint/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-beige/60 blur-3xl pointer-events-none" />

      <div className="container-md relative">
        {/* Başlık */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-14 text-center"
        >
          <p className="section-label mb-3">Merhaba</p>
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

            {/* İstatistik kartları */}
            <motion.div
              variants={fadeUp(0.55)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="grid grid-cols-2 gap-4 mt-2"
            >
              <div className="glass-beige rounded-2xl p-5 text-center">
                <p className="heading-md text-mint-dark">11+</p>
                <p className="font-sans text-xs text-[var(--color-text-muted)] mt-1 tracking-wide">
                  Sertifika & Eğitim
                </p>
              </div>
              <div className="glass-beige rounded-2xl p-5 text-center">
                <p className="heading-md text-mint-dark">Online</p>
                <p className="font-sans text-xs text-[var(--color-text-muted)] mt-1 tracking-wide">
                  & Yüz Yüze Seans
                </p>
              </div>
            </motion.div>

            <motion.a
              variants={fadeUp(0.65)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              href="#randevu"
              className="btn-primary self-start mt-2"
            >
              Randevu Al
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

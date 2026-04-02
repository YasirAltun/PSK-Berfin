import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import siteConfig from '../../config/siteConfig';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY      = useTransform(scrollYProgress, [0, 1], ['0%',   '30%']);
  const textY    = useTransform(scrollYProgress, [0, 1], ['0%',   '15%']);
  const opacity  = useTransform(scrollYProgress, [0, 0.7], [1,    0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax arka plan */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-10"
      >
        <img
          src="https://picsum.photos/seed/therapy-nature/1600/900"
          alt=""
          className="w-full h-full object-cover scale-110"
        />
        {/* Renk overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAF8]/80 via-[#C8DDD4]/40 to-[#E8DDD0]/60" />
      </motion.div>

      {/* Dekoratif daireler */}
      <div className="absolute top-20 right-12 w-64 h-64 rounded-full bg-mint/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-24 left-10 w-80 h-80 rounded-full bg-beige/40 blur-3xl pointer-events-none" />

      {/* İçerik */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 w-full container-md px-6 flex flex-col lg:flex-row items-center gap-12"
      >
        {/* Metin bloğu */}
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="section-label mb-4"
          >
            Psikolog & Danışman
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="heading-xl text-mint-dark mb-4"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="font-serif text-2xl text-brown italic mb-6 font-light"
          >
            "{siteConfig.tagline}"
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="text-[var(--color-text-muted)] font-sans text-base max-w-md lg:max-w-none mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            {siteConfig.city} merkezli yüz yüze ve Türkiye'nin her yerinden online terapi hizmetleri.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a href="#randevu" className="btn-primary">
              Randevu Al
            </a>
            <a href="#hakkimda" className="btn-outline">
              Daha Fazla Bilgi
            </a>
          </motion.div>
        </div>

        {/* Cam kart — psikolog fotoğrafı */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="flex-shrink-0"
        >
          <div className="glass rounded-3xl overflow-hidden w-72 h-96 lg:w-80 lg:h-[28rem] shadow-2xl relative">
            <img
              src={siteConfig.about.photoFallback}
              alt={siteConfig.title}
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = siteConfig.about.photoFallback; }}
            />
            {/* Alt bilgi kartı */}
            <div className="absolute bottom-0 left-0 right-0 glass-dark p-4">
              <p className="font-serif text-lg text-white font-light">{siteConfig.title}</p>
              <p className="font-sans text-xs text-white/80 tracking-widest uppercase mt-0.5">
                {siteConfig.center}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll down işareti */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="section-label text-[0.65rem]">Keşfet</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-mint-dark to-transparent"
        />
      </motion.div>
    </section>
  );
}

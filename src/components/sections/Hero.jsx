import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import siteConfig from '../../config/siteConfig';

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // Arka plan parallax — mobilde sabit, masaüstünde hareket
  const bgY     = useTransform(scrollY, [0, 800], isMobile ? [0, 0] : [-80, 80]);
  // İçerik parallax — mobilde devre dışı
  const textY   = useTransform(scrollY, [100, 600], isMobile ? ['0%', '0%'] : ['0%', '20%']);
  const opacity = useTransform(scrollY, [150, 550], isMobile ? [1, 1] : [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax arka plan — iOS Safari dahil tüm tarayıcılarda çalışır */}
      <motion.div
        style={{
          y: bgY,
          backgroundImage: 'url(https://picsum.photos/seed/therapy-calm/1600/900)',
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
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(250,250,248,0.85) 0%, rgba(200,221,212,0.75) 50%, rgba(232,221,208,0.80) 100%)' }} />

      {/* Dekoratif lekeler */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-mint-light/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[300px] h-[300px] rounded-full bg-beige/30 blur-3xl pointer-events-none" />

      {/* İçerik */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 w-full container-md px-6 flex flex-col lg:flex-row items-center gap-12 pt-24 pb-12"
      >
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="section-label mb-4"
          >
            UZMAN PSİKOLOG
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
            className="font-serif text-3xl text-brown italic mb-6 font-normal"
          >
            "{siteConfig.tagline}"
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="text-[var(--color-text-muted)] font-sans text-lg font-medium max-w-md lg:max-w-none mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            {siteConfig.city} merkezli yüz yüze ve online terapi hizmeti.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a href="#randevu" className="btn-primary">Randevu Al</a>
            <a href="#hakkimda" className="btn-outline">Daha Fazla Bilgi</a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="flex-shrink-0"
        >
          <div className="glass rounded-3xl overflow-hidden w-80 h-[30rem] lg:w-96 lg:h-[36rem] shadow-2xl relative">
            <img
              src={siteConfig.about.photoFallback}
              alt={siteConfig.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>

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

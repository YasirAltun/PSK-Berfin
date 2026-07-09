import { motion, useInView } from 'framer-motion';
import { useParallax } from '../../hooks/useParallax';
import siteConfig from '../../config/siteConfig';

export default function Education() {
  const { ref, y, ySlow, bgY, contentY, contentOpacity } = useParallax(50);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const degrees      = siteConfig.education.filter(e => e.type === 'degree');
  const certificates = siteConfig.education.filter(e => e.type === 'certificate');

  return (
    <section
      id="egitimler"
      ref={ref}
      className="section-padding relative overflow-hidden"
    >
      {/* Parallax arka plan */}
      <motion.div
        style={{
          y: bgY,
          backgroundImage: 'url(https://picsum.photos/seed/books-warm/1600/900)',
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
      <div className="absolute inset-0" style={{ background: 'linear-gradient(120deg, rgba(232,221,208,0.88) 0%, rgba(240,232,220,0.85) 40%, rgba(212,196,176,0.82) 100%)' }} />
      <motion.div style={{ y }}     className="absolute -bottom-32 -right-24 w-96 h-96 rounded-full bg-mint/15    blur-3xl pointer-events-none" />
      <motion.div style={{ y: ySlow }} className="absolute -top-20  -left-20  w-64 h-64 rounded-full bg-beige/40   blur-3xl pointer-events-none" />

      {/* Sadece y kayması — opacity kaldırıldı, içerikler okunabilsin */}
      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="container-md relative -mt-8">

        {/* ── Başlık ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="heading-lg text-mint-dark">Aldığım Eğitimler</h2>
        </motion.div>

        {/* ── Akademik Eğitimler ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h3 className="font-serif text-xl text-brown mb-6 flex items-center justify-center gap-3">
            <span className="w-8 h-8 rounded-full bg-mint-dark text-white text-sm flex items-center justify-center flex-shrink-0">🎓</span>
            Akademik Eğitim
          </h3>

          <div className={`grid gap-4 grid-cols-1 ${degrees.length >= 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
            {degrees.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="glass rounded-2xl p-5"
              >
                <p className="font-sans text-sm text-mint-dark font-semibold tracking-wide mb-1">
                  {item.institution}
                </p>
                <p className="font-serif text-xl text-[var(--color-text)] leading-snug font-medium">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Sertifikalar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <h3 className="font-serif text-xl text-brown mb-6 flex items-center justify-center gap-3">
            <span className="w-8 h-8 rounded-full bg-beige-dark text-white text-sm flex items-center justify-center flex-shrink-0">📜</span>
            Sertifikalar
          </h3>

          {/* Tüm sertifikalar — 2 sütun grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificates.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.3 + i * 0.05 }}
                className="glass-beige rounded-xl px-4 py-3"
              >
                <p className="font-sans text-xs text-brown font-semibold tracking-wide mb-0.5">
                  {item.institution}
                </p>
                <p className="font-sans text-base text-[var(--color-text)] leading-snug font-medium">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}

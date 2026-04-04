import { motion, useInView } from 'framer-motion';
import { useParallax } from '../../hooks/useParallax';
import siteConfig from '../../config/siteConfig';

export default function Education() {
  const { ref, y, ySlow, contentY, contentOpacity } = useParallax(50);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const degrees      = siteConfig.education.filter(e => e.type === 'degree');
  const certificates = siteConfig.education.filter(e => e.type === 'certificate');
  const certMain     = certificates.slice(0, 10);
  const certLast     = certificates[10] || null;

  return (
    <section
      id="egitimler"
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/books-warm/1600/900)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Renk overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(120deg, rgba(232,221,208,0.88) 0%, rgba(240,232,220,0.85) 40%, rgba(212,196,176,0.82) 100%)' }} />
      <motion.div style={{ y }}     className="absolute -bottom-32 -right-24 w-96 h-96 rounded-full bg-mint/15    blur-3xl pointer-events-none" />
      <motion.div style={{ y: ySlow }} className="absolute -top-20  -left-20  w-64 h-64 rounded-full bg-beige/40   blur-3xl pointer-events-none" />

      {/* Sadece y kayması — opacity kaldırıldı, içerikler okunabilsin */}
      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="container-md relative">

        {/* ── Başlık ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Akademik Altyapı</p>
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

          <div className={`grid gap-4 ${degrees.length >= 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
            {degrees.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="glass rounded-2xl p-5"
              >
                <p className="font-sans text-xs text-mint-dark font-medium tracking-wide mb-1">
                  {item.institution}
                </p>
                <p className="font-serif text-lg text-[var(--color-text)] leading-snug">
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

          {/* İlk 10 — 2 sütun (5 sol + 5 sağ) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certMain.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.3 + i * 0.05 }}
                className="glass-beige rounded-xl px-4 py-3"
              >
                <p className="font-sans text-[0.7rem] text-brown font-medium tracking-wide mb-0.5">
                  {item.institution}
                </p>
                <p className="font-sans text-sm text-[var(--color-text)] leading-snug">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>

          {/* 11. item — orta altta */}
          {certLast && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.3 + certMain.length * 0.05 }}
              className="flex justify-center mt-4"
            >
              <div className="glass-beige rounded-xl px-4 py-3 w-full sm:w-1/2">
                <p className="font-sans text-[0.7rem] text-brown font-medium tracking-wide mb-0.5">
                  {certLast.institution}
                </p>
                <p className="font-sans text-sm text-[var(--color-text)] leading-snug">
                  {certLast.title}
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>

      </motion.div>
    </section>
  );
}

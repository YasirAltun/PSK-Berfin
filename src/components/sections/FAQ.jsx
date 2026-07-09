import { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useParallax } from '../../hooks/useParallax';
import siteConfig from '../../config/siteConfig';

function FAQAnswer({ item }) {
  return (
    <div className="flex flex-col gap-3">
      {/* Paragraflar */}
      {item.paragraphs?.map((p, i) => (
        <p key={i} className="font-sans text-base text-[var(--color-text-muted)] leading-relaxed">
          {p}
        </p>
      ))}

      {/* Madde listesi */}
      {item.bullets?.length > 0 && (
        <ul className="flex flex-col gap-1 pl-5">
          {item.bullets.map((b, i) => (
            <li key={i} className="font-sans text-base text-[var(--color-text-muted)] leading-relaxed list-disc">
              {b}
            </li>
          ))}
        </ul>
      )}

      {/* Alt başlıklı bölümler (Online / Yüz Yüze) */}
      {item.subSections?.map((s, i) => (
        <p key={i} className="font-sans text-base text-[var(--color-text-muted)] leading-relaxed">
          <strong className="text-[var(--color-text)] font-semibold">{s.label}: </strong>
          {s.text}
        </p>
      ))}

      {/* Dipnot */}
      {item.note && (
        <p className="font-sans text-sm text-brown italic leading-relaxed border-t border-white/30 pt-2 mt-1">
          {item.note}
        </p>
      )}
    </div>
  );
}

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass rounded-2xl overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-xl text-[var(--color-text)] leading-snug font-medium">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 w-7 h-7 rounded-full bg-mint/30 flex items-center justify-center text-mint-dark font-light text-xl"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-5 border-t border-white/40 pt-4">
              <FAQAnswer item={item} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const { ref, y, yFast, bgY, contentY, contentOpacity } = useParallax(40);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="sss" ref={ref} className="section-padding relative overflow-hidden">
      {/* Parallax arka plan */}
      <motion.div
        style={{
          y: bgY,
          backgroundImage: 'url(https://picsum.photos/seed/soft-abstract/1600/900)',
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
      <div className="absolute inset-0" style={{ background: 'linear-gradient(140deg, rgba(232,221,208,0.88) 0%, rgba(200,221,212,0.82) 50%, rgba(240,232,220,0.85) 100%)' }} />
      <motion.div style={{ y }} className="absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-mint-light/30 blur-3xl pointer-events-none -translate-y-1/2" />
      <motion.div style={{ y: yFast }} className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-beige/50 blur-3xl pointer-events-none" />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="container-md relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Merak Edilenler</p>
          <h2 className="heading-lg text-mint-dark">Sık Sorulan Sorular</h2>
        </motion.div>

        {inView && (
          <div className="max-w-2xl mx-auto flex flex-col gap-3">
            {siteConfig.faq.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}

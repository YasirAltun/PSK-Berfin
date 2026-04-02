import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import siteConfig from '../../config/siteConfig';

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
        <span className="font-serif text-lg text-[var(--color-text)] leading-snug">
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
            <div className="px-6 pb-5 border-t border-white/40">
              <p className="font-sans text-sm text-[var(--color-text-muted)] leading-relaxed pt-4">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="sss" ref={ref} className="section-padding bg-[var(--color-beige-light)] relative overflow-hidden">
      <div className="absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-mint-light/30 blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="container-md relative">
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
      </div>
    </section>
  );
}

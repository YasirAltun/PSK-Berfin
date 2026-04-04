import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

// Sadece ilk render'da kontrol edilir — SSR yoksa güvenli
const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

/**
 * Bir section referansına bağlı parallax değerleri döndürür.
 * Mobilde (< 768px) tüm animasyonlar devre dışıdır.
 * @param {number} strength - Blob hareket şiddeti (varsayılan 60px)
 */
export function useParallax(strength = 60) {
  const ref = useRef(null);

  // Blob + arka plan için: section görünür alandayken çalışır
  const { scrollYProgress: blobProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // İçerik y hareketi için
  const { scrollYProgress: contentProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Fade-out için: section ortası viewport tepesini geçince
  const { scrollYProgress: exitProgress } = useScroll({
    target: ref,
    offset: ['center start', 'end start'],
  });

  // Blob parallax
  const y     = useTransform(blobProgress, [0, 1], [-strength, strength]);
  const yFast = useTransform(blobProgress, [0, 1], [-strength * 1.6, strength * 1.6]);
  const ySlow = useTransform(blobProgress, [0, 1], [-strength * 0.5, strength * 0.5]);

  // Arka plan motion.div parallax — iOS Safari'de fixed çalışmadığı için
  // mobilde sıfır hareket, masaüstünde ±80px
  const bgY = useTransform(blobProgress, [0, 1], isMobile ? [0, 0] : [-80, 80]);

  // İçerik parallax — mobilde devre dışı (sıfır hareket, tam opak)
  const contentY       = useTransform(contentProgress, [0, 1],    isMobile ? ['0%', '0%'] : ['0%', '18%']);
  const contentOpacity = useTransform(exitProgress,    [0, 0.85], isMobile ? [1, 1]       : [1, 0]);

  return { ref, y, yFast, ySlow, bgY, contentY, contentOpacity };
}

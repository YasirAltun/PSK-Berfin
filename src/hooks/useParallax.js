import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

/**
 * Bir section referansına bağlı parallax değerleri döndürür.
 * @param {number} strength - Blob hareket şiddeti (varsayılan 60px)
 */
export function useParallax(strength = 60) {
  const ref = useRef(null);

  // Blob'lar için: section görünür alandayken çalışır
  const { scrollYProgress: blobProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // İçerik için: section viewport'a girip çıkarken çalışır (Hero ile aynı mantık)
  const { scrollYProgress: contentProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Blob parallax
  const y      = useTransform(blobProgress, [0, 1], [-strength, strength]);
  const yFast  = useTransform(blobProgress, [0, 1], [-strength * 1.6, strength * 1.6]);
  const ySlow  = useTransform(blobProgress, [0, 1], [-strength * 0.5, strength * 0.5]);

  // İçerik parallax — Hero ile aynı: yavaşça yukarı kayıp solar
  const contentY       = useTransform(contentProgress, [0, 1], ['0%', '18%']);
  const contentOpacity = useTransform(contentProgress, [0, 0.75], [1, 0]);

  return { ref, y, yFast, ySlow, contentY, contentOpacity };
}

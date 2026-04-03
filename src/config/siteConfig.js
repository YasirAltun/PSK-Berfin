// ============================================================
//  siteConfig.js — Tüm değiştirilebilir site içeriği burada
//  Bu dosyayı düzenleyerek siteyi kolayca güncelleyebilirsiniz.
// ============================================================

const siteConfig = {
  // ── Kimlik ─────────────────────────────────────────────────
  name:       'Berfin Altun',
  title:      'Psikolog Berfin Altun',
  center:     'Psikolog Berfin Altun Danışmanlık Merkezi',
  city:       'Adıyaman',
  tagline:    'Kendinizi anlamak için buradayım.',

  // ── İletişim ───────────────────────────────────────────────
  phone:      '+90 5XX XXX XX XX',      // ← buraya numaranızı girin
  email:      'info@berfinaltun.com',   // ← buraya e-postanızı girin
  address:    'Adıyaman, Türkiye',

  // ── Sosyal Medya ──────────────────────────────────────────
  social: {
    instagram: 'https://instagram.com/',  // ← kullanıcı adınızı ekleyin
    linkedin:  '',
    whatsapp:  '+905XXXXXXXXX',           // ← WhatsApp numaranızı girin (başında + ve ülke kodu)
  },

  // ── Harita ────────────────────────────────────────────────
  map: {
    lat:  37.766376,
    lng:  38.305167,
    zoom: 15,
    popupText: 'Psikolog Berfin Altun Danışmanlık Merkezi',
    // Google Maps embed URL — koordinat veya zoom değişirse burayı güncelleyin
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d387.56928570255144!2d38.30527669524876!3d37.7662517490732!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1str!2sus!4v1775197534534!5m2!1str!2sus',
  },

  // ── Hakkımda ──────────────────────────────────────────────
  about: {
    bio: [
      'Üsküdar Üniversitesi Psikoloji bölümünden mezun oldum. Akademik uzmanlığımı derinleştirmek amacıyla İstanbul Gelişim Üniversitesi Bağımlılık Psikolojisi yüksek lisans programında tez aşamasında çalışmalarıma devam etmekteyim.',
      'Şu anda Adıyaman\'da, kurucusu olduğum Psikolog Berfin Altun Danışmanlık Merkezi\'nde danışanlarımı ağırlıyorum.',
      'Proje kapsamında Nöromüsküler kas hastalığı olan bireylere gönüllü olarak terapi desteği sağlamaktayım.',
    ],
    // lorem picsum'dan fotoğraf — kendi fotoğrafınızı /public/assets/images/psikolog.jpg olarak ekleyin
    photo: '/assets/images/psikolog.jpg',
    photoFallback: 'https://picsum.photos/seed/berfin/480/600',
  },

  // ── Çalışma Alanları ──────────────────────────────────────
  workAreas: [
    { icon: '🌧️', title: 'Depresyon' },
    { icon: '🌀', title: 'Anksiyete Bozuklukları' },
    { icon: '💓', title: 'Panik Atak' },
    { icon: '🔁', title: 'Obsesif Kompulsif Bozukluk' },
    { icon: '🍃', title: 'Yeme Bozuklukları' },
    { icon: '💬', title: 'İlişkisel Problemler' },
    { icon: '📚', title: 'İş & Okul Sorunları' },
    { icon: '🦋', title: 'Özgül Fobiler' },
    { icon: '🔗', title: 'Bağımlılıklar' },
    { icon: '🔥', title: 'Öfke Problemleri' },
    { icon: '🫶', title: 'Nöromüsküler Hastalıklara Psikolojik Destek' },
  ],

  // ── Eğitim & Sertifikalar ─────────────────────────────────
  education: [
    {
      institution: 'Üsküdar Üniversitesi',
      title: 'Psikoloji Lisans',
      type: 'degree',
    },
    {
      institution: 'İstanbul Gelişim Üniversitesi',
      title: 'Bağımlılık Psikolojisi Yüksek Lisans (Tez Aşaması)',
      type: 'degree',
    },
    {
      institution: 'Bilişsel Davranışçı Psikoterapiler Derneği',
      title: 'Bilişsel Davranışçı Tanı ve Değerlendirme Programı',
      type: 'certificate',
    },
    {
      institution: 'Bilişsel Davranışçı Psikoterapiler Derneği',
      title: 'Bilişsel Davranışçı Terapi Kuramsal Program',
      type: 'certificate',
    },
    {
      institution: 'Bilişsel Davranışçı Psikoterapiler Derneği',
      title: 'Bilişsel Davranışçı Terapi Beceri ve Uygulama Programı',
      type: 'certificate',
    },
    {
      institution: 'World Human Relief',
      title: 'Uluslararası Travma Çalışmaları Sertifika Programı (Klinik Düzey)',
      type: 'certificate',
    },
    {
      institution: 'Poem Psikoloji',
      title: 'Davranışsal Bağımlılıkları Anlamak ve Çalışmak Eğitimi',
      type: 'certificate',
    },
    {
      institution: 'Deryal Yüksel',
      title: 'Bağımlılıkta Sanat Terapisi Uygulamaları',
      type: 'certificate',
    },
    {
      institution: 'Ev Okulu Derneği',
      title: 'Sanat Terapisi Eğitimi',
      type: 'certificate',
    },
    {
      institution: 'Ev Okulu Derneği',
      title: 'Kısa Süreli Çözüm Odaklı Terapi Eğitimi',
      type: 'certificate',
    },
    {
      institution: 'Ev Okulu Derneği',
      title: 'Şema Terapi Eğitimi',
      type: 'certificate',
    },
    {
      institution: 'Dear Mind Academy',
      title: 'Şefkat Odaklı Terapi (CFT) Eğitimi',
      type: 'certificate',
    },
    {
      institution: 'Elif Macit Akademisi',
      title: 'Filial Terapi Eğitimi',
      type: 'certificate',
    },
  ],

  // ── Randevu ───────────────────────────────────────────────
  appointment: {
    note: 'Adıyaman içi yüz yüze ya da Türkiye\'nin ve Dünya\'nın her yerinden online seans randevusu için iletişime geçebilirsiniz.',
    ctaText: 'WhatsApp ile Randevu Al',
  },

  // ── SSS ───────────────────────────────────────────────────
  faq: [
    {
      question: 'Seans süresi ne kadar?',
      answer: 'Her seans yaklaşık 50 dakika sürmektedir. İlk görüşmede ihtiyaçlarınız değerlendirilerek terapi süreci planlanır.',
    },
    {
      question: 'Online seans nasıl gerçekleşiyor?',
      answer: 'Online seanslar güvenli video görüşme platformları aracılığıyla yürütülmektedir. Dünyanın herhangi bir yerinden bağlanabilirsiniz.',
    },
    {
      question: 'Kaç seans gerekebilir?',
      answer: 'Terapi süresi kişiden kişiye ve ele alınan konuya göre değişmektedir. Bu durum ilk görüşmede birlikte değerlendirilir.',
    },
    {
      question: 'Gizlilik ilkesi nedir?',
      answer: 'Terapide paylaşılan tüm bilgiler gizlilik ilkesi kapsamında korunmaktadır. Yasal zorunluluklar dışında hiçbir bilgi üçüncü şahıslarla paylaşılmaz.',
    },
    {
      question: 'Çevrimiçi terapi yüz yüze terapi kadar etkili mi?',
      answer: 'Araştırmalar, çevrimiçi terapinin birçok sorun için yüz yüze terapi kadar etkili olduğunu göstermektedir. Önemli olan terapistle kurulan güvenli bağ ve düzenli devam etmektir.',
    },
  ],
};

export default siteConfig;

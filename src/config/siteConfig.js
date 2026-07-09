// ============================================================
//  siteConfig.js — Tüm değiştirilebilir site içeriği burada
//  Bu dosyayı düzenleyerek siteyi kolayca güncelleyebilirsiniz.
// ============================================================

const siteConfig = {
  // ── Kimlik ─────────────────────────────────────────────────
  name:       'Berfin Altun',
  title:      'Uzman Psikolog Berfin Altun',
  center:     'Berfin Altun Danışmanlık Merkezi',
  city:       'Adıyaman',
  tagline:    'Hayatının ikinci bölümüne hoş geldin...',

  // ── İletişim ───────────────────────────────────────────────
  phone:      '+90 505 044 51 11',
  email:      'psk.berfinaltun@gmail.com',
  address:    'Adıyaman, Türkiye',

  // ── Sosyal Medya ──────────────────────────────────────────
  social: {
    instagram: 'https://instagram.com/psk.berfinaltun',
    linkedin:  '',
    whatsapp:  '+905050445111',
  },

  // ── Harita ────────────────────────────────────────────────
  map: {
    lat:  37.76622591265332,
    lng:  38.30285237531389,
    zoom: 16,
    popupText: 'Uzman Psikolog Berfin Altun Danışmanlık Merkezi',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.015876845227!2d38.30285237531389!3d37.76622591265332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1533150b99842853%3A0x889bea26539d8c3d!2sUzman%20Psikolog%20Berfin%20Altun!5e0!3m2!1str!2str!4v1783549702413!5m2!1str!2str',
  },

  // ── Hakkımda ──────────────────────────────────────────────
  about: {
    bio: [
      'Üsküdar Üniversitesi Psikoloji lisans eğitimini onur öğrencisi olarak tamamlamıştır. Ardından İstanbul Gelişim Üniversitesi Bağımlılık Psikolojisi alanında yüksek lisansını tamamlayarak uzmanlığını almıştır.',
      'Şu anda Üsküdar Üniversitesinde Klinik Psikoloji Yüksek Lisans eğitimine devam etmektedir. Öğrencilik yılları boyunca pek çok sempozyum, workshop ve etkinlikte yer almıştır.',
      'Lisans eğitiminin ardından Kısa Süreli Çözüm Odaklı Terapi, Şefkat Odaklı Terapi, Şema Terapi, Bilişsel Davranışçı Terapi, Sanat Terapisi alanlarında eğitimlerini başarıyla tamamlayarak çalışma hayatına başlamıştır.',
      'Mesleki etik kurallarına bağlı kalarak ırk, din, cinsiyet ve cinsel yönelim farkı gözetmeksizin tüm danışanlarına eşit bir yaklaşımla psikolojik destek ve danışmanlık hizmeti veren Psikolog Berfin Altun, şu an kurucusu olduğu Psikolog Berfin Altun Danışmanlık Merkezi\'nde ergen ve yetişkin yaş grubundaki bireyler ile yüz yüze ve online görüşmelere devam etmektedir.',
    ],
    photo: '/assets/images/psikolog.jpg',
    photoFallback: 'https://picsum.photos/seed/berfin/480/600',
  },

  // ── Çalışma Alanları ──────────────────────────────────────
  workAreas: [
    {
      icon: '🌧️',
      title: 'Depresyon',
      description: 'Süregelen üzüntü ve isteksizlik döngüsünü kırmak, yeniden anlam ve güç kazanmak için birlikte çalışıyoruz.',
    },
    {
      icon: '🌀',
      title: 'Anksiyete Bozuklukları',
      description: 'Aşırı endişe ve gerginliği yönetmek için kanıta dayalı tekniklerle yanınızda oluyorum.',
    },
    {
      icon: '🌊',
      title: 'Panik Atak',
      description: 'Ani ve yoğun korku anlarını anlamlandırmak ve kontrol altına almak için pratik araçlar geliştiriyoruz.',
    },
    {
      icon: '🔁',
      title: 'Obsesif Kompulsif Bozukluk',
      description: 'Takıntılı düşünceler ve zorlantılı davranış döngüsünü birlikte ele alarak özgürleşmenizi destekliyorum.',
    },
    {
      icon: '🍃',
      title: 'Yeme Bozuklukları',
      description: 'Beden imgesi ve yemek ilişkisini yeniden şekillendirmek için güvenli bir alan sunuyorum.',
    },
    {
      icon: '💬',
      title: 'İlişkisel Problemler',
      description: 'Romantik, aile veya sosyal ilişkilerdeki çatışma ve iletişim güçlükleri üzerine birlikte çalışıyoruz.',
    },
    {
      icon: '📚',
      title: 'İş & Okul Sorunları',
      description: 'Tükenmişlik, performans kaygısı ve motivasyon düşüklüğü ile başa çıkma stratejileri geliştiriyoruz.',
    },
    {
      icon: '🦋',
      title: 'Özgül Fobiler',
      description: 'Belirli nesne veya durumlara yönelik yoğun korkuları kademeli tekniklerle aşmanıza yardımcı oluyorum.',
    },
    {
      icon: '🔗',
      title: 'Bağımlılıklar',
      description: 'Madde ya da davranışsal bağımlılıklardan kurtulmak için motivasyonel ve bilişsel yaklaşımlarla destek oluyorum.',
    },
    {
      icon: '🔥',
      title: 'Öfke Problemleri',
      description: 'Öfkeyi tanımak, anlamlandırmak ve sağlıklı biçimde ifade etmek için farkındalık ve düzenleme teknikleri uyguluyoruz.',
    },
    {
      icon: '🌱',
      title: 'Nöromüsküler Hastalıklara Psikolojik Destek',
      description: 'Nöromüsküler hastalıklarla yaşayan bireyler için psikoeğitim ve duygusal destek sağlıyorum.',
    },
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
      title: 'Bağımlılık Psikolojisi Yüksek Lisans',
      type: 'degree',
    },
    {
      institution: 'Üsküdar Üniversitesi',
      title: 'Klinik Psikoloji Yüksek Lisans (devam ediyor)',
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
    {
      institution: 'Dr. Glyndie Nickerson',
      title: 'Deprem ve Sonrası Devam Eden Korkuyu Somatik Perspektif ile Çalışmak',
      type: 'certificate',
    },
    {
      institution: 'Psikolojik Danışman Ayşenur Ak',
      title: 'Ergen Danışmanlığında Bütüncül Yaklaşım Uygulayıcı Eğitimi',
      type: 'certificate',
    },
  ],

  // ── Randevu ───────────────────────────────────────────────
  appointment: {
    note: 'Adıyaman içi yüz yüze ya da Türkiye\'nin ve Dünya\'nın her yerinden online seans randevusu için iletişime geçebilirsiniz.',
    ctaText: 'WhatsApp ile Randevu Al',
  },

  // ── SSS ───────────────────────────────────────────────────
  // Her soru: { question, paragraphs[], bullets[], subSections[{label,text}], note }
  faq: [
    {
      question: 'Hangi alanlarda hizmet veriyorsunuz?',
      paragraphs: [
        '13 yaş ve üzeri (ergen ve yetişkin) yaş grubuyla çalışmaktayım. Başlıca uzmanlık ve çalışma alanlarım şunlardır:',
      ],
      bullets: [
        'Depresyon',
        'Anksiyete Bozuklukları',
        'Panik Atak',
        'Obsesif Kompulsif Bozukluk',
        'Yeme Bozuklukları',
        'İlişkisel Problemler',
        'İş & Okul Sorunları',
        'Özgül Fobiler',
        'Bağımlılıklar',
        'Öfke Problemleri',
        'Nöromüsküler Hastalara Psikolojik Destek',
      ],
      note: 'Listede yer almayan konularda da destek almak için iletişime geçebilirsiniz.',
    },
    {
      question: 'Yüz yüze seans ile online seans arasında bir fark var mı?',
      paragraphs: [
        'Yapılan araştırmalar online seansların da yüz yüze seanslar kadar etkili ve verimli olduğunu göstermektedir. Her iki yöntem de aynı etik kurallar, gizlilik prensipleri ve profesyonel yaklaşım çerçevesinde yürütülür. Aralarındaki fark, uygulama biçimi ve sağladıkları kolaylıklardır:',
      ],
      subSections: [
        {
          label: 'Online Seans',
          text: 'Coğrafi engelleri ortadan kaldırır. Konfor alanınızdan (evinizden, iş yerinizden...) seansa katılma kolaylığı sağlar ve ulaşım için harcanacak zamandan tasarruf ettirir. Sadece internet bağlantısı ve sessiz, güvenli bir alan yeterlidir.',
        },
        {
          label: 'Yüz Yüze Seans',
          text: 'Ofis ortamının sunduğu fiziksel alan, güvenilir ve çevresel faktörlerden izole bir ortamda bulunma deneyimi sağlar.',
        },
      ],
      note: 'Özetle; seansın niteliği ve kullanılan teknikler değişmez. Hangi yöntemin size daha uygun olduğuna, yaşam koşullarınız ve kendinizi nerede daha rahat ifade edebileceğinize göre birlikte karar verebiliriz.',
    },
    {
      question: 'Seans süresi ne kadardır ve ne sıklıkla gelmeliyim?',
      paragraphs: [
        'Bireysel seanslarımız standart olarak 50 dakika sürmektedir. Seans sıklığı ise genellikle haftada bir olacak şekilde planlanır. Ancak sürecin yoğunluğuna ve ihtiyaca göre bu aralık, birlikte karar verilerek iki haftada bir olacak şekilde de güncellenebilir. Süreklilik terapiden alınan verimi doğrudan etkileyen en önemli unsurlardandır.',
      ],
    },
    {
      question: 'Kaç seans sonunda sorunlarım düzelir?',
      paragraphs: [
        'Terapi süreci, sadece seansta geçirilen vakitten ibaret değildir. Bir yol arkadaşlığı ve iş birliğidir. Sürecin ne kadar süreceğini belirleyen temel faktörler şunlardır:',
      ],
      bullets: [
        'Danışanın değişim konusundaki motivasyonu,',
        'Seanslarda üzerinde durduğumuz yöntemlerin veya farkındalıkların günlük hayata ne kadar aktarıldığı,',
        'Seanslara belirlenen periyotlarda düzenli katılım sağlanması.',
      ],
      note: 'Bu nedenlerle, başlangıçta net bir seans sayısı vermek mümkün değildir. Ancak ilk birkaç görüşmeden sonra sizin ihtiyaçlarınıza ve hızınıza göre sürecin gidişatı hakkında daha somut bir öngörüde bulunabiliriz. Unutmayın ki psikolojik süreçler bir varış noktası değil, kalıcı bir iyilik halini hedefleyen bir dönüşüm yolculuğudur.',
    },
    {
      question: 'Seanslarınızda indirim yapıyor musunuz?',
      paragraphs: [
        'Seans ücretini aldığım akademik eğitimler (yüksek lisans/uzmanlıklar), ofisimin lokasyonu ve sunduğum hizmet kalitesini standartları koruyarak belirlemekteyim. Danışanlarımın profesyonel desteğe ulaşımını kolaylaştırmak adına, seans ücretini Adıyaman ortalamasına göre mümkün olan en makul seviyede tutmaya özen gösteriyorum.',
        'Şu an için herhangi bir kurumla aktif bir indirim anlaşmam bulunmamaktadır. Ancak sosyal sorumluluk gereği ve üniversite öğrencilerine destek vermek amacıyla 25 yaş altı üniversite öğrencilerine yüz yüze seanslarda indirim sağlıyorum.',
      ],
      note: 'Bilgi almak isterseniz bize ulaşabilirsiniz.',
    },
    {
      question: 'Bilgi almak için ofisinize gelebilir miyim?',
      paragraphs: [
        'Değerli danışan adayları, devam eden seansların bölünmemesi ve size hak ettiğiniz vakti ayırabilmem için yüz yüze görüşmelerimizi sadece randevulu seanslar olarak ayarlayabiliyoruz.',
        'Süreçle ilgili sorularınız ve paylaşımlarınız için arama veya WhatsApp üzerinden ulaşmanız yeterli. Size telefon üzerinden yardımcı olmaktan memnuniyet duyarım.',
      ],
      note: 'Dipnot: Aynı güne seans randevusu oluşturulmamaktadır.',
    },
    {
      question: 'Seansıma erken gelip ofisinizde bekleyebilir miyim?',
      paragraphs: [
        'İçeride devam eden bir seans olduğunda diğer danışanlarımızın gizliliğini korumak adına bekleme salonumuz her zaman kullanıma uygun olmayabilir.',
        'Seansınızdan 10-15 dakika önce burada olmanız, sakinleşip sürece hazırlanmanız için en uygun süredir.',
      ],
      note: 'Ofisimize geldiğinizde çayımız ve kahvemizle sizi bekliyor olacağız!',
    },
    {
      question: 'Randevumu iptal etmem veya ertelemem gerekirse ne yapmalıyım?',
      paragraphs: [
        'Randevu saatiniz size özel olarak ayrılmıştır. Gelemeyeceğiniz durumlarda, bekleme listesindeki diğer danışanlarımıza vakit ayırabilmemiz adına en az 24 saat öncesinden bilgi vermeniz rica olunur. Seansa 24 saatten az kalan iptallerde veya haber verilmeksizin gelinmeyen seanslarda, ofis düzenimizin korunması adına seans ücreti ile ilgili prosedürlerimiz uygulanmaktadır.',
      ],
    },
    {
      question: 'Eşim / çocuğum / yakınım danışmanlık sürecine başlamak istemiyor. Onu ikna eder misiniz?',
      paragraphs: [
        'Danışmanlık süreci öncelikle "gönüllülük" esasına dayanır. Kişinin değişime ve sürece kendi isteğiyle dahil olması, terapinin başarısını belirleyen en önemli faktörlerdendir.',
        'Bir uzman olarak seansa gelmek istemeyen bir kişiyi dışarıdan müdahale ile ikna etmem, etik olarak uygun olmadığı gibi sürecin sağlıklı ilerlemesine de engel olur. Eğer kişi zorla veya baskı altında seansa getirilirse aradığımız güven bağının kurulması zorlaşabilir ve bu durum iyileşme sürecini olumsuz etkiler.',
      ],
    },
    {
      question: 'Seanslarda konuşulanlar gizli kalıyor mu?',
      paragraphs: [
        'Danışan ile uzman arasındaki en temel kural Gizlilik İlkesi\'dir. Seans odasında paylaştığınız her türlü bilgi, etik standartlar çerçevesinde tamamen gizli tutulur ve rızanız olmadan üçüncü şahıslarla (aile üyeleri dahil) asla paylaşılmaz.',
      ],
      note: 'Sadece kendinize veya bir başkasına zarar verme riskinin olduğu istisnai yasal durumlarda, güvenliğinizi korumak amacıyla bildirim yapılabilir. Bu durum da öncelikle sizinle paylaşılır.',
    },
  ],
};

export default siteConfig;

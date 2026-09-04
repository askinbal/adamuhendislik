(function () {
  const header = document.getElementById("header");
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");
  const closeMenu = document.getElementById("closeMenu");
  const cookie = document.getElementById("cookie");
  const acceptCookie = document.getElementById("acceptCookie");
  const track = document.getElementById("projectTrack");
  const prev = document.getElementById("prevProject");
  const next = document.getElementById("nextProject");
  const form = document.getElementById("contactForm");
  const langButtons = document.querySelectorAll("[data-lang]");

  const copy = {
    tr: {
      navHome: "Ana Sayfa",
      navCorporate: "Kurumsal",
      navServices: "Hizmetlerimiz",
      navProducts: "Ürünlerimiz",
      navReferences: "Referanslar",
      navContact: "İletişim",
      navCatalog: "Katalog",
      menuAria: "Menü",
      heroTitle: "BÜYÜK<br>HATLAR İÇİN<br><em>GÜÇLÜ OLMAK<br>GEREKİR</em>",
      heroSide: "BORU HATLARININ<br>GÜVENİLİR MARKASI",
      eyebrowCorporate: "Kurumsal",
      principlesTitle: "ÜÇ ADA İLKESİ",
      principlesLead: "Her adımımızı kaliteden yana atarak, beklentilere en üst seviyede cevap vermek ve müşteri memnuniyeti bilincini tüm çalışanlara benimsetip “kalite, kaliteyi doğurur” politikası ile sizlere hizmet verebilmek için buradayız. Boru hatlarına yönelik malzeme tedariki, vana-flanş sistemleri, hidrostatik test cihazları ve tahribatsız muayene ekipmanları konusunda faaliyetlerini sürdüren ADA MÜHENDİSLİK, sizlerden almış olduğu destek ile geleceğine yatırım yapmaya devam ediyor.",
      btnMore: "Daha fazla bilgi",
      pQuality: "Kalite",
      pQualityText: "Uluslararası standartlara uygun malzeme ve cihaz seçimi. Her ürün, izlenebilir belgelerle sahaya çıkar.",
      pReliability: "Güvenilirlik",
      pReliabilityText: "Basınçlı hatlarda hata payı yoktur. Tedarik, test ve raporlama süreçlerini tek çatı altında yönetiriz.",
      pPrecision: "Teknik Hassasiyet",
      pPrecisionText: "Doğru ekipman, doğru ölçüm, doğru rapor. Saha ekiplerine pratik ve kalibre edilmiş çözümler sunarız.",
      partnersEyebrow: "İş ortaklarımız",
      referencesTitle: "REFERANSLAR",
      btnAllRefs: "Tüm Referanslar",
      servicesKicker: "BORU HATTI MALZEME VE EKİPMANLAR",
      servicesTitle: "ÜRÜNLERİMİZ",
      btnAllProducts: "Tüm Ürünler",
      footerTag: "Boru hatları malzeme ve test çözümleri",
      cookieTitle: "Çerez Politikamız",
      cookie: "Sitemizin çalışması için çerezler kullanılmaktadır. Bu siteye giriş yaparak çerez kullanımını kabul etmiş sayılırsınız.",
      cookieBtn: "Anladım",
      titleHome: "Ana sayfa | Boru hatlarının güvenilir markası | Ada Mühendislik",
      titleCorporate: "Kurumsal | Ada Mühendislik",
      titleServices: "Hizmetlerimiz | Ada Mühendislik",
      titleProducts: "Ürünlerimiz | Ada Mühendislik",
      titleReferences: "Referanslar | Ada Mühendislik",
      titleContact: "İletişim | Ada Mühendislik",
      titleCatalog: "Online Katalog | Ada Mühendislik",
      titleVideos: "Uygulama Videoları | Ada Mühendislik",
      titleLinkSeal: "PSI LINK-SEAL® | Ada Mühendislik",
      aboutHero: "Hakkımızda",
      corpName: "ADA MÜHENDİSLİK İNŞAAT SANAYİ VE TİCARET LTD. ŞTİ.",
      corpGreet: "Sevgili Dostlar,",
      corpP1: "Bu sene şirketimizin kuruluşunun 15. yılını kutladık. 2003 yılında bazı dostlarımızın teşvikiyle bu işe başladığımızda, önce birkaç kalem malzeme ile başlayalım ama bildiğimiz alandan çıkmayalım diye karar aldık.",
      corpP2: "Bildiğimiz alan derken neyi kastediyoruz? Bu alan içinde yıllarımızı geçirdiğimiz, gördüğümüz, duyduğumuz, okuduğumuz, ilgilendiğimiz, siz dostlarımızı bulduğumuz bir alan; adeta bir camia. Altyapı boru hatları ve altyapı yatırımları. Öyle bir alan ki dünyanın her tarafında ırk, dil, din, renk farkı ne olursa olsun bu alana girdiğinde aynı lisanı konuşuyor, aynı şeyleri hissediyor, birbirine yakınlaşıyor. Bu alanda herkes kendine bir rol ediniyor. Kimi kazıyor, kimi kaynaklıyor, kimi naklediyor, kimi çiziyor, kimi imal ediyor, kimi satıyor, kimi araştırıyor…",
      corpP3: "Biz yirmi dört yıldır bu alanda bize en uygun rolü yerine getirmeye çalışıyoruz. Bir yandan en iyi ürün ve hizmeti nasıl sağlarız, müşterilerimize en iyi şartlarla nasıl sunarız, onların işlerini daha da iyi yapmaları için kolaylıkları nasıl buluruz, onlara en iyi avantajı nasıl sağlarız diye araştırıyor, yatırımlar yapıyoruz. Yapmaya da devam edeceğiz.",
      corpMotto: "BİZ BİLİYORUZ, SİZİN BAŞARINIZ BİZİM BAŞARIMIZ…",
      corpClose: "Saygılarımızla,",
      corpSign: "Murat Süataç / Mak. Y. Müh.<br>Şirket Müdürü",
      footerMaterials: "Boru hatlarına yönelik malzeme ve test cihazları.",
      rights: "Tüm hakları saklıdır",
      btnCatalog: "Online Katalog",
      servicesHero: "Hizmetlerimiz",
      svcCaliper: "Boru Hattı Kaliper Pik Hizmeti",
      svcConsult: "Boru Hattı Danışmanlık Hizmetleri",
      svcContactLead: "Hizmetlerimiz hakkında bilgi için lütfen şirketimizle temasa geçiniz.",
      btnContact: "İletişim",
      btnQuote: "Teklif Alın",
      productsHero: "Ürünlerimiz",
      pipeMaterials: "Boru Hattı Malzeme<br><span>ve Ekipmanlar</span>",
      appVideos: "Uygulama<br>Videoları",
      hydroTitle: "Hidrostatik Test<br><span>Ekipmanları</span>",
      btnDetail: "Detay",
      btnAllCatalog: "Tüm katalog",
      pHot: "Sıcak Sargı Bandı",
      pHotShort: "Su ve doğalgaz hatlarında ısı ile büzülerek korozyon önleyen ithal sargı bandıdır.",
      pHotLong: "Özellikle su ve doğalgaz boru hatlarında korozyon önleme amacıyla kullanılan sıcak sargı bantları, ısı ile büzülerek yapıştırılan, yüksek teknoloji ile üretilen ithal malzemelerdir. Ürün hakkında detaylı bilgi ve talepleriniz için lütfen şirketimizle temasa geçiniz.",
      pCold: "Soğuk Sargı Bandı",
      pColdShort: "Yer altı çelik boruların kaynak yerlerinde korozyon dayanımı sağlayan Novatapes bandıdır.",
      pColdLong1: "Novatapes Anti Korozyon Soğuk Sargı Bantları, yer altı çelik borularının sahada yapılan kaynak yerlerinde korozyon dayanımı sağlamak amacıyla kullanılan malzemedir.",
      pColdLong2: "Özellikleri: uzun süreli korozyon dayanımı ve mekanik direnç; kimyasal maddelere ve kötü toprak koşullarına dayanım; el ile rahat uygulama; geniş kullanım alanı ve işletme sıcaklığında kullanım. Ürün hakkında detaylı bilgi ve talepleriniz için lütfen şirketimizle temasa geçiniz.",
      pSeal: "Boru Duvar Geçişi Sızdırmazlık Elemanları",
      pSealShort: "Link Seal markası ile her çapta boru-duvar geçişinde sızdırmazlık sağlayan contadır.",
      pCasing: "Keson İzolatör",
      pCasingShort: "Avrupa menşeli kamalı keson izolatör, özel alet ve metal aksam gerektirmez.",
      pCasingLong: "Keson izolatörlerimiz Avrupa menşeli ve sertifikalıdır. Boru hatlarınızın çaplarına göre temin edilmektedir. Kamalı sistem olup montajı için özel alet gerekmez. Kesinlikle metal aksam içermez.",
      pPrimer: "Primer Astar",
      pPrimerShort: "Sargı bandı uygulamalarında yüzey hazırlığı için kullanılan primer astardır.",
      pContactUs: "Ürün hakkında detaylı bilgi ve talepleriniz için lütfen şirketimizle temasa geçiniz.",
      pPig: "Boru Hattı Temizlik, Dolum ve Kurutma Pigleri",
      pPigShort: "Hat temizliği, dolum ve kurutma işlemleri için çapa uygun üretilen piglerdir.",
      pMono: "Monoblok İzolasyon Contası",
      pMonoShort: "Gaz ve petrol boru hatlarında izolasyon amacıyla kullanılan monoblok contadır.",
      pMonoLong: "Monoblok izolasyon contaları gaz ve petrol boru hatlarında izolasyon amacıyla kullanılmaktadır. Daha detaylı bilgi için lütfen şirketimizle iletişime geçiniz.",
      pRec: "Basınç ve Sıcaklık Kayıt Cihazı",
      pRecShort: "Hidrostatik testlerde basınç ve sıcaklık değerlerini kayıt altına alan cihazdır.",
      pPig2: "Temizlik, Dolum ve Kurutma Pigleri",
      pPig2Short: "Hidrostatik testlerde temizlik, dolum ve kurutma için üretilen piglerdir.",
      pPig2Long: "Petrol ve doğalgaz boru hatlarının hidrostatik testlerinde pigler temizlik, dolum ve kurutma işlemlerinde kullanılmaktadır. Boru hattı pigleri boru çapınıza uygun olarak üretilmektedir. Ürünler hakkında detaylı bilgi için lütfen şirketimizle temasa geçiniz.",
      pSmart: "Akıllı Pig",
      pSmartShort: "Boru hattı iç denetimi ve kusur tespiti için kullanılan akıllı pigdir.",
      pDwt: "Dead Weight Tester",
      pDwtShort: "Basınç kalibrasyonu için kullanılan referans dead weight tester cihazıdır.",
      pPump: "Yüksek Basınç Test Pompası",
      pPumpShort: "Hidrostatik testlerde hatta basınç uygulamak için kullanılan test pompasıdır.",
      contactHero: "İletişim",
      contactCompany: "Firma",
      contactAddress: "Adres",
      contactPhone: "Telefon",
      contactEmail: "E-posta",
      phName: "Ad Soyad",
      phEmail: "E-posta",
      phPhone: "Telefon",
      phSubject: "Konu seçiniz",
      optSupply: "Malzeme tedariki",
      optTest: "Test cihazı satışı / kiralama",
      optCal: "Kalibrasyon",
      optField: "Saha teknik destek",
      phMessage: "Projeniz ve ihtiyacınız",
      btnSubmit: "Gönder",
      formNote: "Mesajınız info@adamuhendislik.net ve satis@adamuhendislik.net adreslerine yönlendirildi.",
      mailName: "Ad Soyad",
      mailEmail: "E-posta",
      mailPhone: "Telefon",
      mailSubject: "Konu",
      mailDefaultSubject: "İletişim",
      mailPrefix: "Web sitesi iletişim formu — ",
      catalogHero: "Malzeme ve Test Cihazları",
      catalogLead: "Aşağıdaki liste özet kataloğumuzdur. Stok ve teslim süresi için teklif formunu kullanınız. Fiyatlar proje şartnamesine göre netleşir.",
      thCode: "Kod",
      thProduct: "Ürün",
      thStd: "Standart",
      thDesc: "Açıklama",
      catPipe: "Hat borusu",
      catPipeDesc: "Karbon çelik, dikişli-dikişsiz, kaplamalı seçenek",
      catBall: "Küresel vana",
      catGate: "Sürgülü vana",
      catFlange: "WN flanş",
      catFit: "Fitting",
      catFitDesc: "Dirsek, tee, cap, redüksiyon",
      catHyd: "Hidrostatik pompa",
      catHydStd: "ISO 9001 izlenebilir",
      catHydDesc: "70–1000 bar, elektrikli / dizel",
      catRec: "Basınç recorder",
      catRecDesc: "Dijital kayıt, chart recorder",
      catUt: "Ultrasonik kalınlık",
      catUtDesc: "Saha tipi UT cihazı ve kalibrasyon bloğu",
      catMt: "Manyetik yonga seti",
      catMtDesc: "Yoke, toz, UV lamba",
      catCoat: "Kaplama tamir",
      catCoatDesc: "Heat shrink, soğuk sargı, primer",
      catPig: "Pigging",
      catPigStd: "Saha spesifikasyonu",
      catPigDesc: "Foam / cup pig ve yedek parça",
      catCal: "Kalibrasyon hizmeti",
      catCalStd: "İzlenebilir sertifika",
      catCalDesc: "Manometre ve pompa kalibrasyonu",
      btnRequest: "Teklif isteyin",
      btnProducts: "Ürünler",
      videosHero: "Uygulama Videoları",
      btnBack: "← Geri dön",
      vHot: "ADA Mühendislik Sıcak Sargı Bandı Uygulaması",
      vLink: "Ada Mühendislik Link Seal",
      vBlast: "Ada Mühendislik İzolasyon Bandı Uygulaması için Kumlama İşlemi",
      vRepair: "Ada Mühendislik Boru Kaplama Yüzeyleri Tamir Bantları",
      vCore: "ADA Mühendislik Link Seal Karot Uygulaması",
      vIso: "ADA Mühendislik İzolatör Çözümleri",
      vLinkApp: "ADA Mühendislik Link Seal Uygulaması",
      vPlugs: "ADA Mühendislik PSI SEALING PLUGS",
      docsTitle: "Ürün Bilgileri",
      lsKicker: "Uzun Ömürlü, Sızdırmazlık Dayanımlı, Her Çap İçin Kullanılabilir, Güvenli, Modüler, Kauçuk Contalı, Ayarlanabilir Sızdırmazlık Sistemi",
      lsP1: "LINK-SEAL® modüler sızdırmazlık elemanları petrol, gaz, su ve kanalizasyon borularının yanı sıra kabloların duvar geçişlerinde sızdırmazlık için idealdir. Gerek duvar gerek döşemeden geçişler, çelik tank girişleri, tekneler için uygundur. Sahanıza uygun çeşidimizi belirleyerek size uygun uzun ömürlü çözümü sunuyoruz.",
      lsP2: "Duvarda bırakılan düzgün bir delik veya keson boru parçası ile beraber seçilen LINKSEAL® ile tek yapmanız gereken iç boruyu merkezlemek, sızdırmazlık contasını içine yerleştirmek ve civataları belirtilen tork değerlerinde sıkmaktır.",
      lsAdv: "Avantajlarımız",
      lsA1: "Link Seal ile hızlı montaj imkânı sunabiliriz. Mastik veya yerine özel çözümlere göre %75’e varan kısa montaj imkânı sağlayabilirsiniz.",
      lsA2: "Birçok uygulamada 5 bar basınca kadar geçiş sızdırmazlık imkânımız vardır.",
      lsA3: "Kalıcı bir çözümdür. Ozon, güneş ışını, su ve çeşitli kimyasalların yaşlandırıcı ve aşındırıcı etkilerine dayanıklı Link Seal contası mevcuttur.",
      lsA4: "Metal aksam standart olarak çinko galvanizli sunulmakta; istenirse korozif atmosfer için 316 kalite paslanmaz çelik olarak da verilebilir.",
      lsA5: "Yangın standartlarına uygun ürünlerimiz mevcuttur.",
      lsA6: "Link Seal ürünleri ISO 9001 standartlarına uygun Avrupa tesislerimizde üretilmektedir.",
      lsA7: "16 değişik ölçüde, renk kodlarına göre ayrılmış EPDM, Nitrile ve Silicone kauçuk conta sistemlerimizle işletme şartlarınıza uygun çözümü sunabiliyoruz.",
      lsA8: "İçme suyu, yağlar, yakıtlar, özel solventlere ve yüksek sıcaklıklara dayanıklı ürünlerimiz vardır.",
      lsA9: "Duvar içinde güvenli konumlandırma ve güçlendirme çalışmaları için mükemmel bir çözümdür.",
      lsA10: "Elektriksel yalıtım özelliği ile boruların korozyon dayanımı için uygun bir çözümdür.",
      lsA11: "Stoktan temin imkânımız, hızlı çözüm üretme kapasitemiz ve uzun kullanım ömrümüzle piyasadaki en doğru çözümü sunduğumuza güveniyoruz.",
      lsPrinciple: "Çalışma Prensibi",
      lsPrincipleText: "Kauçuk sızdırmazlık elemanlarının radyal genleşmesi ile halka şeklinde boru dış yüzeyine ve delik iç yüzeyine aynı anda baskı uygulayarak aradaki boşluğu kalıcı olarak basınçla kapatır ve sızdırmazlık sağlar.",
      lsApps: "Link Seal Uygulama Alanları",
      lsCompact: "PSI Çoklu Kablo Geçişi için Özel Compakt",
      lsCompactText: "Dış çapı 4–32; 40; 50 mm arasında olan kondüit boruların veya kabloların duvar geçişleri için rahatça seçim yapılabilecek konfigürasyon imkânı sunmaktadır. 1 bar basınca kadar sızdırmazlık dayanımı sağlar. Ayrılabilir parçalardan oluşan bir sisteme sahip olmasından dolayı mevcut yapıların güçlendirilmesinde veya rehabilitasyonunda uygundur. Boru veya kablo duvar geçişleri yapıldıktan sonra Compakt seal üzerinde kullanılmayan delikler için kör tapa ile basınca dayanıklı kapatma yapılarak montajdan sonra ilerideki ihtiyaçlar için kullanma imkânı sağlanmaktadır. Böylece ileride ihtiyaç duyulduğunda yeniden delgiye gerek olmadan hazır delikler sağlanmış olur. Kurulum için bir tork anahtarından başka özel bir alete gerek yoktur.",
      lsSealSys: "Sızdırmazlık Sistemi",
      lsSealSysText: "Basınçlı veya basınçsız ortamlarda gaz, su, atıksu boruları ve kablo duvar geçişlerinde özel tasarımlı PSI Compakt Seal’ler sızdırmazlık ihtiyacı için ideal çözümlerdir.",
      lsTypes: "Çeşitler",
      lsTypesText: "PSI Özel Compakt Seal’leri müşteri talebi üzerine üretilebilir çözümlerdir. Tüm çeşitler neredeyse mümkündür: oval borular, kare kesitli geçişler, eksantrik konumlandırmalar, parçalı / açık veya kapalı tip boru veya kablo geçişleri.",
      lsMat: "Malzeme Kalitesi",
      lsMatText: "Kauçuk malzeme standart olarak EPDM olup metan gazı (biyogaz tesisleri) olan ortamlar için NITRIL kauçuk, içme suyu için Viton ve EPDM kauçuktur. Baskı plakaları için standart olarak S304 (V2A) paslanmaz çelik kullanılır. Talep üzerine S316 (V4A) ve epoksi kaplı baskı plakaları da sunulmaktadır."
    },
    en: {
      navHome: "Home",
      navCorporate: "Corporate",
      navServices: "Services",
      navProducts: "Products",
      navReferences: "References",
      navContact: "Contact",
      navCatalog: "Catalog",
      menuAria: "Menu",
      heroTitle: "GREAT<br>PIPELINES NEED<br><em>GREAT<br>STRENGTH</em>",
      heroSide: "THE RELIABLE BRAND<br>OF PIPELINE SYSTEMS",
      eyebrowCorporate: "Corporate",
      principlesTitle: "THREE ADA PRINCIPLES",
      principlesLead: "We are here to meet expectations at the highest level, instill a culture of customer satisfaction in every employee, and serve you with the principle that “quality creates quality.” ADA MÜHENDİSLİK supplies pipeline materials, valve-flange systems, hydrostatic test equipment and NDT devices, and continues to invest in the future with the support of its clients.",
      btnMore: "Learn more",
      pQuality: "Quality",
      pQualityText: "Materials and equipment selected to international standards. Every product reaches the field with traceable documents.",
      pReliability: "Reliability",
      pReliabilityText: "There is no margin for error on pressurized lines. We manage supply, testing and reporting under one roof.",
      pPrecision: "Technical Precision",
      pPrecisionText: "The right equipment, the right measurement, the right report. Practical, calibrated solutions for field teams.",
      partnersEyebrow: "Our partners",
      referencesTitle: "REFERENCES",
      btnAllRefs: "All References",
      servicesKicker: "PIPELINE MATERIALS AND EQUIPMENT",
      servicesTitle: "OUR PRODUCTS",
      btnAllProducts: "All Products",
      footerTag: "Pipeline materials and test solutions",
      cookieTitle: "Cookie Policy",
      cookie: "This website uses cookies to function properly. By continuing you accept our cookie policy.",
      cookieBtn: "Got it",
      titleHome: "Home | The reliable brand of pipelines | Ada Mühendislik",
      titleCorporate: "Corporate | Ada Mühendislik",
      titleServices: "Services | Ada Mühendislik",
      titleProducts: "Products | Ada Mühendislik",
      titleReferences: "References | Ada Mühendislik",
      titleContact: "Contact | Ada Mühendislik",
      titleCatalog: "Online Catalog | Ada Mühendislik",
      titleVideos: "Application Videos | Ada Mühendislik",
      titleLinkSeal: "PSI LINK-SEAL® | Ada Mühendislik",
      aboutHero: "About Us",
      corpName: "ADA MÜHENDİSLİK İNŞAAT SANAYİ VE TİCARET LTD. ŞTİ.",
      corpGreet: "Dear Friends,",
      corpP1: "This year we celebrated the 15th anniversary of our company. When we started in 2003, encouraged by some of our friends, we decided to begin with a few product lines — but not to leave the field we knew.",
      corpP2: "What do we mean by the field we knew? It is the field in which we have spent our years; what we have seen, heard, read and taken an interest in; where we found you, our friends — almost a community: infrastructure pipelines and infrastructure investments. It is a field in which, anywhere in the world, regardless of race, language, religion or color, people speak the same language, feel the same things and grow closer. Everyone takes a role: some excavate, some weld, some haul, some draw, some manufacture, some sell, some research…",
      corpP3: "For twenty-four years we have tried to play the role that suits us best in this field. We keep researching and investing in how to provide the best products and services, how to offer them on the best terms, how to make our customers’ work easier, and how to give them the best advantage. And we will continue to do so.",
      corpMotto: "WE KNOW: YOUR SUCCESS IS OUR SUCCESS…",
      corpClose: "Yours sincerely,",
      corpSign: "Murat Süataç / M.Sc. Mechanical Engineer<br>Company Manager",
      footerMaterials: "Materials and test equipment for pipelines.",
      rights: "All rights reserved",
      btnCatalog: "Online Catalog",
      servicesHero: "Our Services",
      svcCaliper: "Pipeline Caliper Pig Service",
      svcConsult: "Pipeline Consultancy Services",
      svcContactLead: "Please contact us for information about our services.",
      btnContact: "Contact",
      btnQuote: "Request a Quote",
      productsHero: "Our Products",
      pipeMaterials: "Pipeline Materials<br><span>and Equipment</span>",
      appVideos: "Application<br>Videos",
      hydroTitle: "Hydrostatic Test<br><span>Equipment</span>",
      btnDetail: "Details",
      btnAllCatalog: "Full catalog",
      pHot: "Heat Shrink Wrap Tape",
      pHotShort: "Imported wrap tape that shrinks with heat to prevent corrosion on water and natural gas lines.",
      pHotLong: "Heat shrink wrap tapes used especially on water and natural gas pipelines to prevent corrosion. They are imported, high-technology materials applied by heat shrinking. Please contact us for detailed information and inquiries.",
      pCold: "Cold Wrap Tape",
      pColdShort: "Novatapes tape providing corrosion resistance at field welds on buried steel pipes.",
      pColdLong1: "Novatapes anti-corrosion cold wrap tapes are used to provide corrosion resistance at field welds on buried steel pipelines.",
      pColdLong2: "Features: long-term corrosion and mechanical resistance; resistance to chemicals and poor soil conditions; easy hand application; wide operating range. Please contact us for detailed information and inquiries.",
      pSeal: "Pipe Wall Penetration Seals",
      pSealShort: "Link Seal gaskets providing a watertight seal at pipe-wall penetrations of every diameter.",
      pCasing: "Casing Isolator",
      pCasingShort: "European-origin wedged casing isolator; no special tools or metal parts required.",
      pCasingLong: "Our casing isolators are European-origin and certified. They are supplied to match your pipeline diameters. The wedged system needs no special tools and contains no metal parts.",
      pPrimer: "Primer",
      pPrimerShort: "Primer used for surface preparation in wrap-tape applications.",
      pContactUs: "Please contact us for detailed product information and inquiries.",
      pPig: "Pipeline Cleaning, Filling and Drying Pigs",
      pPigShort: "Pigs manufactured to pipe diameter for cleaning, filling and drying operations.",
      pMono: "Monoblock Isolation Gasket",
      pMonoShort: "Monoblock gasket used for isolation on gas and oil pipelines.",
      pMonoLong: "Monoblock isolation gaskets are used for isolation on gas and oil pipelines. Please contact us for more information.",
      pRec: "Pressure and Temperature Recorder",
      pRecShort: "Device that records pressure and temperature during hydrostatic tests.",
      pPig2: "Cleaning, Filling and Drying Pigs",
      pPig2Short: "Pigs used for cleaning, filling and drying in hydrostatic tests.",
      pPig2Long: "On oil and natural gas pipelines, pigs are used for cleaning, filling and drying during hydrostatic tests. Pipeline pigs are manufactured to your pipe diameter. Please contact us for detailed information.",
      pSmart: "Smart Pig",
      pSmartShort: "Smart pig used for internal pipeline inspection and defect detection.",
      pDwt: "Dead Weight Tester",
      pDwtShort: "Reference dead weight tester used for pressure calibration.",
      pPump: "High-Pressure Test Pump",
      pPumpShort: "Test pump used to apply pressure to the line during hydrostatic tests.",
      contactHero: "Contact",
      contactCompany: "Company",
      contactAddress: "Address",
      contactPhone: "Phone",
      contactEmail: "Email",
      phName: "Full name",
      phEmail: "Email",
      phPhone: "Phone",
      phSubject: "Select a subject",
      optSupply: "Material supply",
      optTest: "Test equipment sales / rental",
      optCal: "Calibration",
      optField: "Field technical support",
      phMessage: "Your project and requirements",
      btnSubmit: "Send",
      formNote: "Your message was directed to info@adamuhendislik.net and satis@adamuhendislik.net.",
      mailName: "Full name",
      mailEmail: "Email",
      mailPhone: "Phone",
      mailSubject: "Subject",
      mailDefaultSubject: "Contact",
      mailPrefix: "Website contact form — ",
      catalogHero: "Materials and Test Equipment",
      catalogLead: "The list below is a summary catalog. Use the quote form for stock and lead times. Prices are finalized according to the project specification.",
      thCode: "Code",
      thProduct: "Product",
      thStd: "Standard",
      thDesc: "Description",
      catPipe: "Line pipe",
      catPipeDesc: "Carbon steel, welded or seamless, coated options",
      catBall: "Ball valve",
      catGate: "Gate valve",
      catFlange: "WN flange",
      catFit: "Fitting",
      catFitDesc: "Elbow, tee, cap, reducer",
      catHyd: "Hydrostatic pump",
      catHydStd: "ISO 9001 traceable",
      catHydDesc: "70–1000 bar, electric / diesel",
      catRec: "Pressure recorder",
      catRecDesc: "Digital logging, chart recorder",
      catUt: "Ultrasonic thickness",
      catUtDesc: "Field UT gauge and calibration block",
      catMt: "Magnetic particle kit",
      catMtDesc: "Yoke, powder, UV lamp",
      catCoat: "Coating repair",
      catCoatDesc: "Heat shrink, cold wrap, primer",
      catPig: "Pigging",
      catPigStd: "Field specification",
      catPigDesc: "Foam / cup pig and spare parts",
      catCal: "Calibration service",
      catCalStd: "Traceable certificate",
      catCalDesc: "Gauge and pump calibration",
      btnRequest: "Request a quote",
      btnProducts: "Products",
      videosHero: "Application Videos",
      btnBack: "← Back",
      vHot: "ADA Mühendislik Heat Shrink Wrap Application",
      vLink: "Ada Mühendislik Link Seal",
      vBlast: "Ada Mühendislik Abrasive Blasting for Isolation Tape",
      vRepair: "Ada Mühendislik Pipe Coating Repair Tapes",
      vCore: "ADA Mühendislik Link Seal Core-Drilling Application",
      vIso: "ADA Mühendislik Isolator Solutions",
      vLinkApp: "ADA Mühendislik Link Seal Application",
      vPlugs: "ADA Mühendislik PSI SEALING PLUGS",
      docsTitle: "Product Information",
      lsKicker: "Long-life, pressure-tight, usable for every diameter: a safe, modular, rubber-gasket, adjustable sealing system",
      lsP1: "LINK-SEAL® modular seals are ideal for sealing wall penetrations of oil, gas, water and sewer pipes as well as cables. They suit wall and floor penetrations, steel tank inlets and marine applications. We select the right type for your site and provide a long-life solution.",
      lsP2: "With a clean core hole or casing sleeve and the selected LINKSEAL®, you center the inner pipe, place the seal and tighten the bolts to the specified torque.",
      lsAdv: "Our Advantages",
      lsA1: "Link Seal enables fast installation. Compared with mastic or custom solutions you can cut installation time by up to 75%.",
      lsA2: "In many applications we can seal penetrations up to 5 bar.",
      lsA3: "It is a permanent solution. Link Seal gaskets resist ageing and corrosion from ozone, sunlight, water and various chemicals.",
      lsA4: "Metal hardware is zinc-galvanized as standard; 316 stainless steel is available for corrosive atmospheres.",
      lsA5: "Products meeting fire standards are available.",
      lsA6: "Link Seal products are manufactured in our European plants to ISO 9001.",
      lsA7: "With 16 sizes of color-coded EPDM, Nitrile and Silicone rubber systems we match your operating conditions.",
      lsA8: "We have products resistant to potable water, oils, fuels, special solvents and high temperatures.",
      lsA9: "An excellent solution for secure positioning and strengthening work inside walls.",
      lsA10: "Electrical insulation also helps protect pipes against corrosion.",
      lsA11: "With stock availability, fast response and long service life, we are confident we offer the right solution on the market.",
      lsPrinciple: "Operating Principle",
      lsPrincipleText: "Radial expansion of the rubber sealing elements applies pressure to the pipe OD and the hole ID at the same time, permanently closing the annular gap and providing a seal.",
      lsApps: "Link Seal Applications",
      lsCompact: "PSI Compakt for Multi-Cable Penetrations",
      lsCompactText: "It offers configurable selection for wall penetrations of conduits or cables with OD 4–32; 40; 50 mm. It seals up to 1 bar. Because the system is split, it suits strengthening or rehabilitation of existing structures. Unused holes in the Compakt seal can be closed with pressure-tight blank plugs after installation, so spare openings are ready without new drilling. No special tool is needed other than a torque wrench.",
      lsSealSys: "Sealing System",
      lsSealSysText: "Custom-designed PSI Compakt Seals are ideal for gas, water, wastewater pipe and cable wall penetrations in pressurized or unpressurized environments.",
      lsTypes: "Types",
      lsTypesText: "PSI special Compakt Seals can be produced to customer request. Almost every layout is possible: oval pipes, square openings, eccentric positioning, split / open or closed pipe or cable penetrations.",
      lsMat: "Material Quality",
      lsMatText: "The rubber is EPDM as standard; NITRILE for methane (biogas) environments; Viton and EPDM for potable water. Pressure plates are S304 (V2A) stainless steel as standard. S316 (V4A) and epoxy-coated plates are available on request."
    }
  };

  const appListTr = [
    "Mekanik montaj ve iç tesisat borulama işleri",
    "Menhol boru girişleri",
    "Atık su arıtma tesisleri",
    "Kesonlu karayolu ve demiryolu geçişleri",
    "Isı depolama tesisleri",
    "Yangın koruma istenen duvar geçişleri",
    "Boruların elektrik yalıtımı istenen yerler",
    "Ön izolasyonlu sıcak su boruların duvar geçiş sızdırmazlık ihtiyaçları",
    "Çift contalı sızdırmazlık istenen yerler",
    "Tekne ve gemilerde deniz suyuna dayanıklı boru geçiş ihtiyaçları",
    "Ses sönümleme ve gürültü giderme gereksinimleri",
    "Esnek tabela ve direk supportları",
    "Elektrik yalıtımlı boru supportları",
    "Madencilik sanayii",
    "Kağıt hamuru ve kâğıt üretim tesisleri",
    "Dekoratif çeşmeler",
    "Havuz yapım işleri",
    "Elektrik taahhüt işleri",
    "Atıksu ve içme suyu arıtma tesisleri",
    "Telekomünikasyon işleri",
    "Vana odaları",
    "Soğutma binaları",
    "Güvenlik amaçlı yapılan binalar",
    "Enerji üretim barajları",
    "Açık deniz petrol platformları",
    "Yüksek basınçlı tanklarda güvenlik amaçlı olarak",
    "Yeraltı çelik tankları",
    "Prekast beton imalatçıları",
    "Tank çiftlikleri etrafındaki taşkın koruma duvarları",
    "Kanalizasyon bakım işlerinde akış kontrolü",
    "Akışkan taşma donanımları",
    "Ses ve titreşim giderme",
    "Köprü inşaatları",
    "Foseptik depoların montajları",
    "Kömür hazırlama tesisleri",
    "Tünel ve metro inşaatları"
  ];
  const appListEn = [
    "Mechanical installation and building piping",
    "Manhole pipe entries",
    "Wastewater treatment plants",
    "Cased highway and railway crossings",
    "Heat storage facilities",
    "Fire-rated wall penetrations",
    "Locations requiring electrical isolation of pipes",
    "Wall seals for pre-insulated hot-water pipes",
    "Locations requiring double seals",
    "Seawater-resistant pipe penetrations on vessels",
    "Sound damping and noise control",
    "Flexible sign and pole supports",
    "Electrically isolated pipe supports",
    "Mining industry",
    "Pulp and paper plants",
    "Decorative fountains",
    "Swimming-pool construction",
    "Electrical contracting",
    "Wastewater and potable-water treatment plants",
    "Telecommunications",
    "Valve chambers",
    "Cooling buildings",
    "Security buildings",
    "Power-generation dams",
    "Offshore oil platforms",
    "Safety applications on high-pressure tanks",
    "Underground steel tanks",
    "Precast concrete manufacturers",
    "Flood-protection walls around tank farms",
    "Flow control in sewer maintenance",
    "Fluid overflow fittings",
    "Sound and vibration control",
    "Bridge construction",
    "Septic-tank installation",
    "Coal preparation plants",
    "Tunnel and metro construction"
  ];

  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 40);
  }

  window.addEventListener("scroll", onScroll);
  onScroll();

  function openMenu() {
    if (mobileNav) mobileNav.classList.add("open");
  }

  function hideMenu() {
    if (mobileNav) mobileNav.classList.remove("open");
    if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      if (mobileNav && mobileNav.classList.contains("open")) {
        hideMenu();
        return;
      }
      openMenu();
      menuToggle.setAttribute("aria-expanded", "true");
    });
  }
  if (closeMenu) closeMenu.addEventListener("click", hideMenu);
  if (mobileNav) {
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", hideMenu);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") hideMenu();
  });

  function updateCompactNav() {
    if (!header) return;
    var inner = header.querySelector(".header-inner");
    var nav = header.querySelector(".nav");
    var logo = header.querySelector(".logo");
    var meta = header.querySelector(".header-meta");
    if (!inner || !nav || !logo || !meta) return;

    header.classList.remove("is-compact");
    nav.style.display = "flex";
    nav.style.width = "max-content";
    if (menuToggle) menuToggle.style.display = "none";

    var navGap = parseFloat(window.getComputedStyle(nav).gap) || 2;
    var navWidth = 0;
    var links = nav.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) {
      navWidth += links[i].getBoundingClientRect().width;
    }
    if (links.length > 1) navWidth += navGap * (links.length - 1);

    var styles = window.getComputedStyle(inner);
    var gap = parseFloat(styles.columnGap || styles.gap) || 24;
    var needed = logo.getBoundingClientRect().width + navWidth + meta.getBoundingClientRect().width + gap * 2;
    var fits = needed <= inner.clientWidth - 8;

    nav.style.display = "";
    nav.style.width = "";
    if (menuToggle) menuToggle.style.display = "";
    header.classList.toggle("is-compact", !fits);
    header.classList.add("is-measured");
    if (fits) hideMenu();
  }

  var navFitTimer;
  function scheduleNavFit() {
    clearTimeout(navFitTimer);
    navFitTimer = setTimeout(updateCompactNav, 40);
  }

  updateCompactNav();
  window.addEventListener("resize", scheduleNavFit);
  if (window.ResizeObserver && header) {
    new ResizeObserver(scheduleNavFit).observe(header);
  }
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(updateCompactNav);
  }

  if (cookie && !localStorage.getItem("ada-cookie")) {
    cookie.classList.add("show");
  }

  if (acceptCookie) {
    acceptCookie.addEventListener("click", function () {
      localStorage.setItem("ada-cookie", "1");
      cookie.classList.remove("show");
    });
  }

  function scrollTrack(dir) {
    if (!track) return;
    const amount = track.clientWidth * 0.8 * dir;
    track.scrollBy({ left: amount, behavior: "smooth" });
  }

  if (prev) prev.addEventListener("click", function () { scrollTrack(-1); });
  if (next) next.addEventListener("click", function () { scrollTrack(1); });

  function currentLang() {
    return localStorage.getItem("ada-lang") === "en" ? "en" : "tr";
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var pack = copy[currentLang()];
      var name = (form.elements.name && form.elements.name.value) || "";
      var email = (form.elements.email && form.elements.email.value) || "";
      var phone = (form.elements.phone && form.elements.phone.value) || "";
      var subject = (form.elements.subject && form.elements.subject.value) || pack.mailDefaultSubject;
      var message = (form.elements.message && form.elements.message.value) || "";
      var body = [
        pack.mailName + ": " + name,
        pack.mailEmail + ": " + email,
        pack.mailPhone + ": " + phone,
        pack.mailSubject + ": " + subject,
        "",
        message
      ].join("\n");
      var mailto =
        "mailto:info@adamuhendislik.net,satis@adamuhendislik.net" +
        "?subject=" + encodeURIComponent(pack.mailPrefix + subject) +
        "&body=" + encodeURIComponent(body);
      window.location.href = mailto;
      var note = document.getElementById("formNote");
      if (note) note.textContent = pack.formNote;
    });
  }

  function applyLang(lang) {
    const pack = copy[lang] || copy.tr;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (pack[key] === undefined) return;
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = pack[key];
      } else if (el.tagName === "TITLE") {
        document.title = pack[key];
      } else {
        el.innerHTML = pack[key];
      }
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-placeholder");
      if (pack[key] !== undefined) el.placeholder = pack[key];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-aria");
      if (pack[key] !== undefined) el.setAttribute("aria-label", pack[key]);
    });
    var apps = document.querySelectorAll("[data-i18n-app]");
    var list = lang === "en" ? appListEn : appListTr;
    apps.forEach(function (el, i) {
      if (list[i]) el.textContent = list[i];
    });
    langButtons.forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
    localStorage.setItem("ada-lang", lang);
    document.documentElement.lang = lang === "en" ? "en" : "tr";
    if (typeof updateCompactNav === "function") updateCompactNav();
  }

  langButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang"));
    });
  });

  applyLang(currentLang());

  document.querySelectorAll(".detail-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const open = btn.getAttribute("aria-expanded") === "true";
      const detail = btn.parentElement.querySelector(".product-detail");
      btn.setAttribute("aria-expanded", String(!open));
      if (detail) detail.hidden = open;
    });
  });
})();

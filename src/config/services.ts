import {
  Truck, Wrench, Package, Warehouse, MapPin, Building2, Home, Wind, LucideIcon
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  image: string;
  features: string[];
  benefits: string[];
  keywords: string[];
  price: string;
}

export const services: Service[] = [
  {
    slug: "furniture-moving",
    title: "نقل الأثاث والعفش بجميع أنواعه",
    shortTitle: "نقل الأثاث",
    description: "خدمة نقل أثاث احترافية داخل وخارج مدن المملكة بأحدث الدينات المجهزة.",
    longDescription: "نقدم خدمة نقل عفش شاملة تبدأ من معاينة الأثاث وحتى تسليمه في موقعه الجديد بأمان تام.",
    icon: Truck,
    image: "/images/services/bg-naql-athath.webp", // ✅
    features: ["معاينة مجانية قبل النقل", "دينات حديثة ومجهزة", "تأمين شامل على المنقولات"],
    benefits: ["توفير الوقت والجهد", "حماية الأثاث من التلف", "أسعار تنافسية"],
    keywords: ["نقل أثاث", "شركة نقل عفش", "دينا نقل عفش"],
    price: "يبدأ من 500 ريال",
  },
  {
    slug: "assembly-disassembly",
    title: "فك وتركيب الأثاث وغرف النوم",
    shortTitle: "فك وتركيب",
    description: "فنيون متخصصون في فك وتركيب غرف النوم والمطابخ والستائر وجميع القطع.",
    longDescription: "فريق من الفنيين المتخصصين في فك وتركيب جميع أنواع الأثاث بما فيه غرف النوم الإيطالية.",
    icon: Wrench,
    image: "/images/services/bg-fak-tarkeeb.webp", // ✅
    features: ["فنيون معتمدون بخبرة", "فك وتركيب جميع أنواع الأثاث", "ضمان على التركيب"],
    benefits: ["حماية من الكسر", "تركيب دقيق وسريع", "توفير قطع الغيار"],
    keywords: ["فك وتركيب أثاث", "فني تركيب مطابخ"],
    price: "يبدأ من 200 ريال",
  },
  {
    slug: "packing-services",
    title: "تغليف الأثاث بمواد عالية الجودة",
    shortTitle: "تغليف احترافي",
    description: "تغليف احترافي بمواد آمنة تحمي أثاثك من الخدوش والصدمات أثناء النقل.",
    longDescription: "نستخدم أفضل مواد التغليف العالمية من الفقاعات الهوائية والكرتون المقوى.",
    icon: Package,
    image: "/images/services/bg-taghleef.webp", // ✅
    features: ["مواد تغليف معتمدة", "تغليف خاص للأنتيكات", "حماية للزجاج"],
    benefits: ["حماية 100% ضد الخدوش", "الحفاظ على قيمة الأثاث"],
    keywords: ["تغليف أثاث", "تغليف عفش"],
    price: "يبدأ من 300 ريال",
  },
  {
    slug: "villa-moving",
    title: "نقل الفلل والأدوار العليا بالونش",
    shortTitle: "نقل بالونش والفلل",
    description: "أوناش هيدروليكية حديثة لرفع وتنزيل الأثاث للأدوار العليا بأمان تام.",
    longDescription: "خدمة متخصصة لرفع الأثاث الثقيل للأدوار العليا باستخدام الأوناش لحماية السلالم والأثاث.",
    icon: Home,
    image: "/images/services/bg-wensh-raf3.webp", // ✅
    features: ["أوناش رفع حديثة", "حماية السلالم من الخدوش", "نقل آمن للقطع الكبيرة"],
    benefits: ["سرعة فائقة في النقل", "أمان تام للقطع الثمينة"],
    keywords: ["ونش رفع اثاث", "نقل فلل", "نقل عفش بالونش"],
    price: "عرض سعر مخصص",
  },
  {
    slug: "storage-services",
    title: "تخزين المقتنيات والأثاث الثمين",
    shortTitle: "تخزين الأثاث",
    description: "مستودعات مؤمنة ومكيفة لحفظ المقتنيات الثمينة والأثاث لفترات طويلة.",
    longDescription: "مستودعات حديثة مجهزة لحفظ مقتنياتك الثمينة بأعلى درجات الأمان والخصوصية.",
    icon: Warehouse,
    image: "/images/services/bg-moqtaniat.webp", // ✅
    features: ["مستودعات مكيفة", "مراقبة 24/7", "تأمين ضد الحريق"],
    benefits: ["حفظ الأثاث بحالته", "مساحات مرنة"],
    keywords: ["تخزين أثاث", "مستودعات تخزين"],
    price: "حسب المساحة",
  },
  {
    slug: "ac-maintenance",
    title: "فك وتركيب وصيانة المكيفات",
    shortTitle: "فك وتركيب مكيفات",
    description: "فنيون متخصصون لفك وتركيب وتنظيف مكيفات الاسبليت والشباك باحترافية.",
    longDescription: "خدمة متكاملة تشمل فك المكيفات قبل النقل، تنظيفها، وإعادة تركيبها وشحن الفريون في المكان الجديد.",
    icon: Wind,
    image: "/images/services/bg-takyifat.webp", // ✅
    features: ["فنيون تكييف معتمدون", "غسيل وتنظيف عميق", "شحن فريون"],
    benefits: ["تبريد مثالي", "نقل آمن بدون تسريب"],
    keywords: ["فك وتركيب مكيفات", "صيانة مكيفات"],
    price: "يبدأ من 150 ريال",
  },
  {
    slug: "intercity-moving",
    title: "نقل العفش بين مدن المملكة",
    shortTitle: "نقل بين المدن",
    description: "نقل عفش بين جميع مدن السعودية بأمان وسرعة ودينات مغلقة.",
    longDescription: "دينات كبيرة مجهزة لرحلات المسافات الطويلة مع سائقين محترفين.",
    icon: MapPin,
    image: "/images/gallery/photo_2026-09-30_20-33-32.jpg", // ✅
    features: ["تغطية جميع المدن", "دينات مغلقة", "تتبع الشحنة"],
    benefits: ["توصيل سريع", "ضمان سلامة الأثاث"],
    keywords: ["نقل عفش بين المدن", "شحن أثاث"],
    price: "حسب المسافة",
  },
  {
    slug: "office-moving",
    title: "نقل المكاتب والشركات",
    shortTitle: "نقل مكاتب",
    description: "خدمة متخصصة لنقل مكاتب الشركات والمؤسسات بسرية تامة وسرعة.",
    longDescription: "نقل شامل للمكاتب تشمل الأثاث المكتبي والمعدات الحساسة.",
    icon: Building2,
    image: "/images/gallery/photo_2026-09-30_20-33-37.jpg", // ✅
    features: ["سرية تامة للملفات", "نقل خارج الدوام", "إعادة تركيب سريعة"],
    benefits: ["استمرارية العمل", "حماية المعدات"],
    keywords: ["نقل مكاتب", "نقل أثاث مكتبي"],
    price: "عرض سعر مخصص",
  }
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
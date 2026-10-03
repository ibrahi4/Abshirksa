export const siteConfig = {
  name: "شركة الريفي لنقل العفش",
  nameEn: "Al-Reefi Moving Company",
  domain: "alreefimoving.com",
  url: "https://alreefimoving.com",
  phone: "0536796607",
  phoneInternational: "+966536796607",
  whatsapp: "https://wa.me/966536796607",
  email: "info@alreefimoving.com",
  founded: 2014,
  address: {
    city: "الرياض",
    country: "المملكة العربية السعودية",
    countryCode: "SA",
  },
  social: {
    instagram: "https://instagram.com/alreefimoving",
    twitter: "https://twitter.com/alreefimoving",
    tiktok: "https://tiktok.com/@alreefimoving",
    snapchat: "https://snapchat.com/add/alreefimoving",
  },
  workingHours: "24/7",
  logo: "/logo.jpeg",
  logoWhite: "/logo.jpeg",
  heroImage: "/herosection.webp",
  stats: {
    clients: "5000",
    trucks: "50",
    cities: "15",
    years: "10",
  },
  cities: [
    "الرياض", "جدة", "الدمام", "مكة المكرمة", "المدينة المنورة",
    "الخبر", "الطائف", "تبوك", "أبها", "حائل", "بريدة",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
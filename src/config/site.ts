export const siteConfig = {
  name: " أبشر لنقل الأثاث",
  nameEn: "Abshir Moving Company",
  domain: "abshirksa.com",
  url: "https://abshirksa.com",
  phone: "0536796607",
  phoneInternational: "+966536796607",
  whatsapp: "https://wa.me/966536796607",
  email: "info@abshirksa.com",
  founded: 2014,
  address: {
    city: "الرياض",
    country: "المملكة العربية السعودية",
    countryCode: "SA",
  },
  social: {
    instagram: "https://instagram.com/abshirksa",
    twitter: "https://twitter.com/abshirksa",
    tiktok: "https://tiktok.com/@abshirksa",
    snapchat: "https://snapchat.com/add/abshirksa",
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
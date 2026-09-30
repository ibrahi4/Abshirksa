import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, ShieldCheck, Clock, Star, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section className="relative bg-brand-dark overflow-hidden min-h-[85vh] flex items-center pt-20 pb-28">
      {/* الصورة الخلفية مع تدرج لوني مريح جداً للعين */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/herosection.webp"
          alt="نقل عفش شركة أبشر"
          fill
          priority
          className="object-cover opacity-40 object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 container mx-auto px-4 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* شريط العرض (واضح، ذهبي، مقروء جداً) */}
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 border border-amber-400/40 px-5 py-2.5 text-sm md:text-base font-bold text-amber-300 shadow-lg backdrop-blur-md mx-auto">
            <Clock className="h-5 w-5 animate-pulse text-amber-400" />
            <span className="tracking-wide">خصم 15% لأول 20 عميل هذا الشهر</span>
          </div>

          {/* العنوان الرئيسي */}
          <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold text-white leading-tight drop-shadow-lg">
            انقل أثاثك بأمان تام <br className="hidden sm:block" />
            <span className="text-brand-secondary">وبدون أي عناء</span>
          </h1>

          {/* النص الوصفي (مريح وواضح) */}
          <p className="text-lg md:text-2xl text-slate-200 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            نعتني بكل قطعة من أثاثك. خدمات فك، تغليف، ونقل احترافية في جميع مدن المملكة مع ضمان شامل 100%.
          </p>

          {/* الأزرار (واضحة وتدعو لاتخاذ إجراء) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button asChild size="lg" className="w-full sm:w-auto bg-brand-secondary text-brand-dark hover:bg-brand-secondary/90 font-extrabold h-16 px-10 rounded-2xl shadow-2xl hover:-translate-y-1 transition-transform text-lg">
              <a href={`tel:${siteConfig.phone}`}>
                <Phone className="h-6 w-6 ml-2" /> 
                اتصل بنا الآن
              </a>
            </Button>
            <Button asChild size="lg" variant="whatsapp" className="w-full sm:w-auto font-extrabold h-16 px-10 rounded-2xl shadow-2xl hover:-translate-y-1 transition-transform text-lg">
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-6 w-6 ml-2" /> 
                تواصل عبر واتساب
              </a>
            </Button>
          </div>

          {/* الكروت السفلية الشفافة (Visual Hooks) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-16 max-w-3xl mx-auto">
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
              <div className="bg-brand-secondary/20 p-3 rounded-xl"><ShieldCheck className="h-6 w-6 text-brand-secondary" /></div>
              <div className="text-right">
                <div className="font-bold text-white text-sm">ضمان شامل</div>
                <div className="text-xs text-slate-300 mt-1">تأمين على المنقولات</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
              <div className="bg-green-500/20 p-3 rounded-xl"><Star className="h-6 w-6 text-green-400" /></div>
              <div className="text-right">
                <div className="font-bold text-white text-sm">4.9/5 تقييم</div>
                <div className="text-xs text-slate-300 mt-1">+5000 عميل سعيد</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
              <div className="bg-blue-500/20 p-3 rounded-xl"><Clock className="h-6 w-6 text-blue-400" /></div>
              <div className="text-right">
                <div className="font-bold text-white text-sm">التزام تام</div>
                <div className="text-xs text-slate-300 mt-1">دقة في المواعيد</div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* السهم المتحرك للنزول لأسفل */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex">
        <Link href="#services" className="text-white/50 hover:text-brand-secondary transition-colors">
          <ArrowDown className="h-8 w-8" />
        </Link>
      </div>
    </section>
  );
}
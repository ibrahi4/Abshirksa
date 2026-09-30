import { Phone, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-primary/70 to-brand-dark" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-brand-secondary/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 text-center max-w-3xl space-y-6">
        {/* Urgency */}
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 border border-amber-400/40 px-5 py-2 text-sm font-bold text-amber-300">
          <Clock className="h-4 w-4" />
          عرض محدود: خصم 15% + معاينة مجانية — ينتهي بنهاية الشهر!
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold text-balance leading-tight">
          جاهز تنقل أثاثك بدون أي قلق؟
        </h2>
        <p className="text-lg text-white/80 text-balance max-w-xl mx-auto">
          احجز موعدك الآن واحصل على خصم فوري. فريقنا جاهز للوصول إليك خلال 30 دقيقة في أي حي.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button asChild size="xl" className="bg-brand-secondary text-brand-dark hover:bg-brand-secondary/90 font-bold text-base shadow-xl shadow-brand-secondary/20">
            <a href={`tel:${siteConfig.phone}`}>
              <Phone className="h-5 w-5" />
              اتصل الآن: {siteConfig.phone}
            </a>
          </Button>
          <Button asChild size="xl" variant="whatsapp" className="font-bold text-base shadow-xl">
            <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              محادثة واتساب فورية
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-white/60 pt-2">
          <ShieldCheck className="h-4 w-4 text-green-400" />
          <span>بدون أي التزام — المعاينة والعرض مجاناً 100%</span>
        </div>
      </div>
    </section>
  );
}
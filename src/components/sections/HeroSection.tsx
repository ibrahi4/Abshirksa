"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";
import {
  Phone, MessageCircle, ShieldCheck, Star, Award,
  Loader2, Send, CheckCircle2, Clock, Truck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", city: "الرياض" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("يرجى ملء الاسم ورقم الجوال");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("تم استلام طلبك! سنتواصل معك خلال دقائق.");
      const msg = encodeURIComponent(
        `السلام عليكم، أود طلب عرض سعر نقل أثاث:\nالاسم: ${form.name}\nالجوال: ${form.phone}\nالمدينة: ${form.city}`
      );
      router.push(`/thank-you?msg=${msg}`);
    }, 600);
  };

  return (
    <section className="relative bg-brand-dark text-white overflow-hidden min-h-[92vh] flex items-center">
      {/* 1. الصورة الخلفية - رفعنا الشفافية لـ 45% لتكون واضحة جداً */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/herosection.webp"
          alt="دينا نقل عفش شركة أبشر"
          fill
          priority
          quality={90}
          className="object-cover opacity-45 object-center"
        />
        {/* 2. تدرج ذكي: داكن جداً يمين (تحت النص RTL) وشفاف يسار (لإظهار الصورة) */}
        <div className="absolute inset-0 bg-gradient-to-l from-brand-dark/95 via-brand-dark/70 to-brand-dark/10" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-12 pb-20 md:pt-16 md:pb-28 w-full">
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-dark/50 backdrop-blur-md border border-white/20 px-3 py-1.5 text-xs font-semibold shadow-lg">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            4.9/5 من +2300 عميل
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-dark/50 backdrop-blur-md border border-white/20 px-3 py-1.5 text-xs font-semibold shadow-lg">
            <ShieldCheck className="h-3.5 w-3.5 text-green-400" />
            تأمين شامل وضمان ذهبي
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-right">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500/30 to-amber-600/20 border border-amber-400/50 px-4 py-2 text-xs sm:text-sm font-bold text-amber-200 shadow-lg backdrop-blur-sm">
              <Clock className="h-4 w-4 animate-pulse" />
              خصم 15% لأول 20 عميل هذا الشهر
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.2] text-balance drop-shadow-xl">
              نقل عفش احترافي في{" "}
              <span className="text-brand-secondary">الرياض وجدة</span>{" "}
              وكافة مدن المملكة
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/95 leading-relaxed max-w-2xl mx-auto lg:mx-0 lg:mr-0 text-balance drop-shadow-md">
              فك وتركيب وتغليف وتخزين بأيدي فنيين متخصصين. أسطول دينات حديث ومجهز لحماية أثاثك، مع تسليم فوري بضمان كامل.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-white font-medium">
              <span className="flex items-center gap-2 drop-shadow-md"><CheckCircle2 className="h-5 w-5 text-green-400" /> معاينة مجانية</span>
              <span className="flex items-center gap-2 drop-shadow-md"><CheckCircle2 className="h-5 w-5 text-green-400" /> أسعار ثابتة</span>
              <span className="flex items-center gap-2 drop-shadow-md"><CheckCircle2 className="h-5 w-5 text-green-400" /> خدمة 24/7</span>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <Button asChild size="xl" className="bg-brand-secondary text-brand-dark hover:bg-brand-secondary/90 font-bold text-base shadow-xl">
                <a href={`tel:${siteConfig.phone}`}><Phone className="h-5 w-5" /> اتصل الآن {siteConfig.phone}</a>
              </Button>
              <Button asChild size="xl" variant="whatsapp" className="font-bold text-base shadow-xl">
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5" /> واتساب فوري</a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-8 text-brand-dark border border-white/50 ring-1 ring-brand-secondary/20">
              <div className="text-center mb-5">
                <h2 className="text-xl font-extrabold text-brand-dark">احصل على عرض سعر فوري</h2>
                <p className="text-xs text-muted-foreground mt-1">مجاناً وبدون أي التزام — رد خلال 5 دقائق</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="space-y-1">
                  <label className="text-sm font-bold text-brand-dark block">الاسم الكريم</label>
                  <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="flex h-12 w-full rounded-xl border-2 border-gray-200 bg-white px-4 text-sm focus:border-brand-primary outline-none" required />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-bold text-brand-dark block">رقم الجوال</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} dir="ltr" className="flex h-12 w-full rounded-xl border-2 border-gray-200 bg-white px-4 text-sm focus:border-brand-primary outline-none" required />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-bold text-brand-dark block">المدينة</label>
                  <select value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="flex h-12 w-full rounded-xl border-2 border-gray-200 bg-white px-3 text-sm focus:border-brand-primary outline-none">
                    <option>الرياض</option><option>جدة</option><option>الدمام</option><option>مكة</option>
                  </select>
                </div>
                <Button type="submit" size="lg" disabled={loading} className="w-full h-14 text-base font-bold bg-brand-primary hover:bg-brand-dark mt-2 shadow-lg">
                  {loading ? <><Loader2 className="h-5 w-5 animate-spin" /> جاري الإرسال...</> : <><Send className="h-5 w-5" /> عرض السعر المجاني</>}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-8 md:h-12 text-background fill-current">
          <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
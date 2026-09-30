"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Phone, MessageCircle, ShieldCheck, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function CTASection() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", city: "الرياض" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return toast.error("يرجى ملء البيانات");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push(`/thank-you?msg=${encodeURIComponent(`طلب تسعيرة:\nالاسم: ${form.name}\nالمدينة: ${form.city}`)}`);
    }, 600);
  };

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden" id="quote-form">
      <div className="container relative mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* الجانب النصي في الـ CTA */}
          <div className="space-y-6 text-center lg:text-right">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark leading-tight">
              جاهز لنقل أثاثك <br/>
              <span className="text-brand-primary">بكل أريحية وأمان؟</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
              احجز موعدك الآن واحصل على معاينة مجانية وعرض سعر فوري. فريقنا جاهز للرد عليك واستلام طلبك فوراً.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <Button asChild size="lg" className="font-bold h-14 px-8 rounded-2xl shadow-md text-base">
                <a href={`tel:${siteConfig.phone}`}><Phone className="h-5 w-5 ml-2" /> اتصل بنا هاتفياً</a>
              </Button>
              <Button asChild size="lg" variant="whatsapp" className="font-bold h-14 px-8 rounded-2xl shadow-md text-base">
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5 ml-2" /> رسالة واتساب</a>
              </Button>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-green-600 font-semibold pt-2">
              <ShieldCheck className="h-5 w-5" /> فريق الدعم متاح 24/7
            </div>
          </div>

          {/* الفورم الأنيق */}
          <div className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-10 border border-slate-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-brand-dark">اطلب عرض سعر مجاني</h3>
              <p className="text-sm text-muted-foreground mt-2">قم بملء البيانات وسنتصل بك خلال دقائق</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">الاسم الكريم</label>
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="h-14 w-full rounded-xl bg-slate-50 border border-slate-200 px-4 text-brand-dark focus:bg-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" required />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">رقم الجوال</label>
                <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} dir="ltr" placeholder="05XXXXXXXX" className="h-14 w-full rounded-xl bg-slate-50 border border-slate-200 px-4 text-brand-dark focus:bg-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" required />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">مدينة النقل</label>
                <select value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="h-14 w-full rounded-xl bg-slate-50 border border-slate-200 px-4 text-brand-dark focus:bg-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all">
                  <option>الرياض</option><option>جدة</option><option>الدمام</option><option>مكة</option>
                </select>
              </div>

              <Button type="submit" disabled={loading} className="w-full h-14 mt-4 bg-brand-primary hover:bg-brand-dark text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all">
                {loading ? <Loader2 className="h-6 w-6 animate-spin" /> : <><Send className="h-5 w-5 ml-2" /> إرسال الطلب</>}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
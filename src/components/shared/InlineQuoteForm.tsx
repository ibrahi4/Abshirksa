"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Loader2, Calculator, Send, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FormProps {
  compact?: boolean;
}

export function InlineQuoteForm({ compact = false }: FormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    fromCity: "الرياض",
    toCity: "الرياض",
    moveType: "شقة",
    packingRequired: "نعم",
    assemblyRequired: "نعم",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error("يرجى ملء الاسم ورقم الجوال للتواصل");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("تم استلام طلبك بنجاح! سنتواصل معك خلال دقائق.");

      const waMsg = encodeURIComponent(
        `السلام عليكم، أود طلب عرض سعر نقل أثاث:\nالاسم: ${formData.name}\nالجوال: ${formData.phone}\nمن: ${formData.fromCity}\nإلى: ${formData.toCity}\nنوع المنقولات: ${formData.moveType}\nتغليف: ${formData.packingRequired}\nفك وتركيب: ${formData.assemblyRequired}`
      );
      
      router.push(`/thank-you?msg=${waMsg}`);
    }, 800);
  };

  return (
    <div className={`bg-white rounded-3xl border border-border shadow-xl p-6 md:p-8 ${compact ? "" : "max-w-xl mx-auto"}`}>
      <div className="flex items-center gap-3 mb-6 border-b border-border pb-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
          <Calculator className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-brand-dark">احسب تكلفة النقل فوراً</h3>
          <p className="text-xs text-muted-foreground">عرض سعر دقيق ومجاني بدون أي التزام</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="fromCity" className="text-sm font-semibold text-brand-dark block">من مدينة / حي</label>
            <div className="relative">
              <input
                id="fromCity"
                name="fromCity"
                type="text"
                value={formData.fromCity}
                onChange={handleChange}
                placeholder="مثال: الرياض - حي الملقا"
                className="flex h-12 w-full rounded-xl border-2 border-input bg-white px-4 py-2 text-sm text-brand-dark focus:outline-none focus:border-brand-primary transition-colors"
                required
              />
              <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="toCity" className="text-sm font-semibold text-brand-dark block">إلى مدينة / حي</label>
            <div className="relative">
              <input
                id="toCity"
                name="toCity"
                type="text"
                value={formData.toCity}
                onChange={handleChange}
                placeholder="مثال: جدة - حي أبحر"
                className="flex h-12 w-full rounded-xl border-2 border-input bg-white px-4 py-2 text-sm text-brand-dark focus:outline-none focus:border-brand-primary transition-colors"
                required
              />
              <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="moveType" className="text-sm font-semibold text-brand-dark block">نوع السكن</label>
            <select
              id="moveType"
              name="moveType"
              value={formData.moveType}
              onChange={handleChange}
              className="flex h-12 w-full rounded-xl border-2 border-input bg-white px-3 text-sm text-brand-dark focus:outline-none focus:border-brand-primary"
            >
              <option value="شقة">شقة</option>
              <option value="فيلا">فيلا / قصر</option>
              <option value="مكتب">مكتب أو شركة</option>
              <option value="قطع محددة">قطع محددة / غرف</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="packingRequired" className="text-sm font-semibold text-brand-dark block">خدمة التغليف</label>
            <select
              id="packingRequired"
              name="packingRequired"
              value={formData.packingRequired}
              onChange={handleChange}
              className="flex h-12 w-full rounded-xl border-2 border-input bg-white px-3 text-sm text-brand-dark focus:outline-none focus:border-brand-primary"
            >
              <option value="نعم">نعم، مطلوب تغليف</option>
              <option value="لا">بدون تغليف</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="assemblyRequired" className="text-sm font-semibold text-brand-dark block">فك وتركيب</label>
            <select
              id="assemblyRequired"
              name="assemblyRequired"
              value={formData.assemblyRequired}
              onChange={handleChange}
              className="flex h-12 w-full rounded-xl border-2 border-input bg-white px-3 text-sm text-brand-dark focus:outline-none focus:border-brand-primary"
            >
              <option value="نعم">نعم، فك وتركيب</option>
              <option value="لا">نقل فقط</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-sm font-semibold text-brand-dark block">الاسم الكريم</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="مثال: خالد المطيري"
              className="flex h-12 w-full rounded-xl border-2 border-input bg-white px-4 py-2 text-sm text-brand-dark focus:outline-none focus:border-brand-primary"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="phone" className="text-sm font-semibold text-brand-dark block">رقم الجوال (سعودي)</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="05XXXXXXXX"
              dir="ltr"
              className="flex h-12 w-full rounded-xl border-2 border-input bg-white px-4 py-2 text-sm text-brand-dark focus:outline-none focus:border-brand-primary"
              required
            />
          </div>
        </div>

        <Button type="submit" size="lg" disabled={loading} className="w-full text-base font-bold h-14 bg-brand-primary hover:bg-brand-dark">
          {loading ? (
            <span className="flex items-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin" />
              جاري حساب السعر...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="h-5 w-5" />
              احصل على عرض السعر الآن
            </span>
          )}
        </Button>

        <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground pt-2">
          <span className="flex items-center gap-1">
            <ShieldCheck className="h-4 w-4 text-green-600" />
            ضمان شامل وتأمين
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            معاينة مجانية بدون التزام
          </span>
        </div>
      </form>
    </div>
  );
}
export default InlineQuoteForm;
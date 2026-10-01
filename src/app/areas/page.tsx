import type { Metadata } from "next";
import Link from "next/link";
import { AreasSection } from "@/components/sections/AreasSection";
import { CTASection } from "@/components/sections/CTASection";
import { Badge } from "@/components/ui/badge";
import { Home, ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "مناطق وتغطية خدمات نقل الأثاث بالسعودية",
  description: "تعرف على المدن والأحياء والمحافظات التي تغطيها شركة أبشر لنقل العفش في الرياض، جدة، مكة، الدمام، وباقي المدن.",
};

export default function AreasPage() {
  return (
    <>
      <section className="bg-brand-dark text-white py-14 text-center relative">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          
          {/* Breadcrumb للرجوع للرئيسية */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-white/70 mb-4">
            <Link href="/" className="hover:text-brand-secondary flex items-center gap-1 transition-colors">
              <Home className="h-3.5 w-3.5" />
              الرئيسية
            </Link>
            <ChevronLeft className="h-3.5 w-3.5 opacity-50" />
            <span className="text-brand-secondary">مناطق التغطية</span>
          </div>

          <Badge variant="secondary" className="px-4 py-1 bg-brand-secondary text-brand-dark font-bold">
            التغطية الجغرافية
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold">
            مناطق ومدن خدمة نقل الأثاث في المملكة
          </h1>
          <p className="text-white/80 text-base md:text-lg">
            فريقنا وأسطولنا متواجد في كافة أرجاء المملكة لضمان سرعة الوصول والاستجابة.
          </p>
        </div>
      </section>
      <AreasSection />
      <CTASection />
    </>
  );
}
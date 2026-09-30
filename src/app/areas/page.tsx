import type { Metadata } from "next";
import { AreasSection } from "@/components/sections/AreasSection";
import { CTASection } from "@/components/sections/CTASection";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "مناطق وتغطية خدمات نقل الأثاث بالسعودية",
  description: "تعرف على المدن والأحياء والمحافظات التي تغطيها شركة أبشر لنقل العفش في الرياض، جدة، مكة، الدمام، وباقي المدن.",
};

export default function AreasPage() {
  return (
    <>
      <section className="bg-brand-dark text-white py-16 text-center">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          <Badge variant="secondary" className="px-4 py-1 bg-brand-secondary text-brand-dark">
            التغطية الجغرافية
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold">
            مناطق ومدن خدمة نقل الأثاث في المملكة
          </h1>
          <p className="text-white/80 text-lg">
            فريقنا وأسطولنا متواجد في كافة أرجاء المملكة لضمان سرعة الوصول والاستجابة.
          </p>
        </div>
      </section>
      <AreasSection />
      <CTASection />
    </>
  );
}
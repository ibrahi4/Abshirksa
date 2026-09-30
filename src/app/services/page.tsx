import type { Metadata } from "next";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CTASection } from "@/components/sections/CTASection";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "خدمات نقل الأثاث الشاملة | فك، تركيب، تغليف، وتخزين",
  description: "استكشف خدمات شركة أبشر في نقل العفش، فك وتركيب غرف النوم والمطابخ، التغليف الاحترافي، والتخزين في مستودعات مؤمنة.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-dark text-white py-16 text-center">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          <Badge variant="secondary" className="px-4 py-1 bg-brand-secondary text-brand-dark">
            دليل الخدمات
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold">
            خدمات نقل الأثاث المتكاملة في السعودية
          </h1>
          <p className="text-white/80 text-lg">
            نقدم باقة متنوعة من الحلول لتلبية احتياجات الفلل، الشقق، والمكاتب بأحدث الوسائل.
          </p>
        </div>
      </section>
      <ServicesSection />
      <CTASection />
    </>
  );
}
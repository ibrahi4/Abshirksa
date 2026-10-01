import type { Metadata } from "next";
import Link from "next/link";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CTASection } from "@/components/sections/CTASection";
import { Badge } from "@/components/ui/badge";
import { Home, ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "خدمات نقل الأثاث الشاملة | فك، تركيب، تغليف، وتخزين",
  description: "استكشف خدمات شركة أبشر في نقل العفش، فك وتركيب غرف النوم والمطابخ، التغليف الاحترافي، والتخزين في مستودعات مؤمنة.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-dark text-white py-14 text-center relative">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          
          {/* Breadcrumb للرجوع للرئيسية من أي جهاز */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-white/70 mb-4">
            <Link href="/" className="hover:text-brand-secondary flex items-center gap-1 transition-colors">
              <Home className="h-3.5 w-3.5" />
              الرئيسية
            </Link>
            <ChevronLeft className="h-3.5 w-3.5 opacity-50" />
            <span className="text-brand-secondary">جميع الخدمات</span>
          </div>

          <Badge variant="secondary" className="px-4 py-1 bg-brand-secondary text-brand-dark font-bold">
            دليل الخدمات الشامل
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold">
            خدمات نقل الأثاث المتكاملة في السعودية
          </h1>
          <p className="text-white/80 text-base md:text-lg">
            نقدم باقة متنوعة من الحلول لتلبية احتياجات الفلل، الشقق، والمكاتب بأحدث الوسائل.
          </p>
        </div>
      </section>
      <ServicesSection />
      <CTASection />
    </>
  );
}
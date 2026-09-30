import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { GalleryCarouselSection } from "@/components/sections/GalleryCarouselSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { AreasSection } from "@/components/sections/AreasSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      
      {/* تم رفع معرض الصور المتحرك ليكون بعد الخدمات مباشرة لجذب انتباه العميل */}
      <GalleryCarouselSection />
      
      <StatsSection />
      
      {/* التقييمات أصبحت سلايدر متحرك مريح للعين */}
      <TestimonialsSection />
      
      {/* تم تنزيل خطوات العمل للأسفل لمنع التكدس */}
      <HowItWorksSection />
      
      <AreasSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
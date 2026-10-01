import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServicesSection } from "@/components/sections/ServicesSection";

// Lazy loading للسكاشن السفلية لسرعة تحميل خارقة على الموبايل (FCP & TBT)
const GalleryCarouselSection = dynamic(
  () => import("@/components/sections/GalleryCarouselSection").then((m) => m.GalleryCarouselSection),
  { ssr: true }
);
const StatsSection = dynamic(
  () => import("@/components/sections/StatsSection").then((m) => m.StatsSection),
  { ssr: true }
);
const TestimonialsSection = dynamic(
  () => import("@/components/sections/TestimonialsSection").then((m) => m.TestimonialsSection),
  { ssr: true }
);
const HowItWorksSection = dynamic(
  () => import("@/components/sections/HowItWorksSection").then((m) => m.HowItWorksSection),
  { ssr: true }
);
const AreasSection = dynamic(
  () => import("@/components/sections/AreasSection").then((m) => m.AreasSection),
  { ssr: true }
);
const FAQSection = dynamic(
  () => import("@/components/sections/FAQSection").then((m) => m.FAQSection),
  { ssr: true }
);
const CTASection = dynamic(
  () => import("@/components/sections/CTASection").then((m) => m.CTASection),
  { ssr: true }
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <GalleryCarouselSection />
      <StatsSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <AreasSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
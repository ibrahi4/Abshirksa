import type { Metadata } from "next";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { generateFAQSchema } from "@/lib/schema";
import { faqs } from "@/config/faq";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "الأسئلة الشائعة حول نقل الأثاث وتكاليف الخدمة",
  description: "إجابات مفصلة وشاملة لأكثر الأسئلة تكراراً حول نقل العفش، مدة النقل، الضمانات والتأمين، والتخزين مع شركة الريفي.",
};

export default function FAQPage() {
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="bg-brand-dark text-white py-16 text-center">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          <Badge variant="secondary" className="px-4 py-1 bg-brand-secondary text-brand-dark">
            مركز المساعدة
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold">
            الأسئلة الأكثر شيوعاً
          </h1>
          <p className="text-white/80 text-lg">
            كل ما يدور في ذهنك حول خدماتنا وإجراءات حماية أثاثك وعروض الأسعار.
          </p>
        </div>
      </section>
      <FAQSection />
      <CTASection />
    </>
  );
}
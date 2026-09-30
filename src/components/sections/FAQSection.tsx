import { faqs } from "@/config/faq";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function FAQSection() {
  const topFaqs = faqs.slice(0, 6);

  return (
    <section className="py-16 md:py-20 bg-slate-50 border-y border-border/60" id="faq">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12 space-y-3">
          <Badge variant="outline" className="px-4 py-1 text-sm font-semibold border-brand-primary text-brand-primary">
            أسئلة شائعة
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark">
            إجابات سريعة لأهم استفساراتك
          </h2>
        </div>

        <Accordion type="single" className="w-full">
          {topFaqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-sm md:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
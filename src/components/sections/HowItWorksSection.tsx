import { PhoneCall, ClipboardCheck, Truck, PackageCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    num: "01",
    icon: PhoneCall,
    title: "اتصل بنا أو اطلب عرض سعر",
    desc: "تواصل معنا عبر الهاتف أو الواتساب أو النموذج وأخبرنا بتفاصيل نقلك.",
  },
  {
    num: "02",
    icon: ClipboardCheck,
    title: "معاينة مجانية لمنزلك",
    desc: "نرسل مندوب لمعاينة الأثاث وتحديد الحجم والاحتياجات بدقة تامة.",
  },
  {
    num: "03",
    icon: Truck,
    title: "نقل احترافي مع تغليف كامل",
    desc: "فريقنا يفك ويغلف وينقل أثاثك بدينات مجهزة بأعلى معايير الأمان.",
  },
  {
    num: "04",
    icon: PackageCheck,
    title: "استلام أثاثك وتركيبه",
    desc: "نوصل أثاثك سليم ونركبه في مكانه الجديد. لا تدفع إلا بعد الرضا التام.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 md:py-20 bg-slate-50 border-y border-border/60">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <Badge variant="outline" className="px-4 py-1 text-sm font-semibold border-brand-primary text-brand-primary">
            كيف نعمل
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark">
            4 خطوات بسيطة لنقل أثاثك بأمان
          </h2>
          <p className="text-muted-foreground text-base">
            من أول اتصال لآخر قطعة مركبة في منزلك الجديد، نعتني بكل التفاصيل.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative rounded-2xl bg-white border border-border p-6 text-center hover:shadow-md transition-shadow">
                <div className="absolute -top-3 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary text-white text-xs font-extrabold">
                  {step.num}
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-secondary/15 text-brand-dark mx-auto mb-4 mt-2">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-base font-bold text-brand-dark mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
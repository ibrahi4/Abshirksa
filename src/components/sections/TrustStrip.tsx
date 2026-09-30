import { Zap, ShieldCheck, BadgeCheck } from "lucide-react";

const items = [
  {
    icon: Zap,
    title: "استجابة فورية خلال 30 دقيقة",
    desc: "فريقنا جاهز في جميع أحياء الرياض وجدة والدمام للوصول إليك في أسرع وقت.",
  },
  {
    icon: ShieldCheck,
    title: "تأمين شامل وضمان على كل قطعة",
    desc: "نلتزم بتعويض أي تلفيات لا قدر الله. أثاثك في أمان تام من الباب للباب.",
  },
  {
    icon: BadgeCheck,
    title: "أسعار شفافة بدون رسوم مخفية",
    desc: "السعر اللي نتفق عليه هو اللي تدفعه. لا مفاجآت ولا تكاليف إضافية.",
  },
];

export function TrustStrip() {
  return (
    <section className="py-12 bg-background border-b border-border/60">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-start gap-4 text-center md:text-right">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark text-base mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import { ShieldCheck, Clock, Users, Wrench, Sparkles, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: ShieldCheck,
    title: "تأمين وضمان شامل",
    desc: "نضمن سلامة جميع مقتنياتك وأجهزتك مع تحمل كامل لأي تلفيات لا قدر الله أثناء عملية النقل.",
  },
  {
    icon: Wrench,
    title: "فنيون فك وتركيب محترفون",
    desc: "نجارون وفنيون متخصصون للتعامل مع غرف النوم الإيطالية والمطابخ والستائر والمكيفات بدقة تامة.",
  },
  {
    icon: Sparkles,
    title: "تغليف بمواد عالمية",
    desc: "استخدام فقاعات هوائية سميكة، كراتين مقواة، وشرائط أمان لحماية الزجاج والتحف الثمينة.",
  },
  {
    icon: Truck,
    title: "أسطول دينات حديث ومجهز",
    desc: "شاحنات ودينات نقل مغلقة ومجهزة بمصاعد هيدروليكية لحماية الأثاث من الغبار وتقلبات الطقس.",
  },
  {
    icon: Clock,
    title: "دقة متناهية في المواعيد",
    desc: "نلتزم بالحضور والإنجاز في الوقت المحدد مسبقاً بدقة تامة لضمان راحة وقتك الثمين.",
  },
  {
    icon: Users,
    title: "فريق عمل مدرب ومحترم",
    desc: "طاقم عمل ملتزم بالأخلاق العالية والسرية التامة مع الحفاظ على خصوصية منزلك ومقتنياتك.",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="outline" className="px-4 py-1 text-sm font-semibold border-brand-primary text-brand-primary">
            لماذا تختارنا
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark">
            لماذا يفضل آلاف العملاء شركة أبشر؟
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            خبرة تمتد لأكثر من 10 سنوات في السوق السعودي جعلتنا الخيار الأول للمنازل والشركات.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="rounded-3xl border border-border bg-card p-8 hover:shadow-md transition-shadow">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary text-white mb-6">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
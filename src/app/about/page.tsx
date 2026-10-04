import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/CTASection";
import { Award, ShieldCheck, Truck, Users, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "من نحن | قصة نجاحنا وخبرتنا في نقل الأثاث",
  description: "تعرف على شركة الريفي لنقل العفش، تاريخنا الممتد منذ 2014 وأسطولنا وخبراتنا في خدمة العائلات والشركات في السعودية.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-dark text-white py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl space-y-4">
          <Badge variant="secondary" className="px-4 py-1 bg-brand-secondary text-brand-dark">
            عن شركة الريفي
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold">
            أكثر من 10 سنوات من الريادة والتميز في نقل الأثاث
          </h1>
          <p className="text-white/80 text-lg">
            تأسست شركة الريفي عام {siteConfig.founded} لتضع معايير جديدة للاحترافية والأمان في قطاع نقل العفش في المملكة العربية السعودية.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-brand-dark">رؤيتنا ورسالتنا</h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                نؤمن بأن عملية الانتقال لمنزل أو مقر عمل جديد يجب أن تكون تجربة سعيدة ومريحة. لذلك نوفر لعملائنا في كافة مدن المملكة حلولاً لوجستية متكاملة تشمل الفك، التغليف الفاخر، النقل بالدينات المغلقة، وإعادة التركيب والترتيب بعناية متناهية.
              </p>
              <div className="space-y-3">
                {[
                  "الالتزام الصارم بالمواعيد المحددة مع العميل",
                  "استخدام أحدث معدات الرفع والتغليف المعتمدة عالمياً",
                  "طاقم عمل مدرب على أعلى درجات الأمانة والاحتراف",
                  "تغطية جغرافية شاملة لكافة مدن ومحافظات المملكة",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                    <span className="font-semibold text-sm text-brand-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                alt="فريق شركة الريفي"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-y border-border">
        <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-white border border-border">
            <Award className="h-8 w-8 text-brand-primary mx-auto mb-2" />
            <div className="text-3xl font-extrabold text-brand-dark">+10 سنوات</div>
            <div className="text-xs text-muted-foreground mt-1">خبرة متواصلة</div>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-border">
            <Users className="h-8 w-8 text-brand-secondary mx-auto mb-2" />
            <div className="text-3xl font-extrabold text-brand-dark">+5000</div>
            <div className="text-xs text-muted-foreground mt-1">عميل سعيد</div>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-border">
            <Truck className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-3xl font-extrabold text-brand-dark">+50</div>
            <div className="text-xs text-muted-foreground mt-1">دينا وشاحنة مجهزة</div>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-border">
            <ShieldCheck className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-3xl font-extrabold text-brand-dark">100%</div>
            <div className="text-xs text-muted-foreground mt-1">ضمان الأمان وسلامة العفش</div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
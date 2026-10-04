import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { InlineQuoteForm } from "@/components/shared/InlineQuoteForm";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "تواصل معنا | اتصل الآن على 0536796607",
  description: "تواصل مع فريق شركة الريفي لنقل العفش في السعودية. اتصل أو راسلنا عبر واتساب للحصول على معاينة مجانية وعرض سعر فوري.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-dark text-white py-16 text-center">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          <Badge variant="secondary" className="px-4 py-1 bg-brand-secondary text-brand-dark">
            تواصل معنا
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold">
            نحن هنا لخدمتك على مدار الساعة
          </h1>
          <p className="text-white/80 text-lg">
            لا تتردد في الاتصال بنا أو مراسلتنا في أي وقت لحجز موعدك أو الاستفسار.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl font-bold text-brand-dark">قنوات الاتصال المباشرة</h2>
              <p className="text-muted-foreground leading-relaxed">
                فريق خدمة العملاء متاح 24/7 للرد على جميع استفساراتكم وترتيب المعاينات المجانية في الرياض، جدة، الدمام وكافة المدن.
              </p>

              <div className="space-y-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-border hover:border-brand-primary shadow-sm transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary text-white">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">الاتصال الهاتفي المباشر</div>
                    <div className="text-lg font-bold text-brand-dark" dir="ltr">{siteConfig.phone}</div>
                  </div>
                </a>

                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-border hover:border-[#25D366] shadow-sm transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366] text-white">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">محادثة واتساب فورية</div>
                    <div className="text-lg font-bold text-brand-dark">تواصل عبر WhatsApp</div>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-border hover:border-brand-primary shadow-sm transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-secondary text-brand-dark">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">البريد الإلكتروني الرسمي</div>
                    <div className="text-lg font-bold text-brand-dark">{siteConfig.email}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-border">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">ساعات العمل</div>
                    <div className="text-base font-bold text-brand-dark">على مدار 24 ساعة طوال أيام الأسبوع</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <InlineQuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
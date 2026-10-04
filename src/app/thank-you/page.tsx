import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MessageCircle, Phone, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "شكراً لك | تم استلام طلبك بنجاح",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-background">
      <div className="container mx-auto px-4 max-w-lg text-center space-y-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600 mx-auto shadow-sm">
          <CheckCircle2 className="h-10 w-10" />
        </div>

        <h1 className="text-3xl font-extrabold text-brand-dark">
          تم استلام طلبك بنجاح!
        </h1>

        <p className="text-muted-foreground text-base leading-relaxed">
          شكراً لثقتك في شركة الريفي لنقل العفش. سيقوم أحد ممثلي خدمة العملاء بالتواصل معك هاتفياً خلال دقائق لتأكيد الموعد وتقديم أفضل سعر.
        </p>

        <div className="p-4 rounded-2xl bg-slate-50 border border-border text-sm text-brand-dark space-y-2">
          <div className="font-bold">هل تحتاج لمساعدة عاجلة؟</div>
          <p className="text-xs text-muted-foreground">يمكنك الاتصال المباشر بنا أو مراسلتنا عبر الواتساب فوراً</p>
          <div className="flex justify-center gap-3 pt-2">
            <Button asChild size="sm" variant="whatsapp">
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 ml-1" />
                واتساب
              </a>
            </Button>
            <Button asChild size="sm">
              <a href={`tel:${siteConfig.phone}`}>
                <Phone className="h-4 w-4 ml-1" />
                اتصل: {siteConfig.phone}
              </a>
            </Button>
          </div>
        </div>

        <div>
          <Button asChild variant="outline" className="border-border">
            <Link href="/">
              <Home className="h-4 w-4 ml-1.5" />
              العودة للرئيسية
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
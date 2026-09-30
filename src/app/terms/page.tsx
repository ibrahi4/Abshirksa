import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "الشروط والأحكام",
};

export default function TermsPage() {
  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl space-y-6">
        <h1 className="text-3xl font-extrabold text-brand-dark">الشروط والأحكام</h1>
        <p className="text-sm text-muted-foreground">آخر تحديث: يناير 2025</p>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-4 leading-relaxed">
          <p>
            مرحباً بك في موقع {siteConfig.name}. استخدامك لخدماتنا وموقعنا يعني موافقتك الكاملة على هذه الشروط والأحكام.
          </p>
          <h2 className="text-lg font-bold text-brand-dark">1. طلبات النقل والحجز</h2>
          <p>
            تخضع جميع مواعيد النقل لتأكيد مسبق من فريق خدمة العملاء بعد المعاينة أو الاتفاق الهاتفي على تفاصيل المنقولات.
          </p>
          <h2 className="text-lg font-bold text-brand-dark">2. المسؤولية والضمان</h2>
          <p>
            نلتزم بسلامة جميع المنقولات المصرح عنها مسبقاً والمغلفة من قبل فريقنا. يُرجى نقل المجوهرات والأموال والمستندات الشخصية الهامة بمعرفتكم الخاصة.
          </p>
          <h2 className="text-lg font-bold text-brand-dark">3. الدفع والأسعار</h2>
          <p>
            يتم الاتفاق على السعر النهائي قبل بدء عملية النقل، ويتم السداد عند إتمام الخدمة واستلام الأثاث في الموقع الجديد.
          </p>
        </div>
      </div>
    </div>
  );
}
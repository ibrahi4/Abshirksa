import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "سياسة الخصوصية",
};

export default function PrivacyPage() {
  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl space-y-6">
        <h1 className="text-3xl font-extrabold text-brand-dark">سياسة الخصوصية</h1>
        <p className="text-sm text-muted-foreground">آخر تحديث: يناير 2025</p>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-4 leading-relaxed">
          <p>
            نحن في {siteConfig.name} نلتزم بحماية خصوصية زوار موقعنا وعملائنا الكرام. توضح هذه السياسة كيفية جمع البيانات واستخدامها وحمايتها.
          </p>
          <h2 className="text-lg font-bold text-brand-dark">1. جمع المعلومات</h2>
          <p>
            نقوم بجمع المعلومات التي تقدمها لنا طواعية عند طلب عرض سعر أو التواصل معنا (كالاسم، رقم الجوال، عنوان الانتقال، وتفاصيل الأثاث).
          </p>
          <h2 className="text-lg font-bold text-brand-dark">2. استخدام المعلومات</h2>
          <p>
            نستخدم هذه البيانات لتقديم خدمات النقل، والتواصل معك لتأكيد المواعيد وعروض الأسعار، وتحسين تجربة الخدمة. لا نقوم ببيع أو مشاركة بياناتك مع أي طرف ثالث لأغراض تسويقية.
          </p>
          <h2 className="text-lg font-bold text-brand-dark">3. أمان البيانات</h2>
          <p>
            نطبق تدابير أمنية وفنية متقدمة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التغيير أو الإفشاء.
          </p>
        </div>
      </div>
    </div>
  );
}
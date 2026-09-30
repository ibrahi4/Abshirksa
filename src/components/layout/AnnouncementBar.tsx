"use client";
import { useState, useEffect } from "react";
import { Sparkles, Phone, Shield, Clock } from "lucide-react";
import { useMounted } from "@/hooks/useMounted";

const messages = [
  { icon: Sparkles, text: "خصم 15% على أول طلب - العرض ساري لمدة محدودة" },
  { icon: Phone, text: "اتصل الآن على 0536796607 - معاينة مجانية" },
  { icon: Shield, text: "تأمين شامل على المنقولات + ضمان على أعمال التركيب" },
  { icon: Clock, text: "خدمة 24/7 - نصلك في أي وقت بجميع مدن المملكة" },
];

export function AnnouncementBar() {
  const mounted = useMounted();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setIdx((prev) => (prev + 1) % messages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [mounted]);

  if (!mounted) {
    return (
      <div className="bg-brand-dark text-white py-2.5 text-center text-sm">
        <div className="container mx-auto px-4">
          <span>مرحباً بك في شركة أبشر لنقل الأثاث</span>
        </div>
      </div>
    );
  }

  const Icon = messages[idx].icon;

  return (
    <div className="bg-brand-dark text-white py-2.5 text-center text-sm overflow-hidden">
      <div className="container mx-auto px-4 flex items-center justify-center gap-2 animate-fade">
        <Icon className="h-4 w-4 text-brand-secondary shrink-0" />
        <span className="font-medium">{messages[idx].text}</span>
      </div>
      <style jsx>{`
        @keyframes fade {
          0% { opacity: 0; transform: translateY(-4px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade {
          animation: fade 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
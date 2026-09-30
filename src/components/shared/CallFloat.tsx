"use client";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useMounted } from "@/hooks/useMounted";

export function CallFloat() {
  const mounted = useMounted();
  if (!mounted) return null;

  return (
    <a
      href={`tel:${siteConfig.phone}`}
      aria-label="اتصل بنا الآن هاتفياً"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl border border-white/10"
    >
      <Phone className="h-6 w-6 animate-pulse" strokeWidth={2.5} />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-primary opacity-30 pointer-events-none" />
    </a>
  );
}
export default CallFloat;
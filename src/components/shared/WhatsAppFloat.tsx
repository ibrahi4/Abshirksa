"use client";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useMounted } from "@/hooks/useMounted";

export function WhatsAppFloat() {
  const mounted = useMounted();
  if (!mounted) return null;

  return (
    <a
      href={`${siteConfig.whatsapp}?text=${encodeURIComponent("السلام عليكم، أرغب في الاستفسار عن نقل الأثاث")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="واتساب"
      className="fixed bottom-5 left-5 z-30 flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2.5} />
    </a>
  );
}
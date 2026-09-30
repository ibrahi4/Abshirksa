"use client";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useMounted } from "@/hooks/useMounted";

export function WhatsAppFloat() {
  const mounted = useMounted();
  if (!mounted) return null;

  return (
    <a
      href={`${siteConfig.whatsapp}?text=${encodeURIComponent("السلام عليكم، أرغب في الاستفسار عن خدمات نقل الأثاث")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل عبر واتساب"
      className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110 active:scale-95"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2.5} />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30 pointer-events-none" />
    </a>
  );
}
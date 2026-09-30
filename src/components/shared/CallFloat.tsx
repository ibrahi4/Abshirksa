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
      aria-label="اتصال"
      className="fixed bottom-5 right-5 z-30 flex h-13 w-13 items-center justify-center rounded-full bg-brand-primary text-white shadow-xl hover:scale-105 transition-transform"
    >
      <Phone className="h-6 w-6" strokeWidth={2.5} />
    </a>
  );
}
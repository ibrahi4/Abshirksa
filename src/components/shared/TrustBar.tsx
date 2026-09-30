"use client";
import { compounds } from "@/config/compounds";
import { Building2 } from "lucide-react";
import { useMounted } from "@/hooks/useMounted";

export function TrustBar() {
  const mounted = useMounted();
  if (!mounted) return null;

  const items = [...compounds, ...compounds];

  return (
    <div className="overflow-hidden bg-white/5 backdrop-blur-sm border-y border-white/10 py-4">
      <div className="flex animate-scroll gap-8">
        {items.map((c, i) => (
          <div
            key={i}
            className="flex items-center gap-2 whitespace-nowrap text-white/80 text-sm"
          >
            <Building2 className="h-4 w-4 text-brand-secondary" />
            <span>{c.name}</span>
            <span className="text-white/40">•</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  );
}
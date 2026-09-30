import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 shrink-0 ${className}`} aria-label={siteConfig.name}>
      <div className="relative h-11 w-11 md:h-12 md:w-12 rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm shrink-0">
        <Image
          src={siteConfig.logo}
          alt={siteConfig.name}
          fill
          priority
          className="object-contain p-0.5"
          sizes="48px"
        />
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-[15px] md:text-base font-extrabold text-brand-dark leading-tight truncate">
          أبشر للنقل
        </span>
        <span className="text-[10px] md:text-[11px] font-semibold text-slate-400 leading-tight">
          نقل أثاث احترافي
        </span>
      </div>
    </Link>
  );
}
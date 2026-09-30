import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 shrink-0 ${className}`} aria-label={siteConfig.name}>
      <div className="relative h-9 w-9 sm:h-10 sm:w-10 rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm shrink-0">
        <Image
          src={siteConfig.logo}
          alt={siteConfig.name}
          fill
          priority
          className="object-contain p-0.5"
          sizes="40px"
        />
      </div>
      <div className="flex flex-col whitespace-nowrap">
        <span className="text-sm sm:text-base font-black text-brand-dark leading-none">
          أبشر لنقل الأثاث
        </span>
        <span className="text-[10px] font-bold text-brand-secondary mt-1 leading-none">
          خدمة 24 ساعة بالمملكة
        </span>
      </div>
    </Link>
  );
}
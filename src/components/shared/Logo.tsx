import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      <div className="relative h-14 w-14 md:h-16 md:w-16 rounded-full overflow-hidden border-2 border-brand-secondary/20 shadow-sm bg-white">
        <Image
          src={siteConfig.logo}
          alt={siteConfig.name}
          fill
          priority
          className="object-contain p-1"
          sizes="64px"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-lg md:text-xl font-extrabold text-brand-dark leading-none">
          أبشر لنقل الأثاث
        </span>
        <span className="text-[10px] md:text-xs font-semibold text-muted-foreground mt-1 tracking-wide">
          الاحترافية والأمان
        </span>
      </div>
    </Link>
  );
}
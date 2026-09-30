import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

interface LogoProps {
  variant?: "default" | "white";
  className?: string;
}

export function Logo({ variant = "default", className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 ${className}`}
      aria-label={siteConfig.name}
    >
      {/* تم تكبير الأبعاد وضبط الدمج ليكون اللوجو بارزاً جداً */}
      <div className="relative h-16 w-40 md:h-20 md:w-52 mix-blend-darken">
        <Image
          src={siteConfig.logo}
          alt={siteConfig.name}
          fill
          priority
          className="object-contain object-right"
          sizes="(max-width: 768px) 160px, 208px"
        />
      </div>
    </Link>
  );
}
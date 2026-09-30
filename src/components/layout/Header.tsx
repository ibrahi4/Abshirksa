"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu, X, Phone, MessageCircle, ChevronDown,
  Truck, MapPin, Home, Info, Images, BookOpen,
  HelpCircle, Mail
} from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { services } from "@/config/services";
import { mainAreas } from "@/config/areas";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "الرئيسية", icon: Home },
  { href: "/about", label: "من نحن", icon: Info },
  { href: "/services", label: "الخدمات", icon: Truck, hasDropdown: "services" },
  { href: "/areas", label: "المناطق", icon: MapPin, hasDropdown: "areas" },
  { href: "/gallery", label: "المعرض", icon: Images },
  { href: "/blog", label: "المدونة", icon: BookOpen },
  { href: "/faq", label: "الأسئلة", icon: HelpCircle },
  { href: "/contact", label: "تواصل معنا", icon: Mail },
];

const waMessages = {
  general: encodeURIComponent("السلام عليكم، أرغب في الاستفسار عن خدمات نقل الأثاث"),
  quote: encodeURIComponent("السلام عليكم، أريد عرض سعر لنقل عفش"),
  urgent: encodeURIComponent("السلام عليكم، أحتاج نقل عفش بشكل عاجل"),
};

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [mobileExpand, setMobileExpand] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdown(null);
    setMobileExpand(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/97 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.08)]"
          : "bg-white border-b border-slate-100"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-[72px] md:h-20 items-center justify-between gap-3">
          {/* Logo */}
          <Logo />

          {/* ═══ Desktop Nav ═══ */}
          <nav className="hidden xl:flex items-center gap-0.5" aria-label="التنقل الرئيسي">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.hasDropdown === "services") {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setDropdown("services")}
                    onMouseLeave={() => setDropdown(null)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 text-[13px] font-bold rounded-lg transition-colors",
                        isActive
                          ? "text-brand-primary bg-brand-primary/5"
                          : "text-slate-700 hover:text-brand-primary hover:bg-slate-50"
                      )}
                    >
                      {link.label}
                      <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", dropdown === "services" && "rotate-180")} />
                    </button>
                    {dropdown === "services" && (
                      <div className="absolute top-full right-0 mt-1 w-64 rounded-2xl border border-slate-200 bg-white shadow-xl p-2 z-50">
                        {services.slice(0, 6).map((s) => {
                          const Icon = s.icon;
                          return (
                            <Link
                              key={s.slug}
                              href={`/services/${s.slug}`}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-brand-primary/5 hover:text-brand-primary transition-colors"
                            >
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary shrink-0">
                                <Icon className="h-4 w-4" />
                              </div>
                              {s.shortTitle}
                            </Link>
                          );
                        })}
                        <div className="border-t border-slate-100 mt-1 pt-1">
                          <Link href="/services" className="block text-center text-xs font-bold text-brand-primary py-2 hover:underline">
                            عرض جميع الخدمات ←
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.hasDropdown === "areas") {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setDropdown("areas")}
                    onMouseLeave={() => setDropdown(null)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 text-[13px] font-bold rounded-lg transition-colors",
                        isActive
                          ? "text-brand-primary bg-brand-primary/5"
                          : "text-slate-700 hover:text-brand-primary hover:bg-slate-50"
                      )}
                    >
                      {link.label}
                      <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", dropdown === "areas" && "rotate-180")} />
                    </button>
                    {dropdown === "areas" && (
                      <div className="absolute top-full right-0 mt-1 w-52 rounded-2xl border border-slate-200 bg-white shadow-xl p-2 z-50">
                        {mainAreas.map((a) => (
                          <Link
                            key={a.slug}
                            href={`/areas/${a.slug}`}
                            className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-brand-primary/5 hover:text-brand-primary transition-colors"
                          >
                            <MapPin className="h-4 w-4 text-brand-secondary shrink-0" />
                            {a.name}
                          </Link>
                        ))}
                        <div className="border-t border-slate-100 mt-1 pt-1">
                          <Link href="/areas" className="block text-center text-xs font-bold text-brand-primary py-2 hover:underline">
                            جميع المناطق ←
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-[13px] font-bold rounded-lg transition-colors",
                    isActive
                      ? "text-brand-primary bg-brand-primary/5"
                      : "text-slate-700 hover:text-brand-primary hover:bg-slate-50"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* ═══ Desktop CTAs ═══ */}
          <div className="hidden md:flex items-center gap-2">
            <Button asChild variant="whatsapp" size="sm" className="h-10 rounded-xl font-bold text-xs shadow-sm">
              <a href={`${siteConfig.whatsapp}?text=${waMessages.quote}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                واتساب
              </a>
            </Button>
            <Button asChild size="sm" className="h-10 rounded-xl font-bold text-xs shadow-sm bg-brand-primary hover:bg-brand-dark">
              <a href={`tel:${siteConfig.phone}`}>
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
            </Button>
          </div>

          {/* ═══ Mobile Toggle ═══ */}
          <button
            className="xl:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {mobileOpen ? <X className="h-5 w-5 text-brand-dark" /> : <Menu className="h-5 w-5 text-brand-dark" />}
          </button>
        </div>
      </div>

      {/* ═══ Mobile Drawer ═══ */}
      {mobileOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[72px] md:top-20 bottom-0 z-50 bg-white overflow-y-auto">
          <div className="container mx-auto px-4 py-5 space-y-1 pb-32">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.hasDropdown === "services") {
                return (
                  <div key={link.href}>
                    <button
                      onClick={() => setMobileExpand(mobileExpand === "services" ? null : "services")}
                      className={cn(
                        "flex w-full items-center justify-between px-4 py-3.5 rounded-xl font-bold text-[15px] transition-colors",
                        isActive ? "bg-brand-primary/8 text-brand-primary" : "text-slate-800 hover:bg-slate-50"
                      )}
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-brand-primary" />
                        {link.label}
                      </span>
                      <ChevronDown className={cn("h-4 w-4 transition-transform", mobileExpand === "services" && "rotate-180")} />
                    </button>
                    {mobileExpand === "services" && (
                      <div className="mr-4 mt-1 mb-2 space-y-0.5 border-r-2 border-brand-primary/20 pr-3">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-600 hover:text-brand-primary hover:bg-brand-primary/5"
                          >
                            {s.shortTitle}
                          </Link>
                        ))}
                        <Link href="/services" className="block px-4 py-2 text-xs font-bold text-brand-primary">
                          جميع الخدمات ←
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.hasDropdown === "areas") {
                return (
                  <div key={link.href}>
                    <button
                      onClick={() => setMobileExpand(mobileExpand === "areas" ? null : "areas")}
                      className={cn(
                        "flex w-full items-center justify-between px-4 py-3.5 rounded-xl font-bold text-[15px] transition-colors",
                        isActive ? "bg-brand-primary/8 text-brand-primary" : "text-slate-800 hover:bg-slate-50"
                      )}
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-brand-primary" />
                        {link.label}
                      </span>
                      <ChevronDown className={cn("h-4 w-4 transition-transform", mobileExpand === "areas" && "rotate-180")} />
                    </button>
                    {mobileExpand === "areas" && (
                      <div className="mr-4 mt-1 mb-2 space-y-0.5 border-r-2 border-brand-secondary/30 pr-3">
                        {mainAreas.map((a) => (
                          <Link
                            key={a.slug}
                            href={`/areas/${a.slug}`}
                            className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-600 hover:text-brand-primary hover:bg-brand-primary/5"
                          >
                            نقل عفش {a.name}
                          </Link>
                        ))}
                        <Link href="/areas" className="block px-4 py-2 text-xs font-bold text-brand-primary">
                          جميع المناطق ←
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3.5 rounded-xl font-bold text-[15px] transition-colors",
                    isActive ? "bg-brand-primary/8 text-brand-primary" : "text-slate-800 hover:bg-slate-50"
                  )}
                >
                  <Icon className="h-5 w-5 text-brand-primary" />
                  {link.label}
                </Link>
              );
            })}

            {/* Mobile CTAs */}
            <div className="pt-6 mt-4 border-t border-slate-100 space-y-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center justify-center gap-2 w-full h-14 rounded-2xl bg-brand-primary text-white font-bold text-base shadow-lg"
              >
                <Phone className="h-5 w-5" />
                اتصل الآن — {siteConfig.phone}
              </a>
              <a
                href={`${siteConfig.whatsapp}?text=${waMessages.quote}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full h-14 rounded-2xl bg-[#25D366] text-white font-bold text-base shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                واتساب — عرض سعر فوري
              </a>
              <a
                href={`${siteConfig.whatsapp}?text=${waMessages.urgent}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full h-12 rounded-2xl border-2 border-[#25D366] text-[#25D366] font-bold text-sm"
              >
                <MessageCircle className="h-4 w-4" />
                نقل عاجل؟ راسلنا الآن
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
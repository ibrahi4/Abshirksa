"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu, X, Phone, MessageCircle, ChevronDown,
  Truck, MapPin, Home, Info, Images, BookOpen, HelpCircle, Mail
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
  { href: "/faq", label: "الأسئلة الشائعة", icon: HelpCircle },
  { href: "/contact", label: "تواصل معنا", icon: Mail },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [mobileExpand, setMobileExpand] = useState<string | null>(null);
  const pathname = usePathname();

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
    <>
      <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 md:h-20 items-center justify-between gap-2">
            {/* Logo */}
            <Logo />

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-1" aria-label="التنقل الرئيسي">
              {navLinks.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

                if (link.hasDropdown === "services") {
                  return (
                    <div key={link.href} className="relative" onMouseEnter={() => setDropdown("services")} onMouseLeave={() => setDropdown(null)}>
                      <button className={cn("flex items-center gap-1 px-3 py-2 text-sm font-bold rounded-lg transition-colors", isActive ? "text-brand-primary bg-brand-primary/5" : "text-slate-700 hover:text-brand-primary hover:bg-slate-50")}>
                        {link.label}
                        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", dropdown === "services" && "rotate-180")} />
                      </button>
                      {dropdown === "services" && (
                        <div className="absolute top-full right-0 mt-1 w-64 rounded-2xl border border-slate-200 bg-white shadow-xl p-2 z-50">
                          {services.slice(0, 6).map((s) => (
                            <Link key={s.slug} href={`/services/${s.slug}`} className="block px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-brand-primary">
                              {s.shortTitle}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                if (link.hasDropdown === "areas") {
                  return (
                    <div key={link.href} className="relative" onMouseEnter={() => setDropdown("areas")} onMouseLeave={() => setDropdown(null)}>
                      <button className={cn("flex items-center gap-1 px-3 py-2 text-sm font-bold rounded-lg transition-colors", isActive ? "text-brand-primary bg-brand-primary/5" : "text-slate-700 hover:text-brand-primary hover:bg-slate-50")}>
                        {link.label}
                        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", dropdown === "areas" && "rotate-180")} />
                      </button>
                      {dropdown === "areas" && (
                        <div className="absolute top-full right-0 mt-1 w-52 rounded-2xl border border-slate-200 bg-white shadow-xl p-2 z-50">
                          {mainAreas.map((a) => (
                            <Link key={a.slug} href={`/areas/${a.slug}`} className="block px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-brand-primary">
                              نقل عفش {a.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link key={link.href} href={link.href} className={cn("px-3 py-2 text-sm font-bold rounded-lg transition-colors", isActive ? "text-brand-primary bg-brand-primary/5" : "text-slate-700 hover:text-brand-primary hover:bg-slate-50")}>
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-2">
              <Button asChild variant="whatsapp" size="sm" className="h-10 rounded-xl font-bold text-xs">
                <a href={`${siteConfig.whatsapp}?text=${encodeURIComponent("السلام عليكم، أود طلب عرض سعر لنقل أثاث")}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" /> واتساب
                </a>
              </Button>
              <Button asChild size="sm" className="h-10 rounded-xl font-bold text-xs bg-brand-primary">
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="h-4 w-4" /> {siteConfig.phone}
                </a>
              </Button>
            </div>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="xl:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-brand-dark hover:bg-slate-100"
              aria-label="فتح القائمة"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════ */}
      {/* Mobile Fullscreen Overlay (تطبيق حقيقي شاشة كاملة بدقة متناهية) */}
      {/* ═══════════════════════════════════════════ */}
      {mobileOpen && (
        <div className="xl:hidden fixed inset-0 z-[100] bg-white flex flex-col h-dvh w-screen overflow-hidden animate-in fade-in-0 duration-200">
          {/* Top Bar داخل المنيو */}
          <div className="flex h-16 items-center justify-between px-4 border-b border-slate-200 bg-white shrink-0">
            <Logo />
            <button
              onClick={() => setMobileOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              aria-label="إغلاق القائمة"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* القائمة القابلة للتمرير */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

              if (link.hasDropdown === "services") {
                return (
                  <div key={link.href} className="border-b border-slate-100 pb-1">
                    <button
                      onClick={() => setMobileExpand(mobileExpand === "services" ? null : "services")}
                      className={cn("flex w-full items-center justify-between py-3 px-2 font-bold text-base", isActive ? "text-brand-primary" : "text-slate-800")}
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-brand-primary" />
                        {link.label}
                      </span>
                      <ChevronDown className={cn("h-4 w-4 transition-transform", mobileExpand === "services" && "rotate-180")} />
                    </button>
                    {mobileExpand === "services" && (
                      <div className="mr-6 my-1 space-y-1 border-r-2 border-brand-primary/20 pr-3 bg-slate-50/50 rounded-lg p-2">
                        {services.map((s) => (
                          <Link key={s.slug} href={`/services/${s.slug}`} className="block py-2 px-2 text-sm font-semibold text-slate-600 hover:text-brand-primary">
                            {s.shortTitle}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (link.hasDropdown === "areas") {
                return (
                  <div key={link.href} className="border-b border-slate-100 pb-1">
                    <button
                      onClick={() => setMobileExpand(mobileExpand === "areas" ? null : "areas")}
                      className={cn("flex w-full items-center justify-between py-3 px-2 font-bold text-base", isActive ? "text-brand-primary" : "text-slate-800")}
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-brand-primary" />
                        {link.label}
                      </span>
                      <ChevronDown className={cn("h-4 w-4 transition-transform", mobileExpand === "areas" && "rotate-180")} />
                    </button>
                    {mobileExpand === "areas" && (
                      <div className="mr-6 my-1 space-y-1 border-r-2 border-brand-secondary/30 pr-3 bg-slate-50/50 rounded-lg p-2">
                        {mainAreas.map((a) => (
                          <Link key={a.slug} href={`/areas/${a.slug}`} className="block py-2 px-2 text-sm font-semibold text-slate-600 hover:text-brand-primary">
                            نقل عفش {a.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn("flex items-center gap-3 py-3.5 px-2 font-bold text-base border-b border-slate-100 transition-colors", isActive ? "text-brand-primary bg-brand-primary/5 rounded-xl px-3" : "text-slate-800")}
                >
                  <Icon className="h-5 w-5 text-brand-primary" />
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* أزرار الاتصال التحتية الثابتة داخل المنيو */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-2 shrink-0">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-brand-primary text-white font-bold text-sm shadow-md"
            >
              <Phone className="h-4 w-4" />
              اتصل الآن: {siteConfig.phone}
            </a>
            <a
              href={`${siteConfig.whatsapp}?text=${encodeURIComponent("السلام عليكم، أود طلب عرض سعر نقل عفش")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md"
            >
              <MessageCircle className="h-4 w-4" />
              تواصل عبر الواتساب
            </a>
          </div>
        </div>
      )}
    </>
  );
}
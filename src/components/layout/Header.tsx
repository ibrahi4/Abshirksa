"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle, ChevronDown, Award } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { services } from "@/config/services";
import { mainAreas } from "@/config/areas";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "من نحن" },
  { href: "/services", label: "الخدمات" },
  { href: "/areas", label: "مناطق الخدمة" },
  { href: "/gallery", label: "المعرض" },
  { href: "/blog", label: "المدونة" },
  { href: "/faq", label: "الأسئلة الشائعة" },
  { href: "/contact", label: "تواصل معنا" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // إغلاق قائمة الجوال عند تغيير الصفحة
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 bg-white border-b border-border shadow-sm"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between gap-4">
          <Logo />

          {/* روابط التنقل الرئيسية - ديسكتوب */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="التنقل الرئيسي">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.href === "/services") {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown("services")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 text-sm font-bold text-brand-dark hover:text-brand-primary transition-colors",
                        (isActive || pathname.startsWith("/services/")) && "text-brand-primary"
                      )}
                    >
                      {link.label}
                      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                    </button>
                    {activeDropdown === "services" && (
                      <div className="absolute top-full right-0 w-64 rounded-2xl border border-border bg-white shadow-xl p-3 space-y-1 animate-fade">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="block px-4 py-2.5 rounded-xl text-xs font-bold text-brand-dark hover:bg-slate-50 hover:text-brand-primary transition-colors"
                          >
                            {s.shortTitle}
                          </Link>
                        ))}
                        <div className="border-t border-border mt-2 pt-2">
                          <Link
                            href="/services"
                            className="block text-center text-xs font-bold text-brand-primary hover:underline"
                          >
                            عرض جميع الخدمات
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.href === "/areas") {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown("areas")}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 text-sm font-bold text-brand-dark hover:text-brand-primary transition-colors",
                        (isActive || pathname.startsWith("/areas/")) && "text-brand-primary"
                      )}
                    >
                      {link.label}
                      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                    </button>
                    {activeDropdown === "areas" && (
                      <div className="absolute top-full right-0 w-56 rounded-2xl border border-border bg-white shadow-xl p-3 space-y-1 animate-fade">
                        {mainAreas.map((a) => (
                          <Link
                            key={a.slug}
                            href={`/areas/${a.slug}`}
                            className="block px-4 py-2.5 rounded-xl text-xs font-bold text-brand-dark hover:bg-slate-50 hover:text-brand-primary transition-colors"
                          >
                            نقل عفش {a.name}
                          </Link>
                        ))}
                        <div className="border-t border-border mt-2 pt-2">
                          <Link
                            href="/areas"
                            className="block text-center text-xs font-bold text-brand-primary hover:underline"
                          >
                            عرض جميع المناطق
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
                    "px-3 py-2 text-sm font-bold text-brand-dark hover:text-brand-primary transition-colors",
                    isActive && "text-brand-primary border-b-2 border-brand-primary rounded-none"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* أزرار الاتصال السريع - ديسكتوب */}
          <div className="hidden lg:flex items-center gap-2">
            <Button asChild variant="whatsapp" size="sm">
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                واتساب
              </a>
            </Button>
            <Button asChild size="sm">
              <a href={`tel:${siteConfig.phone}`}>
                <Phone className="h-4 w-4" />
                اتصل بنا
              </a>
            </Button>
          </div>

          {/* زر قائمة الجوال */}
          <button
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-border hover:bg-slate-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {mobileOpen ? <X className="h-6 w-6 text-brand-dark" /> : <Menu className="h-6 w-6 text-brand-dark" />}
          </button>
        </div>
      </div>

      {/* قائمة الجوال المنزلقة (Drawer) */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 z-50 bg-white overflow-y-auto border-t border-border">
          <div className="container mx-auto px-4 py-6 space-y-6">
            <nav className="space-y-1" aria-label="قائمة الجوال">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "block px-4 py-3 rounded-xl font-bold text-brand-dark hover:bg-slate-50 transition-colors",
                      isActive && "bg-brand-primary/5 text-brand-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="space-y-2 pt-4 border-t border-border">
              <Button asChild size="lg" className="w-full font-bold">
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="h-5 w-5" />
                  اتصل الآن {siteConfig.phone}
                </a>
              </Button>
              <Button asChild size="lg" variant="whatsapp" className="w-full font-bold">
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  تواصل عبر واتساب
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
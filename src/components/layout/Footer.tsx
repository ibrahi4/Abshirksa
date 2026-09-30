import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin, Clock, Instagram, Twitter } from "lucide-react";
import { siteConfig } from "@/config/site";
import { services } from "@/config/services";
import { mainAreas } from "@/config/areas";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white" style={{ minHeight: "auto" }}>
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-secondary">
              {siteConfig.name}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              شركة رائدة في نقل الأثاث بالمملكة العربية السعودية منذ {siteConfig.founded}. نقدم خدمات نقل احترافية بجودة عالية وأسعار تنافسية.
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-brand-secondary hover:text-brand-dark transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-brand-secondary hover:text-brand-dark transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-bold mb-4 text-brand-secondary">خدماتنا</h4>
            <ul className="space-y-2">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-white/70 hover:text-brand-secondary transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-base font-bold mb-4 text-brand-secondary">المناطق</h4>
            <ul className="space-y-2">
              {mainAreas.slice(0, 6).map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}`}
                    className="text-sm text-white/70 hover:text-brand-secondary transition-colors"
                  >
                    نقل عفش {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-bold mb-4 text-brand-secondary">تواصل معنا</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-white/70 hover:text-brand-secondary transition-colors">
                  <Phone className="h-4 w-4 shrink-0" />
                  <span dir="ltr">{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-brand-secondary transition-colors">
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  <span>واتساب</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-white/70 hover:text-brand-secondary transition-colors">
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>{siteConfig.address.city}, {siteConfig.address.country}</span>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <Clock className="h-4 w-4 shrink-0" />
                <span>خدمة على مدار الساعة {siteConfig.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {year} {siteConfig.name}. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-brand-secondary transition-colors">سياسة الخصوصية</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-brand-secondary transition-colors">الشروط والأحكام</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
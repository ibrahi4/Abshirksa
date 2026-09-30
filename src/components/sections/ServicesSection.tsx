import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check } from "lucide-react";
import { services } from "@/config/services";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ServicesSection() {
  const top = services.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-background" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <Badge variant="outline" className="px-4 py-1.5 text-sm font-bold border-brand-primary text-brand-primary bg-brand-primary/5">
            خدماتنا الاحترافية
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark">
            كل ما تحتاجه لنقل أثاثك بأمان
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            صور حقيقية لخدماتنا.. من الفك والتغليف إلى النقل بالونش والتركيب.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {top.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col rounded-3xl border border-border bg-card hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500 overflow-hidden"
              >
                {/* الحاوية العلوية للصورة مع التدرج اللوني لراحة العين */}
                <div className="relative h-56 w-full overflow-hidden bg-muted">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* تدرج لوني أسود شفاف يحمي الأيقونة ويبرز الصورة برقي */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-4 right-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary text-white shadow-lg group-hover:-translate-y-1 transition-transform duration-300">
                    <Icon className="h-7 w-7" />
                  </div>
                  
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold shadow-sm">
                      {s.price}
                    </Badge>
                  </div>
                </div>

                {/* المحتوى النصي */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">
                    {s.shortTitle}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-2">
                    {s.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6 flex-1">
                    {s.features.slice(0, 2).map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-semibold text-brand-dark/80">
                        <Check className="h-4 w-4 text-green-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t border-border flex items-center justify-between mt-auto">
                    <span className="text-sm font-bold text-brand-primary group-hover:underline flex items-center gap-1">
                      تفاصيل الخدمة
                      <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="border-2 font-bold hover:bg-brand-primary hover:text-white">
            <Link href="/services">عرض جميع خدمات النقل →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
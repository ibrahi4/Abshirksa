import Link from "next/link";
import { MapPin, ArrowLeft } from "lucide-react";
import { mainAreas } from "@/config/areas";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function AreasSection() {
  return (
    <section className="py-16 md:py-20 bg-background" id="areas">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <Badge variant="outline" className="px-4 py-1 text-sm font-semibold border-brand-primary text-brand-primary">
            تغطية شاملة
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark">
            نصلك في أي حي بأي مدينة
          </h2>
          <p className="text-muted-foreground text-base">
            أسطولنا يغطي جميع مدن المملكة الرئيسية وجميع أحيائها.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {mainAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="group rounded-2xl border border-border bg-card p-5 text-center hover:shadow-md hover:border-brand-primary/40 transition-all"
            >
              <MapPin className="h-6 w-6 text-brand-primary mx-auto mb-2 group-hover:text-brand-secondary transition-colors" />
              <h3 className="text-sm font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                {area.name}
              </h3>
              <p className="text-[10px] text-muted-foreground mt-1">{area.neighborhoods.length}+ حي</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg">
            <Link href="/areas">عرض جميع المناطق</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
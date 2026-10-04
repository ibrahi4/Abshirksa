import type { Metadata } from "next";
import Image from "next/image";
import { gallery } from "@/config/media";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "معرض أعمالنا وعمليات نقل الأثاث الحية",
  description: "شاهد صور حية لعمليات نقل وتغليف وفك وتركيب الأثاث ودينات أسطول شركة الريفي في المملكة العربية السعودية.",
};

export default function GalleryPage() {
  const allImages = [...gallery.moving, ...gallery.trucks, ...gallery.team];

  return (
    <>
      <section className="bg-brand-dark text-white py-16 text-center">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          <Badge variant="secondary" className="px-4 py-1 bg-brand-secondary text-brand-dark">
            معرض الصور
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold">
            معرض عمليات النقل وأسطول الدينات
          </h1>
          <p className="text-white/80 text-lg">
            صور حية توثق احترافية فريقنا ودقة التغليف وجودة المعدات والشاحنات.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allImages.map((src, i) => (
              <div key={i} className="relative h-64 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                <Image
                  src={src}
                  alt={`عملية نقل أثاث ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
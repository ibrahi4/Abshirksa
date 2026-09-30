"use client";
import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { gallery } from "@/config/media";
import { Badge } from "@/components/ui/badge";

export function GalleryCarouselSection() {
  const images = [...gallery.moving, ...gallery.trucks, ...gallery.team];
  const [emblaRef] = useEmblaCarousel({ loop: true, direction: "rtl", align: "center" }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <section className="py-16 bg-slate-50 border-y border-border/60 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <Badge variant="outline" className="px-4 py-1 text-sm font-semibold border-brand-primary text-brand-primary">
            معرض الأعمال
          </Badge>
          <h2 className="text-3xl font-extrabold text-brand-dark">
            شاهد احترافية فريقنا على أرض الواقع
          </h2>
        </div>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef} dir="rtl">
          <div className="flex -ml-4">
            {images.map((src, idx) => (
              <div key={idx} className="flex-[0_0_85%] sm:flex-[0_0_50%] lg:flex-[0_0_30%] pl-4">
                <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                  <Image
                    src={src}
                    alt={`عملية نقل أثاث ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 85vw, 30vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
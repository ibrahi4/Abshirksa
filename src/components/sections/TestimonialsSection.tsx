"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/config/testimonials";
import { Badge } from "@/components/ui/badge";

export function TestimonialsSection() {
  // تفعيل الـ RTL في مكتبة السلايدر
  const [emblaRef] = useEmblaCarousel({ loop: true, direction: "rtl", align: "start" }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  return (
    <section className="py-16 md:py-20 bg-background" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <Badge variant="outline" className="px-4 py-1 text-sm font-semibold border-brand-primary text-brand-primary">
            آراء عملائنا
          </Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark">
            +5000 عميل يثقون بشركة الريفي
          </h2>
        </div>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing pb-8" ref={emblaRef} dir="rtl">
          <div className="flex -ml-4">
            {testimonials.map((t) => (
              <div key={t.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                <div className="rounded-2xl border border-border bg-card p-6 h-full flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-0.5 text-amber-500">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-500" />
                        ))}
                      </div>
                      <Quote className="h-5 w-5 text-brand-primary/20" />
                    </div>
                    <p className="text-sm text-brand-dark/90 leading-relaxed mb-5">
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-brand-dark">{t.name}</h4>
                      <p className="text-xs text-muted-foreground">{t.location}</p>
                    </div>
                    <Badge variant="secondary" className="text-[10px] bg-brand-secondary/20 text-brand-dark">
                      {t.service}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
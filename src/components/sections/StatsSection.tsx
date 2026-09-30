"use client";
import { useEffect, useState, useRef } from "react";
import { Users, Calendar, Truck, MapPin } from "lucide-react";
import { useMounted } from "@/hooks/useMounted";

const data = [
  { icon: Users, target: 5000, suffix: "+", label: "عميل سعيد" },
  { icon: Calendar, target: 10, suffix: "+", label: "سنوات خبرة" },
  { icon: Truck, target: 50, suffix: "+", label: "دينا مجهزة" },
  { icon: MapPin, target: 15, suffix: "+", label: "مدينة بالمملكة" },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const step = Math.ceil(target / 60);
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            setCount(current);
          }, 25);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-extrabold text-brand-dark">
      {count.toLocaleString("ar-SA")}{suffix}
    </div>
  );
}

export function StatsSection() {
  const mounted = useMounted();
  if (!mounted) return null;

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="text-center p-6 rounded-2xl border border-border bg-card">
                <Icon className="h-8 w-8 text-brand-primary mx-auto mb-3" />
                <AnimatedNumber target={item.target} suffix={item.suffix} />
                <div className="text-sm text-muted-foreground mt-1 font-medium">{item.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
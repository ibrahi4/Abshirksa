import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { areas, getAreaBySlug } from "@/config/areas";
import { siteConfig } from "@/config/site";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { InlineQuoteForm } from "@/components/shared/InlineQuoteForm";
import { CTASection } from "@/components/sections/CTASection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, CheckCircle2, Phone, MessageCircle, ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};

  return {
    title: `شركة نقل عفش ${area.name} | دينا نقل أثاث احترافية`,
    description: `أفضل شركة نقل أثاث في ${area.name} مع الفك والتركيب والتغليف والضمان. دينا نقل عفش مجهزة بجميع أحياء ${area.name}. اتصل 0536796607`,
    keywords: area.keywords,
    alternates: { canonical: `${siteConfig.url}/areas/${slug}` },
  };
}

export default async function AreaDetailPage({ params }: Props) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  const breadcrumbs = [
    { name: "الرئيسية", url: siteConfig.url },
    { name: "المناطق", url: `${siteConfig.url}/areas` },
    { name: area.name, url: `${siteConfig.url}/areas/${slug}` },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-brand-dark text-white py-14">
        <div className="container mx-auto px-4 max-w-4xl space-y-4">
          <div className="flex items-center gap-2 text-xs text-white/60">
            <Link href="/" className="hover:text-white">الرئيسية</Link>
            <span>/</span>
            <Link href="/areas" className="hover:text-white">المناطق</Link>
            <span>/</span>
            <span className="text-brand-secondary">{area.name}</span>
          </div>

          <Badge variant="secondary" className="bg-brand-secondary text-brand-dark font-bold">
            {area.region}
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold">شركة نقل أثاث في {area.name}</h1>
          <p className="text-lg text-white/80">{area.description}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-8">
              <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-md">
                <Image
                  src={area.image}
                  alt={`نقل عفش ${area.name}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-brand-dark">خدمات نقل العفش في {area.name}</h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {area.longDescription}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-brand-dark">أبرز الأحياء المخدومة في {area.name}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {area.neighborhoods.map((n, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-border">
                      <MapPin className="h-4 w-4 text-brand-primary shrink-0" />
                      <span className="text-xs font-bold text-brand-dark">{n}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-brand-dark">لماذا تختارنا في {area.name}؟</h3>
                <div className="space-y-2">
                  {[
                    `تواجد سريع للدينات في جميع أحياء ${area.name} خلال 30 دقيقة`,
                    "فنيون نجارون محترفون لفك وتركيب كافة أنواع الأثاث والمطابخ",
                    "تغليف احترافي يراعي درجات الحرارة والرطوبة وطبيعة المنطقة",
                    "ضمان وتأمين كامل على سلامة المنقولات بدون أي تلفيات",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-border">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                      <span className="text-sm font-semibold text-brand-dark">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-brand-primary text-white flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-white/80">احجز دينا نقل عفش في {area.name}</div>
                  <div className="text-xl font-bold text-brand-secondary">خدمة متوفرة على مدار 24 ساعة</div>
                </div>
                <div className="flex gap-2">
                  <Button asChild size="sm" variant="secondary" className="font-bold">
                    <a href={`tel:${siteConfig.phone}`}>
                      <Phone className="h-4 w-4 ml-1" />
                      اتصل الآن
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="whatsapp" className="font-bold">
                    <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 ml-1" />
                      واتساب
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <InlineQuoteForm />

              <div className="p-6 rounded-2xl bg-slate-50 border border-border space-y-4">
                <h4 className="font-bold text-brand-dark">مدن ومناطق أخرى:</h4>
                <div className="space-y-2">
                  {areas.filter(a => a.slug !== area.slug).slice(0, 5).map(a => (
                    <Link
                      key={a.slug}
                      href={`/areas/${a.slug}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-white border border-border/80 hover:border-brand-primary text-sm font-semibold text-brand-dark group transition-colors"
                    >
                      <span>نقل عفش {a.name}</span>
                      <ArrowLeft className="h-4 w-4 text-brand-primary group-hover:-translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
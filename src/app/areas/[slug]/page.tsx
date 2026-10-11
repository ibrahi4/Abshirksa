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
import { MapPin, CheckCircle2, Phone, MessageCircle, ArrowLeft, Home, ChevronLeft, ShieldCheck } from "lucide-react";

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
    title: `شركة نقل عفش في ${area.name} | دينا نقل أثاث احترافية`,
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

      {/* Hero Section المطور للمدينة */}
      <section className="relative bg-brand-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={area.image}
            alt={`نقل عفش ${area.name}`}
            fill
            priority
            className="object-cover opacity-30 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/85 to-brand-dark/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl space-y-6">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <Link href="/" className="hover:text-brand-secondary flex items-center gap-1 transition-colors">
                <Home className="h-3.5 w-3.5" />
                الرئيسية
              </Link>
              <ChevronLeft className="h-3.5 w-3.5 opacity-50" />
              <Link href="/areas" className="hover:text-brand-secondary transition-colors">
                المناطق
              </Link>
              <ChevronLeft className="h-3.5 w-3.5 opacity-50" />
              <span className="text-brand-secondary">{area.name}</span>
            </div>

            <Badge variant="secondary" className="bg-brand-secondary text-brand-dark font-bold px-4 py-1">
              {area.region}
            </Badge>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              شركة نقل عفش في <span className="text-brand-secondary">{area.name}</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-200 leading-relaxed">
              {area.description} خدمات فك، تغليف، ونقل احترافية تغطي جميع أحياء {area.name} بضمان شامل 100%.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button asChild size="lg" className="bg-brand-secondary text-brand-dark hover:bg-brand-secondary/90 font-bold h-14 px-8 rounded-2xl shadow-xl">
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="h-5 w-5 ml-2" />
                  اتصل الآن: {siteConfig.phone}
                </a>
              </Button>
              <Button asChild size="lg" variant="whatsapp" className="font-bold h-14 px-8 rounded-2xl shadow-xl">
                <a href={`${siteConfig.whatsapp}?text=${encodeURIComponent(`السلام عليكم، أرغب في نقل عفش بـ ${area.name}`)}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 ml-2" />
                  واتساب فوري
                </a>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-8">
              
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
                    <div key={i} className="flex items-center gap-2 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                      <MapPin className="h-4 w-4 text-brand-primary shrink-0" />
                      <span className="text-xs font-bold text-brand-dark">{n}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-brand-dark">لماذا تختارنا في {area.name}؟</h3>
                <div className="space-y-3">
                  {[
                    `تواجد سريع للدينات في جميع أحياء ${area.name} خلال 30 دقيقة`,
                    "فنيون نجارون محترفون لفك وتركيب كافة أنواع الأثاث والمطابخ",
                    "تغليف احترافي يراعي طبيعة المنقولات ودرجات الحرارة",
                    "ضمان وتأمين كامل على سلامة المنقولات بدون أي تلفيات",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                      <span className="text-sm font-semibold text-brand-dark">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="lg:col-span-5 space-y-6">
              <InlineQuoteForm />

              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                <h4 className="font-bold text-brand-dark">مدن ومناطق أخرى:</h4>
                <div className="space-y-2">
                  {areas.filter(a => a.slug !== area.slug).slice(0, 5).map(a => (
                    <Link
                      key={a.slug}
                      href={`/areas/${a.slug}`}
                      className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-brand-primary text-sm font-semibold text-brand-dark group transition-colors"
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
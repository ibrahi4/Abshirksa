import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { services, getServiceBySlug } from "@/config/services";
import { siteConfig } from "@/config/site";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { InlineQuoteForm } from "@/components/shared/InlineQuoteForm";
import { CTASection } from "@/components/sections/CTASection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, MessageCircle, ArrowLeft, Home, ChevronLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.title} | شركة الريفي لنقل العفش`,
    description: service.description,
    keywords: service.keywords,
    alternates: { canonical: `${siteConfig.url}/services/${slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { name: "الرئيسية", url: siteConfig.url },
    { name: "الخدمات", url: `${siteConfig.url}/services` },
    { name: service.shortTitle, url: `${siteConfig.url}/services/${slug}` },
  ];

  const serviceSchema = generateServiceSchema(service);
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section المطور للخدمة */}
      <section className="relative bg-brand-dark text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
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
              <Link href="/services" className="hover:text-brand-secondary transition-colors">
                الخدمات
              </Link>
              <ChevronLeft className="h-3.5 w-3.5 opacity-50" />
              <span className="text-brand-secondary">{service.shortTitle}</span>
            </div>

            <Badge variant="secondary" className="bg-brand-secondary text-brand-dark font-bold px-4 py-1">
              خدمة معتمدة بضمان 100%
            </Badge>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-xl text-slate-200 leading-relaxed">
              {service.description}
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
                <a href={`${siteConfig.whatsapp}?text=${encodeURIComponent(`السلام عليكم، أرغب في الاستفسار عن ${service.shortTitle}`)}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 ml-2" />
                  واتساب فوري
                </a>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-brand-dark">تفاصيل ومميزات الخدمة</h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {service.longDescription}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-brand-dark">ماذا تشمل هذه الخدمة؟</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                      <span className="text-sm font-semibold text-brand-dark">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-brand-dark">فوائد ومزايا التعاقد معنا</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0" />
                      <span className="text-sm font-semibold text-brand-dark">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="lg:col-span-5 space-y-6">
              <InlineQuoteForm />
              
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                <h4 className="font-bold text-brand-dark">خدمات أخرى قد تهمك:</h4>
                <div className="space-y-2">
                  {services.filter(s => s.slug !== service.slug).slice(0, 4).map(s => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-brand-primary text-sm font-semibold text-brand-dark group transition-colors"
                    >
                      <span>{s.shortTitle}</span>
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
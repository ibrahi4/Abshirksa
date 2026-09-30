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
import { CheckCircle2, Phone, MessageCircle, ArrowLeft } from "lucide-react";

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
    title: `${service.title} | شركة أبشر`,
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

      {/* Header */}
      <section className="bg-brand-dark text-white py-14">
        <div className="container mx-auto px-4 max-w-4xl space-y-4">
          <div className="flex items-center gap-2 text-xs text-white/60">
            <Link href="/" className="hover:text-white">الرئيسية</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white">الخدمات</Link>
            <span>/</span>
            <span className="text-brand-secondary">{service.shortTitle}</span>
          </div>

          <Badge variant="secondary" className="bg-brand-secondary text-brand-dark font-bold">
            خدمة معتمدة
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold">{service.title}</h1>
          <p className="text-lg text-white/80">{service.description}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-8">
              <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-md">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

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
                    <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-border">
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
                    <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-brand-secondary/10 border border-brand-secondary/20">
                      <CheckCircle2 className="h-5 w-5 text-brand-secondary shrink-0" />
                      <span className="text-sm font-semibold text-brand-dark">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-brand-primary text-white flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-white/80">الأسعار التقديرية</div>
                  <div className="text-2xl font-bold text-brand-secondary">{service.price}</div>
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
                <h4 className="font-bold text-brand-dark">خدمات أخرى قد تهمك:</h4>
                <div className="space-y-2">
                  {services.filter(s => s.slug !== service.slug).slice(0, 4).map(s => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-white border border-border/80 hover:border-brand-primary text-sm font-semibold text-brand-dark group transition-colors"
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
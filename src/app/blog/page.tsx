import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/config/blog";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "مدونة نقل الأثاث | نصائح وأسعار ودليل الانتقال",
  description: "مقالات متخصصة ونصائح عملية حول أسعار نقل العفش في الرياض والسعودية، أفضل طرق التغليف، واختيار شركات النقل الموثوقة.",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-brand-dark text-white py-16 text-center">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          <Badge variant="secondary" className="px-4 py-1 bg-brand-secondary text-brand-dark">
            المدونة والنصائح
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold">
            دليلك الشامل لنقل الأثاث في السعودية
          </h1>
          <p className="text-white/80 text-lg">
            نشاركك خبراتنا وأحدث النصائح لتوفير التكاليف وضمان انتقال آمن وسلس لمنزلك.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-52 w-full overflow-hidden bg-muted">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 right-3 bg-brand-primary text-white">
                    {post.category}
                  </Badge>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-bold text-brand-primary hover:text-brand-dark transition-colors"
                    >
                      اقرأ المقال كاملاً
                      <ArrowLeft className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
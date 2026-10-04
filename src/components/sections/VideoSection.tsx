import { Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function VideoSection() {
  return (
    <section className="py-16 md:py-20 bg-slate-50 border-y border-border/60">
      <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
        <Badge variant="outline" className="px-4 py-1 text-sm font-semibold border-brand-primary text-brand-primary">
          شاهد بنفسك
        </Badge>
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark">
          كيف ننقل أثاثك بأمان واحترافية؟
        </h2>
        <p className="text-muted-foreground text-base max-w-2xl mx-auto">
          شاهد عملية نقل حقيقية من البداية للنهاية: التغليف، الفك، التحميل، النقل، والتركيب في المكان الجديد.
        </p>

        <div className="relative rounded-3xl overflow-hidden shadow-xl bg-brand-dark aspect-video">
          <img
            src="/images/gallery/fareq-3amal.webp"
            alt="فيديو عملية نقل أثاث شركة الريفي"
            className="w-full h-full object-cover opacity-60"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-secondary text-brand-dark shadow-2xl hover:scale-110 transition-transform cursor-pointer">
              <Play className="h-8 w-8 fill-current mr-[-2px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}